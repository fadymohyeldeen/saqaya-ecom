<!-- Purpose: Displays a single item row inside the cart sidebar with an image, remove button, and price link.
  Used In: src/components/cart/CartSidebar.vue
  Notes: Connects to useCartStore to Increase/Decrease/Remove items in cart. -->
<template>
  <div class="cart-item">
    <button class="cart-item__remove" aria-label="Remove item" @click="removeItem">
      <img src="@/assets/icons/cart/icon-remove.svg" alt="" />
    </button>
    <router-link :to="`/products/${item.id}`">
      <img :src="item.thumbnail" alt="Product" class="cart-item__image" />
    </router-link>

    <div class="cart-item__quantity">
      <span class="cart-item__qty-value">{{ item.quantity }}</span>
      <div class="cart-item__qty-controls">
        <button class="cart-item__qty-btn" aria-label="Increase quantity" @click="increaseQuantity">
          &#8743;
        </button>
        <button class="cart-item__qty-btn" aria-label="Decrease quantity" @click="decreaseQuantity">
          &#8744;
        </button>
      </div>
    </div>

    <span class="cart-item__price">${{ item.price }}</span>
  </div>
</template>

<script setup>
  import { useCartStore } from '@/stores/cart'
  const props = defineProps({ item: { type: Object, required: true } })

  const cartStore = useCartStore()

  function removeItem() {
    cartStore.removeFromCart(props.item.id)
  }
  function increaseQuantity() {
    cartStore.updateCartItemQuantity({
      itemId: props.item.id,
      quantity: props.item.quantity + 1,
    })
  }
  function decreaseQuantity() {
    cartStore.updateCartItemQuantity({
      itemId: props.item.id,
      quantity: props.item.quantity - 1,
    })
  }
</script>

<style scoped>
  .cart-item {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px;
    background: var(--color-bg);
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    border-radius: var(--radius-sm);
  }

  .cart-item__remove {
    position: absolute;
    top: -10px;
    left: -10px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
  }

  .cart-item__image {
    width: 54px;
    height: 54px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .cart-item__quantity {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1.5px solid rgba(0, 0, 0, 0.4);
    border-radius: var(--radius-sm);
    padding: 6px 12px;
    flex-shrink: 0;
  }

  .cart-item__qty-value {
    font-family: var(--font-body);
    font-size: var(--text-md);
    font-weight: 400;
    color: var(--color-text);
    min-width: 20px;
    text-align: center;
  }

  .cart-item__qty-controls {
    display: flex;
    flex-direction: column;
  }

  .cart-item__qty-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 10px;
    line-height: 1;
    color: var(--color-text);
  }

  .cart-item__price {
    font-family: var(--font-body);
    font-size: var(--text-md);
    font-weight: 400;
    color: var(--color-text);
    flex-shrink: 0;
  }
</style>
