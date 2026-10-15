# Architecture

## Stack
- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- Particle background: hand-written HTML `<canvas>` animation (no extra library)
- Database: **Google Sheets**, accessed only through a **Google Apps Script** web app

## How the pieces connect (planned)
```
Browser  ──►  Next.js server route (/api/...)  ──►  Apps Script web app  ──►  Google Sheet
```
The Apps Script URL will live in an environment variable (`APPS_SCRIPT_URL`), never in
browser code.

## Folder layout
```
src/app/layout.tsx            page shell, fonts, metadata
src/app/page.tsx              landing / login page
src/app/globals.css           Tailwind + design tokens
src/app/admin/page.tsx        admin placeholder (Phase 5)
src/components/ParticleField.tsx   live particle simulation (canvas)
src/components/CentreLoginCard.tsx email + mobile form
src/components/AdminLoginButton.tsx bottom-right admin button
src/lib/validation.ts         email / mobile validation helpers
```

## Tooling
- `npm run lint` → `eslint .` (flat config in `eslint.config.mjs`)
- Path alias `@/` → `src/`
