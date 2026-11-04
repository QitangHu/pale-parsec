# Pale Parsec

A personal blog built with Astro.

## Development

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

## Pages and languages

The site includes home, About, and Blog pages. English routes are at `/`, `/about/`, and `/blog/`; Chinese routes are under `/ch/`. Blog posts live in `src/pages/posts/` as Markdown files and are listed with the newest publication date first.

Shared layouts and components are in `src/layouts/` and `src/components/`. Translation strings are maintained in `src/i18n/ui.ts`.

## Project structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Shared interface components
│   ├── data/               # Shared post data
│   ├── i18n/               # Translation strings
│   ├── layouts/            # Page layouts
│   ├── pages/              # Routes and Markdown posts
│   ├── scripts/            # Browser-side interactions
│   └── styles/             # Global styles
└── astro.config.mjs
```
