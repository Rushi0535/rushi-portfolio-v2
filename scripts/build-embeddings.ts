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
 * Skips regeneration if data/embeddings.json is already newer than both the
 * source PDF and this script, unless FORCE_REBUILD_EMBEDDINGS=1 is set —
 * avoids re-downloading the ONNX model and re-embedding on every
 * `npm run build` when nothing has actually changed.
 */
import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";
import { chunkText } from "../lib/rag/chunk";
import { embedText } from "../lib/rag/embed";
import type { EmbeddedChunk } from "../lib/rag/types";

const PDF_PATH = path.join(process.cwd(), "data", "knowledge-base.pdf");
const OUTPUT_PATH = path.join(process.cwd(), "data", "embeddings.json");
const SCRIPT_PATH = __filename;

function isOutputFresh(): boolean {
  if (process.env.FORCE_REBUILD_EMBEDDINGS === "1") return false;
  if (!fs.existsSync(OUTPUT_PATH)) return false;

  const outputMtime = fs.statSync(OUTPUT_PATH).mtimeMs;
  const pdfMtime = fs.statSync(PDF_PATH).mtimeMs;
  const scriptMtime = fs.statSync(SCRIPT_PATH).mtimeMs;

  return outputMtime >= pdfMtime && outputMtime >= scriptMtime;
}

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error(`Knowledge base PDF not found at ${PDF_PATH}`);
    process.exit(1);
  }

  if (isOutputFresh()) {
    console.log("data/embeddings.json is already up to date — skipping rebuild.");
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

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(embedded));
  console.log(`Wrote ${embedded.length} embedded chunks to ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Failed to build embeddings:", err);
  process.exit(1);
});
