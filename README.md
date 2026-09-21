# Maxy Learning

**Learn tech by doing, not just reading.** Maxy Learning is an interactive learning platform that brings six tech courses into one dashboard, with visual quizzes, live editors and in-browser simulators.

## Courses

| Course | Route | Highlights |
| --- | --- | --- |
| UI/UX Mastery | `/ui-ux-mastery` | Visual quiz comparing real interfaces, Fixer Studio live editor, EN/ID |
| UML Mastery | `/uml-mastery` | Real-world case studies, drag-and-drop diagram builder |
| Git Mastery | `/git-master` | Simulated terminal with command checking, live repository/branch visualizer |
| Frontend Development | `/frontend` | HTML, CSS & DOM workshops, page builder, EN/ID |
| Backend Laravel | `/backend-laravel` | Guided MVC/Eloquent modules, 20-question quiz, code builder, live demo |
| Ethical Hacking | `/ethical-hacking` | 13-module curriculum, pentest tools reference library |

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide · React Markdown · Vercel

## Getting Started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

## Project Structure

```
app/                 Combined platform (landing page + one route per course)
apps/frontend/       Frontend Development as a standalone deployable app
apps/ui-ux/          UI/UX Mastery as a standalone deployable app
public/              Shared static assets
```

Frontend Development and UI/UX Mastery can also be deployed on their own by pointing a Vercel project at `apps/frontend` or `apps/ui-ux` as the Root Directory. Their source lives in `apps/<course>/src` and is re-exported by the combined platform, so one edit updates both deployments.
