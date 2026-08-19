import Link from "next/link";
import { Icon } from "./icons";

/* ------------------------------------------------------------ Utilities */

export const cx = (...c) => c.filter(Boolean).join(" ");

/* --------------------------------------------------------------- Eyebrow */

export function Eyebrow({ children, tone = "dark", className }) {
  const tones = {
    dark: "text-brass-600",
    light: "text-brass-400",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em]",
        tones[tone],
        className
      )}
    >
      <span className="h-px w-7 bg-current opacity-60" aria-hidden />
      {children}
    </span>
  );
}

/* --------------------------------------------------------- SectionHeading */

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
  children,
}) {
  const isLight = tone === "light";
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      {title ? (
        <h2
          className={cx(
            "mt-5 text-[length:var(--text-display)] leading-[1.08]",
            isLight ? "text-cream" : "text-forest-950"
          )}
        >
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p
          className={cx(
            "mt-5 text-base leading-relaxed sm:text-[1.0625rem]",
            isLight ? "text-forest-100/75" : "text-muted"
          )}
        >
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- Button */

const buttonBase =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full text-[0.82rem] font-semibold uppercase tracking-[0.13em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brass-500 disabled:opacity-55 disabled:pointer-events-none";

const buttonVariants = {
  primary:
    "bg-forest-800 text-cream px-7 py-3.5 shadow-[0_10px_30px_-14px_rgba(11,51,39,.85)] hover:bg-forest-700 hover:shadow-[0_16px_38px_-14px_rgba(11,51,39,.9)] hover:-translate-y-0.5",
  gold:
    "bg-brass-500 text-forest-950 px-7 py-3.5 shadow-[0_10px_30px_-14px_rgba(138,106,32,.9)] hover:bg-brass-400 hover:-translate-y-0.5",
  outline:
    "border border-forest-800/25 text-forest-900 px-7 py-3.5 hover:border-forest-800/60 hover:bg-forest-800 hover:text-cream",
  ghostLight:
    "border border-cream/25 text-cream px-7 py-3.5 hover:border-brass-400/70 hover:bg-brass-500 hover:text-forest-950",
  quiet:
    "text-forest-800 px-1 py-1 hover:text-brass-600",
};

export function Button({
  href,
  variant = "primary",
  icon = "arrow",
  className,
  children,
  ...props
}) {
  const cls = cx(buttonBase, buttonVariants[variant], className);
  const inner = (
    <>
      <span>{children}</span>
      {icon ? (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.7}
        />
      ) : null}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls} {...props}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {inner}
    </button>
  );
}

/* ----------------------------------------------------------------- Badge */

export function Badge({ children, tone = "dark", className }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em]",
        tone === "light"
          ? "border-cream/20 bg-cream/5 text-forest-100/85"
          : "border-forest-800/15 bg-white/60 text-forest-800",
        className
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------------------------------------- Section */

export function Section({
  as: Tag = "section",
  tone = "cream",
  className,
  children,
  id,
  ...props
}) {
  const tones = {
    cream: "bg-cream text-forest-950",
    sand: "bg-sand text-forest-950",
    white: "bg-white text-forest-950",
    forest: "bg-forest-900 text-cream grain",
    ink: "bg-ink text-cream grain",
  };
  return (
    <Tag id={id} className={cx("relative py-20 sm:py-24 lg:py-28", tones[tone], className)} {...props}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------- Ornaments */

export function GoldRule({ className }) {
  return <div className={cx("h-px w-full rule-gold opacity-45", className)} aria-hidden />;
}

export function CornerFrame({ className, tone = "gold" }) {
  const color = tone === "gold" ? "border-brass-500/55" : "border-forest-800/25";
  return (
    <span aria-hidden className={cx("pointer-events-none absolute inset-0", className)}>
      <span className={cx("absolute left-0 top-0 h-5 w-5 border-l border-t", color)} />
      <span className={cx("absolute right-0 top-0 h-5 w-5 border-r border-t", color)} />
      <span className={cx("absolute bottom-0 left-0 h-5 w-5 border-b border-l", color)} />
      <span className={cx("absolute bottom-0 right-0 h-5 w-5 border-b border-r", color)} />
    </span>
  );
}

/* ------------------------------------------------------------- Breadcrumb */

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.72rem] uppercase tracking-[0.2em] text-forest-100/55">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span className="text-brass-500/70">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="link-underline transition-colors hover:text-brass-300">
                {item.label}
              </Link>
            ) : (
              <span className="text-brass-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------- Stat block */

export function StatBlock({ value, label, note, tone = "light", className }) {
  const isLight = tone === "light";
  return (
    <div className={cx("relative", className)}>
      <div
        className={cx(
          "font-display text-4xl leading-none sm:text-5xl",
          isLight ? "text-gold-gradient" : "text-forest-800"
        )}
      >
        {value}
      </div>
      <div
        className={cx(
          "mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em]",
          isLight ? "text-cream/90" : "text-forest-900"
        )}
      >
        {label}
      </div>
      {note ? (
        <div className={cx("mt-1.5 text-[0.8rem]", isLight ? "text-forest-100/50" : "text-muted")}>
          {note}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------- List check */

export function CheckList({ items, tone = "dark", className }) {
  const isLight = tone === "light";
  return (
    <ul className={cx("space-y-3.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <span
            className={cx(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              isLight ? "bg-brass-500/20 text-brass-300" : "bg-forest-100 text-forest-700"
            )}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={2.4} />
          </span>
          <span className={cx("text-[0.95rem] leading-relaxed", isLight ? "text-forest-100/80" : "text-slate-ink")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
