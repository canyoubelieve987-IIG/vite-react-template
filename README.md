# Infinite Imagination Guide — React + Vite

A fast landing site scaffold for the Infinite Imagination Guide GPT.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
This creates a production bundle in `dist/`.

## Deploy to Cloudflare Pages (Git)
1. Push this folder to a GitHub repo.
2. In Cloudflare dashboard: **Workers & Pages → Create application → Pages → Import Git repo**.
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy.
(Cloudflare docs: Git integration & Vite guide.)

## Direct Upload (no Git)
Build locally, then drag-and-drop the `dist/` folder in **Workers & Pages → Create application → Pages → Direct Upload**.
(Cloudflare docs: Direct Upload.)

---

Tailwind is preconfigured. Edit `src/App.jsx` to customize copy & sections.
