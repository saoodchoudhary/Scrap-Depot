import Link from "next/link";
import { policies } from "@/data/content";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Section, SectionHeading, Eyebrow, GoldRule, Button } from "@/components/ui";

export const metadata = {
  title: "Policies",
  description:
    "Privacy, environmental, health & safety, e-waste and terms-of-use policies governing how Scrap Depot operates and handles the material and data entrusted to us.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Our policies, in plain language."
        lead="Written to be read rather than to be filed. If anything here is unclear, our compliance desk will walk you through it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Policies" }]}
        art="grid"
      />

      <Section tone="cream">
        <div className="shell grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/policies/${p.slug}`}
                className="group flex h-full flex-col bg-cream p-8 transition-colors duration-400 hover:bg-forest-900"
              >
                <Icon
                  name="document"
                  className="h-6 w-6 text-forest-800 transition-colors duration-400 group-hover:text-brass-400"
                />
                <h2 className="mt-6 font-display text-[1.3rem] text-forest-950 transition-colors duration-400 group-hover:text-cream">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted transition-colors duration-400 group-hover:text-forest-100/60">
                  {p.summary}
                </p>
                <span className="mt-6 flex items-center justify-between border-t border-stone pt-5 transition-colors duration-400 group-hover:border-cream/12">
                  <span className="text-[0.72rem] uppercase tracking-[0.14em] text-muted transition-colors duration-400 group-hover:text-forest-100/50">
                    Updated {p.updated}
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 text-forest-800 transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass-400"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand" className="py-16 sm:py-20">
        <div className="shell">
          <Reveal>
            <div className="border border-stone bg-cream p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
                <div>
                  <Eyebrow>Registrations</Eyebrow>
                  <h2 className="mt-4 font-display text-2xl text-forest-950">
                    {site.legalName}
                  </h2>
                  <GoldRule className="my-6" />
                  <dl className="grid gap-4 sm:grid-cols-2">
                    {site.registrations.map((r) => (
                      <div key={r.label}>
                        <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          {r.label}
                        </dt>
                        <dd className="mt-1 font-mono text-[0.88rem] text-forest-900">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <Button href="/contact" variant="primary" className="shrink-0">
                  Request certificates
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Compliance desk"
        title="Need something specific for your audit file?"
        lead="Consent to operate, CPCB authorisation, insurance certificates, ISO certificates or a signed policy acknowledgement — tell us what your auditor asked for and we will send it."
        primary={{ label: "Contact compliance", href: "/contact" }}
      />
    </>
  );
}
