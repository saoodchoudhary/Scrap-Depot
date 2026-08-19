"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Icon } from "./icons";
import { cx } from "./ui";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cx(
        "fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-7 sm:right-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <a
        href={site.whatsapp.link}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex h-13 items-center gap-3 rounded-full bg-forest-600 px-4 py-3.5 text-cream shadow-[0_14px_34px_-14px_rgba(7,26,19,.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-500"
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-all duration-400 group-hover:max-w-[9rem]">
          <span className="pr-1">WhatsApp us</span>
        </span>
      </a>

      <a
        href={`tel:${site.phones[0].tel}`}
        className="group flex items-center gap-3 rounded-full bg-brass-500 px-4 py-3.5 text-forest-950 shadow-[0_14px_34px_-14px_rgba(138,106,32,.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-400"
      >
        <Icon name="phone" className="h-5 w-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-all duration-400 group-hover:max-w-[9rem]">
          <span className="pr-1">Call now</span>
        </span>
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/25 bg-cream/90 text-forest-900 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-800/60"
      >
        <Icon name="chevronDown" className="h-4 w-4 rotate-180" strokeWidth={1.8} />
      </button>
    </div>
  );
}
