# Bell Nob Golf Course — Newsletter

A single-page, static **course newsletter** for Bell Nob Golf Course (Gillette, Wyoming): club pro message, superintendent / grounds update with photos, full **tournament calendar**, and past-update summaries. Built for a calm, print-adjacent layout and **static hosting** (no server runtime).

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** v4 + **shadcn/ui** (Base UI primitives)
- **`output: "export"`** — static HTML in `out/` for Netlify or any static host

## Scripts

```bash
npm run dev    # local development
npm run build  # production build → ./out
npm run lint   # ESLint
```

## Editing content

| What | Where |
|------|--------|
| Issue date, club pro, grounds copy & images, accordion “past” blurbs | `lib/data.ts` |
| Tournament / league calendar (month groups) | `lib/calendar.ts` |
| Course & grounds photos (paths like `/grounds/…`) | `public/grounds/` and `public/` |
| Page structure & sections | `app/page.tsx` |
| Reusable UI | `components/` |

After changing copy or assets, run `npm run build` before deploy so the static export reflects updates.

## Environment (sharing & Open Graph)

Set **`NEXT_PUBLIC_SITE_URL`** to your **public site URL** with no trailing slash (for example `https://your-site.netlify.app`). It is read at **build** time for `metadataBase` and social preview URLs. Copy `.env.example` to `.env.local` for local builds, and add the same variable in **Netlify → Site configuration → Environment variables**.

## Deploy (Netlify)

`netlify.toml` runs `npm run build` and publishes **`out/`**. Connect the repo, set `NEXT_PUBLIC_SITE_URL` for the production (and preview) context, then deploy.

## License

Private project for the club; no license is implied unless you add one.
