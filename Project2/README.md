# Project 2 – Picsum Gallery

Minimal React + Vite app that fetches photo metadata from the Picsum API, renders cards with author names, and paginates through results. Styling uses Tailwind CSS v4 via the new `@import "tailwindcss"` entrypoint.

## Quick start

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Create production build: `npm run build`
- Preview build locally: `npm run preview`

Requires Node.js 18+.

## Features

- Fetches 20 photos per page from `https://picsum.photos/v2/list` using `axios` with basic pagination state in [src/App.jsx](src/App.jsx#L6-L53).
- Displays a loading placeholder while data is empty, then renders a grid of cards with image + author in [src/components/Card.jsx](src/components/Card.jsx#L3-L17).
- Prev/Next pagination controls reset the list while fetching and disable the prev button on page 1.
- Simple Tailwind-driven layout with scrollable viewport container defined in [src/App.jsx](src/App.jsx#L43-L53) and imported styles in [src/App.css](src/App.css#L1).

## Tech stack

- React 19 with Vite 7
- Axios for HTTP requests
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)

## API details

- Endpoint: `GET https://picsum.photos/v2/list?page={page}&limit=20`
- Response shape: array of `{ id, author, width, height, url, download_url }`
- Cards link to the original `url` in a new tab and show the `download_url` image.

## Project structure

- [src/main.jsx](src/main.jsx#L1-L10) – mounts the app.
- [src/App.jsx](src/App.jsx#L6-L64) – data fetching, pagination state, layout.
- [src/components/Card.jsx](src/components/Card.jsx#L3-L17) – presentational card component.
- [src/App.css](src/App.css#L1) – Tailwind import.

## Notes and possible improvements

- `copyData` state in [src/App.jsx](src/App.jsx#L9-L13) is currently unused; remove or wire it into caching/pagination history.
- Add error handling and retry UI around the API call.
- Consider skeleton loaders instead of the text-only loading state.
- Add tests for the pagination logic and card rendering.
