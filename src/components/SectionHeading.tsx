import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p
          className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] ${
            align === "center" ? "justify-center" : ""
          } ${isDark ? "text-gold-400" : "text-gold-600"}`}
        >
          <span className={`h-px w-8 ${isDark ? "bg-gold-400/50" : "bg-gold-500/50"}`} aria-hidden />
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2
          className={`mt-4 font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem] ${
            isDark ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={140}>
          <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-white/70" : "text-navy-900/70"}`}>
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
