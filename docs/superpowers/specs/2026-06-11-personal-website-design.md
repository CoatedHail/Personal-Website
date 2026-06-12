# Personal Website + Tutor Training Platform — Design Spec

**Owner:** Oscar Li (Junior)
**Date:** 2026-06-11
**Status:** v0 scaffold approved; v1 (auth/comments/quizzes) deferred

## Goal

Personal website that doubles as an async tutor-training resource. Primary audience: college admissions officers (the site is a portfolio piece). Secondary audience: aspiring tutors who use the videos/testimonies. Success = real engagement metrics (signups, quiz completions, video views) Oscar can cite on college applications.

## Audience

- **Tutors:** Anyone online wanting to learn how to tutor effectively. Async only — no live sessions.
- **Admissions readers:** Will land on `/` or `/about`. Must feel polished and substantive in under 30 seconds.

## Scope

### In scope — v0 (this scaffold)

- Five pages: Home, About, Videos, Testimonies, Blog
- Visual theme: Academic (navy `#0f1e3d` + gold `#c9a96a`, Playfair serif headers, Inter body)
- Static placeholder copy on every page
- Shared nav + footer
- Local dev server running

### In scope — v1 (after scaffold approved)

- Supabase auth (magic link)
- Comments under each video (Supabase table)
- Quiz per video (MCQ, results stored per user)
- Public counter on homepage: "N tutors trained, M quizzes passed" (engagement proof for apps)
- Real video embeds (YouTube)
- Real testimonies (Oscar + recruited teachers)
- About-page bio with photo, accomplishments, "why this matters" story
- MDX blog posts
- Deploy to Vercel
- Vercel Analytics

### Out of scope

- Live courses / scheduling
- Payments / paid tier
- Self-hosted video
- Native mobile app
- Newsletter / email capture (skipped per user)

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headers), Inter (body) — via `next/font/google`
- **DB / Auth (v1):** Supabase (free tier)
- **Video (v1):** YouTube embeds
- **Blog (v1):** MDX files in repo (no CMS)
- **Deploy (v1):** Vercel
- **Analytics (v1):** Vercel Analytics

## Information architecture

```
/                  Home — hero, value prop, CTA, featured testimony, intro to Oscar
/about             Oscar's story, accomplishments, photo, "why tutor training matters"
/videos            Grid of training videos by topic (v0: placeholders)
/testimonies       Card wall of teacher/tutor testimonies (v0: placeholders)
/blog              Index of MDX posts (v0: placeholders)
```

Shared nav: Home · About · Videos · Testimonies · Blog
Shared footer: small bio line + GitHub/email links

## Known content (to wire in)

- **Name/grade:** Oscar Li, Junior
- **Camp:** CACA Summer Camp — Co-founder — 6 weeks total
- **Accomplishment locked:** Raised $15k+
- **Photo:** Available (path TBD)
- **TBD before v1 About copy lands:** Two additional accomplishments, "why teaching tutors matters" 1–2 sentence story

## Repo layout

```
~/personal-website/
  app/                   Next.js App Router pages
  components/            Nav, Footer, Card, Hero
  public/                Static assets (photo goes here)
  docs/superpowers/specs/  This spec
  tailwind config inline (v4)
```

## Risks

- **Content gap:** About page has placeholder copy until Oscar fills in remaining accomplishments + story. Site can ship and demo before that.
- **Timeline:** Few weeks. v0 ships today; v1 features (auth, comments, quizzes) need ~1–2 weeks more after content is ready.

## Non-goals for v0

Do not block scaffold on Supabase setup, deploy config, real content, or the v1 feature set. The point of v0 is a clickable, themed shell that Oscar can show and iterate on.
