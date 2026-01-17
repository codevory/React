## Media Search App

Discover, preview, and save media from Unsplash (photos), Pexels (videos), and Tenor (GIFs) in a single place. Built with React, Redux Toolkit, and Vite.

### Features

- Search across photos, videos, and GIFs with tabbed filtering
- Infinite-like refresh by switching tabs on the same query
- Save items to a personal collection with localStorage persistence and toast feedback
- Open original media in a new tab; responsive grid layout with hover states
- Loading indicator and basic error handling during fetches

### Tech Stack

- React 19 + Vite 7
- Redux Toolkit + React Redux for state management
- React Router 7 for routing
- Axios for API requests; React Toastify for notifications
- Tailwind CSS 4 (using the `@import "tailwindcss";` entry) plus custom CSS variables in [src/index.css](src/index.css)

### Prerequisites

- Node.js 18+
- API keys for Unsplash, Pexels, and Tenor

### Environment Variables

Create a `.env` file in the project root (see [example.env](example.env)):

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_TENOR_KEY=your_tenor_api_key
VITE_PEXELS_KEY=your_pexels_api_key
```

### Installation

```bash
npm install
```

### Running the App

- Development: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Preview build: `npm run preview`

### Usage

1. Enter a search term and submit.
2. Switch between Photos, Videos, and GIF tabs to fetch from the corresponding API.
3. Click any result to open the source media in a new tab.
4. Use Save on a result to add it to **myCollection**; visit the myCollection route to review or remove items.

### Key Files

- Routing and layout: [src/App.jsx](src/App.jsx)
- API helpers: [src/api/mediaApi.js](src/api/mediaApi.js)
- State slices: [src/redux/features/searchSlice.js](src/redux/features/searchSlice.js), [src/redux/features/collectionSlice.js](src/redux/features/collectionSlice.js)
- UI: [src/components](src/components) (SearchBar, Tabs, ResultGrid, ResultCard, Navbar, CollectionCard)

### Notes

- Collections persist in `localStorage`; clearing browser storage removes saved items.
- API rate limits apply; failures surface as a simple error state in the grid.
