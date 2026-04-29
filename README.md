# Anucha Portfolio

A portfolio and resume website for Anucha Srilakaew, built with Next.js, TypeScript, next-themes, Framer Motion, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL printed by Next.js. This workspace currently uses `http://localhost:3001` because port `3000` was already in use.

## Project Structure

- `lib/i18n.tsx` contains bilingual profile, experience, professional skills, projects, AI, roadmap, education, and language data.
- `components/sections/*` contains the page sections.
- `components/ui/*` contains reusable UI pieces such as theme toggle, section header, and roadmap items.
- `app/projects/page.tsx` contains the My Project List page.
- `app/globals.css` contains the design tokens and responsive layout styles.

## Useful Commands

```bash
npm run typecheck
npm run build
```
