# TOTAS Technical Services website

Static React (Vite) site. No backend or email integration: the quote form opens WhatsApp with the request details ready to send.

## Setup

```bash
npm install
npm run dev              # http://localhost:5173
```

## Editing content

Business details (phone, address, licence no.), the services list and service areas live in `src/config.js`. Photos are in `public/images/` (from Unsplash, free for commercial use); replace them with real project photos when available, keeping the same filenames.

## Deploy

```bash
npm run build            # outputs dist/
```

Deploy `dist/` to Netlify, Vercel or Cloudflare Pages (free tiers work).