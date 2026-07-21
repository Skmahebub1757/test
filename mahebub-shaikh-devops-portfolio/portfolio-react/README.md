# Mahebub Shaikh — DevOps Engineer Portfolio

A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/     Reusable UI + section components
  data/data.js    All content (skills, projects, experience, socials, etc.)
  hooks/          Custom hooks (typing effect, scroll-spy)
  App.jsx         Assembles all sections
  main.jsx        React entry point
  index.css       Tailwind + global styles
```

## Customize

- **Content** — edit `src/data/data.js`. This is the single source of truth for skills,
  projects, experience, certifications, socials, and contact info.
- **Colors / fonts** — edit `tailwind.config.js` (`theme.extend.colors` / `fontFamily`).
- **Resume** — replace `public/resume-placeholder.txt` with your real `public/resume.pdf`
  (the Download Resume buttons link to `/resume.pdf`).
- **Contact form** — currently opens the visitor's email client via `mailto:` (no backend).
  To wire it to a real backend, replace the `handleSubmit` function in
  `src/components/Contact.jsx` with a `fetch()` call to your API or a service like
  Formspree / EmailJS.

## Deploy

Works out of the box on Vercel, Netlify, or GitHub Pages — just point them at
`npm run build` with output directory `dist`.
