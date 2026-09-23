// Marking onnxruntime-node "external" (below) stops webpack from bundling
// it, but Vercel's output file tracer doesn't discover its native binary
// via static analysis (it's required through a dynamic path inside
// onnxruntime-node's own loader), so files it needs silently don't make it
// into the deployed function — "Cannot find module 'onnxruntime-node'" at
// runtime. Force-include what's needed explicitly:
//   - package.json — required for Node to resolve the bare `require()`
//     specifier at all (reads its "main" field); without this the other
//     files existing on disk doesn't matter, resolution fails immediately.
//   - dist/**, lib/** — the package's JS glue code (small).
//   - bin/napi-v6/linux/x64/** — only the linux/x64 native binary. An
//     unscoped `**/*` glob also pulls in darwin/win32/arm64 binaries and
//     blew past Vercel's 250MB function size limit (309MB traced); scoped
//     down to ~66MB.
const onnxRuntimeNodeIncludes = [
  "./node_modules/onnxruntime-node/package.json",
  "./node_modules/onnxruntime-node/dist/**/*",
  "./node_modules/onnxruntime-node/lib/**/*",
  "./node_modules/onnxruntime-node/bin/napi-v6/linux/x64/**/*",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@huggingface/transformers", "onnxruntime-node", "sharp"],
    // Multiple key formats included since the exact route-key matching
    // Next.js expects here isn't documented; unmatched keys are no-ops.
    outputFileTracingIncludes: {
      "/api/chat": onnxRuntimeNodeIncludes,
      "/api/chat/route": onnxRuntimeNodeIncludes,
      "app/api/chat/route": onnxRuntimeNodeIncludes,
    },
  },
};

export default nextConfig;
