/** @type {import('next').NextConfig} */
const nextConfig = {
  // @huggingface/transformers pulls in native/WASM ONNX runtime binaries
  // (onnxruntime-node, sharp) — keep them external to the server bundle
  // instead of letting webpack try to process them, matching the pattern
  // Next.js recommends for native Node deps used inside API routes.
  experimental: {
    serverComponentsExternalPackages: ["@huggingface/transformers", "onnxruntime-node", "sharp"],
    // Marking onnxruntime-node "external" above stops webpack from bundling
    // it, but Vercel's output file tracer doesn't discover its native
    // binary via static analysis (it's required through a dynamic path
    // inside onnxruntime-node's own loader), so the .node file silently
    // doesn't make it into the deployed function — "Cannot find module
    // 'onnxruntime-node'" at runtime. Force-include it explicitly, scoped
    // to just the linux/x64 binary Vercel's runtime actually needs — an
    // unscoped `**/*` glob pulls in darwin/win32/arm64 binaries too and
    // blows past Vercel's 250MB function size limit (was 309MB traced;
    // this is ~44MB). Multiple key formats included since the exact
    // route-key matching isn't documented; unmatched keys are no-ops.
    outputFileTracingIncludes: {
      "/api/chat": [
        "./node_modules/onnxruntime-node/bin/napi-v6/linux/x64/**/*",
        "./node_modules/onnxruntime-node/dist/**/*",
        "./node_modules/onnxruntime-node/lib/**/*",
      ],
      "/api/chat/route": [
        "./node_modules/onnxruntime-node/bin/napi-v6/linux/x64/**/*",
        "./node_modules/onnxruntime-node/dist/**/*",
        "./node_modules/onnxruntime-node/lib/**/*",
      ],
      "app/api/chat/route": [
        "./node_modules/onnxruntime-node/bin/napi-v6/linux/x64/**/*",
        "./node_modules/onnxruntime-node/dist/**/*",
        "./node_modules/onnxruntime-node/lib/**/*",
      ],
    },
  },
};

export default nextConfig;
