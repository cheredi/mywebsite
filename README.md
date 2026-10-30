# tatyanaamugo.com

Tatyana Amugo's portfolio. Next.js (App Router) + TypeScript, deployed on Netlify. Every page is
statically generated; the home page refreshes every 6 hours to pick up new Substack posts.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Editing content

Almost everything lives in `content/` — no component changes needed:

| File | What it holds |
| --- | --- |
| `content/site.ts` | Name, role, location, email, social links, nav, roles she's open to |
| `content/profile.ts` | Hero headline, proof numbers, "I am a…" strip, approach, experience, education, toolkit, About copy |
| `content/work.ts` | Case studies (one page each at `/work/<slug>`) |

Rules of thumb: keep every claim something Tatyana can speak to in an interview, and keep the About
quote verbatim.

## Pages

- `/` — home
- `/work/<slug>` — case studies, generated from `content/work.ts`
- `/resume` — printable HTML résumé ("Download PDF" uses the browser's print-to-PDF)
- `/arcade` — Interview Arcade mini-game

Social preview images are generated at build time (`opengraph-image.tsx` files, shared layout in
`lib/og.tsx`). Structured data (Person, WebSite, ProfilePage, CreativeWork, BreadcrumbList) is in
`lib/seo.tsx`.

## Images

- `public/images/tatyana-portrait.webp` — hero portrait, background removed and un-mirrored
- `public/images/tatyana-closeup.jpg` — About section
- `public/images/monogram.png` — TCA monogram (nav/footer), recoloured from `app/icon.png`
- `public/images/work/*` — project screenshots
- `assets/og-portrait.png` — portrait used inside social preview images

## Contact form

Netlify Forms. `public/__forms.html` is a hidden copy of the form Netlify reads at deploy time; the
real form in `components/home/Contact.tsx` posts to it. Change field names in both places.
Submissions appear under **Forms** in the Netlify dashboard (turn on email notifications there).
