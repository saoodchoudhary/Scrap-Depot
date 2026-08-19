import { MaterialsExplorer } from "@/components/materials-explorer";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { Section, SectionHeading, Eyebrow, Button, GoldRule } from "@/components/ui";
import { site } from "@/data/site";

export const metadata = {
  title: "Materials & Rates",
  description:
    "Indicative buying rates for copper, brass, aluminium, ferrous scrap, e-waste boards and lithium-ion batteries. Over 200 grades, benchmarked to LME and domestic indices.",
  alternates: { canonical: "/materials" },
};

const gradingNotes = [
  {
    icon: "scale",
    title: "How grades are fixed",
    body: "Every quotation carries a written grade specification — alloy, cleanliness, permissible attachments and any declared deduction. It is agreed before the vehicle is sent, not after loading.",
  },
  {
    icon: "document",
    title: "How rates move",
    body: "Non-ferrous follows LME cash settlement adjusted for recovery and freight. Ferrous follows the domestic melting index. Both are revised every morning and the basis is printed on your quote.",
  },
  {
    icon: "shield",
    title: "What we never do",
    body: "No surprise moisture deductions, no post-facto regrading, and no cash settlements for corporate accounts. If a rate changes between quote and pickup, we tell you before the vehicle moves.",
  },
];

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rate card"
        title="Over 200 grades, published."
        lead="You should not have to ask what your material is worth. These are our indicative buying rates across five streams — the same numbers our own desk quotes from."
        crumbs={[{ label: "Home", href: "/" }, { label: "Materials" }]}
        art="stack"
      />

      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <MaterialsExplorer />
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Grading discipline"
              title="Three things that decide what you actually get paid."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-3">
            {gradingNotes.map((n, i) => (
              <Reveal key={n.title} delay={i * 70}>
                <div className="h-full bg-cream p-8 lg:p-10">
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-forest-800/20 text-forest-800">
                    <Icon name={n.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.25rem] text-forest-950">{n.title}</h3>
                  <p className="mt-3.5 text-[0.92rem] leading-relaxed text-muted">{n.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Get an exact figure"
              title="Photographs are usually enough."
              lead="Our valuation desk grades from images every working day. Send a few clear photographs of the lot — wide shot plus close-ups of any markings — and you will have a written, itemised figure the same afternoon."
            />
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/quote" variant="primary">
                Request a quotation
              </Button>
              <Button href={site.whatsapp.link} variant="outline" icon="whatsapp">
                Send photos on WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border border-stone bg-white p-8 sm:p-10">
              <Eyebrow>Good photographs show</Eyebrow>
              <GoldRule className="my-6" />
              <ol className="space-y-5">
                {[
                  "A wide shot of the full lot so we can judge volume",
                  "A close-up of the cut face or cross-section for alloy identification",
                  "Any stampings, part numbers or alloy markings",
                  "Attachments still on the material — insulation, mountings, fasteners",
                  "Something for scale: a hand, a scale rule, a standard crate",
                ].map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-display text-lg text-brass-500">0{i + 1}</span>
                    <span className="text-[0.92rem] leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ol>
              <GoldRule className="my-6" />
              <p className="text-[0.84rem] leading-relaxed text-muted">
                For lots above five tonnes, or anything requiring dismantling, we will send an
                engineer to site within 72 hours instead.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Rates move daily"
        title="Lock today's rate before it moves."
        lead="Quotations are held firm for seven days from issue. Send your material list now and the figure you are quoted is the figure you are paid."
      />
    </>
  );
}
