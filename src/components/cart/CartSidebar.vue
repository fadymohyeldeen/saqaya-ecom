<template>
  <div class="cart-sidebar">
    <div class="cart-sidebar__header">
      <h2 class="cart-sidebar__title">Shopping Cart</h2>
      <button class="cart-sidebar__close" aria-label="Close cart" @click="toggleCart">
        <img src="@/assets/icons/cart/icon-close.svg" alt="" />
      </button>
    </div>

    <div class="cart-sidebar__items">
      <CartItem />
      <CartItem />
    </div>

    <CartSummary />
  </div>
</template>

<script>
  import CartItem from '@/components/cart/CartItem.vue'
  import CartSummary from '@/components/cart/CartSummary.vue'

  export default {
    name: 'CartSidebar',
    components: { CartItem, CartSummary },
    methods: {
      toggleCart() {
        this.$store.commit('cart/TOGGLE_CART')
      },
    },
  }
</script>

<style scoped>
  .cart-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background: var(--color-bg);
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 40px;
    overflow: visible;
  }

  .cart-sidebar::before {
    /* the arrow pointing to the cart icon */
    content: '';
    position: absolute;
    top: 27px;
    left: -20px;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 20px solid var(--color-bg);
    filter: drop-shadow(-2px 0 2px rgba(0, 0, 0, 0.08));
  }

  .cart-sidebar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 27px 31px 0;
  }

  .cart-sidebar__title {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--color-text);
  }

  .cart-sidebar__close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
  }

  .cart-sidebar__items {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 14px 40px 0;
  }

  .cart-slide-enter-active,
  .cart-slide-leave-active {
    transition: transform 0.3s ease;
  }

  .cart-slide-enter,
  .cart-slide-leave-to {
    transform: translateX(100%);
  }
</style>
