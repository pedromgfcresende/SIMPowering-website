# SIMpowering website

The website of SIMpowering, a SIMagination Challenge initiative at the University of St. Gallen, fighting period poverty in **Tanzania** and **Kenya**.

Built with [Astro](https://astro.build) as a fully static site, in English and German.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run check    # type-check
```

## Pages

| URL | What it is |
| --- | --- |
| `/` | Hub: mission, initiative picker, approach, donate chooser |
| `/kenya`, `/tanzania` | One page per initiative, generated from its data file |
| `/team` | One team section per initiative |
| `/contact` | Email links (mailto) and socials |
| `/de/...` | German version of every page |

## Editing content (no HTML needed)

All text lives in `src/data/`. Every text has an `en` and a `de` version (German falls back to English if you leave it out).

| File | Contents |
| --- | --- |
| `src/data/site.ts` | Contact email, social links |
| `src/data/home.ts` | Home page text, approach steps, overall impact numbers |
| `src/data/initiatives/kenya.ts` | Everything on the Kenya page |
| `src/data/initiatives/tanzania.ts` | Everything on the Tanzania page |
| `src/data/team.ts` | Team members per initiative (photos go in `src/assets/team/`) |
| `src/i18n/index.ts` | Small interface labels (buttons, menu) |

Every section of an initiative page (`context`, `impact`, `gallery`, `partners`, `donationTiers`) is optional. Leave one out and it disappears from the page.

### Adding a new country

1. Copy `src/data/initiatives/kenya.ts` to e.g. `uganda.ts` and edit it (set a new `slug` and `accent` colour).
2. Register it in `src/data/initiatives/index.ts`.

The page, its German version, the menu entry and the home page card are created automatically.

### Images

Put photos in `src/assets/photos/` and `import` them in the data file. Astro resizes and converts them to WebP at build time. Keep originals at or below ~1600 px.

## Open to-dos

- [ ] Kenya donation link: set `donateUrl` in `kenya.ts` (until then the page shows an email button)
- [ ] Kenya photos: replace the placeholder `heroImage` in `kenya.ts`
- [ ] Team Kenya and Team Tanzania in `src/data/team.ts`

## Deploying on Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo. It detects Astro automatically (build `npm run build`, output `dist`).
3. Add the domain `simpowering.org` under **Settings → Domains**.

Every push to `main` then redeploys the site, and every pull request gets a preview URL.
