import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Section, Eyebrow, GoldRule, StatBlock } from "@/components/ui";

export const metadata = {
  title: "Get a Free Quote",
  description:
    "Send your material details and receive a written, itemised valuation the same working day. No obligation, no site visit required for most lots.",
  alternates: { canonical: "/quote" },
};

const promises = [
  { icon: "clock", title: "Same-day valuation", body: "Written and itemised, with the grading basis and validity printed on it." },
  { icon: "truck", title: "Pickup in 24–48 hours", body: "Own fleet across Mumbai, Navi Mumbai, Thane, Pune and Nashik." },
  { icon: "scale", title: "Weighed in front of you", body: "Licensed bridge, joint slip countersigned by your representative." },
  { icon: "document", title: "Payment within 24 hours", body: "RTGS against the signed slip, with GST invoice and e-way bill." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free valuation"
        title="Find out what your scrap is actually worth."
        lead="Fill this in and our valuation desk comes back the same working day with a written figure. No obligation, and no site visit needed for most lots."
        crumbs={[{ label: "Home", href: "/" }, { label: "Get a quote" }]}
        art="stack"
      />

      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal>
            <div className="border border-stone bg-white p-7 sm:p-10">
              <Eyebrow>Enquiry form</Eyebrow>
              <h2 className="mt-4 font-display text-[length:var(--text-title)] leading-snug text-forest-950">
                Tell us about the material.
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Rough figures are fine — we would rather start the conversation than wait for exact
                numbers.
              </p>
              <GoldRule className="my-8" />
              <QuoteForm />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={70}>
              <div className="border border-stone bg-sand p-7 sm:p-8">
                <Eyebrow>What happens next</Eyebrow>
                <GoldRule className="my-6" />
                <ul className="space-y-6">
                  {promises.map((p, i) => (
                    <li key={p.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest-800/20 text-forest-800">
                        <Icon name={p.icon} className="h-4.5 w-4.5" />
                      </span>
                      <span>
                        <span className="block text-[0.92rem] font-semibold text-forest-950">
                          {p.title}
                        </span>
                        <span className="mt-1 block text-[0.85rem] leading-relaxed text-muted">
                          {p.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-stone bg-forest-900 p-7 text-cream sm:p-8">
                <Eyebrow tone="light">In a hurry?</Eyebrow>
                <p className="mt-5 text-[0.92rem] leading-relaxed text-forest-100/70">
                  Skip the form. Call the desk or send photographs on WhatsApp — most valuations are
                  settled inside a single conversation.
                </p>
                <div className="mt-7 space-y-3">
                  <a
                    href={`tel:${site.phones[0].tel}`}
                    className="flex items-center justify-between gap-3 rounded-full bg-brass-500 px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-forest-950 transition-colors hover:bg-brass-400"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name="phone" className="h-4 w-4" />
                      {site.phones[0].value}
                    </span>
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a
                    href={site.whatsapp.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-3 rounded-full border border-cream/20 px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-cream transition-colors hover:border-brass-400 hover:text-brass-300"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name="whatsapp" className="h-4 w-4" />
                      WhatsApp photos
                    </span>
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <div className="grid grid-cols-2 gap-6 border border-stone bg-white p-7">
                <StatBlock tone="dark" value="24 hrs" label="Payment" note="After signed slip" />
                <StatBlock tone="dark" value="200+" label="Grades" note="Priced daily" />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
