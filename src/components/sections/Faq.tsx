"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-sand-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Questions"
            title="The things people ask us first."
          />

          <div className="divide-y divide-navy-900/10 border-y border-navy-900/10">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={faq.q} delay={index * 60}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-serif text-lg leading-snug tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-navy-900" : "text-navy-900/75"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        aria-hidden
                        className={`relative mt-2 block h-3 w-3 shrink-0 transition-transform duration-400 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold-600" />
                        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-gold-600" />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 pr-10 text-sm leading-relaxed text-navy-900/65">{faq.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
