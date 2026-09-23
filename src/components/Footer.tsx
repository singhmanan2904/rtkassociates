import { Logo } from "@/components/Logo";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/60">
      <div aria-hidden className="pointer-events-none absolute inset-0 grain opacity-[0.25]" />

      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.description}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Practice areas</p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="link-underline transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-white/40">
            {site.address.line1}, {site.address.line2} ·{" "}
            <a href={`mailto:${site.email}`} className="link-underline">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
