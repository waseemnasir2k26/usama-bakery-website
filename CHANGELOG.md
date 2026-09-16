# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of `usama-bakery-website` — a single-page demo bakery website built for Usama Chaudhry, with an amber-gradient design, animated hero, product showcase, testimonials, and a contact form plus floating button that hand off to WhatsApp.
- Stack: React 19 + Vite + Tailwind CSS, ESLint for linting. Ten JSX components under `src/components/` (Navbar, Hero, Marquee, Products, About, Features, Testimonials, Contact, Footer, WhatsAppButton); the only public asset is `favicon.svg`.
- Status: public repo, still on its initial commit from 2026-02-20, package version 1.0.0. Runs with `npm run dev` / `npm run build`; the README documents a Vercel import as the deploy path but no live URL is stated in the repo.
- Reviewed September 2026: documentation refreshed, package version bumped to 1.1.0, released as v2026.09. No component, styling or build-config changes.
- Known gaps visible in the repo: no CHANGELOG before this release, no LICENSE file despite the README claiming MIT, no tests, the README clone command still has a `YOUR_USERNAME` placeholder, and the WhatsApp number is hard-coded in `Contact.jsx` and `WhatsAppButton.jsx` rather than configured in one place.
