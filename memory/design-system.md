# Design System

## Feel
Enterprise, calm, trustworthy, modern. Dark "deep space" background with a glowing,
interactive particle network. Frosted-glass login card in the centre.

## Colours
| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#050816` | page background |
| `--bg-2` | `#0b1230` | gradient partner |
| `--accent` | `#38bdf8` (sky) | primary actions, particles |
| `--accent-2` | `#818cf8` (indigo) | gradients, particle links |
| `--text` | `#e6edf7` | main text |
| `--muted` | `#94a3b8` | secondary text |
| `--danger` | `#f87171` | errors |

## Typography
- **Inter** (Google Font via `next/font`) for all text.

## Particles
- ~1 particle per 9,000 px² of screen (capped at 140), linked with lines when close.
- Particles gently drift; the mouse attracts nearby links and pushes particles slightly.
- Animation stops when the tab is hidden and is replaced by a static frame when the user
  has "reduce motion" turned on.
