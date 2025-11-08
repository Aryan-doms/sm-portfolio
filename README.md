# Aryan Portfolio

A clean, responsive portfolio site built with Next.js (App Router) and Tailwind CSS, ready to deploy on Vercel.

## Project structure

- `app/` — Next.js App Router pages and global layout/styles
- `components/` — Reusable UI components (Navbar, Section)
- `public/` — Static assets (favicon, images)

## Add your images

Place your uploaded images into `public/images/` with these names:

- `public/images/home.png`  (from your `home.png`)
- `public/images/side.png`  (from your `side.png`)
- `public/images/sai.png`   (from your `sai.png`)
- `public/images/btc.png`   (from your `btc.png`)

If you already see the files in the workspace root, please move them into the `public/images/` folder so the site can serve them.

## Run locally

```bash
# Install deps
npm install

# Start dev server
npm run dev
# open http://localhost:3000
```

## Build and preview

```bash
npm run build
npm start
```

## Deploy on Vercel

- Push this repo to GitHub.
- Import the repo in Vercel and select the Next.js framework preset.
- No extra build settings needed. Vercel will run `npm install`, `npm run build`, and deploy.

## Customize

- Edit copy in `app/page.tsx`.
- Tweak colors in `tailwind.config.ts` and `app/globals.css`.
- Add projects or sections by duplicating the `<Section />` blocks.