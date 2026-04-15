<template>
  <div class="cart-item">
    <button class="cart-item__remove" aria-label="Remove item">
      <img src="@/assets/icons/cart/icon-remove.svg" alt="" />
    </button>

    <img src="https://dummyjson.com/image/54x54" alt="Product" class="cart-item__image" />

    <span class="cart-item__name">LCD Monitor</span>

    <div class="cart-item__quantity">
      <span class="cart-item__qty-value">01</span>
      <div class="cart-item__qty-controls">
        <button class="cart-item__qty-btn" aria-label="Increase quantity">&#8743;</button>
        <button class="cart-item__qty-btn" aria-label="Decrease quantity">&#8744;</button>
      </div>
    </div>

    <span class="cart-item__price">$650</span>
  </div>
</template>

<script>
  export default {
    name: 'CartItem',
  }
</script>

<style scoped>
  .cart-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
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

  .cart-item__name {
    flex: 1;
    font-family: var(--font-body);
    font-size: var(--text-md);
    font-weight: 400;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
