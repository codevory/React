# React Notes App

A simple notes app built with React + Vite and styled with Tailwind CSS. Create notes with a title and details, toggle dark/light theme, and delete notes with a confirmation.

## Features

- Add a note (title + details) with basic validation
- View recent notes in a scrollable list
- Delete notes (with confirm dialog)
- Dark / light mode toggle (theme persists in `localStorage`)
- Responsive layout (form + list side-by-side on larger screens)

## Tech Stack

- React
- Vite
- Tailwind CSS (via `@tailwindcss/vite`)
- ESLint

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install & Run

From the `React-NotesApp` folder:

```bash
npm install
npm run dev
```

Open the local dev URL printed in the terminal (usually `http://localhost:5173`).

## Scripts

```bash
npm run dev      # start development server
npm run build    # create production build
npm run preview  # preview production build locally
npm run lint     # run eslint
```

## Project Structure

```text
src/
	App.jsx                         # notes UI + add/delete logic
	main.jsx                        # app bootstrap
	App.css                         # Tailwind import + app styles
	components/
		ThemeContext/
			ThemeContext.jsx            # theme state + localStorage sync
			ThemeToggle.jsx             # toggle button
```

## Notes & Limitations

- Notes are stored in component state, so they reset on page refresh.
- Only the theme is persisted (stored in `localStorage` under the key `theme`).

## Quick Ideas to Extend

- Persist notes to `localStorage` (or a backend) so they survive refresh
- Add edit functionality and timestamps
- Add search / filter for notes
