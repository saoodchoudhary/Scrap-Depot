"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { Icon } from "./icons";
import { Field, Input, Textarea, Select } from "./form-fields";

const initialState = { status: "idle", attempt: 0, errors: {}, values: {}, message: "" };

const SUBJECTS = [
  "General enquiry",
  "Request a pickup",
  "Bulk / corporate contract",
  "EPR & compliance",
  "Plant dismantling project",
  "Careers",
  "Media & partnerships",
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-sm border border-forest-700/25 bg-forest-100/50 p-9 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-700 text-cream">
          <Icon name="check" className="h-6 w-6" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-2xl text-forest-950">Message sent</h3>
        <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">{state.message}</p>
        <p className="mt-5 text-[0.8rem] uppercase tracking-[0.2em] text-muted">
          Reference · <span className="text-forest-900">{state.reference}</span>
        </p>
      </div>
    );
  }

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form key={state.attempt} action={formAction} noValidate className="space-y-5">
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-sm border border-[#A33B2A]/30 bg-[#A33B2A]/6 px-4 py-3 text-[0.85rem] font-medium text-[#A33B2A]"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required error={e.name}>
          <Input name="name" defaultValue={v.name} placeholder="Your full name" autoComplete="name" error={e.name} />
        </Field>
        <Field label="Email" name="email" required error={e.email}>
          <Input name="email" type="email" defaultValue={v.email} placeholder="you@company.in" autoComplete="email" error={e.email} />
        </Field>
        <Field label="Mobile" name="phone" error={e.phone}>
          <Input name="phone" type="tel" defaultValue={v.phone} placeholder="98200 45120" autoComplete="tel" error={e.phone} />
        </Field>
        <Field label="Subject" name="subject">
          <Select name="subject" defaultValue={v.subject ?? SUBJECTS[0]}>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" name="message" required error={e.message}>
        <Textarea name="message" defaultValue={v.message} placeholder="How can we help?" error={e.message} />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-forest-800 px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700 disabled:pointer-events-none disabled:opacity-60"
      >
        {pending ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/25 border-t-cream" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
