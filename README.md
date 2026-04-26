# Vue.js E-Commerce

An e-commerce web app built with Vue 3.

**Live demo:** [exclusive-six-nu.vercel.app](https://exclusive-six-nu.vercel.app/)

---

## Tech Stack

- Vue 3 · Vue Router 4 · Pinia
- TypeScript
- Axios — data from [dummyjson.com](https://dummyjson.com)
- Vite, ESLint, Prettier

---

## Core Features

- Product listing with category filter, sort, and load more pagination.
- Product detail page with image gallery, rating, and reviews.
- Cart sidebar with quantity controls and persistent localStorage state.
- Skeleton loading and error states across all views.
- Responsive, mobile-first layout.

---

## Architecture

```
src/
├── assets/         ← Icons and images (grouped by page/component)
├── components/     ← UI components (grouped by page/component)
├── layouts/        ← Page layout wrappers
├── router/         ← Route definitions
├── services/       ← Axios instance
├── stores/         ← Pinia stores (cart, products)
├── styles/         ← Global CSS Variables, Typography, Reset
├── types/          ← TypeScript interfaces (cart, products)
├── utils/          ← Static content & helper functions
└── views/          ← Pages (one view per route)
```

---

## Getting Started

**Prerequisites:** Node.js 18+
| Script | Description |
| ------------------- | ------------------------------ |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run format` | Format all files with Prettier |
| `npm run test:unit` | Run unit tests |

---

## Environment Variables

| Variable            | Description               |
| ------------------- | ------------------------- |
| `VITE_API_BASE_URL` | Base URL for API requests |

## Env Files

| File               | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `.env.development` | proxies requests through Vite (`/api`) to avoid CORS |
| `.env.production`  | points directly to `https://dummyjson.com`           |
