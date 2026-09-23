# Rushi Prajapati — Portfolio V2

Personal portfolio site for Rushi Prajapati, AI/ML engineer and grad student.
Standalone project — do not reference, import from, or compare against any other
repo (including any existing Streamlit portfolio).

Deploy target: Vercel free tier. Stay within free serverless/edge limits — no
paid-tier infra.

## Tech Stack (locked)

- Next.js 14, App Router, TypeScript
- Tailwind CSS 3 (utility classes + CSS variable design tokens — no other UI kit
  unless explicitly approved first)
- No external state libraries, no component libraries (no shadcn, no MUI, etc.)
  unless explicitly approved first

## Layout Rules (non-negotiable — apply to every page)

1. **Persistent left sidebar** — always visible on desktop, collapses to a top
   bar + hamburger on mobile. Contains, top to bottom:
   - Profile photo thumbnail
   - Name
   - Tagline
   - Nav links: About Me, Blogs & Articles, Talks & Events, Certificates,
     Projects, Contact Me, Rushi's AI
   - "Download Resume" button (always present, pinned near the bottom)
   - Dark mode toggle
2. **Every page uses the same shell**: `PageShell` renders an icon + title +
   one-line subtitle header, then content inside the shared card/section
   pattern. No page invents its own header or card style.
