import Link from "next/link";
import { services } from "@/data/services";
import { processSteps } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtPanel } from "@/components/patterns";
import { Section, SectionHeading, Button, GoldRule } from "@/components/ui";

export const metadata = {
  title: "Solutions",
  description:
    "E-waste recycling, lamp recycling, metal scrap trading, office dismantling, plant clearance, secure data destruction and EPR compliance — seven streams, one accountable vendor.",
  alternates: { canonical: "/services" },
};

const artFor = ["circuit", "orbit", "stack", "grid", "flow", "strata", "circuit"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Seven streams. One accountable vendor."
        lead="Whether it is a rack of dead servers, a shed full of turnings or an entire production line being taken out, the commitment is the same: honest weight, fast payment, and paperwork that closes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        art="flow"
      />

      <Section tone="cream">
        <div className="shell space-y-24 lg:space-y-32">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                  i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <ArtPanel variant={artFor[i]} ratio="aspect-[5/4]" />
                    <span className="pointer-events-none absolute inset-4 border border-brass-500/25" aria-hidden />
                  </div>
                  <div className="absolute -bottom-6 left-6 flex items-center gap-4 border border-brass-500/30 bg-cream px-6 py-4 shadow-[0_20px_50px_-28px_rgba(7,26,19,.55)]">
                    <span className="font-display text-3xl text-forest-800">{service.stat.value}</span>
                    <span className="max-w-24 text-[0.72rem] leading-snug uppercase tracking-[0.12em] text-muted">
                      {service.stat.label}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-forest-800/20 text-forest-800">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brass-600">
                      0{i + 1} · {service.turnaround}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-[length:var(--text-title)] leading-tight text-forest-950">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-[1rem] leading-relaxed text-muted">{service.hero}</p>

                  <ul className="mt-7 space-y-3">
                    {service.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-3.5 text-[0.92rem] leading-relaxed text-slate-ink">
                        <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-brass-600" strokeWidth={2.2} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap gap-3.5">
                    <Button href={`/services/${service.slug}`} variant="primary">
                      Explore {service.title.split(" ")[0]}
                    </Button>
                    <Button href="/quote" variant="outline">
                      Get a quote
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Shared process */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Common to every stream"
              title="The same six steps, whatever we are collecting."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 60}>
                <div className="flex gap-5">
                  <span className="font-display text-2xl text-brass-400">{step.no}</span>
                  <div>
                    <h3 className="font-display text-[1.15rem] text-forest-950">{step.title}</h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14">
              <GoldRule />
              <div className="flex flex-col items-center gap-5 py-9 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted">
                  Not sure which stream your material falls under? Send photographs — we grade from
                  images every day and come back with a written figure the same afternoon.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-forest-800 px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.13em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700"
                >
                  Send material details
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <GoldRule />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
