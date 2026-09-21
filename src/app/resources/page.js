import Link from "next/link";
import { posts } from "@/data/content";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArtPanel } from "@/components/patterns";
import { Section, SectionHeading, Eyebrow, Badge, GoldRule } from "@/components/ui";

export const metadata = {
  title: "Resources",
  description:
    "Practical writing on EPR compliance, scrap grading, lamp handling safety, plant dismantling and secure data destruction — from the people who do it daily.",
  alternates: { canonical: "/resources" },
};

const art = ["circuit", "stack", "orbit", "flow", "strata", "grid"];

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function ResourcesPage() {
  const [lead, ...rest] = posts;
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Notes from the yard."
        lead="No thought leadership, no press releases. Just the things our clients ask about most often, written by the people who deal with them."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        art="circuit"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <Badge key={c} tone="light">
              {c}
            </Badge>
          ))}
        </div>
      </PageHero>

      {/* Featured */}
      <Section tone="cream" className="pb-0">
        <div className="shell">
          <Reveal>
            <Link
              href={`/resources/${lead.slug}`}
              className="group grid gap-10 border border-stone bg-white p-6 transition-colors duration-400 hover:border-brass-500/45 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-8"
            >
              <div className="relative overflow-hidden">
                <ArtPanel
                  variant="circuit"
                  ratio="aspect-[16/11]"
                  className="transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                  Latest
                </span>
              </div>

              <div className="lg:pr-8">
                <Eyebrow>{lead.category}</Eyebrow>
                <h2 className="mt-4 font-display text-[length:var(--text-title)] leading-tight text-forest-950 transition-colors duration-300 group-hover:text-brass-600">
                  {lead.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-relaxed text-muted">{lead.excerpt}</p>

                <GoldRule className="my-7" />

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] uppercase tracking-[0.13em] text-muted">
                  <span>{lead.author}</span>
                  <span className="h-1 w-1 rounded-full bg-brass-500" aria-hidden />
                  <time dateTime={lead.date}>{fmt(lead.date)}</time>
                  <span className="h-1 w-1 rounded-full bg-brass-500" aria-hidden />
                  <span>{lead.readTime}</span>
                </div>

                <span className="mt-7 inline-flex items-center gap-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                  Read the article
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Grid */}
      <Section tone="cream">
        <div className="shell">
          <Reveal>
            <SectionHeading eyebrow="All articles" title="More from the desk." />
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link href={`/resources/${post.slug}`} className="group flex h-full flex-col">
                  <div className="relative overflow-hidden">
                    <ArtPanel
                      variant={art[(i + 1) % art.length]}
                      ratio="aspect-[16/10]"
                      className="transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-forest-800">
                      {post.category}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-[0.74rem] uppercase tracking-[0.14em] text-muted">
                    <time dateTime={post.date}>{fmt(post.date)}</time>
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

      <CtaBand
        eyebrow="Questions we haven't covered"
        title="Ask us directly — we answer the phone."
        lead="If there is something you cannot find a straight answer to anywhere, it is probably worth writing about. Send it to us and we will reply, and quite possibly publish it."
        primary={{ label: "Send a question", href: "/contact" }}
      />
    </>
  );
}
