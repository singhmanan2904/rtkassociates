import { site } from "@/lib/site";

export function Logo({ tone = "light", compact = false }: { tone?: "light" | "dark"; compact?: boolean }) {
  const isDark = tone === "dark";
  const [lead, rest] = site.tagline.split(" & ");

  return (
    <span className="flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-md border font-serif text-sm tracking-tight transition-colors duration-500 ${
          isDark
            ? "border-white/20 bg-white/5 text-gold-300"
            : "border-navy-900/15 bg-navy-900 text-gold-300"
        }`}
        aria-hidden
      >
        RKT
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-lg tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-navy-900"
          }`}
        >
          RKT &amp; Associates
        </span>
        <span
          className={`block text-[0.6rem] font-medium uppercase leading-snug tracking-[0.12em] transition-colors duration-500 ${
            compact ? "md:hidden lg:block" : ""
          } ${isDark ? "text-white/50" : "text-navy-900/50"}`}
        >
          <span className="block whitespace-nowrap">{lead}</span>
          {rest ? <span className="block whitespace-nowrap">& {rest}</span> : null}
        </span>
      </span>
    </span>
  );
}
