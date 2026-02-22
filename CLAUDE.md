# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro ... # Run Astro CLI (e.g. astro add, astro check)
```

## Architecture

This is an **Astro 5** portfolio site with **Tailwind CSS v4**.

- **Routing**: File-based. Every `.astro` or `.md` file in `src/pages/` becomes a route by its filename.
- **Components**: Place reusable Astro/React/Vue/Svelte components in `src/components/` (not yet created).
- **Styles**: `src/styles/global.css` uses the Tailwind v4 `@import "tailwindcss"` syntax — do **not** use the old `@tailwind base/components/utilities` directives.
- **Tailwind config**: Tailwind v4 is configured as a Vite plugin in `astro.config.mjs` (not via a `tailwind.config.*` file or PostCSS).
- **TypeScript**: Strict mode inherited from `astro/tsconfigs/strict`. The `.astro/types.d.ts` file is auto-generated.
- **Astro frontmatter**: Code between the `---` fences in `.astro` files runs server-side at build time.
- **Static assets**: Place images and other static files in `public/` — they are served at the root URL path.
