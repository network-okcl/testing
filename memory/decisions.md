# Decisions Log

| Date | Decision | Why |
|------|----------|-----|
| 2026-10-15 | Use Next.js + Google Sheets via Google Apps Script | Owner's choice; no paid database needed |
| 2026-10-15 | Work in 5 modes (manager, tasker, coder, auditor, advisor) | Owner is not a coder; keeps planning and coding separate |
| 2026-10-15 | Landing page = login page | Owner's requirement |
| 2026-10-15 | Particle background written by hand on `<canvas>` | No extra library, fast, full control over the look |
| 2026-10-15 | Website will call Apps Script through a Next.js server route | Keeps the Apps Script URL private |
| 2026-10-15 | Mobile number = 10-digit Indian number starting 6–9 | OKCL operates in India (Odisha) |
| 2026-10-15 | Only `<html>` has the page background colour (not `<body>`) | Otherwise the body colour hides the particle layer |
| 2026-10-15 | On phones, the login card comes right after the headline | Users reach the login without scrolling past info boxes |
| 2026-10-15 | Until Phase 2, "Continue" only checks the inputs and shows a notice | No database connected yet |
