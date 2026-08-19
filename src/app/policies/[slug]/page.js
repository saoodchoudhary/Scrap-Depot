import Link from "next/link";
import { notFound } from "next/navigation";
import { policies, policyBySlug } from "@/data/content";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { Section, Eyebrow, GoldRule, Button } from "@/components/ui";

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const policy = policyBySlug(slug);
  if (!policy) return {};

  return {
    title: policy.title,
    description: policy.summary,
    alternates: { canonical: `/policies/${policy.slug}` },
  };
}

export default async function PolicyPage({ params }) {
  const { slug } = await params;
  const policy = policyBySlug(slug);
  if (!policy) notFound();

  const others = policies.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`Last updated ${policy.updated}`}
        title={policy.title}
        lead={policy.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Policies", href: "/policies" },
          { label: policy.title },
        ]}
        art="grid"
      />

      <Section tone="cream">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_16rem] lg:gap-20">
          <article className="max-w-2xl">
            {policy.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 40}>
                <section className="mb-11">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-lg text-brass-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-[1.45rem] leading-snug text-forest-950">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="mt-4 pl-11 text-[1rem] leading-[1.78] text-slate-ink">
                    {section.body}
                  </p>
                </section>
              </Reveal>
            ))}

            <Reveal>
              <div className="border-l-2 border-brass-500 bg-sand/60 p-7">
                <h2 className="font-display text-[1.2rem] text-forest-950">Questions about this policy</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  Write to{" "}
                  <a
                    href={`mailto:${site.emails[2].value}`}
                    className="font-medium text-forest-800 underline underline-offset-2"
                  >
                    {site.emails[2].value}
                  </a>{" "}
                  or call {site.phones[1].value}. We respond to policy queries within thirty days,
                  and usually a great deal sooner.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary">
                    Contact compliance
                  </Button>
                </div>
              </div>
            </Reveal>
          </article>

          <aside className="lg:sticky lg:top-40 lg:self-start">
            <div className="border border-stone bg-white p-7">
              <Eyebrow>On this page</Eyebrow>
              <ol className="mt-5 space-y-2.5">
                {policy.sections.map((s, i) => (
                  <li key={s.heading} className="flex gap-3 text-[0.86rem] text-muted">
                    <span className="text-brass-500">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </li>
                ))}
              </ol>

              <GoldRule className="my-7" />

              <Eyebrow>Other policies</Eyebrow>
              <ul className="mt-5 space-y-3">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/policies/${p.slug}`}
                      className="group flex items-center gap-2 text-[0.88rem] text-forest-900 transition-colors hover:text-brass-600"
                    >
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 text-brass-500 transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
