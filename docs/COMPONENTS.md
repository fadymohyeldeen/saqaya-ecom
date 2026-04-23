# Components

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 🧩 ABOUT

### AboutStats _(static)_

`src/components/about/AboutStats.vue`

Displays company stats (sellers, sales, customers, revenue) as icon cards with hover effects.

**Used in:** `src/views/AboutView.vue`

---

### AboutTeam _(static)_

`src/components/about/AboutTeam.vue`

Displays the founding team members with photo, name, role, and social links.

**Used in:** `src/views/AboutView.vue`

---

### StorySection _(static)_

`src/components/about/StorySection.vue`

Displays the company story with a text column and an image.

**Used in:** `src/views/AboutView.vue`

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 🛒 CART

### ButtonTrash

`src/components/cart/ButtonTrash.vue`

An icon button used to remove an item from the cart.

**Used in:** `src/components/cart/CartSummary.vue`

**Props:**

| Prop        | Type    | Default    | Description                         |
| ----------- | ------- | ---------- | ----------------------------------- |
| `disabled`  | Boolean | `false`    | Disables the button                 |
| `ariaLabel` | String  | `'Delete'` | Accessible label for screen readers |

**Emits:** `click` — emitted when the button is clicked.

---

### CartItem

`src/components/cart/CartItem.vue`

Displays a single cart item with image, name, price, and quantity controls.

**Used in:** `src/components/cart/CartSidebar.vue`

**Props:**

| Prop   | Type   | Default  | Description                                      |
| ------ | ------ | -------- | ------------------------------------------------ |
| `item` | Object | required | Cart item object (extends Product with quantity) |

---

### CartSidebar

`src/components/cart/CartSidebar.vue`

The sliding cart panel showing all cart items and a summary.

**Used in:** `src/layouts/DefaultLayout.vue`

No props or emits — reads directly from the cart store.

---

### CartSummary

`src/components/cart/CartSummary.vue`

Displays the cart total and a checkout button.

**Used in:** `src/components/cart/CartSidebar.vue`

No props or emits — reads directly from the cart store.

**Computed:**

- `cartTotal` — total price of all items in the cart
- `cartIsEmpty` — true if the cart has no items

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 📬 CONTACT

### ContactForm _(static)_

`src/components/contact/ContactForm.vue`

A contact form with name, email, phone, and message fields.

**Used in:** `src/views/ContactView.vue`

---

### ContactInfo _(static)_

`src/components/contact/ContactInfo.vue`

Displays the company contact details (phone, email, address).

**Used in:** `src/views/ContactView.vue`

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 🏠 HOME

### CategoryCard

`src/components/home/CategoryCard.vue`

Displays a product category with an icon and name.

**Used in:** `src/components/home/CategorySection.vue`

**Props:**

| Prop   | Type   | Default  | Description   |
| ------ | ------ | -------- | ------------- |
| `name` | String | required | Category slug |

---

### CategorySection _(static)_

`src/components/home/CategorySection.vue`

Renders the category list as a horizontally scrollable row of CategoryCards.

**Used in:** `src/views/HomeView.vue`

---

### HeroBanner

`src/components/home/HeroBanner.vue`

An auto-playing image slider with navigation dots and slide content.

**Used in:** `src/views/HomeView.vue`

No props — slide data is defined inside the component.

**Behavior:** auto-plays every 2 seconds using `setInterval`. Clears the interval on unmount. Wraps back to the first slide after the last one.

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 📐 LAYOUT

### AppHeader

`src/components/layout/AppHeader.vue`

The top navigation bar with logo, search, and cart icon.

**Used in:** `src/layouts/DefaultLayout.vue`

**Behavior:** nav links route to `/` (Home), `/products`, `/contact`, `/about-us`. `toggleCart()` opens the cart sidebar. `menuOpen` controls the mobile hamburger menu.

---

### AppFooter _(static)_

`src/components/layout/AppFooter.vue`

The page footer with links, social icons, and service highlights.

