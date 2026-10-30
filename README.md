# tatyanaamugo.com

Tatyana Amugo's portfolio. Next.js (App Router) + TypeScript on Netlify, with GSAP (ScrollTrigger,
SplitText) and Lenis for motion.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Content

All copy is Tatyana's own and lives in `content/` — edit it there, not in components:

| File | What |
| --- | --- |
| `content/site.ts` | Hero, About, section titles, links, email, nav, SEO title/description |
| `content/projects.ts` | Featured Projects (each also gets a page at `/work/<slug>`) |
| `content/experience.ts`, `skills.ts`, `education.ts`, `proof.ts` | The rest of the page |
| `content/media.ts` | Screenshots shown with each project |

## Motion

- `lib/motion.ts` — GSAP plugins and the site's single easing curve
- `components/motion/Shell.tsx` — Lenis smooth scroll, intro state, page-transition curtain
- `components/motion/Loader.tsx` — the "Hello" intro (plays once per session; skipped for
  reduced-motion users)
- `components/motion/SplitHeading.tsx` / `Reveal.tsx` — scroll reveals

Animated elements are only hidden when JavaScript runs (`.js` on `<html>`), so the page is fully
readable without it.

## Contact form

Netlify Forms. `public/__forms.html` is the hidden copy Netlify reads at deploy time; the real form
in `components/layout/Connect.tsx` posts to it. Keep field names in sync. Submissions appear under
**Forms** in Netlify.
