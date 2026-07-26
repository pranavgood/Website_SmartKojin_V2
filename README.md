# SMART Kojin — Next.js website

Built with Next.js (Pages Router) + next-seo. See the chat conversation this
was produced in for full context, but the short version:

## Before you do anything else

This project was written in a sandbox with **no access to the npm package
registry**, so it has never been through `npm install` or `npm run build`.
The first real build (on your machine or on Vercel) is also the first real
test. That's expected — just don't be surprised if the very first build
throws an error or two. Copy the exact error message back to Claude and it
gets fixed immediately; this is a normal part of shipping code that was
written without a live compiler.

## Local setup (optional — you can also just deploy straight to Vercel)

```
npm install
npm run dev
```
Then open http://localhost:3000

## Deploy

### 1. Push to GitHub

```
cd nextsite
git init
git add .
git commit -m "SMART Kojin website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
(Create the empty repo on github.com first — "New repository", no README/license,
so `git push` has somewhere to land.)

### 2. Import into Vercel

1. Go to vercel.com → sign in with GitHub.
2. "Add New" → "Project" → pick the repo you just pushed.
3. Vercel auto-detects Next.js — leave build settings as default. Click Deploy.
4. Wait for the build to finish. You'll get a `*.vercel.app` URL first — click
   it and click through every page once before touching DNS, so any build
   error surfaces on Vercel's URL, not on the live domain.

### 3. Point smartkojin.com at Vercel (GoDaddy)

1. In Vercel: open the project → Settings → Domains → add `smartkojin.com`
   (and add `www.smartkojin.com` too, then pick which one redirects to the
   other — usually apex → www or www → apex, your call).
2. Vercel will show you the exact DNS records to add. As of this build,
   the standard values are:
   - Apex domain (`smartkojin.com`): **A record**, host `@`, value `76.76.21.21`
   - `www` subdomain: **CNAME record**, host `www`, value `cname.vercel-dns.com`

   Vercel sometimes issues a project-specific CNAME instead (e.g. something
   ending in `.vercel-dns-017.com`) — **always use exactly what's shown in
   your Vercel dashboard at the time**, since it can differ from the values
   above and is the one guaranteed to match your project.
3. In GoDaddy: My Products → your domain → DNS → Manage DNS.
   - Delete any existing `A` record on `@` and any existing `CNAME` on `www`
     (GoDaddy's default parked-domain records will conflict otherwise).
   - Add the A record and CNAME record from step 2 exactly as shown.
4. DNS changes typically take effect within the hour, sometimes up to 24-48
   hours. Vercel's Domains tab will show a green checkmark once it verifies —
   if it's stuck, use "Refresh" on that page rather than re-adding the domain.
5. Vercel issues an SSL certificate automatically once DNS verifies — no
   action needed on your end for HTTPS.

### Before you flip the switch — a short go-live checklist

- [ ] Formspree ID set in `contact.js` and `pricing.js` (see **Forms** below)
- [ ] GA4 Measurement ID set in `pages/_app.js` (currently a placeholder,
      analytics won't fire until this is real)
- [ ] Full street address + PIN code added in `contact.js`
- [ ] Real logo file added to `/public/images/` and `LOGO`/`LOGO_FOOTER` in
      `lib/content.js` updated to point to it locally (see **Images** below —
      these still hotlink the old, soon-to-be-repointed domain, which is used
      in the invisible schema.org markup even though the visible logo already
      uses the text wordmark)
- [ ] Clicked through every page on the `*.vercel.app` preview URL at least
      once before adding the custom domain

## Forms

`pages/contact.js` and `pages/pricing.js` submit to Formspree
(https://formspree.io), not Netlify Forms — Netlify's form handling only
works on Netlify, and this project is meant for Vercel. Create a free
Formspree account, add a form, and replace `YOUR_FORM_ID` in both files
with the ID it gives you.

## Images

The visible logo everywhere on the site now uses a text-based `Wordmark`
component, not an image — so this isn't visually broken. But `LOGO` and
`LOGO_FOOTER` in `lib/content.js` still point to
`smartkojin.com/assets/images/...` on the old hosting, and those two
constants feed the invisible schema.org JSON-LD (`organizationSchema.logo`
in `index.js`, `localBusinessSchema.image` in `contact.js`) — worth fixing
since that old domain is being repointed to this new site. Send over the
actual logo file, drop it into `/public/images/`, and update `LOGO`/
`LOGO_FOOTER` to point to it locally.

## Content

All page copy lives in `lib/content.js` — edit the arrays/strings there
and it updates everywhere that content is used.

## What changed in this redesign (July 2026)

- Light-dominant design system in `styles/globals.css` (Stripe-style) —
  white/off-white backgrounds, SMART Kojin green as the identity color, a
  burnt-orange accent reserved for CTAs. Dark is used only where functional
  (video-hero scrim, footer), tinted deep green rather than neutral black.
  Rolled out across every page, not just the homepage.
- Homepage leads with a video hero using the real product demo video
  (trimmed to ~14s / ~2MB) with `public/images/hero-poster.jpg` as the
  poster frame (extracted from the video itself).
- Nav consolidated from 9 items to 5 (`lib/content.js` → `NAV`): Home,
  About, Case Studies, Solutions, Contact. Product/how-it-works, pricing,
  FAQ, and industry pages remain real, indexable URLs reachable via
  in-page links, not the top nav.
- Credibility strip shows SMART Kojin's own logo (previously missing) with
  a single, non-repeated "Powered by Smartenviro Systems" mention in the
  top bar only — the old version repeated the phrase 3 times across
  top-bar, credibility strip, and footer.
- `INDUSTRIES` expanded from 4 to 6 categories (added Municipal
  Corporations and Factories & Industrial Sites) with matching sub-pages,
  aligned to the investor deck's real use-case list.
- Pricing removed from public view everywhere (`pricing.js`, `smart-kojin.js`)
  in favor of scenario-based model matching + "Get a Quote" — `ModelsTable`
  (the price-showing component) is no longer used anywhere.
- `about.js` rewritten: corrected an unverifiable "20+ years / two decades"
  claim to the real, sourced "10+ years" figure, and added the real
  Mission & Vision copy from the investor deck.
- `smart-kojin.js` now includes a real emissions comparison table (SMART
  Kojin vs. landfill vs. traditional incineration), sourced from the
  investor deck's own product testing data.
- 3 new blog posts added, covering education/adoption/execution:
  `why-incineration-beats-the-alternatives` (detailed, data-heavy),
  `how-institutions-adopt-on-site-disposal`, and
  `installing-smart-kojin-what-execution-looks-like`.
- Reviewed the July 2026 Digipeddle SEO audit (uploaded by you) against
  this rebuild. Most HIGH-priority findings were already fixed by the
  rebuild (schema markup, FAQ page, clean URL slugs). Added on top of
  that: `public/llm.txt` (AI answer-engine readiness — was flagged as
  missing), a gated GA4 scaffold in `pages/_app.js` (analytics was
  flagged as completely absent), `privacy-policy.js` + `terms.js` pages,
  and footer legal links + a repeated "Request a Demo" CTA (footer was
  flagged as missing all of these).

## What changed since (illustrations, easter eggs, readability, blog visibility)

- `styles/globals.css`: body font is now Inter (Google Font, loaded in
  `_document.js`) at 17px/1.65 line-height for readability, plus small
  CSS-only hover/float animation utilities (`.icon-badge`, `.floaty`,
  `.wiggle-on-hover`, `.spin-on-hover`) — all disabled under
  `prefers-reduced-motion` for accessibility.
- New original flat-illustration icons (`components/UI.js` →
  `IndustryIcon`, `StepIcon`), same visual language as the homepage's
  "Three Kinds of Dignity" icons: one per industry (used on the homepage
  Solutions section and `industry-we-serve.js`), and one per "How It
  Works" step (load/sense/incinerate/collect). These replace the old
  photo-placeholder slots on those two pages with real, finished art —
  no stock imagery needed.
- Homepage: new "From the Blog" section surfaces 3 posts before the
  final CTA, and "Blog" was added to the main nav (`lib/content.js` →
  `NAV`) so the blog is one click from anywhere, not just the footer.
- Two small easter eggs (`components/Header.js`): a friendly console
  message for anyone who opens dev tools, and a playful reveal if you
  click the logo 5 times quickly.
- Fixed a leftover inconsistency in `ModelsFit` (used on the homepage
  and `pricing.js`) — it still had a photo-slot placeholder bled into
  each model card, left over from before you asked for those removed
  since there are no stock photos of the 3 incinerator models. Removed.

## Still pending — needs your input, not guesswork

- **Formspree ID**: `YOUR_FORM_ID` in `pricing.js` and `contact.js` is a
  placeholder — sign up at formspree.io and drop in your real form ID.
- **GA4 Measurement ID**: `pages/_app.js` has a gated GA4 scaffold —
  replace `G-XXXXXXXXXX` with your real ID from analytics.google.com.
  Tracking won't fire until you do.
- **Full business address**: `contact.js` still says "Pune, Maharashtra,
  India" with a placeholder note — add the exact street address + PIN
  code (also improves Local SEO per the audit).
- **Logo file**: `LOGO`/`LOGO_FOOTER` in `lib/content.js` still hot-link to
  the old smartkojin.com hosting rather than a local file — send the
  actual logo image file so it can be self-hosted in `/public/images/`.
- **Other social profiles**: footer only links LinkedIn and YouTube (per
  the audit, this weakens trust signals) — send any other real profile
  URLs (Instagram, X/Twitter, Facebook) to add.
- **Real testimonials & case studies**: `TESTIMONIALS` and `CASE_STUDIES`
  in `lib/content.js` are explicitly illustrative placeholders, not real
  named clients — swap in real quotes/results as they're collected.
- **Investor deck**: not yet updated with ideas from this rebuild —
  next step if you want it.
