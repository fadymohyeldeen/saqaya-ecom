<!-- Purpose: Displays an alert box with an error icon and formatted text message.
  Used In: src/views/ProductView.vue, src/views/ProductsView.vue -->
<template>
  <div class="error-message" role="alert">
    <img src="@/assets/icons/shared/icon-error.svg" alt="" class="error-message__icon" />
    <span class="error-message__text">{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    props: {
      message: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .error-message {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    background-color: #fff0f0;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-sm);
    color: var(--color-primary);
    font-family: var(--font-body);
    font-size: var(--text-sm);
    width: 100%;
  }

  .error-message__icon {
    flex-shrink: 0;
  }

  .error-message__text {
    line-height: 1.5;
  }
</style>
