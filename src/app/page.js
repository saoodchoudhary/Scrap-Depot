import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import {
  impactStats,
  secondaryStats,
  advantages,
  processSteps,
  certifications,
  clientLogos,
  testimonials,
  posts,
  homeFaqs,
  facilities,
} from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Accordion } from "@/components/accordion";
import { TestimonialCarousel } from "@/components/testimonials";
import { LogoMarquee } from "@/components/marquee";
import { CtaBand } from "@/components/cta-band";
import { HeroField, ArtFrame, ArtPanel } from "@/components/patterns";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  Badge,
  GoldRule,
  CornerFrame,
  CheckList,
} from "@/components/ui";

export const metadata = {
  title: "Scrap Depot — E-Waste, Lamp & Metal Scrap Recycling in India",
  description:
    "MPCB-authorised R4 recycler in Mumbai. Transparent weigh-and-pay rates, pickup in 24–48 hours, lamp recycling, office dismantling and audit-ready EPR compliance across 21 states.",
  alternates: { canonical: "/" },
};

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden bg-forest-950 text-cream">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <HeroField />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/85 to-transparent"
        aria-hidden
      />

      <div className="shell relative pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="light">MPCB Authorised R4 Recycler · Since 2011</Eyebrow>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 max-w-[19ch] text-[length:var(--text-hero)] leading-[1.04] text-cream">
              Scrap deserves a{" "}
              <span className="text-gold-gradient italic">better ending</span>{" "}
              than the kabaadi down the road.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-forest-100/72 sm:text-[1.08rem]">
              We buy, collect and genuinely recycle e-waste, lamps and industrial metal — weighed
              in front of you, paid within 24 hours, and documented well enough to survive an
              audit.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button href="/quote" variant="gold">
                Get a free quote
              </Button>
              <Button href={`tel:${site.phones[0].tel}`} variant="ghostLight" icon="phone">
                {site.phones[0].value}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {["ISO 9001 · 14001 · 45001", "Zero landfill policy", "NIST 800-88 data destruction"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2.5 text-[0.82rem] text-forest-100/60">
                    <Icon name="check" className="h-3.5 w-3.5 text-brass-500" strokeWidth={2.2} />
                    {item}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        {/* Floating stat card */}
        <Reveal delay={380} className="mt-16 lg:absolute lg:right-8 lg:top-28 lg:mt-0 lg:w-[19rem] xl:right-12">
          <div className="relative border border-brass-500/25 bg-forest-950/70 p-7 backdrop-blur-md">
            <CornerFrame className="inset-0" />
            <div className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-brass-500">
              Live impact
            </div>
            <div className="mt-6 space-y-6">
              {impactStats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-1.5 font-display text-3xl text-cream">
                    <Counter value={s.value} suffix={s.suffix} />
                    {s.unit ? <span className="text-base text-brass-400">{s.unit}</span> : null}
                  </div>
                  <div className="mt-1 text-[0.78rem] text-forest-100/55">{s.label}</div>
                </div>
              ))}
            </div>
            <GoldRule className="mt-7" />
            <Link
              href="/sustainability"
              className="group mt-5 flex items-center justify-between text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-brass-400"
            >
              Full impact report
              <Icon
                name="arrowUpRight"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Bottom quick-action rail */}
      <div className="relative border-t border-cream/10 bg-ink/60 backdrop-blur-sm">
        <div className="shell grid divide-cream/8 sm:grid-cols-3 sm:divide-x">
          {[
            { icon: "scale", title: "Weigh & Pay", body: "Calibrated bridge, joint slip, 24-hour RTGS." },
            { icon: "truck", title: "Fast Pickup", body: "Own fleet of 34 vehicles, 24–48 hour response." },
            { icon: "document", title: "Full Paperwork", body: "Invoice, e-way bill and recycling certificate." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass-500/30 text-brass-400">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.86rem] font-semibold uppercase tracking-[0.12em] text-cream">
                  {item.title}
                </span>
                <span className="mt-1 block text-[0.85rem] text-forest-100/55">{item.body}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Clients */

function TrustStrip() {
  return (
    <div className="border-b border-stone bg-cream py-10">
      <div className="shell">
        <p className="mb-7 text-center text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted">
          Trusted by 375+ organisations across 14 industries
        </p>
        <LogoMarquee items={clientLogos} />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- About */

function AboutPreview() {
  return (
    <Section tone="cream">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <ArtFrame variant="stack" caption="Taloja Recovery Plant · 3.5 acres" ratio="aspect-[5/4]" />
            <div className="absolute -bottom-8 -right-4 hidden w-52 border border-brass-500/30 bg-cream p-6 shadow-[0_24px_60px_-30px_rgba(7,26,19,.5)] sm:block lg:-right-10">
              <div className="font-display text-4xl text-forest-800">15</div>
              <div className="mt-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Years in the yard
              </div>
              <GoldRule className="my-4" />
              <p className="text-[0.8rem] leading-relaxed text-muted">
                From two vehicles in Sakinaka to a licensed recovery plant.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A recycler that behaves like a manufacturer."
              lead="Scrap Depot started in 2011 with two tempos and a simple frustration: material was leaving factories with no record of where it went or what it was worth. We built the opposite of that."
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
              Today we run a 3.5-acre licensed facility in Taloja with dedicated e-waste dismantling,
              mechanical separation and lamp recycling lines — plus an in-house assay lab that tells you
              what your material actually contains rather than what a rate card assumes.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9">
              <CheckList
                items={[
                  "Every consignment weighed on a licensed bridge, countersigned by your representative",
                  "Zero landfill — residues consigned to authorised co-processing against Form-10",
                  "In-house processing, so EPR certificates trace back to real tonnage",
                  "Fifteen years without a single reported data incident",
                ]}
              />
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <Button href="/about" variant="primary">
                Our story
              </Button>
              <Button href="/infrastructure" variant="outline">
                See the plant
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- Solutions */

function Solutions() {
  return (
    <Section tone="sand">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Seven streams, one accountable vendor."
              lead="Most clients start with one line and consolidate the rest within a year — because a single weighment protocol and a single set of certificates is worth more than a marginally better rate."
            />
            <Button href="/services" variant="outline" className="shrink-0">
              All solutions
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col bg-cream p-8 transition-colors duration-400 hover:bg-forest-900 lg:p-9"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-forest-800/20 text-forest-800 transition-all duration-400 group-hover:border-brass-500/50 group-hover:text-brass-400">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>

                <h3 className="mt-7 font-display text-[1.4rem] leading-snug text-forest-950 transition-colors duration-400 group-hover:text-cream">
                  {service.title}
                </h3>
                <p className="mt-3.5 flex-1 text-[0.92rem] leading-relaxed text-muted transition-colors duration-400 group-hover:text-forest-100/65">
                  {service.short}
                </p>

                <span className="mt-7 flex items-center justify-between border-t border-stone pt-5 transition-colors duration-400 group-hover:border-cream/12">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brass-600 transition-colors duration-400 group-hover:text-brass-400">
                    {service.turnaround}
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 text-forest-800 transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass-400"
                  />
                </span>
              </Link>
            </Reveal>
          ))}

          {/* Fills the grid to a clean 9 cells on desktop, 8 on tablet. */}
          <Reveal delay={services.length * 60} className="lg:col-span-2">
            <Link
              href="/quote"
              className="group flex h-full flex-col justify-center bg-forest-900 p-8 transition-colors duration-400 hover:bg-forest-800 lg:p-9"
            >
              <Eyebrow tone="light">Not sure which one?</Eyebrow>
              <h3 className="mt-5 max-w-md font-display text-[1.5rem] leading-snug text-cream">
                Send us photographs and we will tell you what it is and what it is worth.
              </h3>
              <span className="mt-7 inline-flex items-center gap-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-brass-400">
                Get a free valuation
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ Advantages */

function Advantages() {
  return (
    <Section tone="cream">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why Scrap Depot"
              title="The four things clients say made them switch."
              lead="None of them are about rate. Rate is where a relationship starts; it is almost never why one lasts."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <ArtFrame variant="circuit" ratio="aspect-[16/10]" caption="Dismantling line · manual sort bay" />
            </div>
          </Reveal>
        </div>

        <div className="divide-y divide-stone">
          {advantages.map((adv, i) => (
            <Reveal key={adv.no} delay={i * 70}>
              <div className="group flex gap-6 py-9 first:pt-0 sm:gap-9">
                <div className="shrink-0">
                  <span className="font-display text-[2.6rem] leading-none text-stone transition-colors duration-400 group-hover:text-brass-400">
                    {adv.no}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon name={adv.icon} className="h-5 w-5 text-brass-600" />
                    <h3 className="font-display text-[1.35rem] text-forest-950">{adv.title}</h3>
                  </div>
                  <p className="mt-3.5 max-w-xl text-[0.95rem] leading-relaxed text-muted">{adv.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- Impact */

function Impact() {
  return (
    <section className="grain relative isolate overflow-hidden bg-forest-900 py-20 text-cream sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
        <ArtPanel variant="grid" ratio="" className="h-full w-full" />
      </div>

      <div className="shell">
        <Reveal>
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Measured, not claimed"
            title="What fifteen years of doing this properly adds up to."
            lead="Figures below are drawn from weighbridge records and our FY 2024-25 audited environmental statement."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="relative text-center sm:text-left">
                <div className="flex items-baseline justify-center gap-2 font-display text-5xl leading-none sm:justify-start">
                  <span className="text-gold-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  {s.unit ? <span className="text-xl text-brass-400/80">{s.unit}</span> : null}
                </div>
                <div className="mt-4 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream/90">
                  {s.label}
                </div>
                <div className="mt-1.5 text-[0.82rem] text-forest-100/50">{s.note}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16">
            <GoldRule />
            <div className="grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-4">
              {secondaryStats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-display text-2xl text-cream">{s.value}</div>
                  <div className="mt-1.5 text-[0.82rem] text-forest-100/55">{s.label}</div>
                </div>
              ))}
            </div>
            <GoldRule />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Process */

function Process() {
  return (
    <Section tone="cream">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From first phone call to final certificate."
            lead="Six steps, each with a document attached to it. You always know where your material is and what it is worth."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.no} delay={i * 60}>
              <div className="group relative h-full bg-cream p-8 transition-colors duration-400 hover:bg-white lg:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[2.4rem] leading-none text-brass-400/60 transition-colors duration-400 group-hover:text-brass-500">
                    {step.no}
                  </span>
                  <span className="h-px flex-1 bg-stone ml-5" aria-hidden />
                </div>

                <h3 className="mt-6 font-display text-[1.3rem] text-forest-950">{step.title}</h3>
                <p className="mt-3.5 text-[0.92rem] leading-relaxed text-muted">{step.body}</p>

                <ul className="mt-6 space-y-2">
                  {step.detail.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-[0.82rem] text-forest-800">
                      <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-brass-600" strokeWidth={2.2} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-12 text-center">
            <Button href="/process" variant="outline">
              See the full process
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- Materials */

function MaterialsPreview() {
  const groups = [
    { name: "Non-Ferrous", items: ["Copper", "Brass", "Aluminium", "Lead", "Zinc"], icon: "ingot" },
    { name: "Ferrous", items: ["HMS 1 & 2", "Turnings", "Cast iron", "SS 304 / 316", "Structural"], icon: "factory" },
    { name: "E-Waste", items: ["Server boards", "Laptops", "Monitors", "RAM & CPUs", "SMPS"], icon: "chip" },
    { name: "Lamps & Lighting", items: ["Fluorescent tubes", "CFL & PL lamps", "HID & sodium", "LED fittings", "Ballasts & chokes"], icon: "lamp" },
  ];

  return (
    <Section tone="sand">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="What we buy"
              title="Bring us anything with metal in it."
              lead="Over 200 grades across five streams, priced against LME and domestic indices and revised every morning. Rates are published — you should not have to ask what your material is worth."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/materials" variant="primary">
                View rate card
              </Button>
              <Button href="/quote" variant="outline">
                Get a firm quote
              </Button>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex items-start gap-3 border-l-2 border-brass-500 pl-5">
              <p className="text-[0.88rem] leading-relaxed text-muted">
                <span className="font-semibold text-forest-900">Not sure what you have?</span>{" "}
                Send photographs on WhatsApp. Our desk grades from images every day and comes back
                with a written figure the same afternoon.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 70}>
              <div className="h-full bg-cream p-7">
                <div className="flex items-center gap-3">
                  <Icon name={g.icon} className="h-5 w-5 text-brass-600" />
                  <h3 className="font-display text-lg text-forest-950">{g.name}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.88rem] text-muted">
                      <span className="h-1 w-1 rounded-full bg-brass-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------- Infra + certification */

function InfraAndCerts() {
  return (
    <Section tone="cream">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Infrastructure"
              title="Capacity you can walk through."
              lead="Clients audit us regularly, and we prefer it that way. The plant is open to any account that wants to see where their material actually goes."
            />
            <Button href="/infrastructure" variant="outline" className="shrink-0">
              Plan a visit
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <ArtFrame variant="strata" caption="Mechanical separation · 6 MT per hour" ratio="aspect-[16/11]" />
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-1">
            {facilities.slice(0, 3).map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <div className="flex h-full flex-col justify-center bg-cream p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[1.15rem] text-forest-950">{f.name}</h3>
                    <span className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brass-600">
                      {f.capacity}
                    </span>
                  </div>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-16 border border-stone bg-white p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
              <div className="lg:w-64 lg:shrink-0">
                <Eyebrow>Compliance</Eyebrow>
                <h3 className="mt-4 font-display text-xl leading-snug text-forest-950">
                  Certified, audited and registered
                </h3>
              </div>

              <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((c) => (
                  <div key={c.code} className="flex gap-3.5">
                    <Icon name="certificate" className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                    <div>
                      <div className="text-[0.9rem] font-semibold text-forest-950">{c.code}</div>
                      <div className="mt-0.5 text-[0.8rem] text-muted">{c.label}</div>
                      <div className="mt-0.5 text-[0.74rem] text-muted/70">{c.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- Testimonials */

function Voices() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-35" aria-hidden>
        <ArtPanel variant="orbit" ratio="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink via-ink/90 to-ink/70" aria-hidden />

      <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="In their words"
              title="Fifteen years of repeat business."
              lead="Eighty-one percent of our tonnage last year came from accounts we have held for three years or longer."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Badge tone="light">375+ accounts</Badge>
              <Badge tone="light">14 industries</Badge>
              <Badge tone="light">21 states</Badge>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10">
              <Button href="/clients" variant="ghostLight">
                Who we work with
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <TestimonialCarousel items={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Insights */

function Insights() {
  const featured = posts.slice(0, 3);

  return (
    <Section tone="cream">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Resources"
              title="Notes from the yard."
              lead="Practical writing on compliance, grading and safety — the things we get asked about most often."
            />
            <Button href="/resources" variant="outline" className="shrink-0">
              All insights
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link href={`/resources/${post.slug}`} className="group flex h-full flex-col">
                <div className="relative overflow-hidden">
                  <ArtPanel
                    variant={["circuit", "flow", "grid"][i % 3]}
                    ratio="aspect-[16/10]"
                    className="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                    {post.category}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3 text-[0.74rem] uppercase tracking-[0.14em] text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="h-1 w-1 rounded-full bg-brass-500" aria-hidden />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-3.5 font-display text-[1.28rem] leading-snug text-forest-950 transition-colors duration-300 group-hover:text-brass-600">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted">{post.excerpt}</p>

                <span className="mt-5 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                  Read article
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ FAQs */

function Faq() {
  return (
    <Section tone="sand">
      <div className="shell grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="The things people ask before they call."
              lead="Still unsure about something? Our desk answers the phone between 9:30 and 7, six days a week."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/contact" variant="primary">
                Talk to us
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <Accordion items={homeFaqs} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ Page */

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <Solutions />
      <Advantages />
      <Impact />
      <Process />
      <MaterialsPreview />
      <InfraAndCerts />
      <Voices />
      <Insights />
      <Faq />
      <CtaBand />
    </>
  );
}
