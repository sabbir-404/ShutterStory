# ShutterStory

A simple photography storytelling website — currently under development.

Status: 🚧 Under development

Summary
- ShutterStory is a photo-first site for publishing and browsing multi-photo stories and albums.

Tech stack
- Next.js (App Router)
- React
- TypeScript
- next/image (Next.js Image component)
- Supabase Storage (public assets) — configured in next.config.mjs
- CSS (global styles at src/app/globals.css)
- Node.js toolchain (npm / yarn / pnpm / bun)
- Recommended deployment: Vercel
- License: MIT

Quick start (local)
1. Clone
   git clone https://github.com/sabbir-404/ShutterStory.git
   cd ShutterStory
2. Install
   npm install
3. Dev server
   npm run dev
4. Open
   http://localhost:3000

Environment
- Create a .env from .env.example (if present).
- Common vars: NEXT_PUBLIC_API_URL, SUPABASE_URL, SUPABASE_ANON_KEY, DATABASE_URL, NODE_ENV.

Where to look in the repo
- src/app — Next.js app routes and pages (app/page.tsx)
- src/components — React components (Nav.tsx, AboutSection.tsx, etc.)
- src/app/globals.css — global styling
- next.config.mjs — image remotePatterns configured for Supabase storage

Contributing
- Fork → branch → PR. Open issues for bugs or feature requests.

Contact
- Maintainer: sabbir-404 — https://github.com/sabbir-404
