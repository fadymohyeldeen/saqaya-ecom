<template>
  <div class="product-actions">
    <div class="product-actions__qty">
      <button
        class="product-actions__qty-btn product-actions__qty-btn--minus"
        aria-label="Decrease quantity"
        @click="$emit('decrease')"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
      <span class="product-actions__qty-value">{{ quantity }}</span>
      <button
        class="product-actions__qty-btn product-actions__qty-btn--plus"
        aria-label="Increase quantity"
        @click="$emit('increase')"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <AppButton label="Add To Cart" @click="addToCart" />
    <div class="product-actions__fav">
      <FavButton />
    </div>
  </div>
</template>

<script>
  import AppButton from '@/components/shared/AppButton.vue'
  import FavButton from '@/components/shared/FavButton.vue'

  export default {
    name: 'ProductActions',
    components: { AppButton, FavButton },
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
    methods: {
      addToCart() {
        this.$store.commit('cart/ADD_TO_CART', { newItem: this.product, quantity: this.quantity })
      },
    },
    emits: ['increase', 'decrease'],
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

  /* ─── Tablet (768px+) ─── */
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
