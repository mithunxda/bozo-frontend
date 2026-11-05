<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Internationalization & Translation Mandate
- The application must fully support both Dutch (`nl`) and English (`en`) (alongside German `de`).
- All user-facing text displayed on the website must be localized using the translation system.
- No hardcoded strings, buttons, badges, errors, or service details are permitted in templates.
- Translation parity across `nl`, `en`, and `de` must be strictly maintained for all keys and data records.
- Every displayed test and user interaction must verify that switching languages updates all copy seamlessly.

