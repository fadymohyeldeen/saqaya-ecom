# Architecture

The project uses a **layer-based structure** — folders are organized by technical concern (stores, components, utils), not by feature.

```
src/
├── assets/
│   |── icons/          ← SVG icons (grouped by component/page)
|   |    ├── about/
|   |    ├── cart/
|   |    ├── contact/
|   |    ├── footer/
|   |    ├── header/
|   |    ├── products/
|   |    └── shared/
|   |
│   └── images/         ← Static images
|
├── components/
│   ├── about/          ← About page components
│   ├── cart/           ← Cart components
│   ├── contact/        ← Contact page components
│   ├── home/           ← Home page components
│   ├── layout/         ← AppHeader, AppFooter
│   ├── shared/         ← Reusable components across pages
│   └── single-product/ ← Product detail components
|
├── layouts/            ← Page layout wrappers (DefaultLayout)
|
├── router/             ← Route definitions
|
├── services/           ← Single axios instance used by all stores
|
├── stores/             ← Global state — Pinia stores (cart, products)
|
├── styles/             ← Global CSS — variables, reset, typography, etc.
|
├── types/              ← TypeScript interfaces (file per type)
|
├── utils/              ← Static content & helper functions
|
└── views/              ← Site pages
```

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Routes

| Path              | Name        | Component          | Lazy | Notes                        |
| ----------------- | ----------- | ------------------ | ---- | ---------------------------- |
| `/`               | `home`      | `HomeView.vue`     | No   | Eagerly loaded               |
| `/products`       | `products`  | `ProductsView.vue` | Yes  |                              |
| `/products/:id`   | `product`   | `ProductView.vue`  | Yes  | `:id` is the product ID      |
| `/about-us`       | `about`     | `AboutView.vue`    | Yes  |                              |
| `/contact`        | `contact`   | `ContactView.vue`  | Yes  |                              |
| `/:pathMatch(.*)` | `not-found` | `ErrorView.vue`    | Yes  | Catches all unmatched routes |

## ||||||||||||||||||||||||||||||||||||||||||||||||| State Management

Two Pinia stores:

- **products** — product list, selected product, categories, flash sale, sort/filter state
- **cart** — cart items, sidebar open/close, persists to localStorage
