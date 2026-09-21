"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitQuote } from "@/app/actions";
import { site } from "@/data/site";
import { Icon } from "./icons";
import { Field, Input, Textarea, Select, Checkbox, SubmitNote } from "./form-fields";
import { cx, CornerFrame } from "./ui";

const initialState = { status: "idle", attempt: 0, errors: {}, values: {}, message: "" };

const MATERIALS = [
  "E-waste / IT assets",
  "Fluorescent lamps & tubes",
  "Copper / brass / non-ferrous",
  "MS / ferrous scrap",
  "Stainless steel",
  "Office dismantling / fit-out clearance",
  "Plant & machinery dismantling",
  "Data destruction only",
  "EPR compliance support",
  "Something else",
];

const TIMELINES = ["As soon as possible", "Within a week", "This month", "Planning ahead"];

function SuccessPanel({ state }) {
  return (
    <div className="relative rounded-sm border border-forest-700/25 bg-forest-100/50 p-9 text-center sm:p-12">
      <CornerFrame tone="dark" className="inset-3" />
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-700 text-cream">
        <Icon name="check" className="h-7 w-7" strokeWidth={2} />
      </span>
      <h3 className="mt-6 font-display text-2xl text-forest-950">Enquiry received</h3>
      <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">{state.message}</p>

      <div className="mx-auto mt-7 inline-flex flex-col items-center rounded-sm border border-forest-800/15 bg-white px-8 py-4">
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-muted">
          Your reference
        </span>
        <span className="mt-1.5 font-display text-xl tracking-wide text-forest-900">
          {state.reference}
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`tel:${site.phones[0].tel}`}
          className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-cream transition-colors hover:bg-forest-700"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call the desk
        </a>
        <a
          href={site.whatsapp.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-forest-800/25 px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-forest-900 transition-colors hover:border-forest-800/60"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Send photos on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function QuoteForm({ compact = false }) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  if (state.status === "success") return <SuccessPanel state={state} />;

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form key={state.attempt} action={formAction} noValidate className="relative space-y-6">
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-sm border border-[#A33B2A]/30 bg-[#A33B2A]/6 px-4 py-3 text-[0.85rem] font-medium text-[#A33B2A]"
        >
          {state.message}
        </p>
      ) : null}

      <div className={cx("grid gap-5", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <Field label="Your name" name="name" required error={e.name}>
          <Input name="name" defaultValue={v.name} placeholder="Rohit Sharma" autoComplete="name" error={e.name} />
        </Field>

        <Field label="Company" name="company" error={e.company}>
          <Input name="company" defaultValue={v.company} placeholder="Company or society name" autoComplete="organization" />
        </Field>

        <Field label="Mobile number" name="phone" required error={e.phone}>
          <Input name="phone" type="tel" defaultValue={v.phone} placeholder="98765 43210" autoComplete="tel" error={e.phone} />
        </Field>

        <Field label="Email" name="email" error={e.email}>
          <Input name="email" type="email" defaultValue={v.email} placeholder="you@company.in" autoComplete="email" error={e.email} />
        </Field>

        <Field label="Pickup city / area" name="city" required error={e.city}>
          <Input name="city" defaultValue={v.city} placeholder="Andheri East, Mumbai" error={e.city} />
        </Field>

        <Field label="Material" name="material" required error={e.material}>
          <Select name="material" defaultValue={v.material ?? ""} error={e.material}>
            <option value="" disabled>
              Select a material type
            </option>
            {MATERIALS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Approximate quantity" name="quantity" hint="A rough figure is fine — kg, tonnes or unit count.">
          <Input name="quantity" defaultValue={v.quantity} placeholder="e.g. 1.5 MT, or 40 desktops" />
        </Field>

        <Field label="When do you need pickup?" name="timeline">
          <Select name="timeline" defaultValue={v.timeline ?? TIMELINES[0]}>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Anything else we should know?" name="message" className="sm:col-span-2">
        <Textarea
          name="message"
          defaultValue={v.message}
          rows={compact ? 3 : 4}
          placeholder="Access constraints, shutdown windows, whether data-bearing media is involved…"
        />
      </Field>

      <Checkbox name="consent" defaultChecked={v.consent} error={e.consent}>
        I agree to be contacted by Scrap Depot about this enquiry. My details will not be shared with
        third parties — see the{" "}
        <Link href="/policies/privacy-policy" className="font-medium text-forest-800 underline underline-offset-2">
          privacy policy
        </Link>
        .
      </Checkbox>

      <div className="flex flex-col gap-4 border-t border-stone pt-6 sm:flex-row sm:items-center sm:justify-between">
        <SubmitNote>
          Valuation returned the same working day. No obligation to proceed.
        </SubmitNote>

        <button
          type="submit"
          disabled={pending}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-brass-500 px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-forest-950 shadow-[0_12px_32px_-14px_rgba(138,106,32,.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brass-400 disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-forest-950/25 border-t-forest-950" />
              Sending…
            </>
          ) : (
            <>
              Request my quote
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
