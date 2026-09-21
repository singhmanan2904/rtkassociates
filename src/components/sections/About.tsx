import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkylineIllustration } from "@/components/Illustrations";
import { values } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-sand-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About the firm"
              title="A compliance partner, not a filing vendor."
            />
            <Reveal delay={140} className="mt-10 hidden lg:block">
              <SkylineIllustration className="h-auto w-full max-w-sm text-navy-900" />
            </Reveal>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-navy-900/75">
            <Reveal>
              <p>
                RKT &amp; Associates was founded in 2009 on a straightforward idea: a company secretary
                should understand the business before advising on the statute. We work closely enough with
                our clients to know their cap table, their board dynamics and where the next transaction is
                likely to come from.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                That shows up in the work. Filings go out ahead of the due date, not on it. Minutes are
                drafted while the meeting is fresh. And when a term sheet or a notice arrives, you get a
                clear recommendation the same day — not a list of sections to interpret yourself.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 flex items-center gap-4 border-l-2 border-gold-500 pl-5">
                <p className="font-serif text-lg leading-snug text-navy-900">
                  &ldquo;Good governance is quiet. You notice it only when it is missing.&rdquo;
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-sm text-navy-900/55">
                — Founding partner, ACS &amp; LLB · Member, Institute of Company Secretaries of India
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90} className="h-full">
              <div className="group h-full bg-sand-50 p-8 transition-colors duration-500 hover:bg-sand-100 sm:p-10">
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
