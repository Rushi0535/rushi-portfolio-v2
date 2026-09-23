/**
 * Build-time RAG embedding pipeline. Extracts text from the knowledge-base
 * PDF, chunks it, embeds every chunk with the same model the runtime query
 * embedder uses, and writes the result to data/embeddings.json.
 *
 * Runs via `npm run build-embeddings` (also wired as the `prebuild` hook so
 * `npm run build` regenerates it automatically). Embedding happens once here
 * at build time, not per-request — the chat API route only embeds the
 * incoming query and does a cosine-similarity lookup against this file.
 *
 * Skips regeneration when data/embeddings.json's stored sourcePdfHash
 * already matches a fresh SHA-256 of the current PDF, unless
 * FORCE_REBUILD_EMBEDDINGS=1 is set. Deliberately hash-based, not
 * mtime-based: git doesn't preserve file modification times, so on a fresh
 * checkout (e.g. Vercel's build machine) the PDF, this script, and
 * embeddings.json all get checkout-time timestamps in whatever order git
 * happens to write them — an mtime comparison there is unreliable and could
 * spuriously trigger a full re-embed (ONNX model download + 30+ embedding
 * calls) on every single deploy even when nothing changed.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";
import { chunkText } from "../lib/rag/chunk";
import { embedText } from "../lib/rag/embed";
import type { EmbeddedChunk, EmbeddingsFile } from "../lib/rag/types";

const PDF_PATH = path.join(process.cwd(), "data", "knowledge-base.pdf");
const OUTPUT_PATH = path.join(process.cwd(), "data", "embeddings.json");

function hashFile(filePath: string): string {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function isOutputFresh(currentPdfHash: string): boolean {
  if (process.env.FORCE_REBUILD_EMBEDDINGS === "1") return false;
  if (!fs.existsSync(OUTPUT_PATH)) return false;

  try {
    const existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf-8")) as Partial<EmbeddingsFile>;
    return existing.sourcePdfHash === currentPdfHash;
  } catch {
    return false;
  }
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error(`Knowledge base PDF not found at ${PDF_PATH}`);
    process.exit(1);
  }

  const pdfHash = hashFile(PDF_PATH);

  if (isOutputFresh(pdfHash)) {
    console.log("data/embeddings.json already matches the current knowledge-base.pdf — skipping rebuild.");
    console.log("(set FORCE_REBUILD_EMBEDDINGS=1 to force regeneration)");
    return;
  }

  console.log("Extracting text from knowledge-base.pdf...");
  const buffer = fs.readFileSync(PDF_PATH);
  const parser = new PDFParse({ data: buffer });
  const result = await parser.getText();
  await parser.destroy();

  const chunks = chunkText(result.text, 1000, 200);
  console.log(`Split into ${chunks.length} chunks.`);

  const embedded: EmbeddedChunk[] = [];
  for (let i = 0; i < chunks.length; i++) {
    const embedding = await embedText(chunks[i]);
    embedded.push({ text: chunks[i], embedding });
    process.stdout.write(`\rEmbedded ${i + 1}/${chunks.length} chunks`);
  }
  process.stdout.write("\n");

  const output: EmbeddingsFile = { sourcePdfHash: pdfHash, chunks: embedded };
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output));
  console.log(`Wrote ${embedded.length} embedded chunks to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Failed to build embeddings:", err);
  process.exit(1);
});
