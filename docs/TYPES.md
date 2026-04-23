# Types

All interfaces live in `src/types/`. They are shared across stores and components.

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Product

`src/types/product.ts`

Represents a single product from the API.

| Field                | Type       | Description                                    |
| -------------------- | ---------- | ---------------------------------------------- |
| `id`                 | `number`   | Unique product identifier                      |
| `title`              | `string`   | Product name                                   |
| `description`        | `string`   | Full product description                       |
| `price`              | `number`   | Price in USD                                   |
| `discountPercentage` | `number`   | Discount as a percentage (0 means no discount) |
| `rating`             | `number`   | Average rating (0–5)                           |
| `stock`              | `number`   | Units available in stock                       |
| `category`           | `string`   | Category slug (e.g. `"mobile-accessories"`)    |
| `thumbnail`          | `string`   | URL of the main product image                  |
| `images`             | `string[]` | URLs of all product images                     |
| `reviews`            | `Review[]` | List of customer reviews                       |

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Review

`src/types/product.ts`

Represents a single customer review on a product. Nested inside `Product.reviews`.

| Field           | Type     | Description                   |
| --------------- | -------- | ----------------------------- |
| `rating`        | `number` | Review rating (0–5)           |
| `comment`       | `string` | Review text                   |
| `date`          | `string` | ISO date string of the review |
| `reviewerName`  | `string` | Name of the reviewer          |
| `reviewerEmail` | `string` | Email of the reviewer         |

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CartItem

`src/types/cart.ts`

Extends `Product` with a `quantity` field.

| Field      | Type     | Description                 |
| ---------- | -------- | --------------------------- |
| `quantity` | `number` | Number of units in the cart |
| `...`      | —        | All fields from `Product`   |

## ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ProductsResponse

`src/types/product.ts`

Shape of the paginated response from the products API.

| Field      | Type        | Description                                     |
| ---------- | ----------- | ----------------------------------------------- |
| `products` | `Product[]` | Array of products returned by the current query |
| `total`    | `number`    | Total number of products matching the query     |
| `skip`     | `number`    | Number of products skipped (offset)             |
| `limit`    | `number`    | Maximum number of products returned             |
