import { site } from "@/data/site";
import { Icon } from "./icons";
import { ArtPanel } from "./patterns";
import { Button, Eyebrow, CornerFrame } from "./ui";

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Turn your scrap into a clean line on the balance sheet.",
  lead = "Send us a material list or a few photographs. You will have a written, itemised valuation the same working day — and a vehicle at your gate within 48 hours.",
  primary = { label: "Get a free quote", href: "/quote" },
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <ArtPanel variant="flow" ratio="" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/92 to-ink/60" aria-hidden />

      <div className="shell">
        <div className="relative border border-brass-500/25 bg-forest-950/55 px-7 py-12 backdrop-blur-sm sm:px-12 sm:py-14 lg:px-16">
          <CornerFrame className="inset-0" />

          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
              <h2 className="mt-5 text-[length:var(--text-title)] leading-[1.12] text-cream">{title}</h2>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-forest-100/65">{lead}</p>

              <div className="mt-9 flex flex-wrap gap-3.5">
                <Button href={primary.href} variant="gold">
                  {primary.label}
                </Button>
                <Button href={`tel:${site.phones[0].tel}`} variant="ghostLight" icon="phone">
                  {site.phones[0].value}
                </Button>
              </div>
            </div>

            <div className="space-y-5 border-t border-cream/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {[
                { icon: "clock", title: "Same-day valuation", body: "Written, itemised, with the grading basis on it." },
                { icon: "truck", title: "Pickup in 24–48 hrs", body: "Own fleet across Mumbai, Pune and Nashik." },
                { icon: "scale", title: "Payment in 24 hrs", body: "RTGS against a jointly signed weighment slip." },
              ].map((row) => (
                <div key={row.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass-500/35 text-brass-400">
                    <Icon name={row.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[0.92rem] font-semibold text-cream">{row.title}</span>
                    <span className="mt-0.5 block text-[0.85rem] text-forest-100/55">{row.body}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
