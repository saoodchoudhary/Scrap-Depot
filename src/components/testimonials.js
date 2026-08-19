"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { cx } from "./ui";

export function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Icon name="quote" className="h-12 w-12 text-brass-500/35" />

      <div className="relative mt-6 min-h-[16rem] sm:min-h-[14rem]">
        {items.map((t, i) => (
          <blockquote
            key={t.name}
            aria-hidden={i !== index}
            className={cx(
              "absolute inset-0 transition-all duration-700 [transition-timing-function:var(--ease-out-soft)]",
              i === index
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-4 opacity-0"
            )}
          >
            <p className="font-display text-[1.35rem] leading-[1.45] text-cream sm:text-[1.65rem]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass-500/45 font-display text-lg text-brass-400">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-[0.95rem] font-semibold text-cream">{t.name}</span>
                <span className="block text-[0.82rem] text-forest-100/55">
                  {t.role} · {t.org}
                </span>
              </span>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 border-t border-cream/10 pt-6">
        <div className="flex items-center gap-2.5">
          {items.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={cx(
                "h-1 rounded-full transition-all duration-400",
                i === index ? "w-10 bg-brass-500" : "w-5 bg-cream/20 hover:bg-cream/40"
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-brass-500 hover:text-brass-400"
          >
            <Icon name="chevron" className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-brass-500 hover:text-brass-400"
          >
            <Icon name="chevron" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
