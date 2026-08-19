import Link from "next/link";
import { cx } from "./ui";

export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D7BB70" />
          <stop offset="55%" stopColor="#C4A24B" />
          <stop offset="100%" stopColor="#8A6A20" />
        </linearGradient>
      </defs>
      {/* Shield / depot outline */}
      <path
        d="M24 2.5 43 9v16.4c0 9.9-7.6 17.9-19 20.1C12.6 43.3 5 35.3 5 25.4V9z"
        fill="currentColor"
      />
      <path
        d="M24 5.6 40 11v14.4c0 8.4-6.4 15.2-16 17.2C14.4 40.6 8 33.8 8 25.4V11z"
        fill="none"
        stroke="url(#lm-g)"
        strokeWidth="1.1"
        opacity=".9"
      />
      {/* Recycle triad */}
      <g transform="translate(24 24)" fill="none" stroke="url(#lm-g)" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round">
        {[0, 120, 240].map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path d="M0 -10.5 A10.5 10.5 0 0 1 9.1 5.2" />
            <path d="M7.4 2.4 L10.6 6.4 L6 7.6" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Logo({ tone = "dark", className, compact = false }) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      aria-label="Scrap Depot — home"
      className={cx("group flex items-center gap-3", className)}
    >
      <LogoMark
        className={cx(
          "shrink-0 transition-transform duration-500 group-hover:rotate-[-8deg]",
          compact ? "h-9 w-9" : "h-11 w-11",
          isLight ? "text-forest-950" : "text-forest-900"
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cx(
            "font-display tracking-tight",
            compact ? "text-[1.24rem]" : "text-[1.42rem]",
            isLight ? "text-cream" : "text-forest-950"
          )}
        >
          Scrap<span className="text-brass-500"> Depot</span>
        </span>
        <span
          className={cx(
            "mt-1 text-[0.54rem] font-semibold uppercase tracking-[0.34em]",
            isLight ? "text-forest-100/55" : "text-muted"
          )}
        >
          Recycling · Since 2011
        </span>
      </span>
    </Link>
  );
}
