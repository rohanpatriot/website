# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (localhost:3000)
- `d3k` — Start dev server via [dev3000](https://dev3000.ai/) with AI-enabled browser monitoring (captures server logs, browser events, network requests, and auto-screenshots). Use this instead of `npm run dev` when debugging with Claude Code.
- `d3k -p 3000` — Explicitly set port (default reads from `dev` script)
- `npm run build` — Production build (static generation via Turbopack)
- `npm run lint` — ESLint 9 flat config with next/core-web-vitals + TypeScript rules

## Architecture

Next.js 16 App Router personal site with MDX essays, Framer Motion animations, and a Swiss/Modernist design system. All pages are statically generated.

**Path alias**: `@/*` maps to `./src/*`

### Key directories

- `src/app/` — Pages (App Router). Essays use dynamic routes: `essays/[slug]/page.tsx` with `generateStaticParams`
- `src/components/` — Organized into `layout/`, `typography/`, `ui/`, `animation/`, `mdx/` with barrel exports via `index.ts`
- `src/content/essays/` — MDX essay files. Metadata via `export const meta = { title, description, date, published }` (not YAML frontmatter)
- `src/data/` — Static TypeScript data files (`tools.ts`, `projects.ts`) with typed interfaces. No external data layer
- `src/lib/essays.ts` — Server-side essay loading. Parses `export const meta` blocks via regex, computes reading time
- `src/lib/animations.ts` — Shared Framer Motion variants and easing curves
- `src/app/globals.css` — Full design system: CSS custom properties for palette, spacing (8px grid), fluid typography (clamp), and micro-interaction classes

### Design system

Monochrome only — no color, no gradients, no shadows. Semantic tokens: `--fg`, `--fg-muted`, `--bg`, `--border`. Spacing tokens: `--space-1` (8px) through `--space-15` (120px). Typography uses a 1.333 modular scale with negative letter-spacing.

Tailwind CSS v4 with `@theme inline` in globals.css (no tailwind.config file). Custom CSS classes for interactions: `.card-row`, `.nav-link`, `.tag`, `.prose-swiss`.

### Fonts

Inter (sans) and JetBrains Mono (mono) loaded via `next/font/google` with CSS variables `--font-inter` and `--font-jetbrains-mono`.

### MDX pipeline

`@next/mdx` compiles `.mdx` files. No remark/rehype plugins (Turbopack can't serialize function-based plugins). Essay metadata is parsed server-side from the raw `export const meta` block — gray-matter is no longer used for frontmatter.

### Animation patterns

Framer Motion wrappers in `src/components/animation/`: `ScrollReveal` (viewport-triggered), `StaggerChildren`/`StaggerItem` (list stagger), `TextReveal` (word-by-word), `PageWrapper` (page transitions via `template.tsx`). Shared easing: `[0.25, 0.1, 0.25, 1]`. Uses `useInView` hook instead of `whileInView` to prevent invisible content on client-side navigation.

### Navigation

Fixed nav with scroll-triggered border. Mobile overlay with hamburger-to-X animation and `AnimatePresence`. Menu closes via `onClick` handlers on links (no pathname-watching useEffect — causes lint errors with React 19).

## Adding an essay

1. Create `src/content/essays/{slug}.mdx`
2. Add `export const meta = { title: "...", description: "...", date: "YYYY-MM-DD", published: true }`
3. Write content below the export (standard MDX — no YAML frontmatter)
4. Date strings must use `T00:00:00` suffix when constructing `Date` objects to avoid timezone off-by-one

### OG images

Dynamic OpenGraph images generated via `next/og` `ImageResponse` in `opengraph-image.tsx` files. Uses inline JSX styles (no Tailwind). Each essay gets a unique OG image with title, date, and description.

## Conventions

- Server components by default; `"use client"` only when needed (animation wrappers, Navigation)
- Polymorphic components use `as` prop (Heading, Container, Label, Mono)
- `Heading` component maps `level` prop (display/h1/h2/h3) to HTML tag + CSS class
- `params` in dynamic routes is `Promise<{ slug: string }>` (Next.js 16 async params)
- Strict TypeScript. ESLint 9 with React 19 rules (no refs during render, no setState in effects)
- No test framework configured. Verify changes with `npm run build` and `npm run lint`
