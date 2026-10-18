# cultivatelocalfood.com

Cultivate Local's website. Eleventy 3 on Netlify, Node 22. No database, no build plugins.

## Run it locally

```
npm install
npm start          # http://localhost:8080, reloads as you edit
npm run build      # writes the site to public/
```

## Where things live

| To change… | Edit |
| --- | --- |
| Phone, email, hours, booking link, Tally form IDs, Google Analytics ID | `src/_data/site.js` |
| Package names, prices, one-line blurbs (home page board + services) | `src/_data/packages.js` |
| Full package details, FAQ | `src/pages/services.njk` |
| Work projects | `src/work/*.md` (one file per farm; screenshots in `src/assets/img/work/`) |
| Articles | `src/resources/*.md` (one file per article) |
| Redirects from the old site | `src/_redirects` |
| Colors, fonts, layout | `src/assets/css/site.css` |
| The two PDFs | `pdf-src/*.html`, then rebuild them (below) |

## Hooking up the outside pieces

- **Booking:** create a Google Calendar appointment schedule (Tue–Fri, 3–7pm ET, 30 min), open its booking page, copy the link, and paste it into `bookingUrl` in `src/_data/site.js`. Until then, the Book page shows phone and email instead.
- **Forms:** Tally forms `BE4ZkY` (intake) and `kba56j` (self-check signup). They only show on the site once published in Tally. The self-check form already sends people to `/self-check/thanks/` when they submit. To get every signup in a Google Sheet, connect it under the form's Integrations tab in Tally.
- **Google Analytics:** paste your GA4 measurement ID (`G-…`) into `ga4` in `src/_data/site.js`.

## Editing posts and projects

Three ways, easiest first:

1. Send Craig's Claude the text and it adds the file.
2. Edit or add a markdown file right on GitHub (the pencil icon, or "Add file").
3. Use the editor at `/admin/` (Sveltia CMS, signs in with GitHub). One-time setup: create a GitHub OAuth app (callback URL `https://api.netlify.com/auth/done`), then add its client ID and secret in Netlify under Site configuration → Access & security → OAuth → GitHub.

## Rebuilding the PDFs

```
npx -y -p playwright node pdf-src/make-pdfs.mjs
```

The first time, run `npx playwright install chromium` before that. The PDFs land in `src/assets/pdf/`.
