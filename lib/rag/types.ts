export type EmbeddedChunk = {
  text: string;
  embedding: number[];
};

// sourcePdfHash lets the build script detect "has the PDF actually changed"
// via content hash rather than file mtimes — mtimes aren't preserved by git,
// so a fresh checkout (e.g. on a CI/CD build machine) gives every file a
// checkout-time timestamp in unpredictable order, making mtime comparisons
// unreliable there.
export type EmbeddingsFile = {
  sourcePdfHash: string;
  chunks: EmbeddedChunk[];
};
