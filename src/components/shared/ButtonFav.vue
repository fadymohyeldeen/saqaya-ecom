<!-- Purpose: Action button with a heart icon for favorites.
  Used In: src/components/shared/ProductCard.vue, src/components/single-product/ProductActions.vue -->
<template>
  <button class="fav-btn" aria-label="Add to favourites" @click.prevent>
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="17" fill="white" />
      <path
        d="M17 24S9 19 9 13.5C9 11.5 10.5 10 12.5 10C14 10 15.5 10.8 17 12.5C18.5 10.8 20 10 21.5 10C23.5 10 25 11.5 25 13.5C25 19 17 24 17 24Z"
        stroke="#000"
        stroke-width="1.5"
      />
    </svg>
  </button>
</template>

<script>
  export default {
    name: 'ButtonFav',
  }
</script>

<style scoped>
  .fav-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fav-btn:hover circle:first-child {
    fill: var(--color-primary);
  }

  .fav-btn:hover path {
    stroke: var(--color-primary-light);
  }
</style>
