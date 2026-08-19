import { site } from "@/data/site";
import { milestones, certifications, impactStats, facilities } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtFrame } from "@/components/patterns";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  GoldRule,
  CheckList,
  StatBlock,
} from "@/components/ui";

export const metadata = {
  title: "About Us",
  description:
    "Scrap Depot began in 2011 with two tempos in Sakinaka. Today we run a CPCB-authorised 3.5-acre recovery plant at Taloja serving 375+ corporate accounts across 21 states.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "scale",
    title: "Weigh it honestly",
    body: "Every kilogram is recorded on a licensed bridge with your representative present. If we cannot show you the number being taken, we do not take the material.",
  },
  {
    icon: "recycle",
    title: "Recycle it properly",
    body: "Nothing leaves our custody through an informal route. Residues go to authorised co-processing against a manifest — not to a landfill and not to a back gate.",
  },
  {
    icon: "shield",
    title: "Protect what's on it",
    body: "Data-bearing media is destroyed to a documented standard before it is a raw material. Fifteen years, zero reported incidents, and we intend to keep it that way.",
  },
  {
    icon: "document",
    title: "Write it all down",
    body: "Invoice, e-way bill, weighment slip, recycling certificate, destruction evidence. If it happened, there is a document for it, indexed under one consignment number.",
  },
];

