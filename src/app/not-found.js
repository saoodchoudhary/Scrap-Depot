import Link from "next/link";
import { navigation } from "@/data/site";
import { Icon } from "@/components/icons";
import { HeroField } from "@/components/patterns";
import { Button, Eyebrow, GoldRule } from "@/components/ui";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[72vh] items-center overflow-hidden bg-forest-950 py-24 text-cream">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <HeroField />
      </div>
      <div className="absolute inset-0 -z-10 bg-forest-950/70" aria-hidden />

      <div className="shell">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Error 404</Eyebrow>
          <h1 className="mt-6 text-[length:var(--text-display)] leading-[1.06] text-cream">
            This one went to the smelter.
          </h1>
          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-forest-100/70">
            The page you were looking for is not here. It may have been moved, renamed, or recovered
            into something more useful.
          </p>

          <div className="mt-10 flex flex-wrap gap-3.5">
            <Button href="/" variant="gold">
              Back to home
            </Button>
            <Button href="/contact" variant="ghostLight">
              Contact us
            </Button>
          </div>

          <GoldRule className="my-12" />

          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brass-500">
              Try one of these
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {navigation
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <li key={n.label}>
                    <Link
                      href={n.href}
                      className="group inline-flex items-center gap-2 text-[0.92rem] text-forest-100/70 transition-colors hover:text-brass-300"
                    >
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 text-brass-500 transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                      {n.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
