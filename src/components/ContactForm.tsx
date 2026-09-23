"use client";

import { useState, type FormEvent } from "react";
import { contactSchema, serviceOptions, type ContactFieldErrors } from "@/lib/contact-schema";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const fieldBase =
  "w-full rounded-lg border bg-sand-50 px-4 py-3 text-sm text-navy-900 outline-none transition-all duration-300 placeholder:text-navy-900/35 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/12";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<ContactFieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // React nulls currentTarget once the handler returns, so grab the form now.
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      const fieldErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !(field in fieldErrors)) {
          fieldErrors[field as keyof ContactFieldErrors] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setStatus("error");
      setFeedback("Please check the highlighted fields.");
      return;
    }

    // Honeypot filled means a bot. Pretend it worked and skip the network call.
    if (parsed.data.website) {
      setStatus("success");
      setFeedback("Thank you — your message has been received.");
      form.reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setFeedback(
        `Form is not configured yet — set NEXT_PUBLIC_WEB3FORMS_KEY. Meanwhile, email us at ${site.email}.`,
      );
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Website enquiry — ${parsed.data.name}${parsed.data.company ? ` (${parsed.data.company})` : ""}`,
          from_name: site.name,
          replyto: parsed.data.email,
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || undefined,
          company: parsed.data.company || undefined,
          service: parsed.data.service || undefined,
          message: parsed.data.message,
        }),
      });

      const result = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setFeedback(result.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback("Thank you. Your message has been sent.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(`Network error. Please email us at ${site.email}.`);
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-sand-50 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-100 text-2xl text-gold-600" aria-hidden>
          ✓
        </span>
        <h3 className="mt-6 font-serif text-2xl tracking-tight text-navy-900">Message received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-900/65">{feedback}</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFeedback("");
          }}
          className="link-underline mt-7 text-sm font-medium text-navy-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-navy-900/10 bg-sand-50 p-6 sm:p-8">
      {/* Honeypot — hidden from people, catnip for bots. */}
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ananya Rao"
            disabled={busy}
            aria-invalid={Boolean(errors.name)}
            className={`${fieldBase} ${errors.name ? "border-red-400/70" : "border-navy-900/12"}`}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            disabled={busy}
            aria-invalid={Boolean(errors.email)}
            className={`${fieldBase} ${errors.email ? "border-red-400/70" : "border-navy-900/12"}`}
          />
        </Field>

        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            disabled={busy}
            aria-invalid={Boolean(errors.phone)}
            className={`${fieldBase} ${errors.phone ? "border-red-400/70" : "border-navy-900/12"}`}
          />
        </Field>

        <Field id="company" label="Company" optional error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Technologies Pvt Ltd"
            disabled={busy}
            aria-invalid={Boolean(errors.company)}
            className={`${fieldBase} ${errors.company ? "border-red-400/70" : "border-navy-900/12"}`}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="service" label="What do you need help with?" optional error={errors.service}>
            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue=""
                disabled={busy}
                className={`${fieldBase} ${
                  errors.service ? "border-red-400/70" : "border-navy-900/12"
                } appearance-none pr-10`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden
                viewBox="0 0 12 12"
                className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-navy-900/50"
              >
                <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="message" label="Your message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="A little about your company and what you are trying to get done."
              disabled={busy}
              aria-invalid={Boolean(errors.message)}
              className={`${fieldBase} resize-y ${errors.message ? "border-red-400/70" : "border-navy-900/12"}`}
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={busy}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? (
            <>
              <span
                aria-hidden
                className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
              Sending
            </>
          ) : (
            <>
              Send message
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </>
          )}
        </button>

        <p className="text-xs leading-relaxed text-navy-900/50">
          Your message goes to {site.principal}.
        </p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-4 text-sm transition-opacity duration-300 ${
          status === "error" && feedback ? "text-red-600 opacity-100" : "opacity-0"
        }`}
      >
        {status === "error" ? feedback : ""}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline gap-2 text-sm font-medium text-navy-900">
        {label}
        {optional ? <span className="text-xs font-normal text-navy-900/40">optional</span> : null}
      </label>
      {children}
      <p
        className={`mt-1.5 text-xs text-red-600 transition-all duration-300 ${
          error ? "max-h-8 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        {error}
      </p>
    </div>
  );
}
