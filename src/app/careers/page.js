import { jobs, benefits } from "@/data/content";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { ArtFrame } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Button, GoldRule, Badge } from "@/components/ui";

export const metadata = {
  title: "Careers",
  description:
    "Open roles at Scrap Depot across plant operations, compliance, logistics and quality — with family health cover, sponsored certification and a genuine stop-work culture.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work somewhere the paperwork is real."
        lead="We employ 214 people formally, in an industry where most of the workforce is informal. That is not a marketing line — it is the single biggest structural decision this business has made."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        art="stack"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Badge tone="light">{jobs.length} open roles</Badge>
          <Badge tone="light">Mumbai · Navi Mumbai · Pune</Badge>
        </div>
      </PageHero>

      {/* Culture */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <ArtFrame variant="stack" ratio="aspect-[4/3]" caption="Taloja · morning shift briefing" />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="What it's like"
                title="Dusty, precise, and surprisingly document-heavy."
                lead="This is a physical business run to laboratory standards. The people who do well here are the ones who care that the number on the slip is right — whether that slip is a weighbridge ticket or an assay report."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-9 space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <Icon name="check" className="mt-1 h-4.5 w-4.5 shrink-0 text-brass-600" strokeWidth={2.2} />
                    <div>
                      <h3 className="font-display text-[1.12rem] text-forest-950">{b.title}</h3>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Openings */}
      <Section tone="sand">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Open roles"
                title="Where we're hiring right now."
                lead="Apply with a CV to thescrapdepot@gmail.com quoting the role title. We reply to every application, including the ones we decline."
              />
              <Button href={`mailto:${site.email}`} variant="outline" icon="mail" className="shrink-0">
                {site.email}
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 overflow-hidden border border-stone bg-cream">
            <div className="hidden grid-cols-[1.6fr_1fr_0.8fr_0.8fr_auto] gap-6 border-b border-stone bg-white px-7 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-forest-800 lg:grid">
              <span>Role</span>
              <span>Location</span>
              <span>Experience</span>
              <span>Department</span>
              <span />
            </div>

            <ul className="divide-y divide-stone">
              {jobs.map((job, i) => (
                <Reveal key={job.title} delay={i * 45}>
                  <li className="group grid gap-3 px-7 py-6 transition-colors hover:bg-white lg:grid-cols-[1.6fr_1fr_0.8fr_0.8fr_auto] lg:items-center lg:gap-6">
                    <div>
                      <span className="font-display text-[1.15rem] text-forest-950">{job.title}</span>
                      <span className="mt-1 block text-[0.78rem] text-muted lg:hidden">
                        {job.location} · {job.exp} · {job.dept}
                      </span>
                    </div>
                    <span className="hidden text-[0.88rem] text-muted lg:block">{job.location}</span>
                    <span className="hidden text-[0.88rem] text-muted lg:block">{job.exp}</span>
                    <span className="hidden text-[0.88rem] text-muted lg:block">{job.dept}</span>

                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Application — ${job.title}`
                      )}`}
                      className="inline-flex items-center gap-2 justify-self-start rounded-full border border-forest-800/25 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-forest-900 transition-all duration-300 hover:border-forest-800 hover:bg-forest-800 hover:text-cream"
                    >
                      Apply
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={100}>
            <p className="mt-8 text-center text-[0.9rem] text-muted">
              Nothing matching your profile? Send an open application anyway — we keep CVs on file for
              twelve months and hire from that pool regularly.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Hiring process */}
      <Section tone="forest">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Hiring process"
                title="Four conversations, about two weeks."
                lead="No case studies to take home, no unpaid assignments. If a role needs a practical test, it happens on site and it is paid."
              />
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden border border-cream/12 bg-cream/12 sm:grid-cols-2">
            {[
              { t: "Application review", b: "Every CV is read by a person. You hear back within five working days either way." },
              { t: "Screening call", b: "Twenty minutes on your background and what the role actually involves day to day." },
              { t: "Site conversation", b: "At Taloja or head office, with the person you would report to and one peer." },
              { t: "Offer", b: "Written offer with the full compensation breakdown, no verbal-only commitments." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="h-full bg-forest-900 p-7">
                  <span className="font-display text-2xl text-brass-500">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-[1.15rem] text-cream">{s.t}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-forest-100/60">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Apply band */}
      <Section tone="cream" className="py-16 sm:py-20">
        <div className="shell">
          <Reveal>
            <div className="border border-brass-500/30 bg-white p-9 text-center sm:p-12">
              <Eyebrow className="justify-center">Apply</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-[length:var(--text-title)] leading-snug text-forest-950">
                Send a CV, the role title, and one paragraph on why.
              </h2>
              <GoldRule className="mx-auto my-7 max-w-sm" />
              <p className="mx-auto max-w-xl text-[0.95rem] leading-relaxed text-muted">
                That last paragraph matters more than the CV formatting. We are a small team and we
                read all of them.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                <Button href={`mailto:${site.email}`} variant="primary" icon="mail">
                  {site.email}
                </Button>
                <Button href={`tel:${site.phones[1].tel}`} variant="outline" icon="phone">
                  {site.phones[1].value}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
