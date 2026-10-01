# Ali Ben Jannet — Portfolio

Personal portfolio of **Ali Ben Jannet**, Data Science & AI engineering student at ESPRIM (Monastir, Tunisia).

**Live:** https://alibenjannet.vercel.app

## Features

- Bilingual content (English / French), remembered per visitor and defaulting to the browser language
- Sections: hero, about, experience timeline, skills, projects, certifications and contact
- Downloadable CV in French or English
- Working contact form (Next.js route handler + Nodemailer) with a spam honeypot and input validation
- SEO: metadata, JSON-LD (Person / WebSite), sitemap, robots and a generated Open Graph image
- Accessible navigation: skip link, active-section highlighting, keyboard-friendly menu, reduced-motion support
- Security headers and no secrets in the repository

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · DaisyUI 5 · lucide-react · Nodemailer

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your SMTP credentials
npm run dev
```

Open http://localhost:3000.

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `node --env-file=.env.local scripts/smtp-test.cjs` | Check the SMTP configuration |

## Environment variables

| Variable | Description |
| --- | --- |
| `SMTP_HOST` | SMTP server, e.g. `smtp.gmail.com` |
| `SMTP_PORT` | `465` (TLS) or `587` (STARTTLS) |
| `SMTP_SECURE` | `true` for port 465 |
| `SMTP_USER` | SMTP login |
| `SMTP_PASS` | SMTP password (for Gmail, a 16-character App Password) |
| `SMTP_FROM` | Sender shown in the email |
| `TO_EMAIL` | Address that receives the messages |

On Vercel, set them in **Project Settings → Environment Variables**.

## Project structure

```
src/
  app/            layout, page, API route, SEO files, 404, Open Graph image
  components/     one component per section + shared UI (Title, Reveal, SocialLinks…)
  lib/site.ts     shared data: links, contact info, navigation, CV paths
  assets/         images (profile, projects, company and technology logos)
public/           CV PDFs and logo
```

To update content, edit the data arrays at the top of each component in `src/components/`.
