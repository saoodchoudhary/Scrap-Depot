import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, postBySlug } from "@/data/content";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { ArtPanel } from "@/components/patterns";
import { Section, Eyebrow, Breadcrumbs, GoldRule, Button } from "@/components/ui";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/resources/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

const art = ["circuit", "stack", "orbit", "flow", "strata", "grid"];

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const index = posts.findIndex((p) => p.slug === slug);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: `${site.url}/resources/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Article header */}
      <section className="grain relative isolate overflow-hidden bg-forest-950 pt-14 pb-16 text-cream sm:pt-16 sm:pb-20">
        <div className="absolute inset-0 -z-10 opacity-45" aria-hidden>
          <ArtPanel variant={art[index % art.length]} ratio="" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/85 via-forest-950/92 to-forest-950" aria-hidden />

        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: post.category },
            ]}
          />

          <div className="mt-9 max-w-3xl">
            <Eyebrow tone="light">{post.category}</Eyebrow>
            <h1 className="mt-5 text-[length:var(--text-display)] leading-[1.08] text-cream">
              {post.title}
            </h1>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-forest-100/70">{post.excerpt}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.78rem] uppercase tracking-[0.14em] text-forest-100/55">
              <span className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brass-500/40 font-display text-sm text-brass-400">
                  {post.author.charAt(0)}
                </span>
                {post.author}
              </span>
              <span className="h-1 w-1 rounded-full bg-brass-500" aria-hidden />
              <time dateTime={post.date}>{fmt(post.date)}</time>
              <span className="h-1 w-1 rounded-full bg-brass-500" aria-hidden />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_16rem] lg:gap-20">
          <article className="max-w-2xl">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={i * 30}>
                <p
                  className={
                    i === 0
                      ? "mb-6 font-display text-[1.28rem] leading-[1.6] text-forest-900"
                      : "mb-6 text-[1.02rem] leading-[1.78] text-slate-ink"
                  }
                >
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-12 border-l-2 border-brass-500 bg-sand/60 p-7">
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  <span className="font-semibold text-forest-900">Need this applied to your site?</span>{" "}
                  Our desk handles questions like these every day. Send us the specifics and you will
                  get a straight answer — not a sales call.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary">
                    Ask our team
                  </Button>
                </div>
              </div>
            </Reveal>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-40 lg:self-start">
            <div className="border border-stone bg-white p-7">
              <Eyebrow>Talk to us</Eyebrow>
              <div className="mt-5 space-y-3">
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="flex items-center gap-2.5 text-[0.9rem] text-forest-900 transition-colors hover:text-brass-600"
                >
                  <Icon name="phone" className="h-4 w-4 text-brass-600" />
                  {site.phones[0].value}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-[0.9rem] text-forest-900 transition-colors hover:text-brass-600"
                >
                  <Icon name="mail" className="h-4 w-4 text-brass-600" />
                  {site.email}
                </a>
              </div>

              <GoldRule className="my-7" />

              <Eyebrow>More reading</Eyebrow>
              <ul className="mt-5 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/resources/${r.slug}`}
                      className="group block text-[0.9rem] leading-snug text-forest-900 transition-colors hover:text-brass-600"
                    >
                      {r.title}
                      <span className="mt-1 block text-[0.75rem] uppercase tracking-[0.12em] text-muted">
                        {r.category} · {r.readTime}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Related grid */}
      <Section tone="sand" className="py-16 sm:py-20">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-[length:var(--text-title)] text-forest-950">
              Keep reading
            </h2>
            <Button href="/resources" variant="outline" className="shrink-0">
              All resources
            </Button>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Link href={`/resources/${r.slug}`} className="group flex h-full flex-col">
                  <ArtPanel
                    variant={art[(posts.indexOf(r) + 2) % art.length]}
                    ratio="aspect-[16/10]"
                    className="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <h3 className="mt-5 font-display text-[1.18rem] leading-snug text-forest-950 transition-colors group-hover:text-brass-600">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{r.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
