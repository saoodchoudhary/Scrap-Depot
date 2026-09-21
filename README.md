# Scrap Depot — scrapdepot.in

Marketing site for **Scrap Depot**, a Mumbai-based recycler handling e-waste,
lamp recycling, metal scrap, office and plant dismantling, secure data
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
  lib/
    mailer.js                 SMTP delivery for enquiries (nodemailer)
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

## Enquiry email

The contact and quote forms post to Server Actions in `src/app/actions.js`,
which email the submission to `MAIL_TO` via `src/lib/mailer.js` (nodemailer).

**Setup:** copy `.env.example` to `.env` and fill in `SMTP_PASS`.

Gmail needs an **App Password**, not the account password:

1. Turn on 2-Step Verification on the Google account
2. Visit https://myaccount.google.com/apppasswords
3. Create an app password and paste the 16 characters into `SMTP_PASS`
   (no spaces)

Notes:

- The `From` address is always `SMTP_USER` — Gmail rejects sending as an
  address it has not verified. `MAIL_FROM_NAME` sets the display name only.
- `Reply-To` is set to the enquirer's email, so hitting reply answers them
  directly.
- Both forms carry a hidden honeypot field; submissions that fill it are
  accepted in the UI but never emailed.
- If SMTP is unconfigured or sending fails, the form shows the phone number
  and email as a fallback rather than pretending it succeeded. The enquiry is
  also written to the server log.
- Restart `next dev` after editing `.env` — environment variables are read at
  server start.

## Before going live

The following are **sample placeholders** and must be replaced:

- **Office addresses** and **CIN / GSTIN / MPCB registration numbers** in
  `src/data/site.js`. (Phone numbers and the email address are live.)
- **Rates** — the indicative figures in `src/data/materials.js`.
- **Statistics and certifications** — `impactStats`, `secondaryStats`,
  `certifications` and `milestones` in `src/data/content.js`.
- **Client names and testimonials** — `clientLogos`, `clientSectors`,
  `testimonials` in `src/data/content.js`, plus the case studies in
  `src/app/clients/page.js`.
- **Team bios** — `leadership` in `src/app/about/page.js`.
- **`SMTP_PASS`** in `.env` — until it is set, the forms cannot deliver.

## Imagery

Photography is stood in for by hand-built SVG compositions in
`src/components/patterns.js` (`<ArtPanel>`, `<ArtFrame>`, `<HeroField>`). They
are weightless and theme-consistent; swap any of them for a `next/image` once
real facility photography exists — the surrounding layout does not change.
