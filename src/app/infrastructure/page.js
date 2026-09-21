import { facilities, certifications } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtFrame, ArtPanel } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Button, GoldRule, CheckList } from "@/components/ui";
import { site } from "@/data/site";

export const metadata = {
  title: "Infrastructure",
  description:
    "A 3.5-acre MPCB-authorised recovery plant at Taloja with e-waste dismantling, mechanical separation, a mercury-controlled lamp bay, secure destruction room, assay lab and 34-vehicle fleet.",
  alternates: { canonical: "/infrastructure" },
};

const artFor = ["strata", "circuit", "orbit", "grid", "flow", "stack"];

const gallery = [
  { variant: "stack", caption: "Baling & storage yard" },
  { variant: "circuit", caption: "Manual dismantling bay" },
  { variant: "flow", caption: "Separation line control" },
  { variant: "orbit", caption: "Lamp crushing chamber" },
  { variant: "grid", caption: "Secure destruction room" },
  { variant: "strata", caption: "Assay laboratory" },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Come and walk the floor."
        lead="A recycler's claims are only as good as its plant. Ours is 3.5 acres at Taloja, and we would rather you inspected it than took our word for what happens there."
        crumbs={[{ label: "Home", href: "/" }, { label: "Infrastructure" }]}
        art="strata"
      />

      {/* Overview */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Taloja Recovery Plant"
              title="Built for recovery, not just storage."
              lead="Most of what calls itself a recycling facility in India is a yard with a weighbridge. Taloja was designed around the actual metallurgy — depollution first, mechanical separation second, and an assay lab that tells us what we have before we sell it."
            />
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/contact" variant="primary">
                Arrange a plant visit
              </Button>
              <Button href={`tel:${site.offices[1].tel}`} variant="outline" icon="phone">
                {site.offices[1].phone}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-stone bg-stone">
              {[
                { v: "3.5", u: "acres", l: "Licensed site area" },
                { v: "18,000", u: "MT/yr", l: "Processing capacity" },
                { v: "34", u: "vehicles", l: "Own logistics fleet" },
                { v: "214", u: "people", l: "Formally employed" },
              ].map((s) => (
                <div key={s.l} className="bg-cream p-7">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl text-forest-800">{s.v}</span>
                    <span className="text-[0.8rem] text-brass-600">{s.u}</span>
                  </div>
                  <div className="mt-2 text-[0.8rem] text-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Facility list */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="What's on site"
              title="Six operating areas."
              lead="Each runs its own log, its own mass balance and its own safety regime."
            />
          </Reveal>

          <div className="mt-14 space-y-12 lg:space-y-16">
            {facilities.map((f, i) => (
              <Reveal key={f.name} delay={i * 50}>
                <article
                  className={`grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 ${
                    i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ArtFrame variant={artFor[i]} ratio="aspect-[16/10]" caption={f.name} />

                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-display text-2xl text-brass-500">0{i + 1}</span>
                      <span className="rounded-full border border-forest-800/20 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-forest-800">
                        {f.area}
                      </span>
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brass-600">
                        {f.capacity}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[1.6rem] leading-snug text-forest-950">
                      {f.name}
                    </h3>
                    <p className="mt-3.5 max-w-xl text-[0.98rem] leading-relaxed text-muted">{f.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery grid */}
      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Gallery"
              title="Around the site."
              lead="Illustrative views of the operating areas. Photography from your own visit is welcome — we place no restrictions on it."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.caption} delay={i * 60}>
                <figure className="group relative overflow-hidden bg-forest-950">
                  <ArtPanel
                    variant={g.variant}
                    ratio="aspect-[4/3]"
                    className="transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950 to-transparent px-5 py-4 text-[0.78rem] uppercase tracking-[0.16em] text-cream/85">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Safety + compliance */}
      <Section tone="forest">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Safety"
                title="Nobody is questioned for stopping work."
                lead="Every employee and contract worker holds stop-work authority. It is used a few times a month, and that is the point — an unused stop-work authority is a decorative one."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-9">
                <CheckList
                  tone="light"
                  items={[
                    "ISO 45001 occupational health & safety management system",
                    "Permit-to-work for hot work, height, confined space and lifting",
                    "Annual audiometry and lung-function screening at company cost",
                    "Sealed negative-pressure chamber and carbon filtration on the lamp line",
                    "Full PPE replaced on condition, not on schedule",
                    "Near-miss reporting reviewed within 48 hours, system-focused",
                  ]}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="border border-brass-500/25 bg-forest-950/55 p-8 sm:p-10">
              <Eyebrow tone="light">Authorisations on file</Eyebrow>
              <GoldRule className="my-6" />
              <ul className="space-y-5">
                {certifications.map((c) => (
                  <li key={c.code} className="flex items-start gap-4">
                    <Icon name="certificate" className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                    <span>
                      <span className="block text-[0.95rem] font-semibold text-cream">{c.code}</span>
                      <span className="mt-0.5 block text-[0.84rem] text-forest-100/55">
                        {c.label} · {c.issuer}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <GoldRule className="my-6" />
              <p className="text-[0.85rem] leading-relaxed text-forest-100/55">
                Copies available on request. We encourage verification directly with the issuing
                authority.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Open door"
        title="Bring your EHS team. Bring your auditor."
        lead="Plant visits run on weekday mornings and take about ninety minutes. You will see every operating area, the registers and the people who run them."
        primary={{ label: "Book a visit", href: "/contact" }}
      />
    </>
  );
}
