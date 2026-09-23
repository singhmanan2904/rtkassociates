import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkylineIllustration } from "@/components/Illustrations";
import { site, values } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-sand-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About the practice"
              title="Twenty-six years inside listed companies."
            />
            <Reveal delay={140} className="mt-8 hidden lg:block">
              <SkylineIllustration className="h-auto w-full max-w-sm text-navy-900" />
            </Reveal>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-navy-900/75">
            <Reveal>
              <p>
                RKT &amp; Associates is the independent practice of {site.principal}, a Fellow Member of the
                Institute of Company Secretaries of India and a law graduate. It opened on {site.practiceOpened},
                after more than 26 years in secretarial, corporate finance and legal roles.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                The last in-house role was General Manager, Secretarial at JK Paper Ltd., an NSE- and
                BSE-listed company. Before that he was company secretary at Ginni Filaments Ltd., Spentex
                Industries Ltd., Shakumbhri Straw Products Ltd. and Mega Plast Ltd., after starting as a
                management trainee at Dalmia Cement (Bharat) Ltd.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 flex items-center gap-4 border-l-2 border-gold-500 pl-5">
                <p className="font-serif text-lg leading-snug text-navy-900">
                  The practice works with listed companies and with private family businesses, on board
                  process, MCA filings, capital raising and listing regulations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-sm text-navy-900/55">
                {site.principal}, FCS · Law graduate · Fellow, Institute of Company Secretaries of India
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90} className="h-full">
              <div className="group h-full bg-sand-50 p-6 transition-colors duration-500 hover:bg-sand-100 sm:p-8">
                <span className="font-serif text-sm text-gold-600">0{index + 1}</span>
                <h3 className="mt-4 font-serif text-xl tracking-tight text-navy-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">{value.body}</p>
                <span
                  aria-hidden
                  className="mt-6 block h-px w-10 origin-left bg-gold-500 transition-transform duration-500 group-hover:scale-x-[2.4]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
