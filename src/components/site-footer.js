import Link from "next/link";
import { site, footerNav } from "@/data/site";
import { certifications } from "@/data/content";
import { Icon } from "./icons";
import { LogoMark } from "./logo";
import { GoldRule } from "./ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative bg-ink text-cream">
      {/* Offices strip */}
      <div className="border-b border-cream/10">
        <div className="shell grid gap-px overflow-hidden md:grid-cols-3">
          {site.offices.map((office) => (
            <div key={office.name} className="relative px-1 py-10 md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="hidden md:absolute md:inset-y-8 md:left-0 md:block md:w-px md:bg-cream/10 md:first:hidden" aria-hidden />
              <div className="flex items-center gap-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-brass-500">
                <Icon name="pin" className="h-3.5 w-3.5" />
                {office.type}
              </div>
              <h3 className="mt-3 font-display text-lg text-cream">{office.name}</h3>
              <address className="mt-2.5 space-y-0.5 text-[0.88rem] not-italic leading-relaxed text-forest-100/60">
                {office.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              <a
                href={`tel:${office.tel}`}
                className="mt-3 inline-flex items-center gap-2 text-[0.88rem] text-brass-300 transition-colors hover:text-brass-200"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {office.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:gap-10 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12 text-cream" />
            <div className="leading-none">
              <div className="font-display text-2xl">
                Scrap<span className="text-brass-500"> Depot</span>
              </div>
              <div className="mt-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.34em] text-forest-100/50">
                Recycling · Since 2011
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-forest-100/60">
            {site.shortDesc}
          </p>

          <div className="mt-7">
            <div className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-brass-500">
              Talk to us
            </div>
            <div className="mt-3 space-y-2">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-2.5 text-[0.95rem] text-cream/85 transition-colors hover:text-brass-300"
                >
                  <Icon name="phone" className="h-4 w-4 text-brass-500" />
                  {p.value}
                  <span className="text-[0.75rem] text-forest-100/40">— {p.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${site.emails[0].value}`}
                className="flex items-center gap-2.5 text-[0.95rem] text-cream/85 transition-colors hover:text-brass-300"
              >
                <Icon name="mail" className="h-4 w-4 text-brass-500" />
                {site.emails[0].value}
              </a>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-forest-100/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass-500 hover:text-brass-400"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerNav.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brass-500">
              {col.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[0.92rem] text-forest-100/65 transition-colors hover:text-brass-300"
                  >
                    <span className="h-px w-0 bg-brass-500 transition-all duration-300 group-hover:w-3.5" aria-hidden />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Certifications ribbon */}
      <div className="shell">
        <GoldRule />
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-7">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-forest-100/40">
            Certified &amp; authorised
          </span>
          {certifications.map((c) => (
            <span
              key={c.code}
              className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-forest-100/65"
            >
              {c.code}
            </span>
          ))}
        </div>
        <GoldRule />
      </div>

      {/* Legal bar */}
      <div className="shell flex flex-col gap-5 py-8 text-[0.78rem] text-forest-100/45 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>© {year} {site.legalName}. All rights reserved.</span>
          {site.registrations.slice(0, 2).map((r) => (
            <span key={r.label} className="hidden sm:inline">
              {r.label}: <span className="text-forest-100/60">{r.value}</span>
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/policies/privacy-policy" className="link-underline transition-colors hover:text-brass-300">
            Privacy
          </Link>
          <Link href="/policies/terms-of-use" className="link-underline transition-colors hover:text-brass-300">
            Terms
          </Link>
          <Link href="/policies/environmental-policy" className="link-underline transition-colors hover:text-brass-300">
            Environmental
          </Link>
          <Link href="/sitemap.xml" className="link-underline transition-colors hover:text-brass-300">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
