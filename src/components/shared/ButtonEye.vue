<!-- Purpose: Action button with an eye icon.
  Used In: src/components/shared/ProductCard.vue -->
<template>
  <button class="eye-btn" aria-label="Quick view" @click.prevent>
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="17" fill="white" />
      <path
        d="M17 11C11 11 8 17 8 17C8 17 11 23 17 23C23 23 26 17 26 17C26 17 23 11 17 11Z"
        stroke="#000"
        stroke-width="1.5"
      />
      <circle cx="17" cy="17" r="3" stroke="#000" stroke-width="1.5" />
    </svg>
  </button>
</template>

<style scoped>
  .eye-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eye-btn:hover circle:first-child {
    fill: var(--color-primary);
  }

  .eye-btn:hover path,
  .eye-btn:hover circle:not(:first-child) {
    stroke: var(--color-primary-light);
  }
</style>