**Used in:** `src/layouts/DefaultLayout.vue`

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 🔗 SHARED

### AppBreadcrumb

`src/components/shared/AppBreadcrumb.vue`

Generates a breadcrumb trail from the current route path.

**Used in:** `all views`

**Props:**

| Prop          | Type   | Default | Description                                                                           |
| ------------- | ------ | ------- | ------------------------------------------------------------------------------------- |
| `productName` | String | `null`  | Replaces the last URL segment (product ID) with the actual product name (if provided) |

**Computed:** `breadcrumbs` — builds the crumb list from the current route path.

**Behavior:** splits the URL into segments and maps each to a label and a link. The last segment has no link since it's the current page. On product pages, pass `productName` to replace the raw ID in the breadcrumb.

---

### ButtonApp

`src/components/shared/ButtonApp.vue`

A reusable styled button with outlined and disabled variants.

**Used in:** `src/components/shared/ProductSection.vue`, `src/components/cart/CartSummary.vue`, `src/components/contact/ContactForm.vue`, `src/components/single-product/ProductActions.vue`, `src/views/ProductsView.vue`, `src/views/ErrorView.vue`

**Props:**

| Prop       | Type    | Default  | Description                                 |
| ---------- | ------- | -------- | ------------------------------------------- |
| `label`    | String  | required | Button text                                 |
| `disabled` | Boolean | `false`  | Disables the button                         |
| `to`       | String  | `null`   | If passed, the button will be a router-link |

---

### DropdownMenu

`src/components/shared/DropdownMenu.vue`

A custom select dropdown with icon or text trigger. Closes when clicking outside.

**Used in:** `src/views/ProductsView.vue`

**Props:**

| Prop      | Type   | Default  | Description                                                  |
| --------- | ------ | -------- | ------------------------------------------------------------ |
| `options` | Array  | required | List of `{ label, value }` objects                           |
| `icon`    | String | `null`   | Icon path — renders an icon trigger instead of a text button |

**Emits:** `select` — emitted with the selected option object when an option is clicked.

**Methods:** adds a click listener on `document` on mount to detect outside clicks and close the dropdown. Removes the listener on unmount.

---

### ErrorMessage

`src/components/shared/ErrorMessage.vue`

Displays an error banner with an icon.

**Used in:** `src/views/ProductsView.vue`, `src/views/ProductView.vue`

**Props:**

| Prop      | Type   | Default  | Description               |
| --------- | ------ | -------- | ------------------------- |
| `message` | String | required | The error text to display |

---

### InputField

`src/components/shared/InputField.vue`

A styled text input field.

**Used in:** `src/components/contact/ContactForm.vue`

**Props:**

| Prop          | Type   | Default  | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| `type`        | String | `'text'` | Input type (text, email, etc.) |
| `name`        | String | `null`   | Input name attribute           |
| `placeholder` | String | `''`     | Placeholder text               |

---

### ProductCard

`src/components/shared/ProductCard.vue`

Displays a product with image, price, discount badge, rating, and add to cart button. Shows a skeleton while loading.

**Used in:** `src/views/ProductsView.vue`, `src/components/shared/ProductSection.vue`

**Props:**

| Prop        | Type    | Default | Description              |
| ----------- | ------- | ------- | ------------------------ |
| `product`   | Object  | `null`  | Product data object      |
| `isLoading` | Boolean | `false` | Shows skeleton when true |

**Computed:** `priceAfterDiscount` — calculates the final price after applying the discount percentage.

---

### ProductSection

`src/components/shared/ProductSection.vue`

A section wrapper that renders a `SectionHeader` and a grid of `ProductCard`s.

**Used in:** `src/views/HomeView.vue`, `src/views/ProductView.vue`

**Props:**

| Prop          | Type    | Default  | Description                        |
| ------------- | ------- | -------- | ---------------------------------- |
| `label`       | String  | required | Section tag label                  |
| `title`       | String  | `null`   | Section title                      |
| `products`    | Array   | required | List of product objects to render  |
| `viewAllLink` | String  | `null`   | Route path for the "View All" link |
| `isLoading`   | Boolean | `false`  | Shows skeleton cards when true     |

