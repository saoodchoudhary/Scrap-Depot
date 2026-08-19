"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "./ui";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export function Counter({ value, suffix = "", duration = 1800, className }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(easeOut(p) * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // No observer available: paint the final figure on the next frame.
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(run);
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={cx("tabular-nums", className)}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
