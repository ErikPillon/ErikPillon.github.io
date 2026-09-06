# erikpillon.github.io

Personal site — built with [Astro](https://astro.build), deployed to GitHub Pages.

Static HTML out the other end: no framework runtime, one small script for the theme toggle.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built site
npm run check    # type-check astro + typescript
```

Requires Node 20+.

## Deploying

Push to `gh-pages`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the
site and publishes `dist/` to GitHub Pages. Nothing is committed to the repo from the build.

## Adding a blog post

Drop a markdown file in `src/content/posts/`. The filename becomes the URL
(`accelerate.md` → `/writing/accelerate/`). Frontmatter:

```yaml
---
title: "Post title"            # required
date: 2026-03-01               # required
subtitle: "Optional subtitle"  # book subtitle, mostly
description: "One or two sentences — this is the summary shown in listings and search results."
cover: "/images/something.png" # optional; lives in public/images/
tags: ["reading", "actuarial"]
book:                          # optional, only for book notes
  author: "Author Name"
  year: 2019
  pages: 312
draft: false                   # true hides it from production builds
---
```

`description` is what appears on `/writing`, on the landing page and in the RSS feed. Without one,
the first couple of sentences of the body are used instead — usually worse.

## Editing everything else

| What | Where |
| --- | --- |
| Projects (both pages) | `src/data/projects.yaml` |
| Education timeline | `src/data/education.yaml` |
| Newsletter & external links | `src/data/elsewhere.yaml` |
| Name, tagline, nav, socials | `src/site.ts` |
| Colours, type, spacing | `src/styles/global.css` (all tokens live at the top) |
| Landing page copy | `src/pages/index.astro` |
| About page copy | `src/pages/about.astro` |

Project entries without a `link:` render as a dashed card with no outbound link — useful for
something that exists but isn't public yet. Projects without an `image:` get a deterministic
plotted placeholder instead, so the card grid stays aligned.

## Structure

```
src/
  pages/            routes — one file per URL
    writing/[...slug].astro   individual posts
  content/posts/    the blog, as markdown
  data/             hand-edited YAML for projects, education, external links
  components/       Nav, Footer, cards
  layouts/Base.astro  <head>, theme script, nav + footer shell
  styles/global.css   design tokens and shared classes
  lib/              small helpers (reading time, summaries, dates)
public/             copied to the site root verbatim (images, PDFs, favicon)
```

## Notes

- Old Jekyll permalinks (`/blog/:slug`) redirect to `/writing/:slug`; the map is in
  `astro.config.mjs`. Don't delete entries — they are the only thing keeping inbound links alive.
- Light/dark follows the system by default; the toggle overrides it and persists in `localStorage`.
- Google Analytics (`G-TVDC8TKG2W`, set in `src/site.ts`) loads on every page view. It is compiled
  out of dev builds, so local development never counts as traffic. Set `measurementId` to `''` to
  remove analytics — script, cookies and all — from the site.
- There is no cookie banner. GA sets cookies on arrival, which is worth knowing if EU consent rules
  ever become a concern for the site.
