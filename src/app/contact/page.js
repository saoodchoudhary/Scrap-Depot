import { site } from "@/data/site";
import { homeFaqs } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Accordion } from "@/components/accordion";
import { ArtPanel } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Button, GoldRule } from "@/components/ui";

export const metadata = {
  title: "Contact Us",
  description:
    "Call +91 98200 45120, WhatsApp photographs of your material, or write to info@scrapdepot.in. Head office in Andheri East, plant at Taloja, hub at Chakan Pune.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: "phone",
    title: "Call the desk",
    body: "Fastest route to a valuation. Someone picks up between 9:30 and 7, Monday to Saturday.",
    action: { label: site.phones[0].value, href: `tel:${site.phones[0].tel}` },
  },
  {
    icon: "whatsapp",
    title: "WhatsApp photographs",
    body: "Send pictures of the lot. Our desk grades from images daily and replies the same afternoon.",
    action: { label: site.whatsapp.value, href: site.whatsapp.link },
  },
  {
    icon: "mail",
    title: "Email us",
    body: "For asset registers, tender documents and anything that needs an attachment.",
    action: { label: site.emails[0].value, href: `mailto:${site.emails[0].value}` },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you have. We'll tell you what it's worth."
        lead="Same-day written valuation, pickup within 24 to 48 hours, and payment inside one working day of the weighment slip being signed."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        art="flow"
      />

      {/* Channels */}
      <Section tone="cream" className="pb-0">
        <div className="shell grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="flex h-full flex-col bg-cream p-8">
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-forest-800/20 text-forest-800">
                  <Icon name={c.icon} className="h-5.5 w-5.5" />
                </span>
                <h2 className="mt-6 font-display text-[1.25rem] text-forest-950">{c.title}</h2>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted">{c.body}</p>
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.action.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="group mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-forest-800 transition-colors hover:text-brass-600"
                >
                  {c.action.label}
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + details */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Send a message"
                title="Write to us and we'll come back within a day."
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10 border border-stone bg-white p-7 sm:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={60}>
              <div className="border border-stone bg-sand p-7 sm:p-8">
                <Eyebrow>Departments</Eyebrow>
                <GoldRule className="my-6" />
                <ul className="space-y-4">
                  {site.emails.map((e) => (
                    <li key={e.value} className="flex flex-col gap-0.5">
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
                        {e.label}
                      </span>
                      <a
                        href={`mailto:${e.value}`}
                        className="text-[0.92rem] text-forest-900 transition-colors hover:text-brass-600"
                      >
                        {e.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="border border-stone bg-white p-7 sm:p-8">
                <Eyebrow>Working hours</Eyebrow>
                <GoldRule className="my-6" />
                <ul className="space-y-3">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex items-baseline justify-between gap-4">
                      <span className="text-[0.9rem] text-forest-900">{h.days}</span>
                      <span className="text-[0.86rem] text-muted">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <GoldRule className="my-6" />
                <p className="text-[0.84rem] leading-relaxed text-muted">
                  Plant visits run on weekday mornings by prior appointment and take about ninety
                  minutes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="border border-stone bg-forest-900 p-7 text-cream sm:p-8">
                <Eyebrow tone="light">Prefer to talk?</Eyebrow>
                <p className="mt-5 text-[0.92rem] leading-relaxed text-forest-100/70">
                  Call the sales desk directly. Most valuations are settled in a single phone call
                  once we know the material and the volume.
                </p>
                <div className="mt-7 space-y-3">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="flex items-center gap-3 text-[0.95rem] text-cream transition-colors hover:text-brass-300"
                    >
                      <Icon name="phone" className="h-4 w-4 text-brass-500" />
                      {p.value}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Locations */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Locations"
              title="Where to find us."
              lead="Head office for commercial and compliance matters; Taloja for anything involving material; Chakan for Pune-belt collections."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone lg:grid-cols-3">
            {site.offices.map((o, i) => (
              <Reveal key={o.name} delay={i * 70}>
                <div className="flex h-full flex-col bg-cream">
                  <div className="relative">
                    <ArtPanel variant={["grid", "strata", "stack"][i]} ratio="aspect-[16/9]" />
                    <span className="absolute left-5 top-5 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                      {o.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[1.2rem] text-forest-950">{o.name}</h3>
                    <address className="mt-3 flex-1 space-y-0.5 text-[0.9rem] not-italic leading-relaxed text-muted">
                      {o.lines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </address>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`tel:${o.tel}`}
                        className="inline-flex items-center gap-2 text-[0.86rem] font-semibold text-forest-800 transition-colors hover:text-brass-600"
                      >
                        <Icon name="phone" className="h-3.5 w-3.5" />
                        {o.phone}
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${o.name}, ${o.lines.join(", ")}`
                        )}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-[0.86rem] font-semibold text-forest-800 transition-colors hover:text-brass-600"
                      >
                        <Icon name="pin" className="h-3.5 w-3.5" />
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="Before you call"
                title="Answers to the usual first questions."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-9">
                <Button href="/quote" variant="primary">
                  Request a quote
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <Accordion items={homeFaqs} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
