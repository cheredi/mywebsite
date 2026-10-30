# tatyanaamugo.com

Personal portfolio for Tatyana Amugo. Next.js (App Router) + TypeScript, deployed on Netlify.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Where things live

| What | Where |
| --- | --- |
| Page content (projects, experience, skills, education, stats) | `data/*.ts` |
| Site URL, social links, contact email, nav | `lib/constants.ts` |
| Sections | `components/sections/` |
| All styles (tokens at the top) | `app/main.css` |
| Substack feed | `lib/substack.ts` — the home page is cached and refreshed every 6 hours |

Most content edits only touch `data/` or `lib/constants.ts`.

## Contact form

Uses Netlify Forms. `public/__forms.html` is a hidden copy of the form that
Netlify reads at deploy time; the real form in
`components/sections/ContactSection.tsx` posts to it. If you add or rename a
field, change it in both places. Submissions appear under **Forms** in the
Netlify dashboard, where you can turn on email notifications.

The form only works on Netlify; locally it shows the fallback error message.
