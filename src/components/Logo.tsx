export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

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
          className={`block text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ${
            isDark ? "text-white/50" : "text-navy-900/50"
          }`}
        >
          Company Secretaries
        </span>
      </span>
    </span>
  );
}
