import { processSteps, advantages } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtFrame } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Button, GoldRule } from "@/components/ui";

export const metadata = {
  title: "Our Process",
  description:
    "From first enquiry to final recycling certificate — six documented steps covering valuation, site survey, pickup, weighment, processing and compliance reporting.",
  alternates: { canonical: "/process" },
};

const documents = [
  { name: "Written quotation", when: "Same working day", note: "Itemised, with the grading basis and validity printed on it." },
  { name: "Method statement", when: "Before mobilisation", note: "For dismantling projects — scope, hazards, permits and sequence." },
  { name: "Tare weight slip", when: "Before arrival", note: "Vehicle weighed empty on a licensed bridge, timestamped." },
  { name: "Joint weighment slip", when: "At pickup", note: "Countersigned by your representative at the point of loading." },
  { name: "GST invoice & e-way bill", when: "Within 24 hours", note: "Raised against the same consignment number." },
  { name: "Form-6 recycling certificate", when: "Within 7 days", note: "Naming the category, quantity and processing route." },
  { name: "Destruction certificate", when: "Within 7 days", note: "Serial-wise, with timestamped video evidence where applicable." },
  { name: "ESG impact statement", when: "Quarterly", note: "CO₂e avoided and material returned to industry, per account." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Every step leaves a document behind."
        lead="Scrap disappears easily. Our process is built so that it cannot — each stage produces a record you can pull up months later and hand to an auditor without explanation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
        art="flow"
      />

      {/* Detailed steps */}
      <Section tone="cream">
        <div className="shell">
          <div className="space-y-20 lg:space-y-28">
            {processSteps.map((step, i) => (
              <Reveal key={step.no}>
                <article
                  className={`grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 ${
                    i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ArtFrame
                    variant={["flow", "circuit", "stack", "strata", "orbit", "grid"][i]}
                    ratio="aspect-[4/3]"
                    caption={`Step ${step.no} · ${step.title}`}
                  />

                  <div>
                    <div className="flex items-center gap-5">
                      <span className="font-display text-[3.2rem] leading-none text-brass-400/70">
                        {step.no}
                      </span>
                      <span className="h-px flex-1 bg-stone" aria-hidden />
                    </div>

                    <h2 className="mt-6 font-display text-[length:var(--text-title)] leading-tight text-forest-950">
                      {step.title}
                    </h2>
                    <p className="mt-5 text-[1rem] leading-relaxed text-muted">{step.body}</p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {step.detail.map((d) => (
                        <span
                          key={d}
                          className="inline-flex items-center gap-2 rounded-full border border-stone bg-white px-4 py-2 text-[0.78rem] text-forest-800"
                        >
                          <Icon name="check" className="h-3 w-3 text-brass-600" strokeWidth={2.4} />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Document register */}
      <Section tone="forest">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Paper trail"
              title="The eight documents a consignment generates."
              lead="All of them indexed under one consignment number, retrievable for seven years."
            />
          </Reveal>

          <div className="mt-14 overflow-hidden border border-cream/12">
            <div className="hidden grid-cols-[1.2fr_0.8fr_1.5fr] gap-6 border-b border-cream/12 bg-cream/5 px-7 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brass-500 md:grid">
              <span>Document</span>
              <span>Issued</span>
              <span>What it records</span>
            </div>
            <ul className="divide-y divide-cream/10">
              {documents.map((d, i) => (
                <Reveal key={d.name} delay={i * 40}>
                  <li className="grid gap-1.5 px-7 py-5 transition-colors hover:bg-cream/4 md:grid-cols-[1.2fr_0.8fr_1.5fr] md:items-center md:gap-6">
                    <span className="font-display text-[1.05rem] text-cream">{d.name}</span>
                    <span className="text-[0.8rem] uppercase tracking-[0.12em] text-brass-400">{d.when}</span>
                    <span className="text-[0.88rem] leading-relaxed text-forest-100/60">{d.note}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Guarantees */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our commitments"
                title="What we hold ourselves to, in writing."
                lead="These four appear in every contract we sign. If we miss one, the remedy is written in as well."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-9">
                <Button href="/quote" variant="primary">
                  Start an enquiry
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="divide-y divide-stone">
            {advantages.map((a, i) => (
              <Reveal key={a.no} delay={i * 60}>
                <div className="flex gap-6 py-8 first:pt-0">
                  <Icon name={a.icon} className="mt-1 h-6 w-6 shrink-0 text-brass-600" />
                  <div>
                    <h3 className="font-display text-[1.3rem] text-forest-950">{a.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand" className="py-16 sm:py-20">
        <div className="shell">
          <Reveal>
            <div className="border border-brass-500/30 bg-white p-9 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
                <div>
                  <Eyebrow>First time selling scrap formally?</Eyebrow>
                  <h2 className="mt-4 font-display text-2xl leading-snug text-forest-950">
                    We will walk your team through it once, and you will never need us to again.
                  </h2>
                  <GoldRule className="my-6" />
                  <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                    Many of our accounts came from informal arrangements and were nervous about the
                    paperwork. In practice it is one slip at pickup and one invoice afterwards — the
                    rest we generate and file for you.
                  </p>
                </div>
                <Button href="/contact" variant="primary" className="shrink-0">
                  Book a walkthrough
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
