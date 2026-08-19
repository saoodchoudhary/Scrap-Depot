import { ArtPanel } from "./patterns";
import { Breadcrumbs, Eyebrow, cx } from "./ui";

export function PageHero({ eyebrow, title, lead, crumbs, art = "grid", children, align = "left" }) {
  return (
    <section className="grain relative isolate overflow-hidden bg-forest-950 pt-16 pb-20 text-cream sm:pt-20 sm:pb-24">
      <div className="absolute inset-0 -z-10 opacity-55" aria-hidden>
        <ArtPanel variant={art} ratio="" className="h-full w-full" />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-950 via-forest-950/88 to-forest-950/55"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-forest-950 to-transparent"
        aria-hidden
      />

      <div className="shell">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}

        <div className={cx("mt-8", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
          {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 text-[length:var(--text-display)] leading-[1.06] text-cream">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-forest-100/70 sm:text-[1.1rem]">
              {lead}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
