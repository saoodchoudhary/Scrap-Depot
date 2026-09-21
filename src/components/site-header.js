"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/data/site";
import { Icon } from "./icons";
import { Logo } from "./logo";
import { cx } from "./ui";

/* ------------------------------------------------------------ Utility bar */

function UtilityBar() {
  return (
    <div className="hidden border-b border-cream/10 bg-ink text-cream xl:block">
      <div className="shell flex h-11 items-center justify-between whitespace-nowrap text-[0.74rem]">
        <div className="flex items-center gap-7">
          <a
            href={`tel:${site.phones[0].tel}`}
            className="group flex items-center gap-2 text-forest-100/75 transition-colors hover:text-brass-300"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-brass-500" />
            <span className="tracking-wide">{site.phones[0].value}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-2 text-forest-100/75 transition-colors hover:text-brass-300"
          >
            <Icon name="mail" className="h-3.5 w-3.5 text-brass-500" />
            <span className="tracking-wide">{site.email}</span>
          </a>
          <span className="flex items-center gap-2 text-forest-100/55">
            <Icon name="clock" className="h-3.5 w-3.5 text-brass-500" />
            <span className="tracking-wide">{site.hours[0].days} · {site.hours[0].time}</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${site.phones[1].tel}`}
            className="flex items-center gap-2 text-forest-100/75 transition-colors hover:text-brass-300"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-brass-500" />
            <span className="tracking-wide">{site.phones[1].value}</span>
          </a>
          <span className="h-3.5 w-px bg-cream/15" aria-hidden />
          <span className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-brass-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-500" aria-hidden />
            MPCB Authorised R4 Recycler
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- Dropdown */

function Dropdown({ item, isActive }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        onFocus={() => setOpen(true)}
        aria-expanded={open}
        className={cx(
          "flex items-center gap-1.5 py-6 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors",
          isActive ? "text-brass-600" : "text-forest-900 hover:text-brass-600"
        )}
      >
        {item.label}
        <Icon
          name="chevronDown"
          className={cx("h-3 w-3 transition-transform duration-300", open && "rotate-180")}
          strokeWidth={2}
        />
      </Link>

      <div
        className={cx(
          "absolute left-1/2 top-full z-50 w-[26rem] -translate-x-1/2 pt-1 transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-sm border border-stone bg-white shadow-[0_28px_70px_-30px_rgba(7,26,19,.45)]">
          <div className="h-0.5 rule-gold" aria-hidden />
          <ul className="p-2.5">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3.5 rounded-sm px-4 py-3 transition-colors hover:bg-sand"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500 opacity-45 transition-opacity group-hover:opacity-100" aria-hidden />
                  <span>
                    <span className="block text-[0.9rem] font-semibold text-forest-950">
                      {child.label}
                    </span>
                    <span className="mt-0.5 block text-[0.8rem] text-muted">{child.desc}</span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-brass-500 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------ Mobile menu */

function MobileMenu({ open, onClose, pathname }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      className={cx(
        "fixed inset-0 z-[70] xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cx(
          "absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-400",
          open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cx(
          "absolute right-0 top-0 flex h-full w-[min(23rem,88vw)] flex-col bg-forest-950 shadow-2xl transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-cream/10 px-6 py-5">
          <Logo tone="light" compact />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:border-brass-400 hover:text-brass-400"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const active = pathname === item.href;
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cx(
                        "block border-b border-cream/8 py-3.5 font-display text-xl transition-colors",
                        active ? "text-brass-400" : "text-cream hover:text-brass-300"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = expanded === item.label;
              return (
                <li key={item.label} className="border-b border-cream/8">
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-3.5 font-display text-xl text-cream transition-colors hover:text-brass-300"
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      className={cx("h-4 w-4 text-brass-500 transition-transform duration-300", isOpen && "rotate-180")}
                    />
                  </button>
                  <div
                    className={cx(
                      "grid transition-all duration-400 [transition-timing-function:var(--ease-out-soft)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <ul className="overflow-hidden">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="flex items-center gap-3 py-2.5 pl-4 text-[0.92rem] text-forest-100/70 transition-colors hover:text-brass-300"
                          >
                            <span className="h-px w-4 bg-brass-500/50" aria-hidden />
                            {child.label}
                          </Link>
                        </li>
                      ))}
                      <li className="pb-3" />
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-cream/10 px-6 py-6">
          <Link
            href="/quote"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brass-500 px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-forest-950"
          >
            Get a free quote
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${site.phones[0].tel}`}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-cream/20 px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream"
          >
            <Icon name="phone" className="h-4 w-4 text-brass-400" />
            {site.phones[0].value}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Header */

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (item) =>
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href ||
        pathname.startsWith(`${item.href}/`) ||
        item.children?.some((c) => pathname.startsWith(c.href));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-[60] w-full">
        <UtilityBar />

        <div
          className={cx(
            "border-b transition-all duration-400",
            scrolled
              ? "border-stone/70 bg-cream/92 backdrop-blur-md shadow-[0_10px_34px_-24px_rgba(7,26,19,.55)]"
              : "border-transparent bg-cream"
          )}
        >
          <div className="shell flex items-center justify-between gap-6">
            <Logo compact={scrolled} className="py-4" />

            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-7">
                {navigation.map((item) =>
                  item.children ? (
                    <Dropdown key={item.label} item={item} isActive={isActive(item)} />
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={cx(
                          "relative block py-6 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors",
                          isActive(item) ? "text-brass-600" : "text-forest-900 hover:text-brass-600"
                        )}
                      >
                        {item.label}
                        {isActive(item) ? (
                          <span className="absolute inset-x-0 bottom-4 h-px bg-brass-500" aria-hidden />
                        ) : null}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/quote"
                className="hidden items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700 sm:inline-flex"
              >
                Get a quote
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/20 text-forest-900 transition-colors hover:border-forest-800/50 hover:bg-forest-800 hover:text-cream xl:hidden"
              >
                <Icon name="menu" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
