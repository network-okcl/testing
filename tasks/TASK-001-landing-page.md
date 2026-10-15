# TASK-001 — Landing / Login page with live particles

**Status:** DONE (2026-10-15)
**Phase:** 1
**Read first:** `memory/requirements.md`, `memory/design-system.md`, `memory/architecture.md`

## Goal
Create the Next.js project and build the landing page, which is also the login page.

## Steps
- [x] 1. Set up Next.js 15 + React 19 + TypeScript + Tailwind v4 + ESLint in the repo root (`src/` folder layout).
- [x] 2. Add design tokens from `memory/design-system.md` to `src/app/globals.css`; load Inter via `next/font`.
- [x] 3. Build `src/components/ParticleField.tsx`: full-screen canvas, drifting particles, link lines, mouse interaction, retina-sharp, resizes with window, pauses when tab hidden, static frame for reduced motion.
- [x] 4. Build `src/lib/validation.ts`: `isValidEmail`, `normalizeMobile`, `isValidMobile` (10 digits starting 6–9; accept `+91` / leading `0`).
- [x] 5. Build `src/components/CentreLoginCard.tsx`: glass card, OKCL heading, Email + Mobile fields with icons, inline errors, "Continue" button with loading state; on success show a notice that verification will be connected in Phase 2.
- [x] 6. Build `src/components/AdminLoginButton.tsx`: fixed bottom-right, links to `/admin`.
- [x] 7. Create `src/app/admin/page.tsx`: simple "Admin portal coming soon" page with a back link, same background.
- [x] 8. Assemble `src/app/page.tsx`: particles + headline + login card + footer + admin button. Responsive.
- [x] 9. Set page title/description in `layout.tsx`.
- [x] 10. `npm run lint` and `npm run build` pass.

## Done when
- Opening the site shows the animated particle background with the login card.
- Invalid email/mobile shows a clear error; valid input shows the Phase 2 notice.
- Admin Login button is in the bottom-right and opens `/admin`.
- Build passes.

## Coder notes
- On phones the order is: headline → login card → highlight boxes (so the login is reachable quickly).
- `npm run lint` uses the ESLint command directly (`next lint` is deprecated).
- Checked with screenshots at desktop (1440×900) and phone (390×844) sizes.
