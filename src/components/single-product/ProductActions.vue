<!-- Purpose: Holds the quantity minus/plus selectors, Add To Cart button, and favorite icon.
  Used In: src/components/single-product/ProductInfo.vue
  Notes: uses useCartStore.addToCart() to add items to the cart with the current quantity -->
<template>
  <div class="product-actions">
    <div class="product-actions__qty">
      <button
        class="product-actions__qty-btn product-actions__qty-btn--minus"
        aria-label="Decrease quantity"
        @click="$emit('decrease')"
      >
        <img src="@/assets/icons/shared/icon-minus.svg" alt="Decrease" />
      </button>
      <span class="product-actions__qty-value">{{ quantity }}</span>
      <button
        class="product-actions__qty-btn product-actions__qty-btn--plus"
        aria-label="Increase quantity"
        @click="$emit('increase')"
      >
        <img src="@/assets/icons/shared/icon-plus.svg" alt="Increase" />
      </button>
    </div>

    <ButtonApp label="Add To Cart" @click="addToCart" />
    <div class="product-actions__fav">
      <ButtonFav />
    </div>
  </div>
</template>

<script>
  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import ButtonFav from '@/components/shared/ButtonFav.vue'
  import { useCartStore } from '@/stores/cart'

  export default {
    name: 'ProductActions',
    components: { ButtonApp, ButtonFav },
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
    emits: ['increase', 'decrease'],
    methods: {
      addToCart() {
        useCartStore().addToCart({ newItem: this.product, quantity: this.quantity })
      },
    },
  }
</script>

<style scoped>
  .product-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin: 12px 0;
  }

  .product-actions__qty {
    display: flex;
    align-items: stretch;
    height: 44px;
  }

  .product-actions__qty-btn {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: none;
    cursor: pointer;
  }

  .product-actions__qty-btn--minus {
    border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  }

  .product-actions__qty-btn--plus {
    background: var(--color-primary);
    border-color: var(--color-primary);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }

  .product-actions__qty-value {
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: var(--text-md);
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .product-actions__fav {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    .product-actions {
      flex-wrap: nowrap;
      margin: 25px 0;
    }

    .product-actions__qty-value {
      width: 80px;
      font-size: var(--text-lg);
    }
  }
</style>
