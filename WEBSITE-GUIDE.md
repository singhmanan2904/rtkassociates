# Website Guide (for non-developers)

This explains, in plain language, what was recently changed on the website and how you can
update things yourself later — no coding knowledge needed for most of it.

## What changed

1. **The contact form now works without needing a paid server.**
   It sends messages using a free service called Web3Forms. When someone fills the form
   and hits "Send message," it emails you directly.
   - Before it can send real emails, someone needs to get a free key from
     [web3forms.com](https://web3forms.com) (just enter an email, no signup) and add it to
     the site's settings as `NEXT_PUBLIC_WEB3FORMS_KEY`. Until that's done, the form will
     show a polite "not set up yet" message instead of failing silently.

2. **A Google Map was added to the Contact section**, right under the office address, so
   visitors can see exactly where the office is and get directions.

3. **A few simple graphics/icons were added** — a building illustration on the About
   section, and a small icon for each service on the Services section (e.g. an icon next
   to "Company & LLP Incorporation," "Secretarial Audit," etc.), plus a small document icon
   next to "Prefer email?" in Contact. These are drawn directly in the site's code (not
   photo files), so they always match the site's colors.

## Where to change things

Almost everything you'd want to edit as a non-developer lives in **one file**:

```
src/lib/site.ts
```

Open it in any text editor. It's a plain list of the site's content. Here's what lives there
and what happens if you change it:

| What you want to change | What to edit in `site.ts` |
| --- | --- |
| Company name, tagline, description | `name`, `tagline`, `description` |
| Email address | `email` |
| Phone number | `phone` and `phoneHref` |
| Office address | `address.line1`, `address.line2` |
| The pin location on the map | `address.mapQuery` — just type the address you want the map to point to |
| Office hours | `hours` |
| Homepage stats (e.g. "450+ Companies advised") | `stats` |
| List of services and their descriptions | `services` |
| Company timeline / milestones | `experience` |
| Industries you serve (the scrolling list) | `sectors` |
| "Why work with us" points | `values` |
| Step-by-step process | `process` |
| FAQ questions and answers | `faqs` |

**Rule of thumb:** only change the text between quote marks (`"like this"`). Don't delete
commas, quote marks, or curly brackets `{ }` — those hold everything together. If something
breaks, undo your last change and try again more carefully.

## Things that need a developer

- Changing the layout, colors, fonts, or how sections are arranged on the page.
- Adding brand-new sections or pages.
- Replacing the drawn icons/illustrations with real photos.
- Setting up the Web3Forms key for the first time (a one-time, 5-minute task).

## Quick summary

- **To change any text on the site** (address, services, FAQs, etc.) → edit `src/lib/site.ts`.
- **To move the map pin** → edit `address.mapQuery` in that same file.
- **To make the contact form actually send emails** → get a free key from web3forms.com and
  add it as `NEXT_PUBLIC_WEB3FORMS_KEY`.
- **For anything about design or layout** → ask a developer.
