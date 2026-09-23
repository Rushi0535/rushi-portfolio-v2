/**
 * Word-boundary-aware sliding-window chunker. Approximates the old app's
 * LangChain RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
 * closely enough for retrieval purposes without pulling in LangChain.
 */
export function chunkText(text: string, chunkSize = 1000, chunkOverlap = 200): string[] {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];

  const chunks: string[] = [];
  let start = 0;

  while (start < normalized.length) {
    let end = Math.min(start + chunkSize, normalized.length);
    if (end < normalized.length) {
      const lastSpace = normalized.lastIndexOf(" ", end);
      if (lastSpace > start) end = lastSpace;
    }

    const chunk = normalized.slice(start, end).trim();
    if (chunk) chunks.push(chunk);

    if (end >= normalized.length) break;
    start = Math.max(0, end - chunkOverlap);
  }

  return chunks;
}
