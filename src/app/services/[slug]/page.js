import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/data/services";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtFrame } from "@/components/patterns";
import { QuoteForm } from "@/components/quote-form";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  GoldRule,
  CheckList,
} from "@/components/ui";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} · ${site.name}`,
      description: service.short,
      url: `/services/${service.slug}`,
    },
  };
}

const artMap = {
  "e-waste-recycling": "circuit",
  "battery-recycling": "orbit",
  "metal-scrap": "stack",
  "industrial-scrap": "flow",
  "data-destruction": "grid",
  "epr-compliance": "strata",
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.turnaround}
        title={service.title}
        lead={service.hero}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/services" },
          { label: service.title },
        ]}
        art={artMap[slug] ?? "grid"}
      >
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/quote" variant="gold">
            Get a quote
          </Button>
          <Button href={`tel:${site.phones[0].tel}`} variant="ghostLight" icon="phone">
            {site.phones[0].value}
          </Button>
        </div>
      </PageHero>

      {/* Highlights + accepted material */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading eyebrow="What you get" title="How we run this stream." />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-8">
                <CheckList items={service.highlights} />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 flex items-center gap-6 border border-stone bg-white p-7">
                <span className="font-display text-4xl text-forest-800">{service.stat.value}</span>
                <span className="text-[0.86rem] leading-snug text-muted">
                  {service.stat.label}
                  <span className="mt-1 block text-[0.76rem] text-muted/70">
                    Audited figure, FY 2024-25
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={60}>
              <div className="border border-stone bg-sand p-8 sm:p-10">
                <Eyebrow>What we accept</Eyebrow>
                <h3 className="mt-4 font-display text-xl text-forest-950">
                  Material handled under this stream
                </h3>
                <GoldRule className="my-6" />
                <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {service.accepts.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-slate-ink">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <GoldRule className="my-6" />
                <p className="text-[0.85rem] leading-relaxed text-muted">
                  Something not on the list? Ask anyway — we handle over 200 grades and can usually
                  take the whole lot so you are not left with a remainder.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Steps */}
      <Section tone="forest">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Step by step"
              title={`How ${service.title.toLowerCase()} actually runs.`}
              lead="Every step below produces a document. Ask for any of them at any point and it will be with you the same day."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <div className="flex h-full flex-col bg-forest-900 p-7">
                  <span className="font-display text-2xl text-brass-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-[1.12rem] leading-snug text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-forest-100/60">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Visual + FAQ */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <Reveal>
              <ArtFrame
                variant={artMap[slug] ?? "grid"}
                ratio="aspect-[4/5]"
                caption={`${service.title} · Taloja facility`}
              />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <SectionHeading eyebrow="Questions" title="What clients ask about this service." />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-8">
                <Accordion items={service.faqs} />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12 border border-stone bg-white p-8 sm:p-10">
                <Eyebrow>Start here</Eyebrow>
                <h3 className="mt-4 font-display text-2xl text-forest-950">
                  Request a valuation for {service.title.toLowerCase()}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
                  Same-day written figure, no obligation to proceed.
                </p>
                <div className="mt-8">
                  <QuoteForm compact />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section tone="sand" className="py-16 sm:py-20">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="Related" title="Other things we handle." />
              <Button href="/services" variant="outline" className="shrink-0">
                All solutions
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col bg-cream p-7 transition-colors duration-400 hover:bg-forest-900"
                >
                  <Icon
                    name={s.icon}
                    className="h-6 w-6 text-forest-800 transition-colors duration-400 group-hover:text-brass-400"
                  />
                  <h3 className="mt-5 font-display text-[1.2rem] text-forest-950 transition-colors duration-400 group-hover:text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-muted transition-colors duration-400 group-hover:text-forest-100/60">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brass-600 transition-colors duration-400 group-hover:text-brass-400">
                    Learn more
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
