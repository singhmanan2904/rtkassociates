"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (inView) setActive(inView.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-navy-900/10 bg-sand-50/85 backdrop-blur-lg shadow-[0_1px_24px_-12px_rgba(10,28,48,0.4)]"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ height: "var(--header-height)" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={() => setMenuOpen(false)} className="shrink-0" aria-label={`${"RKT & Associates"} — home`}>
          <Logo tone={solid ? "light" : "dark"} />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  solid
                    ? isActive
                      ? "text-navy-900"
                      : "text-navy-900/60 hover:text-navy-900"
                    : isActive
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-center bg-gold-500 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:inline-block ${
              solid
                ? "bg-navy-900 text-white hover:bg-navy-800"
                : "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
            }`}
          >
            Book a consultation
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors md:hidden ${
              solid ? "text-navy-900 hover:bg-navy-900/5" : "text-white hover:bg-white/10"
            }`}
          >
            <span className="relative block h-4 w-5" aria-hidden>
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-current transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-900/10 bg-sand-50 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          maxHeight: menuOpen ? "26rem" : 0,
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.45s var(--ease-out-soft), opacity 0.3s ease",
        }}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-navy-900/5 py-3.5 font-serif text-xl text-navy-900 transition-transform duration-300 last:border-0"
              style={{
                transform: menuOpen ? "none" : "translateY(8px)",
                transitionDelay: `${index * 40}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-navy-900 px-5 py-3 text-center text-sm font-medium text-white"
          >
            Book a consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
