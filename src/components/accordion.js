"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { cx } from "./ui";

export function Accordion({ items, tone = "dark", defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const isLight = tone === "light";

  return (
    <div className={cx("divide-y", isLight ? "divide-cream/12" : "divide-stone")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className={cx(
                  "group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors",
                  isLight
                    ? isOpen ? "text-brass-300" : "text-cream hover:text-brass-300"
                    : isOpen ? "text-brass-600" : "text-forest-950 hover:text-brass-600"
                )}
              >
                <span className="font-display text-lg leading-snug sm:text-xl">{item.q}</span>
                <span
                  className={cx(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isLight
                      ? "border-cream/20 group-hover:border-brass-400"
                      : "border-forest-800/20 group-hover:border-brass-500",
                    isOpen && "rotate-180 border-brass-500 bg-brass-500 text-forest-950"
                  )}
                >
                  <Icon name={isOpen ? "minus" : "plus"} className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
              </button>
            </h3>
            <div
              className={cx(
                "grid transition-all duration-500 [transition-timing-function:var(--ease-out-soft)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cx(
                    "max-w-3xl pb-7 pr-12 text-[0.95rem] leading-relaxed",
                    isLight ? "text-forest-100/70" : "text-muted"
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
