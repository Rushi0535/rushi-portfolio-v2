# Rushi Prajapati — Portfolio V2

Personal portfolio for Rushi Prajapati (AI/ML engineer, grad student), built
with Next.js 14 (App Router, TypeScript, Tailwind CSS). See `CLAUDE.md` for
the full design system, layout rules, and project decisions log.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- `@huggingface/transformers` — RAG embeddings, runs server-side in Node
- Groq chat completions via plain `fetch` (no SDK dependency)
- `nodemailer` — Contact form + Rushi's AI session emails via Gmail SMTP
- `googleapis` — chat message logging to Google Sheets

## Local setup

1. Install dependencies:
   ```
   npm install
   ```
2. Copy the env template and fill in real values:
   ```
   cp .env.local.example .env.local
   ```
   Required variables (see `.env.local.example` for where to get each one):
   - `CONTACT_EMAIL_USER`
   - `CONTACT_EMAIL_APP_PASSWORD`
   - `CONTACT_EMAIL_TO`
   - `GROQ_API_KEY`
   - `GOOGLE_SERVICE_ACCOUNT_JSON`
   - `GOOGLE_SHEET_ID`
3. Run the dev server:
   ```
   npm run dev
   ```
   Visit `http://localhost:3000` (redirects to `/about`).

## RAG knowledge base

`data/knowledge-base.pdf` is the source document for Rushi's AI's retrieval
context. `data/embeddings.json` is the precomputed, committed embedding
index built from it — the chat API only embeds the incoming query at
request time, it never re-embeds the whole knowledge base.

To regenerate the index after editing `data/knowledge-base.pdf`:
```
npm run build-embeddings
```
This also runs automatically as the `prebuild` step before `npm run build`,
but it's a no-op (skips instantly) unless the PDF's content hash has
actually changed since the last commit — see the comment at the top of
`scripts/build-embeddings.ts` for why it's hash-based rather than
timestamp-based. Force a rebuild with:
```
FORCE_REBUILD_EMBEDDINGS=1 npm run build-embeddings
```

## Deployment notes (Vercel)

- Framework preset: Next.js. No custom build command needed — Vercel runs
  `npm run build`, which triggers `prebuild` (embeddings check) automatically.
- All 6 env vars above must be set in the Vercel project's Environment
  Variables settings before the first deploy that needs them to work (the
  site builds and serves static pages fine without them; only the chat,
  contact form, and Sheets logging need them at runtime).
- The RAG pipeline (`@huggingface/transformers`) downloads and caches its
  embedding model to the OS temp directory at runtime (`/tmp` on Vercel's
  Linux functions) rather than inside the read-only deployed bundle — see
  `lib/rag/embed.ts`. Expect the first chat message after a cold start to be
  slower than subsequent ones while that model downloads.
- `next.config.mjs` marks `@huggingface/transformers`, `onnxruntime-node`,
  and `sharp` as external server packages so Next doesn't try to bundle
  their native binaries — standard practice for native Node deps used
  inside API routes.
