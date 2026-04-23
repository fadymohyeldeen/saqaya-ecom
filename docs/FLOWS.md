# Project Data Logic & Flows

This document explains the "under-the-hood" logic of how data flows in the application.

---

## 1. Adding a Product to Cart

This process ensures data moves from the UI to persistent storage safely.

**Step 1: User Interaction**

- **Location 1:** `ProductCard.vue` (Home/Grid) -> Quick Add (automatically adds **quantity 1**).
- **Location 2:** `ProductView.vue` (Single Product Page) -> Batch Add (allows user to select **specific quantity** before adding).
- **Action:** User clicks "Add to Cart" button.
- **Code:** Both locations call the same Pinia action: `cartStore.addToCart(newItem, quantity)`.

**Step 2: Store Communication**

- **Location:** `cart.ts` (Pinia Store)
- **Logic:** The store receives the product object.
- **Check:** Does this `id` already exist in the `cartItems` array?
  - **Yes:** Update the `quantity` property of that item.
  - **No:** Append the product to the array with `quantity: 1`.

**Step 3: Persistence**

- **Location:** `utils/storage.js`
- **Action:** The store calls `setToLocalStorage`.
- **Result:** Data is converted to a JSON string and saved in the browser to survive page refresh.

**Step 4: UI Sync (Reactive)**

- **Location:** `CartSidebar.vue`
- **Reaction:** The Sidebar detects the new item in the store.
- **Result:** The product appears visually in the cart as a CartItem with the updated quantity.

---

## 2. Smart Prefetching (Products Grid)

This flow explains the optimized "Load More" logic that makes the UI feel the items are loading instantly.

**Step 1: The Initial Batch (Pre-fetching)**

- **Location:** `ProductsView.vue`
- **Trigger:** `onMounted()` calls the `fetchByCategory()` helper.
- **Action:** `productsStore.getProducts()` is called.
- **Strategy:** The API request asks for **40 products** (`limit: 40`), but the UI only shows 20.
- **Result:** 20 products are visible immediately, and 20 are "hidden" in the Store's background buffer.

**Step 2: Instant "Load More"**

- **Action:** User clicks the "Load More" button.
- **Logic:** `loadMoreProducts()` initiates.
- **UI Update:** `displayedProductsCount` is increased to 40 (crrent 20 + 20 buffered).
- **Result:** The 20 buffered products appear **instantly** because they were already in the Store.

**Step 3: Background Refill**

- **Action:** While the user looks at the new items, a background API call fetches **20 more** products.
- **Logic:** `api.get('/products?skip=40&limit=20')`.
- **Merge:** These new items are appended to the `products` array.
- **Final State:** The buffer is refilled, ready for the next time the user clicks "Load More".
