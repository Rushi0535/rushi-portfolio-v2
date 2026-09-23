/** @type {import('next').NextConfig} */
const nextConfig = {
  // @huggingface/transformers pulls in native/WASM ONNX runtime binaries
  // (onnxruntime-node, sharp) — keep them external to the server bundle
  // instead of letting webpack try to process them, matching the pattern
  // Next.js recommends for native Node deps used inside API routes.
  experimental: {
    serverComponentsExternalPackages: ["@huggingface/transformers", "onnxruntime-node", "sharp"],
  },
};

export default nextConfig;
