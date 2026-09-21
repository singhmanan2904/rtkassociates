import { Reveal } from "@/components/Reveal";
import { sectors, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-950 pt-[var(--header-height)]">
      {/* Ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-navy-600/25 blur-[110px] animate-drift" />
        <div
          className="absolute -right-24 top-32 h-[28rem] w-[28rem] rounded-full bg-gold-500/12 blur-[110px] animate-drift"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 grain opacity-[0.35]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
                Practising since 2009
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Corporate compliance,
                <br />
                <span className="text-sheen">handled with certainty.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                We are a firm of practising company secretaries. Founders, boards and listed companies rely
                on us for incorporation, ROC filings, secretarial audit and governance that stands up to
                scrutiny.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_10px_30px_-10px_rgba(195,155,53,0.7)]"
                >
                  Book a consultation
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:border-white/50 hover:bg-white/[0.12]"
                >
                  Explore our services
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
              <div
                aria-hidden
                className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">The practice</p>
              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-serif text-3xl tracking-tight text-white sm:text-4xl">{stat.value}</dd>
                    <p className="mt-1.5 text-sm leading-snug text-white/55">{stat.label}</p>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Sector marquee */}
      <div className="relative border-t border-white/10 py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent"
        />
        <div className="flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...sectors, ...sectors].map((sector, index) => (
              <li
                key={`${sector}-${index}`}
                aria-hidden={index >= sectors.length}
                className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-white/35"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
