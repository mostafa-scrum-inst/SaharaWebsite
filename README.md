# Sahara Group website

Redesign of [saharagroup.org](http://www.saharagroup.org/) as a static Next.js site hosted on GitHub Pages.

## Why Next.js (static export)

- `output: "export"` produces plain HTML/CSS/JS that GitHub Pages serves directly, with no server.
- Each page is pre-rendered, so search engines get full HTML with unique titles, meta descriptions, Open Graph tags, a sitemap and JSON-LD schema. A Vue SPA would need Nuxt plus extra setup to match this.
- React components keep the layout in one place; all copy lives in `lib/content.js`.

## Three design directions, one build

The site ships with a theme switcher (bottom-left) for the three directions:

| | Direction | Palette | Fonts |
|---|---|---|---|
| A | Desert Power | navy `#0D2440` + amber `#E9A23B` | Barlow Condensed + Inter |
| B | Grid Voltage | graphite `#121820` + blue `#1E9BE0` + yellow `#F5C518` | Archivo + IBM Plex Sans/Mono |
| C | Nile Industrial | teal `#0F3B3C` + copper `#C8662A` | Sora + Source Sans 3 |

You can also link straight to one: `?theme=a`, `?theme=b` or `?theme=c`. The choice is remembered per browser.

All colours, fonts, corner radii and heading styles are CSS variables in `app/globals.css` under `[data-theme="..."]`. To launch with one direction: set `DEFAULT_THEME` and `SHOW_SWITCHER = false` in `lib/themes.js`, delete the other two theme blocks, and trim the font URL in `app/layout.jsx`.

## Editing content

Everything visitors read is in `lib/content.js`. Optional sections appear automatically once filled in:
`testimonials`, `caseStudies` (Projects page), `courseDates` (Training calendar), `downloads` (PDFs in `public/downloads/`) and `careers.roles`.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Deployment and CI minutes

One workflow, `.github/workflows/deploy.yml`, builds and deploys to GitHub Pages. It runs only on push to `main` (Markdown-only changes are skipped) or when started by hand from the Actions tab. There are no PR checks or test workflows. Builds use npm and Next.js caches and take about a minute.

One-time setup: **Settings → Pages → Source: GitHub Actions**.

Optional repository variables (**Settings → Secrets and variables → Actions → Variables**):

| Variable | Purpose |
|---|---|
| `SITE_URL` | Public URL used in sitemap and canonical links, e.g. `https://saharagroup.org` |
| `FORM_ENDPOINT` | Form service URL (Formspree, Basin, Getform...). Without it the form opens the visitor's email app. |
| `GA_ID` | Google Analytics 4 ID. Loads only after a visitor accepts the cookie banner. |

For a custom domain, add it under Settings → Pages; the base path switches to `/` automatically.
