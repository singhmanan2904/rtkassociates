# RKT & Associates — Company Secretary & Corporate Governance Advisor

Marketing site for a practising company secretary firm, built with the Next.js App Router.

## Stack

| Concern     | Choice                                                   |
| ----------- | -------------------------------------------------------- |
| Framework   | Next.js 16 (App Router, React 19, TypeScript)             |
| Styling     | Tailwind CSS v4 with design tokens in `src/app/globals.css` |
| Animation   | CSS transitions driven by an `IntersectionObserver` (`src/components/Reveal.tsx`) — no animation library |
| Validation  | Zod schema run client-side before submission               |
| Email       | Web3Forms — frontend-only, no backend required             |

## Running it

```bash
npm install
cp .env.example .env.local   # optional — the form works without it locally
npm run dev
```

Open http://localhost:3000.

> The repo pins `registry=https://registry.npmjs.org/` in `.npmrc` because the machine's
> global npm config points at a VPN-only mirror. Delete the file if you don't need it.

## The contact form

The form (`src/components/ContactForm.tsx`) posts straight from the browser to
[Web3Forms](https://web3forms.com) — there is no API route and no server-side code, so the
site can be deployed as a fully static export if you ever want to.

What happens on submit:

1. **Validates** with the Zod schema in `src/lib/contact-schema.ts` and shows inline errors.
2. **Drops bots** silently via a `website` honeypot field hidden from people — if it's
   filled in, the form fakes a success response and never calls Web3Forms.
3. **Sends** a JSON POST to `https://api.web3forms.com/submit` with the access key, and
   sets `replyto` to the sender's address so you can answer from your inbox.

Get a free access key at https://web3forms.com (just an email address, no account), then
set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`. It's meant to be public — restrict it to
your domain from the Web3Forms dashboard once you're live. Without the key set, the form
shows a friendly "not configured" message instead of failing silently.

Web3Forms' free tier has no submission cap. There's no built-in rate limiting since there's
no server to hold state — their own spam filtering plus the honeypot cover most abuse.

## Editing content

Nearly all copy lives in **`src/lib/site.ts`** — firm details, nav, stats, services,
milestones, values, process and FAQs. Change it there and every section follows.

Firm facts live in that file: the practitioner, the practice opening date, services,
career history, phone and address. The phone number and office address are the ones
already chosen for the site.

The embedded map in the Contact section (`src/components/sections/Contact.tsx`) reads
`site.address.mapQuery` and needs no API key — edit that one string to move the pin.

The line-art graphics (skyline, service icons, document stack) are inline SVG components in
`src/components/Illustrations.tsx`, not image files — edit them there, or swap in real
photos via `next/image` if you'd rather use photography.

## Deploying

Frontend-only, so any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
Set `NEXT_PUBLIC_WEB3FORMS_KEY` as a build-time environment variable wherever you deploy.

## Accessibility & motion

Semantic landmarks, a skip link, labelled fields with `aria-invalid`, a live region for
form status, and visible focus rings. Every animation is disabled under
`prefers-reduced-motion: reduce`.
