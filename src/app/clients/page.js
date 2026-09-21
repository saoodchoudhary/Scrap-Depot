import { clientSectors, clientLogos, testimonials, impactStats } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { LogoMarquee } from "@/components/marquee";
import { TestimonialCarousel } from "@/components/testimonials";
import { ArtPanel } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Button, Badge, GoldRule } from "@/components/ui";

export const metadata = {
  title: "Clients",
  description:
    "375+ corporate accounts across IT, automotive, pharma, banking, manufacturing and telecom — with 81% of annual tonnage coming from relationships three years or older.",
  alternates: { canonical: "/clients" },
};

const caseStudies = [
  {
    sector: "Data Centres",
    title: "Three floors decommissioned during a live relocation",
    body: "A Mumbai colocation provider moved premises over six weekends without downtime. We inventoried 1,840 assets against their fixed-asset register, shredded 612 drives on site under CCTV, and closed the paperwork before the new floor went live.",
    metrics: [
      { v: "1,840", l: "Assets inventoried" },
      { v: "612", l: "Drives destroyed on site" },
      { v: "0", l: "Days of downtime" },
    ],
  },
  {
    sector: "Manufacturing",
    title: "Three quarters of missed EPR targets, regularised",
    body: "An appliance manufacturer engaged us with a significant e-waste EPR shortfall and an open MPCB query. We rebuilt the filing history, closed the gap with genuine processed tonnage, and sat with their team through the reconciliation.",
    metrics: [
      { v: "3", l: "Quarters regularised" },
      { v: "412 MT", l: "E-waste tonnage processed" },
      { v: "Nil", l: "Penalty levied" },
    ],
  },
  {
    sector: "Food Processing",
    title: "A packaging line removed across two shutdown weekends",
    body: "Dismantling inside an operating FMCG plant, working only during scheduled shutdowns. Isolation certificates, hot-work permits and a dedicated safety officer throughout — with a swept bay handed back on the Monday morning.",
    metrics: [
      { v: "186 MT", l: "Material recovered" },
      { v: "2", l: "Shutdown weekends" },
      { v: "0", l: "Lost-time incidents" },
    ],
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="375 organisations. 81% repeat tonnage."
        lead="We do not win accounts on rate alone, and we do not keep them that way either. Most of our volume comes from relationships that are older than three years."
        crumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
        art="grid"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {["14 industries", "21 states", "140+ channel partners"].map((b) => (
            <Badge key={b} tone="light">
              {b}
            </Badge>
          ))}
        </div>
      </PageHero>

      {/* Logos */}
      <div className="border-b border-stone bg-cream py-12">
        <div className="shell">
          <p className="mb-8 text-center text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted">
            A selection of the organisations we work with
          </p>
          <LogoMarquee items={clientLogos} />
        </div>
      </div>

      {/* Sectors */}
      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Six sectors, each with its own discipline."
              lead="A pharma clearance and a data-centre refresh look nothing alike. What stays constant is the weighment protocol and the certificate at the end."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
            {clientSectors.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="h-full bg-cream p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[1.25rem] text-forest-950">{s.name}</h3>
                    <span className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-brass-600">
                      {s.count}
                    </span>
                  </div>
                  <GoldRule className="my-5" />
                  <p className="text-[0.9rem] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Case notes"
              title="Three jobs that were harder than they looked."
            />
          </Reveal>

          <div className="mt-14 space-y-10">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article className="grid gap-8 border border-stone bg-cream p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14 lg:p-10">
                  <div>
                    <Eyebrow>{c.sector}</Eyebrow>
                    <h3 className="mt-4 font-display text-[1.5rem] leading-snug text-forest-950">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{c.body}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 border-t border-stone pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-2xl text-forest-800">{m.v}</div>
                        <div className="mt-1.5 text-[0.74rem] leading-snug text-muted">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-24">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <ArtPanel variant="orbit" ratio="" className="h-full w-full" />
        </div>
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="In their words"
                title="What clients actually say."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 grid grid-cols-2 gap-8">
                {impactStats.slice(1, 3).map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl text-gold-gradient">
                      {s.value.toLocaleString("en-IN")}
                      {s.suffix}
                    </div>
                    <div className="mt-2 text-[0.8rem] text-forest-100/55">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <TestimonialCarousel items={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* Onboarding */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Becoming a client"
              title="Four steps, usually inside a fortnight."
            />
            <div className="mt-9 space-y-7">
              {[
                { t: "Discovery call", b: "Twenty minutes on what you generate, how often, and what your compliance team needs from it." },
                { t: "Trial lifting", b: "One consignment on our standard terms so you can see the weighment, payment and paperwork first-hand." },
                { t: "Rate contract", b: "A fixed-tenure contract with the grading basis, revision mechanism and service levels written in." },
                { t: "Scheduled cadence", b: "Monthly or quarterly liftings with consolidated reporting and quarterly ESG statements." },
              ].map((s, i) => (
                <div key={s.t} className="flex gap-5">
                  <span className="font-display text-xl text-brass-500">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-[1.15rem] text-forest-950">{s.t}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Start with a call
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border border-stone bg-white p-8 sm:p-10">
              <Eyebrow>What we need from you</Eyebrow>
              <GoldRule className="my-6" />
              <ul className="space-y-4">
                {[
                  "A rough idea of monthly or annual volumes by material",
                  "Your GST registration details for invoicing",
                  "A named site contact for pickup co-ordination",
                  "Your infosec policy, if data-bearing media is involved",
                  "Any EPR registration numbers, if compliance support is needed",
                ].map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brass-600" strokeWidth={2.2} />
                    <span className="text-[0.92rem] leading-relaxed text-slate-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <GoldRule className="my-6" />
              <p className="text-[0.85rem] leading-relaxed text-muted">
                That is genuinely all. Everything else — e-way bills, manifests, certificates — is
                generated at our end.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
