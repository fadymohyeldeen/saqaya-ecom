<template>
  <div class="cart-summary">
    <div class="cart-summary__row">
      <span class="cart-summary__label">Subtotal:</span>
      <span class="cart-summary__value">${{ cartTotal }}</span>
    </div>
    <div class="cart-summary__divider"></div>

    <div class="cart-summary__row">
      <span class="cart-summary__label">Shipping:</span>
      <span class="cart-summary__value">$0.00</span>
    </div>
    <div class="cart-summary__divider"></div>

    <div class="cart-summary__row">
      <span class="cart-summary__label">Total:</span>
      <span class="cart-summary__value">${{ cartTotal }}</span>
    </div>

    <div class="cart-summary__actions">
      <ButtonApp label="Place Order" :disabled="cartIsEmpty" />
      <ButtonTrash :disabled="cartIsEmpty" ariaLabel="Clear cart" @click="clearCart" />
    </div>
  </div>
</template>

<script>
  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import ButtonTrash from '@/components/cart/ButtonTrash.vue'
  import { useCartStore } from '@/stores/cart'
  import { computed } from 'vue'

  export default {
    name: 'CartSummary',
    components: { ButtonApp, ButtonTrash },
    setup() {
      const cartStore = useCartStore()
      const cartTotal = computed(() => {
        return cartStore.cartTotal.toFixed(2)
      })
      const cartIsEmpty = computed(() => {
        return cartStore.cartItems.length === 0
      })
      function clearCart() {
        cartStore.clearCart()
      }
      return {
        cartTotal,
        cartIsEmpty,
        clearCart,
      }
    },
  }
</script>

<style scoped>
  .cart-summary {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 40px;
  }

  .cart-summary__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart-summary__label,
  .cart-summary__value {
    font-family: var(--font-body);
    font-size: var(--text-md);
    font-weight: 400;
    color: var(--color-text);
  }

  .cart-summary__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cart-summary__divider {
    width: 100%;
    height: 1px;
    background: var(--color-text);
    opacity: 0.4;
  }
</style>
