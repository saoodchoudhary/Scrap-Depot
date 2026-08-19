# Scrap Depot — scrapdepot.in

Marketing site for **Scrap Depot**, a Mumbai-based recycler handling e-waste,
lithium-ion batteries, metal scrap, industrial dismantling, secure data
destruction and EPR compliance.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Running locally

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    layout.js                 root layout — fonts, metadata, Organization JSON-LD
    page.js                   home
    actions.js                server actions for the quote + contact forms
    sitemap.js  robots.js     generated /sitemap.xml and /robots.txt
    not-found.js              404
    about/  services/  materials/  process/  sustainability/
    infrastructure/  clients/  resources/  careers/  contact/
    quote/  policies/
      [slug]/                 dynamic detail pages (services, resources, policies)
  components/                 header, footer, forms, SVG art, UI primitives
  data/
    site.js                   brand, contact details, navigation
    services.js               the six service streams
    materials.js              rate card
    content.js                stats, timeline, clients, posts, jobs, policies, FAQs
```

## Editing content

Almost all copy lives in `src/data/`. Adding a service, an article or a policy is
a matter of appending an object to the relevant array — the listing pages,
detail routes and sitemap all derive from it.

## Before going live

The following are **sample placeholders** and must be replaced:

- **Contact details** — phone numbers, email addresses, office addresses,
  CIN / GSTIN / CPCB registration numbers in `src/data/site.js`.
- **Rates** — the indicative figures in `src/data/materials.js`.
- **Statistics and certifications** — `impactStats`, `secondaryStats`,
  `certifications` and `milestones` in `src/data/content.js`.
- **Client names and testimonials** — `clientLogos`, `clientSectors`,
  `testimonials` in `src/data/content.js`, plus the case studies in
  `src/app/clients/page.js`.
- **Team bios** — `leadership` in `src/app/about/page.js`.
- **Form delivery** — `deliverEnquiry()` in `src/app/actions.js` currently logs
  to the server console. Point it at an email service or the CRM.
- **Social links** — `site.socials` in `src/data/site.js`.

## Imagery

Photography is stood in for by hand-built SVG compositions in
`src/components/patterns.js` (`<ArtPanel>`, `<ArtFrame>`, `<HeroField>`). They
are weightless and theme-consistent; swap any of them for a `next/image` once
real facility photography exists — the surrounding layout does not change.
