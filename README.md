# MKSVS-Webv2

Modern revamp of [mksvsenterprisecorp.com](https://mksvsenterprisecorp.com) — MKSVS Enterprise Corporation, professional locksmith based in Makati City since 1994.

## Stack
- **Astro 5** — static output, component reuse, View Transitions
- **Tailwind v4** — CSS-first `@theme` config, HSL semantic tokens
- **GitHub Pages** — deploy via Actions workflow

## Develop
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
npm run preview   # serve dist/ locally
```

## Deploy
Pushes to `main` build and publish via `.github/workflows/deploy.yml`. Custom domain via `public/CNAME`. First-time setup: **Repo Settings → Pages → Source → GitHub Actions**.

## Status
Phase A — scaffold complete. Foundations (Navbar, Footer, ThemeToggle, layouts) next.
