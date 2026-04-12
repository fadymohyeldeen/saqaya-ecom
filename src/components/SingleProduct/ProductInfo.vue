<template>
  <div class="product-info">
    <h1 class="product-info__title">{{ product.title }}</h1>

    <div class="product-info__meta">
      <StarRating :rating="product.rating" :reviews="product.rating" />
      <div class="product-info__meta-right">
        <span class="product-info__meta-sep"></span>
        <span class="product-info__stock">In Stock</span>
      </div>
    </div>

    <div class="product-info__price-row">
      <span class="product-info__price">${{ product.price.toFixed(2) }}</span>
      <span class="product-info__discount-badge">-{{ product.discountPercentage }}%</span>
    </div>

    <p class="product-info__description">{{ product.description }}</p>

    <hr class="product-info__hr" />

    <p class="product-info__category">Category: {{ product.category }}</p>

    <ProductActions
      :quantity="quantity"
      @increase="$emit('increase-qty')"
      @decrease="$emit('decrease-qty')"
    />

    <ProductDeliveryBox />
  </div>
</template>

<script>
  import StarRating from '@/components/shared/StarRating.vue'
  import ProductActions from '@/components/SingleProduct/ProductActions.vue'
  import ProductDeliveryBox from '@/components/SingleProduct/ProductDeliveryBox.vue'

  export default {
    name: 'ProductInfo',
    components: { StarRating, ProductActions, ProductDeliveryBox },
    props: {
      product: {
        type: Object,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
    emits: ['increase-qty', 'decrease-qty'],
  }
</script>

<style scoped>
  /* ─── Mobile  ─── */
  .product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-info__title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--text-md);
    letter-spacing: 0.03em;
    color: var(--color-text);
  }

  .product-info__meta {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .product-info__meta-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .product-info__meta-sep {
    display: inline-block;
    width: 1px;
    height: 16px;
    background: rgba(0, 0, 0, 0.5);
  }

  .product-info__stock {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-in-stock);
    opacity: 0.6;
  }

  .product-info__price-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .product-info__price {
    font-family: var(--font-heading);
    font-size: var(--text-md);
    font-weight: 400;
    letter-spacing: 0.03em;
    color: var(--color-text);
  }

  .product-info__discount-badge {
    background: var(--color-primary);
    color: var(--color-text-light);
    font-family: var(--font-body);
    font-size: var(--text-xs);
    padding: 4px 8px;
    border-radius: var(--radius-sm);
  }

  .product-info__description {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    line-height: 21px;
    color: var(--color-text);
    margin-top: 8px;
  }

  .product-info__hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 8px;
  }

  .product-info__category {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text);
  }

  .product-info__category-link {
    color: var(--color-text);
    text-decoration: underline;
  }

  /* ─── Tablet   ─── */
  @media (min-width: 768px) {
    .product-info__title {
      font-size: var(--text-lg);
    }

    .product-info__price {
      font-size: var(--text-lg);
    }
  }

  /* ─── Desktop  ─── */
  @media (min-width: 1024px) {
    .product-info__title {
      font-size: var(--text-xl);
    }

    .product-info__price {
      font-size: var(--text-xl);
    }
  }
</style>
