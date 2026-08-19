import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActions } from "@/components/floating-actions";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — E-Waste, Battery & Metal Scrap Recycling in India`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDesc,
  applicationName: site.name,
  keywords: [
    "scrap dealer Mumbai",
    "e-waste recycling India",
    "lithium ion battery recycling",
    "metal scrap buyer",
    "EPR compliance e-waste",
    "CPCB authorised recycler",
    "industrial scrap dismantling",
    "secure data destruction India",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Responsible Recycling, Honest Rates`,
    description: site.shortDesc,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Responsible Recycling, Honest Rates`,
    description: site.shortDesc,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Waste Management & Recycling",
};

export const viewport = {
  themeColor: "#0B3327",
  colorScheme: "light",
};

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.shortDesc,
    foundingDate: String(site.founded),
    email: site.emails[0].value,
    telephone: site.phones[0].value,
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.lines.slice(0, -1).join(", "),
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    })),
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.tel,
      contactType: p.label,
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    })),
    sameAs: site.socials.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <head>
        {/* Without JS the IntersectionObserver never runs, so unhide reveal targets. */}
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-cream">
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
