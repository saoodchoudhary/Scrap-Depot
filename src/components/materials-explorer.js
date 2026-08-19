"use client";

import { useState } from "react";
import { materialCategories } from "@/data/materials";
import { Icon } from "./icons";
import { cx } from "./ui";

export function MaterialsExplorer() {
  const [active, setActive] = useState(materialCategories[0].id);
  const category = materialCategories.find((c) => c.id === active);

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Material categories"
        className="flex flex-wrap gap-2.5 border-b border-stone pb-6"
      >
        {materialCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            aria-controls={`panel-${c.id}`}
            onClick={() => setActive(c.id)}
            className={cx(
              "rounded-full border px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] transition-all duration-300",
              active === c.id
                ? "border-forest-800 bg-forest-800 text-cream shadow-[0_10px_26px_-14px_rgba(11,51,39,.8)]"
                : "border-stone bg-white/60 text-forest-900 hover:border-forest-800/45"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div id={`panel-${category.id}`} role="tabpanel" className="pt-8">
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-muted">{category.blurb}</p>

        <div className="mt-8 overflow-hidden rounded-sm border border-stone bg-white">
          <div className="hidden grid-cols-[2.2fr_1fr_1fr] gap-6 border-b border-stone bg-sand px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-forest-800 sm:grid">
            <span>Material</span>
            <span>Grade</span>
            <span className="text-right">Indicative rate</span>
          </div>

          <ul className="divide-y divide-stone">
            {category.items.map((item) => (
              <li
                key={item.name}
                className="grid gap-2 px-6 py-4 transition-colors hover:bg-sand/55 sm:grid-cols-[2.2fr_1fr_1fr] sm:items-center sm:gap-6"
              >
                <span className="font-medium text-forest-950">{item.name}</span>
                <span className="text-[0.85rem] text-muted">{item.grade}</span>
                <span className="text-left sm:text-right">
                  <span className="font-display text-lg text-forest-800">{item.rate}</span>
                  {item.unit !== "—" ? (
                    <span className="ml-1.5 text-[0.76rem] text-muted">{item.unit}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-muted">
          <Icon name="document" className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
          Rates shown are indicative and move with LME and domestic index movements. A firm,
          written quotation against a defined grade specification is issued before every pickup.
        </p>
      </div>
    </div>
  );
}
