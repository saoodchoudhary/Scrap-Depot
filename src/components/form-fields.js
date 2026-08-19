"use client";

import { cx } from "./ui";

const fieldBase =
  "w-full rounded-sm border bg-white/70 px-4 py-3.5 text-[0.95rem] text-forest-950 placeholder:text-muted/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brass-500/35";

export function Field({ label, name, error, required, hint, children, className }) {
  return (
    <div className={cx("space-y-2", className)}>
      <label
        htmlFor={name}
        className="flex items-baseline gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest-800"
      >
        {label}
        {required ? <span className="text-brass-600">*</span> : <span className="text-muted/60 normal-case tracking-normal">(optional)</span>}
      </label>
      {children}
      {hint && !error ? <p className="text-[0.78rem] text-muted">{hint}</p> : null}
      {error ? (
        <p className="flex items-center gap-1.5 text-[0.78rem] font-medium text-[#A33B2A]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Input({ name, error, ...props }) {
  return (
    <input
      id={name}
      name={name}
      className={cx(fieldBase, error ? "border-[#A33B2A]/60" : "border-stone focus:border-brass-500")}
      {...props}
    />
  );
}

export function Textarea({ name, error, rows = 5, ...props }) {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      className={cx(fieldBase, "resize-y", error ? "border-[#A33B2A]/60" : "border-stone focus:border-brass-500")}
      {...props}
    />
  );
}

export function Select({ name, error, children, ...props }) {
  return (
    <div className="relative">
      <select
        id={name}
        name={name}
        className={cx(
          fieldBase,
          "appearance-none pr-11",
          error ? "border-[#A33B2A]/60" : "border-stone focus:border-brass-500"
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brass-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden
      >
        <path d="m5 9 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Checkbox({ name, error, children, ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="flex cursor-pointer items-start gap-3">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="mt-1 h-4.5 w-4.5 shrink-0 cursor-pointer appearance-none rounded-[3px] border border-stone bg-white transition-all checked:border-forest-700 checked:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-brass-500/35 checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23FBF9F4%22 stroke-width=%223%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m5 12.5 4.5 4.5L19 7%22/></svg>')] checked:bg-[length:13px_13px] checked:bg-center checked:bg-no-repeat"
          {...props}
        />
        <span className="text-[0.85rem] leading-relaxed text-muted">{children}</span>
      </label>
      {error ? (
        <p className="text-[0.78rem] font-medium text-[#A33B2A]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SubmitNote({ children }) {
  return <p className="text-[0.78rem] leading-relaxed text-muted">{children}</p>;
}
