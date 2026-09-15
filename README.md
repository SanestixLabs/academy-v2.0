# Sanestix Academy — site skeleton

A multi-page, component-driven rebuild of the Sanestix Academy marketing site,
scaffolded with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

This is a working skeleton: routing, layout, design tokens, and reusable
components are in place with representative content, ready for real copy,
real media, and a CMS/data source to be wired in.

## Why this stack

- **Next.js App Router** — file-based routing gives you a true multi-page
  site (`/program`, `/projects`, `/course`, `/enroll`, etc.) with per-page
  metadata, static generation, and easy deploys (Vercel, or any Node host).
- **TypeScript** — every component and content shape (`FAQItem`, `NavLink`,
  `siteConfig`) is typed, so adding pages or editing copy is safe and
  autocompletable.
- **Tailwind CSS** — design tokens (colors, fonts, radii, shadows) live in
  `tailwind.config.ts`, so the whole site's look and feel is driven from one
  place instead of scattered inline styles.

## Project structure

```
app/                     Routes (one folder per page)
  layout.tsx             Root layout: fonts, <Navbar/>, <Footer/>
  page.tsx                Home
  program/page.tsx
  projects/page.tsx
  results/page.tsx
  instructors/page.tsx
  faq/page.tsx
  course/page.tsx
  enroll/page.tsx
  privacy/ refund/ terms/page.tsx
components/
  ui/                    Primitives: Button, Badge, Card, Container, Icon
  layout/                Navbar, Footer
  sections/              Hero, VideoIntro, FeatureGrid, CTASection,
                         PageHeader, FAQAccordion, LegalContent
lib/
  site-config.ts         Single source of truth: nav links, stats, copy
public/images/           Brand assets carried over from the old site
```

## Design system

Tokens are defined in `tailwind.config.ts`:

- `brand.cyan` / `brand.blue` — the two-tone gradient used for the primary
  CTA button and headline accents (`bg-brand-gradient`).
- `brand.deep` — dark navy used for the hero device mockup and CTA band.
- `ink` / `ink.soft` / `ink.muted` — the three text colors used across the
  site (headings, body, captions).
- `surface` / `surface.alt` / `surface.border` — background and border
  colors for cards and section bands.
- Fonts: **Space Grotesk** for headings (`font-display`), **Inter** for body
  copy (`font-body`), loaded via `next/font/google` in `app/layout.tsx`.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run typecheck
npm run lint
```

## Extending the skeleton

- **New page**: add a folder under `app/`, export a `page.tsx` with a
  `metadata` object and a default component built from the `sections/`
  components.
- **New nav item**: add it to `primaryNav` or `footerNav` in
  `lib/site-config.ts` — the Navbar/Footer pick it up automatically.
- **Real content**: swap the local arrays in each `page.tsx` (e.g.
  `modules` in `course/page.tsx`, `projects` in `projects/page.tsx`) for
  data fetched from a CMS or database — the components already expect
  those shapes.
- **Images**: replace files in `public/images/` and update `src` props;
  `next/image` handles optimization automatically.
