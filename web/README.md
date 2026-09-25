# Stokes Web Platform

The developer platform and systems landing page for **Stokes**, the autonomous cross-boundary systems invariant verification engine built on IBM Bob 2.0.

---

## Architecture Overview

- **Framework**: Astro 5 (zero-JS by default, static server-rendered components).
- **Styling**: Tailwind CSS v4 with custom design tokens (`Mona Sans`, `DM Mono`, `Sentient` typography, HSL semantic color scales).
- **Interactive Islands**: React 19 (`PixelPrism` animated luminance matrix, `ThemeToggle` light/dark switch).
- **Terminal Demonstrator**: Tabbed interactive macOS terminal previewing `stokes scan`, `stokes audit`, `stokes bench`, and `stokes cert`.

---

## Local Development

```bash
# Navigate to web workspace
cd web

# Install dependencies
npm install

# Start local dev server (default: http://localhost:4321)
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
