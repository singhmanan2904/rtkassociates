import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/Illustrations";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[45rem] -translate-x-1/2 rounded-full bg-navy-600/18 blur-[120px]" />
        <div className="absolute inset-0 grain opacity-[0.3]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="What we do"
          title="The matters the practice handles."
          intro="Secretarial and MCA work, board process, capital raising, listing regulations, strike-off, NCLT and commercial agreements. For listed companies and for private family businesses."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 4) * 80} className="h-full">
              <article className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/35 hover:bg-white/[0.06]">
                <div
                  aria-hidden
                  className="absolute -top-px left-6 right-6 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-gold-400">
                  <ServiceIcon index={index} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg leading-snug tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 mb-5 text-sm leading-relaxed text-white/60">{service.summary}</p>
                <ul className="mt-auto space-y-2 border-t border-white/10 pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[0.8125rem] leading-snug text-white/50">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-white/55">
            If you are unsure where a matter sits,{" "}
            <a href="#contact" className="link-underline font-medium text-gold-300">
              write in
            </a>{" "}
            and we will say whether the practice can take it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
