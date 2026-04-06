<template>
  <button
    class="wishlist-btn"
    aria-label="Add to wishlist"
    @click="$emit('click')"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 27C16 27 5 20.5 5 13C5 10.2385 7.23858 8 10 8C12.1217 8 14.0419 9.22789 15 11C15.9581 9.22789 17.8783 8 20 8C22.7614 8 25 10.2385 25 13C25 20.5 16 27 16 27Z"
        stroke="#000000"
        stroke-width="1.5"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "WishlistButton",
  emits: ["click"],
};
</script>

<style scoped>
.wishlist-btn {
  width: 40px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: var(--radius-sm);
  background: none;
  cursor: pointer;
}

.wishlist-btn:hover {
  background: var(--color-bg-secondary);
}
</style>
