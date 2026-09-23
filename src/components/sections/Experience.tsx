import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience, process } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-sand-100 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where the experience comes from."
          intro="Corporate appointments from 1999, then an independent practice from 8 September 2026."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <ol className="relative">
            <span
              aria-hidden
              className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-gradient-to-b from-gold-500/60 via-navy-900/15 to-transparent"
            />
            {experience.map((item, index) => (
              <Reveal key={item.year} delay={index * 90} as="li" className="relative block pb-10 pl-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 grid h-[0.9375rem] w-[0.9375rem] place-items-center rounded-full border border-gold-500/50 bg-sand-100"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                </span>
                <p className="font-serif text-sm text-gold-600">{item.year}</p>
                <h3 className="mt-1.5 font-serif text-xl tracking-tight text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">{item.body}</p>
              </Reveal>
            ))}
          </ol>

          <div>
            <Reveal>
              <h3 className="font-serif text-2xl tracking-tight text-navy-900">How an engagement runs</h3>
            </Reveal>
            <div className="mt-8 space-y-3">
              {process.map((item, index) => (
                <Reveal key={item.step} delay={index * 90}>
                  <div className="group flex gap-5 rounded-xl border border-navy-900/10 bg-sand-50 p-6 transition-all duration-500 hover:border-gold-500/40 hover:shadow-[0_16px_40px_-28px_rgba(10,28,48,0.5)]">
                    <span className="font-serif text-lg text-navy-900/25 transition-colors duration-500 group-hover:text-gold-600">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-medium text-navy-900">{item.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-900/65">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
