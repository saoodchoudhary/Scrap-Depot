import { cx } from "./ui";

export function LogoMarquee({ items, tone = "dark" }) {
  const doubled = [...items, ...items];
  const isLight = tone === "light";

  return (
    <div
      className={cx(
        "group relative overflow-hidden",
        isLight ? "text-forest-100/45" : "text-forest-900/45"
      )}
    >
      <div
        className={cx(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-24",
          isLight
            ? "bg-gradient-to-r from-forest-900 to-transparent"
            : "bg-gradient-to-r from-cream to-transparent"
        )}
        aria-hidden
      />
      <div
        className={cx(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-24",
          isLight
            ? "bg-gradient-to-l from-forest-900 to-transparent"
            : "bg-gradient-to-l from-cream to-transparent"
        )}
        aria-hidden
      />

      <ul className="flex w-max animate-[marquee_42s_linear_infinite] items-center gap-14 py-2 group-hover:[animation-play-state:paused]">
        {doubled.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap"
          >
            <span
              className={cx(
                "h-6 w-6 rounded-full border",
                isLight ? "border-brass-500/40" : "border-forest-800/25"
              )}
              aria-hidden
            />
            <span className="font-display text-lg tracking-wide">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
