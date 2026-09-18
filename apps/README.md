# Standalone course apps

Each folder here is a **complete, self-contained Next.js app** that can be deployed to
Vercel on its own domain, independently of the combined platform in the repo root.

| Folder            | Course          | Vercel Root Directory |
| ----------------- | --------------- | --------------------- |
| `apps/frontend`   | Frontend 101    | `apps/frontend`       |
| `apps/ui-ux`      | UI/UX Mastery   | `apps/ui-ux`          |

## Deploying to Vercel

Create **one Vercel project per folder** (both can point at this same Git repo):

1. **Add New… → Project** → import this repository.
2. Under **Root Directory**, click *Edit* and pick `apps/frontend` (or `apps/ui-ux`).
3. Leave *Framework Preset* as **Next.js** — everything else is auto-detected.
4. Deploy.

No environment variables are required. Each project has its own `package.json`,
`next.config.ts`, `tsconfig.json`, `app/` directory and `public/` assets, so Vercel
never needs files from outside its root directory.

> Turn **off** "Include files outside the Root Directory" if Vercel offers it — these
> apps don't need it.

## Running locally

```bash
cd apps/frontend    # or apps/ui-ux
npm install
npm run dev
```

## Layout of an app

```
apps/<course>/
  app/
    layout.tsx     # <html>/<body>, fonts, metadata
    globals.css    # full Maxy design system (Tailwind v4)
    page.tsx       # re-exports src/CoursePage
  public/          # course assets
  src/
    CoursePage.tsx # the course itself — shared with the combined platform
    components/
    data/ or lib/data/   # bilingual course content
    i18n/          # language provider, EN/ID toggle, UI dictionaries
```

## Single source of truth

`src/` is the **only** copy of each course. The combined platform at the repo root
does not duplicate it — `app/frontend/page.tsx` and `app/ui-ux-mastery/page.tsx`
just re-export `src/CoursePage.tsx` through the `@frontend/*` and `@belajar/*`
tsconfig path aliases. Edit a course once, and both deployments get the change.

## Bilingual content (EN / ID)

Every course renders in English or Bahasa Indonesia. The switch lives in the welcome
card at the top of each page and the choice is remembered in `localStorage`.

- **Content** (`src/data/*`, `src/lib/data/*`) is typed as `Bilingual<T>` — an object
  with `en` and `id` keys. Components read `data[lang]`.
- **Interface chrome** (buttons, counters, empty states) lives in `src/i18n/ui.ts`.
- **Text inside illustrations** lives in `src/i18n/visuals.ts`.

To add or fix a translation, edit the matching `id` entry — the shape is identical to
`en`, and TypeScript will flag anything you miss.