---

### SectionHeader

`src/components/shared/SectionHeader.vue`

Displays a section heading with a label, title, and prev/next navigation arrows.

**Used in:** `src/components/shared/ProductSection.vue`, `src/components/home/CategorySection.vue`

**Props:**

| Prop    | Type   | Default  | Description                     |
| ------- | ------ | -------- | ------------------------------- |
| `label` | String | required | Tag label shown above the title |
| `title` | String | `null`   | Main section title              |

**Emits:** `prev`, `next` — emitted when the navigation arrows are clicked.

---

### ServiceItems _(static)_

`src/components/shared/ServiceItems.vue`

Renders the three service highlight cards (free delivery, 24/7 support, money back).

**Used in:** `src/views/HomeView.vue`, `src/views/AboutView.vue`

---

### SkeletonBox

`src/components/shared/SkeletonBox.vue`

A grey placeholder box used during loading states.

**Used in:** `src/components/shared/ProductCard.vue`, `src/components/single-product/ProductInfo.vue`, `src/components/single-product/ProductGallery.vue`

**Props:**

| Prop     | Type   | Default  | Description           |
| -------- | ------ | -------- | --------------------- |
| `width`  | String | `'100%'` | CSS width of the box  |
| `height` | String | `'16px'` | CSS height of the box |

---

### StarRating

`src/components/shared/StarRating.vue`

Displays a star rating with a review count.

**Used in:** `src/components/shared/ProductCard.vue`, `src/components/single-product/ProductInfo.vue`

**Props:**

| Prop      | Type   | Default  | Description                  |
| --------- | ------ | -------- | ---------------------------- |
| `rating`  | Number | required | Rating value (0–5)           |
| `reviews` | Number | required | Number of reviews to display |

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 📦 SINGLE PRODUCT

### DeliveryBox _(static)_

`src/components/single-product/DeliveryBox.vue`

Displays delivery and return policy info.

**Used in:** `src/components/single-product/ProductInfo.vue`

---

### ProductActions

`src/components/single-product/ProductActions.vue`

Quantity selector and add to cart button for the product detail page.

**Used in:** `src/components/single-product/ProductInfo.vue`

**Props:**

| Prop       | Type   | Default  | Description                                    |
| ---------- | ------ | -------- | ---------------------------------------------- |
| `product`  | Object | required | Product passed to `addToCart` on button click  |
| `quantity` | Number | required | Quantity passed to `addToCart` on button click |

**Emits:** `increase`, `decrease` — emitted when the quantity buttons are clicked.

---

### ProductGallery

`src/components/single-product/ProductGallery.vue`

Displays the product image gallery with thumbnail navigation.

**Used in:** `src/views/ProductView.vue`

**Props:**

| Prop            | Type    | Default           | Description                           |
| --------------- | ------- | ----------------- | ------------------------------------- |
| `images`        | Array   | `[]`              | List of image URLs                    |
| `selectedImage` | Number  | `0`               | Index of the currently selected image |
| `isLoading`     | Boolean | `false`           | Shows skeleton when true              |
| `alt`           | String  | `'Product image'` | Alt text for images                   |

**Emits:** `select` — emitted with the image index when a thumbnail is clicked.

---

### ProductInfo

`src/components/single-product/ProductInfo.vue`

Displays product title, price, rating, description, and category. Includes `ProductActions`.

**Used in:** `src/views/ProductView.vue`

**Props:**

| Prop        | Type    | Default | Description              |
| ----------- | ------- | ------- | ------------------------ |
| `product`   | Object  | `null`  | Product data object      |
| `quantity`  | Number  | `1`     | Current quantity value   |
| `isLoading` | Boolean | `false` | Shows skeleton when true |

**Emits:** `increase-qty`, `decrease-qty` — forwarded from `ProductActions`.