3. **Sub-tabs** (e.g. About Me's Education/Experience/Skills) render as a
   horizontal `TabBar` directly under the page header — identical styling
   everywhere it's used.
4. Typography, spacing, card styles, button styles, and color palette are
   identical across all pages via shared components + CSS variable tokens.
   Never hardcode a one-off color or spacing value that bypasses the tokens.
5. No generic "AI app" aesthetic: no purple-to-blue gradients, no bare Inter +
   unstyled shadcn defaults, no centered-hero-with-gradient-blob. See Visual
   Identity below for the actual system.
6. Fully responsive. Sidebar → top bar + hamburger on mobile (breakpoint: `md`).
7. Dark mode via CSS variable tokens (`:root` / `.dark`), toggle lives in the
   sidebar, persisted in `localStorage`, no flash-of-wrong-theme on load.

## Visual Identity

Concept: **engineer's lab notebook** — warm paper tones, a serif for display
type (gives it a designed, editorial feel instead of a SaaS-template feel),
monospace for nav/meta/labels (nods to the engineering subject matter without
going full "terminal hacker" cliché), and a copper/amber accent grounded in
PCB solder-trace coloring rather than a random pick.

**Fonts** (loaded via `next/font/google`):
- Display / headings: `Fraunces` (serif, warm, distinctive optical sizing)
- Body: `Work Sans` (humanist sans — deliberately not Inter)
- Mono (nav labels, tags, meta text, code): `JetBrains Mono`

**Color tokens** (CSS variables in `app/globals.css`):

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | `#FAF8F3` | `#16150F` | page background (warm paper / warm charcoal) |
| `--color-bg-elevated` | `#FFFFFF` | `#1E1C15` | cards, sidebar |
| `--color-border` | `#E4DFD3` | `#322E23` | hairline borders |
| `--color-text-primary` | `#1E1B16` | `#F4F0E6` | body text |
| `--color-text-secondary` | `#6B6558` | `#A39B89` | secondary text |
| `--color-accent` | `#C2703D` | `#E0924F` | links, active states, buttons |
| `--color-accent-strong` | `#A65A2E` | `#F0A868` | hover states |
| `--color-accent-soft` | `#F3E4D6` | `#33281B` | active-nav-item background |

**Spacing / shape**: 4px base unit, generous section padding (32–48px),
card radius `14px` (`--radius-card`), hairline 1px borders (no heavy shadows).

## Folder Structure

```
app/
  layout.tsx            root layout: fonts, ThemeProvider, Sidebar + content area
  globals.css            design tokens, base styles
  page.tsx               redirects/renders About Me (home)
  about/page.tsx
  blogs/page.tsx
  talks/page.tsx
  certificates/page.tsx
  projects/page.tsx
  contact/page.tsx
  ai/page.tsx             "Rushi's AI"
components/
  sidebar.tsx
  page-shell.tsx
  tab-bar.tsx
  theme-toggle.tsx
  theme-provider.tsx
lib/
  nav-config.ts           single source of truth for sidebar nav items
```

## Workflow Rules

- After every phase, run the dev server and `next build`, confirm zero errors
  and zero console warnings, and describe what was verified before reporting
  done.
- Do not ask yes/no implementation questions. Make a sensible, documented
  decision (see Decisions Log below) and keep moving. Only stop to ask when
  actual content (real copy/images) is needed and can't be invented.

## Decisions Log

- **2026-09-15** — Scaffolder default (`create-next-app@latest`) pulled
  Next.js 16 / React 19 / Tailwind 4, not the requested Next.js 14 stack.
  Rebuilt manually with pinned `next@14`, `react@18`, `tailwindcss@3` to match
  the requested, well-documented API surface.
- **2026-09-15** — Pinned exactly `next@14.2.35` (not `14.2.5`) — `14.2.5` has
  a disclosed critical security advisory; `14.2.35` is the latest patched
  release on the 14.x line.
- **2026-09-15** — `npm audit` still flags advisories against the 14.x line
  (fixed only in Next 16). Reviewed each: they require a custom server,
  Windows-hosted deployment, i18n middleware, AVIF image optimization, or
  external `next/image` `remotePatterns` — none of which this project uses
  (Vercel serverless, App Router, no custom server, no i18n, local images
  only). Mitigation: do not add a custom server, i18n middleware, or
  `next/image` `remotePatterns` for external hosts without re-checking this
  list first.
- **2026-09-15** — Chose the "engineer's lab notebook" visual identity
  (Fraunces + Work Sans + JetBrains Mono, copper accent) to avoid generic
  AI-app template aesthetics. See Visual Identity above.
- **2026-09-15** — Profile photo and resume file don't exist yet. Sidebar
  renders placeholder avatar (initials) and a disabled-styled "Download
  Resume" button pointing at `/resume.pdf` until real assets are provided.
- **2026-09-15** — `/` renders the About Me page directly (no separate empty
  landing/hero page) so the sidebar nav's first item matches the home route.
- **2026-09-23** — Pinned `nodemailer` to `^10` (not `^6`) — `<=9.1.0` has
  multiple disclosed advisories (SMTP command injection, CRLF header
  injection, recipient-domain bypass). Core `createTransport`/`sendMail` API
  used by this project is unchanged across majors.
- **2026-09-23** — Used `@huggingface/transformers` instead of the
  `@xenova/transformers` package named in the original ask for the RAG
  embedding pipeline. `@xenova/transformers` is deprecated; its final 2.x
  release pulls in an old `onnxruntime-web` → `onnx-proto` → `protobufjs`
  chain with critical/high advisories (arbitrary code execution, prototype
  pollution) and a vulnerable bundled `sharp`. `@huggingface/transformers` is
  the actively maintained successor from the same org, a drop-in API
  replacement (`pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2")`
  still works — the HF Hub model repo name is unrelated to the npm package
  name), and resolves all of the above. Verified `npm audit` shows zero new
  advisories vs. the pre-existing accepted Next.js/glob list above.
- **2026-09-23** — Swapped `lib/groq.ts`'s primary/fallback models from
  `llama-3.3-70b-versatile` / `llama-3.1-8b-instant` to `openai/gpt-oss-120b`
  / `openai/gpt-oss-20b`. Confirmed via a live call to Groq's `/models`
  endpoint that the project's `GROQ_API_KEY` has no Llama chat models enabled
  on this account at all — only the `openai/gpt-oss` family, `qwen/qwen3.8-27b`,
  `allam-2-7b`, and audio-only models. Verified end-to-end with real
  credentials: RAG retrieval, multi-turn context, and Sheets logging all work
  correctly with the new models. If a future `GROQ_API_KEY` has Llama access,
  re-check `/models` before assuming these need to change back.
