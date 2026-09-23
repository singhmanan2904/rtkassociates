import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { DocumentStackIllustration } from "@/components/Illustrations";
import { site } from "@/lib/site";

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "Office", value: `${site.address.line1}, ${site.address.line2}` },
  { label: "Hours", value: site.hours },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-sand-100 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you are dealing with."
          intro={`Write with the company and the matter. ${site.principal} will reply to arrange a confidential consultation.`}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="space-y-8">
            <Reveal>
              <dl className="space-y-6">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-navy-900/45">
                      {detail.label}
                    </dt>
                    <dd className="mt-1.5 text-base text-navy-900">
                      {detail.href ? (
                        <a href={detail.href} className="link-underline">
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={100}>
              {/*
                Free, no-API-key embed. To move the pin, just edit
                `site.address.mapQuery` in src/lib/site.ts — this iframe
                picks it up automatically.
              */}
              <div className="overflow-hidden rounded-xl border border-navy-900/10">
                <iframe
                  title={`Map to ${site.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`}
                  width="100%"
                  height="240"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  className="block grayscale-[35%] contrast-[1.05]"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex items-start gap-5 rounded-xl border border-navy-900/10 bg-sand-50 p-6">
                <DocumentStackIllustration className="h-14 w-14 shrink-0 text-navy-900/70" />
                <div>
                  <p className="font-serif text-lg tracking-tight text-navy-900">Prefer email?</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    Write directly to{" "}
                    <a href={`mailto:${site.email}`} className="link-underline font-medium text-navy-900">
                      {site.email}
                    </a>
                    . Attach the latest filings or the notice you have received, and you will get a reply on
                    whether the practice can take the matter.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
