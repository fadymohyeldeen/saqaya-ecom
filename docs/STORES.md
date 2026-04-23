# Stores (Pinia)

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 🛒 Cart Store

`src/stores/cart.ts`

Manages cart items and sidebar visibility. Cart items are persisted to localStorage on every change.

---

### State

| Name         | Type         | Description                         |
| ------------ | ------------ | ----------------------------------- |
| `cartItems`  | `CartItem[]` | List of items currently in the cart |
| `isCartOpen` | `Boolean`    | Controls cart sidebar visibility    |

---

### Getters

| Name             | Returns  | Description                                  |
| ---------------- | -------- | -------------------------------------------- |
| `cartItemsCount` | `Number` | Total quantity across all cart items         |
| `cartTotal`      | `Number` | Total price (price × quantity) for all items |

---

### Actions

| Name                     | Params               | Description                                                                               |
| ------------------------ | -------------------- | ----------------------------------------------------------------------------------------- |
| `addToCart`              | `newItem, quantity?` | Adds a product to the cart. If it already exists, increments quantity. Opens the sidebar. |
| `removeFromCart`         | `itemId`             | Removes an item from the cart by ID                                                       |
| `updateCartItemQuantity` | `itemId, quantity`   | Updates item quantity. Removes the item if quantity is set to 0                           |
| `clearCart`              | —                    | Empties the cart and removes it from localStorage                                         |
| `toggleCart`             | —                    | Opens or closes the cart sidebar                                                          |

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 📦 Products Store

`src/stores/products.ts`

Manages all product data — the product grid, single product view, home page sections, and filter/sort state.

---

### State

| Name                     | Type              | Description                                                     |
| ------------------------ | ----------------- | --------------------------------------------------------------- |
| `products`               | `Product[]`       | Full list of products loaded for the current filter/sort        |
| `displayedProductsCount` | `Number`          | How many products to show — increases by 20 on each "Load More" |
| `totalProductsCount`     | `Number`          | Total products available from the API for the current query     |
| `selectedProduct`        | `Product \| null` | The product currently shown on the product detail page          |
| `relatedProducts`        | `Product[]`       | Products in the same category as `selectedProduct`              |
| `categoryList`           | `String[]`        | All available category slugs                                    |
| `flashSaleProducts`      | `Product[]`       | Top 8 products sorted by highest discount — used on home page   |
| `exploreProducts`        | `Product[]`       | 8 random products — used on home page                           |
| `selectedCategory`       | `String \| null`  | The active category filter slug. `null` means all categories    |
| `sortBy`                 | `String`          | Field to sort by (default: `'createdAt'`)                       |
| `sortOrder`              | `String`          | Sort direction: `'asc'` or `'desc'` (default: `'desc'`)         |
| `error`                  | `String \| null`  | Stores the last error message from a failed API call            |
| `isLoading`              | `Boolean`         | True while any API request is in progress                       |

---

### Getters

| Name                | Returns     | Description                                                              |
| ------------------- | ----------- | ------------------------------------------------------------------------ |
| `displayedProducts` | `Product[]` | Slice of `products` up to `displayedProductsCount` — used for pagination |

---

### Actions

| Name                   | Params              | Description                                                                            |
| ---------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| `getProducts`          | —                   | Fetches up to 40 products. Respects `selectedCategory`, `sortBy`, and `sortOrder`      |
| `loadMoreProducts`     | —                   | Fetches the next 20 products and appends them to `products`                            |
| `getProductById`       | `productId`         | Fetches a single product and sets `selectedProduct`                                    |
| `getRelatedProducts`   | `category`          | Fetches 8 products from the same category and sets `relatedProducts`                   |
| `getFlashSaleProducts` | —                   | Fetches 8 products sorted by highest `discountPercentage` and sets `flashSaleProducts` |
| `getCategoryList`      | —                   | Fetches all category slugs and sets `categoryList`                                     |
| `getExploreProducts`   | —                   | Fetches 8 products from a random offset and sets `exploreProducts`                     |
| `setCategory`          | `category`          | Sets `selectedCategory` and resets `displayedProductsCount` to 20                      |
| `setSort`              | `sortBy, sortOrder` | Updates sort state and resets `displayedProductsCount` to 20                           |