const leadership = [
  {
    name: "Imran Qadri",
    role: "Managing Director",
    bio: "Started the business with two tempos in 2011. Spends more time at Taloja than at head office, which is the correct ratio.",
  },
  {
    name: "Anjali Rao",
    role: "Director — Compliance & EPR",
    bio: "Former SPCB consultant. Built the filing practice that now carries EPR obligations for 375 producers.",
  },
  {
    name: "Suresh Menon",
    role: "Head of Operations",
    bio: "Twenty-two years in non-ferrous trading. Runs the yard, the fleet and the grading discipline behind every quotation.",
  },
  {
    name: "Priya Nair",
    role: "Head of EHS & Quality",
    bio: "Owns the ISO systems, the safety record and the assay laboratory. Holds stop-work authority over every line.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Scrap Depot"
        title="Fifteen years of taking scrap seriously."
        lead="We are a Mumbai-based recycler with a licensed recovery plant, our own fleet, and a stubborn view that material leaving a factory should be measured, documented and genuinely recycled."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        art="strata"
      />

      {/* Story */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="It started because nobody could answer a simple question."
              />
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-muted">
                <p>
                  In 2011 our founder was clearing a textile unit in Bhiwandi and asked the buyer a
                  straightforward question: where does this go after it leaves here? Nobody could
                  answer it. The material was weighed on a bridge nobody had calibrated, paid for in
                  cash nobody would record, and dispersed into a network nobody could trace.
                </p>
                <p>
                  That is still how most scrap moves in India, and it costs sellers twice — once on
                  the rate, and again on the compliance exposure they inherit when the material
                  surfaces somewhere it should not have.
                </p>
                <p>
                  Scrap Depot was built to answer that question every single time. We started with
                  two tempos and a rented shed in Sakinaka, took our first recycling licence in 2014,
                  and commissioned the Taloja plant in 2017. The point was never to be the biggest
                  buyer in the market. It was to be the one that can show you the paperwork.
                </p>
                <p>
                  Today that means a 3.5-acre licensed facility, an in-house assay laboratory, 34
                  vehicles, and a compliance desk that files EPR returns for 375 producers. The
                  question from Bhiwandi still gets asked at every site survey — and now it has an
                  answer with a document number on it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 border-l-2 border-brass-500 pl-6">
                <p className="font-display text-xl italic leading-relaxed text-forest-900">
                  &ldquo;{site.tagline}&rdquo;
                </p>
                <p className="mt-3 text-[0.8rem] uppercase tracking-[0.18em] text-muted">
                  — the line we put on the first vehicle in 2011
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={80}>
              <ArtFrame variant="orbit" ratio="aspect-[4/3]" caption="Taloja · material recovery yard" />
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-stone bg-stone">
                {impactStats.map((s) => (
                  <div key={s.label} className="bg-cream p-6">
                    <div className="flex items-baseline gap-1.5 font-display text-3xl text-forest-800">
                      <Counter value={s.value} suffix={s.suffix} />
                      {s.unit ? <span className="text-sm text-brass-600">{s.unit}</span> : null}
                    </div>
                    <div className="mt-2 text-[0.78rem] leading-snug text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What we hold to"
              title="Four rules that have not changed since the first tempo."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full bg-cream p-8 lg:p-10">
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-forest-800/20 text-forest-800">
                    <Icon name={v.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.35rem] text-forest-950">{v.title}</h3>
                  <p className="mt-3.5 text-[0.95rem] leading-relaxed text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="How the yard grew."
              lead="No funding rounds, no acquisitions. Every expansion was paid for by the previous one."
            />
          </Reveal>

          <div className="relative mt-16">
            <span
              className="absolute left-[7px] top-2 bottom-2 w-px bg-stone md:left-1/2 md:-translate-x-px"
              aria-hidden
            />

            <ol className="space-y-10 md:space-y-0">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 60}>
                  <li
                    className={`relative pl-10 md:flex md:w-1/2 md:flex-col md:pl-0 md:pb-14 ${
                      i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-brass-500 bg-cream md:left-auto ${
                        i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                      }`}
                      aria-hidden
                    />
                    <span className="font-display text-2xl text-brass-600">{m.year}</span>
                    <h3 className="mt-2 font-display text-[1.25rem] text-forest-950">{m.title}</h3>
                    <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">{m.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="forest">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="The people"
              title="Small team, long tenure."
              lead="Between them, the four people who run Scrap Depot have sixty-one years in this industry — and most of them have been here for more than a decade."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div className="h-full bg-forest-900 p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brass-500/40 font-display text-xl text-brass-400">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <h3 className="mt-6 font-display text-[1.2rem] text-cream">{p.name}</h3>
                  <div className="mt-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-brass-500">
                    {p.role}
                  </div>
                  <p className="mt-4 text-[0.88rem] leading-relaxed text-forest-100/60">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Compliance + registrations */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Authorisations"
                title="Everything we claim is on a certificate."
                lead="Copies of every registration below are available on request, and we encourage clients to verify them directly with the issuing authority."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-9 space-y-5">
                {certifications.map((c) => (
                  <div key={c.code} className="flex items-start gap-4 border-b border-stone pb-5">
                    <Icon name="certificate" className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                    <div>
                      <div className="text-[0.95rem] font-semibold text-forest-950">{c.code}</div>
                      <div className="mt-0.5 text-[0.86rem] text-muted">
                        {c.label} · {c.issuer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={80}>
              <div className="border border-stone bg-white p-8 sm:p-10">
                <Eyebrow>Company details</Eyebrow>
                <h3 className="mt-4 font-display text-xl text-forest-950">{site.legalName}</h3>
                <GoldRule className="my-6" />
                <dl className="space-y-4">
                  {site.registrations.map((r) => (
                    <div key={r.label} className="flex flex-wrap items-baseline justify-between gap-3">
                      <dt className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-muted">
                        {r.label}
                      </dt>
                      <dd className="font-mono text-[0.86rem] text-forest-900">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <GoldRule className="my-6" />
                <p className="text-[0.86rem] leading-relaxed text-muted">
                  Registered office at {site.offices[0].lines.join(", ")}.
                </p>
                <div className="mt-7">
                  <Button href="/contact" variant="primary">
                    Request documents
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8">
                <h3 className="font-display text-xl text-forest-950">What the plant runs</h3>
                <div className="mt-5">
                  <CheckList items={facilities.map((f) => `${f.name} — ${f.capacity}`)} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Come and see"
        title="Audit us before you appoint us."
        lead="Bring your EHS team to Taloja. Walk the lines, check the registers, meet the people who will handle your material. We would rather be inspected than described."
        primary={{ label: "Arrange a plant visit", href: "/contact" }}
      />
    </>
  );
}
