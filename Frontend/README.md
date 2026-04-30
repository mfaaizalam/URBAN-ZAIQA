# Urban Zaiqa — Restaurant & Catering

Simple React + Vite website. No TanStack, no SSR, no bun. Just plain npm.

## Project structure

```
src/
  assets/         # images & logo
  components/     # reusable UI pieces (Navbar, Footer, CartDrawer, etc.)
  pages/          # one file per route (Home, Packages, Menu, Gallery, Contact)
  lib/            # shared helpers (cart state, data, utils)
  index.css       # Tailwind v4 + design tokens
  main.tsx        # app entry, defines all routes
index.html        # HTML shell with Google Fonts
vite.config.ts    # Vite + Tailwind plugin
```

## Run it

You need [Node.js 18+](https://nodejs.org). Then:

```bash
npm install
npm run dev          # start dev server at http://localhost:5173
npm run build        # production build into dist/
npm run preview      # preview the production build locally
```

## Deploy

Run `npm run build` and upload the `dist/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, your own server, etc.).

For client-side routing to work on refresh, configure your host to serve
`index.html` for unknown URLs (SPA fallback).

## Editing things

- **Add a new page** → create `src/pages/MyPage.tsx`, then add a `<Route>`
  in `src/main.tsx`.
- **Change menu / packages** → edit `src/lib/data.ts`.
- **Change WhatsApp number** → edit `WHATSAPP_NUMBER` in `src/lib/data.ts`.
- **Change colors / fonts** → edit `src/index.css` (CSS variables under `:root`).
