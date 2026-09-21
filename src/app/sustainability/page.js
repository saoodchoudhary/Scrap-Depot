import { impactStats, secondaryStats, certifications } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtFrame, ArtPanel } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Button, GoldRule, CheckList } from "@/components/ui";

export const metadata = {
  title: "Sustainability",
  description:
    "Zero-landfill processing, 2,40,000 MT of CO₂e avoided, and quarterly ESG impact statements per account. How Scrap Depot measures and reports environmental performance.",
  alternates: { canonical: "/sustainability" },
};

const pillars = [
  {
    icon: "recycle",
    title: "Recovery over disposal",
    body: "Our operating measure is recovery rate, not tonnage handled. A consignment that arrives and leaves as residue is a failure regardless of what we paid for it.",
    metric: "94.6% average recovery",
  },
  {
    icon: "leaf",
    title: "Zero landfill, verified",
    body: "No processed residue from Taloja goes to landfill. Non-recoverable fractions are consigned to authorised co-processing against Form-10 manifests, and the tonnage is published annually.",
    metric: "0 MT to landfill, FY 2024-25",
  },
  {
    icon: "factory",
    title: "Closed-loop water & air",
    body: "Dust-generating operations are enclosed and vented through bag filters. Process water is treated and recirculated — there is no process discharge to the municipal drain.",
    metric: "96% water recirculation",
  },
  {
    icon: "certificate",
    title: "Reported, not asserted",
    body: "Every account receives a quarterly statement of tonnage processed, materials recovered and CO₂e avoided, drawn from weighbridge records rather than estimates.",
    metric: "375 accounts reported quarterly",
  },
];

const sdgs = [
  { no: "SDG 8", title: "Decent Work", body: "Formal employment, ESIC cover and certified training for 214 people who would otherwise be in the informal chain." },
  { no: "SDG 11", title: "Sustainable Cities", body: "12,000+ collection touchpoints diverting household and office e-waste from municipal streams." },
  { no: "SDG 12", title: "Responsible Consumption", body: "Secondary raw material returned to Indian manufacturers with a documented mass balance." },
  { no: "SDG 13", title: "Climate Action", body: "2,40,000 MT CO₂e avoided against primary production baselines for the same material." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Impact you can reconcile to a weighbridge."
        lead="Every environmental figure on this page traces back to a physical weight record. We would rather publish a smaller number that survives scrutiny than a larger one that does not."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
        art="orbit"
      />

      {/* Headline impact */}
      <Section tone="forest">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="FY 2024-25"
              title="The year in numbers."
              lead="Audited environmental statement, filed with the Maharashtra Pollution Control Board."
            />
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="text-center sm:text-left">
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
      </Section>

      {/* Pillars */}
      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="How we operate"
              title="Four commitments that shape the plant."
              lead="These are operating constraints rather than aspirations — they decide what equipment we buy and which consignments we decline."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full bg-cream p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-13 w-13 items-center justify-center rounded-full border border-forest-800/20 text-forest-800">
                      <Icon name={p.icon} className="h-5.5 w-5.5" />
                    </span>
                    <span className="text-right text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-brass-600">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.35rem] text-forest-950">{p.title}</h3>
                  <p className="mt-3.5 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Circularity explainer */}
      <Section tone="sand">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <ArtFrame variant="orbit" ratio="aspect-[4/3]" caption="Recovery loop · primary vs secondary" />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why it matters"
                title="Secondary metal costs a fraction of the carbon."
                lead="Recovering a tonne of copper from scrap uses roughly 85% less energy than producing it from ore. Aluminium is closer to 95%. That gap is the entire environmental argument for doing this properly."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-9">
                <CheckList
                  items={[
                    "Recycled copper: ~85% lower energy demand than primary production",
                    "Recycled aluminium: ~95% lower energy demand than primary smelting",
                    "Recycled steel: ~70% lower energy demand, no ore extraction",
                    "Recovered lamp glass & phosphor: mercury contained instead of reaching soil and groundwater",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 border-l-2 border-brass-500 pl-6">
                <p className="text-[0.92rem] leading-relaxed text-muted">
                  Which is why an informally handled clearance is not a neutral event. Material burned
                  to strip insulation, or acid-leached in a backyard, loses most of its recoverable
                  value and adds emissions rather than avoiding them.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* SDG alignment */}
      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Alignment"
              title="Where our work maps to the goals."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((s, i) => (
              <Reveal key={s.no} delay={i * 60}>
                <div className="h-full bg-cream p-7">
                  <span className="inline-flex rounded-full bg-forest-800 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream">
                    {s.no}
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] text-forest-950">{s.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Reporting */}
      <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-24">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <ArtPanel variant="grid" ratio="" className="h-full w-full" />
        </div>
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="For your ESG report"
                title="We write the section you have to file."
                lead="Each quarter, every account receives a statement covering tonnage processed by stream, materials recovered, residue routed to co-processing, and CO₂e avoided against primary-production baselines."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <Button href="/contact" variant="gold">
                  Request a sample statement
                </Button>
                <Button href="/services/epr-compliance" variant="ghostLight">
                  EPR compliance
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="border border-brass-500/25 bg-forest-950/60 p-8 backdrop-blur-sm sm:p-10">
              <Eyebrow tone="light">Certified &amp; audited</Eyebrow>
              <GoldRule className="my-6" />
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.code} className="flex items-start gap-3.5">
                    <Icon name="certificate" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brass-500" />
                    <span>
                      <span className="block text-[0.92rem] font-semibold text-cream">{c.code}</span>
                      <span className="mt-0.5 block text-[0.82rem] text-forest-100/55">{c.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Close the loop"
        title="Make your next clearance count for something."
        lead="Same rate discipline, same fast payment — plus a documented environmental outcome you can put in front of your board."
      />
    </>
  );
}
