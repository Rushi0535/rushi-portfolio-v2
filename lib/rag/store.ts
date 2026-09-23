import fs from "node:fs";
import path from "node:path";
import { embedText } from "@/lib/rag/embed";
import { cosineSimilarity } from "@/lib/rag/similarity";
import type { EmbeddedChunk, EmbeddingsFile } from "@/lib/rag/types";

const EMBEDDINGS_PATH = path.join(process.cwd(), "data", "embeddings.json");

let chunksCache: EmbeddedChunk[] | null = null;

function loadChunks(): EmbeddedChunk[] {
  if (chunksCache) return chunksCache;
  const raw = fs.readFileSync(EMBEDDINGS_PATH, "utf-8");
  chunksCache = (JSON.parse(raw) as EmbeddingsFile).chunks;
  return chunksCache;
}

export async function retrieveTopChunks(query: string, k = 3): Promise<string[]> {
  const chunks = loadChunks();
  const queryEmbedding = await embedText(query);

  const scored = chunks.map((chunk) => ({
    text: chunk.text,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, k).map((s) => s.text);
}
