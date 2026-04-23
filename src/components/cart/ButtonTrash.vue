<!-- Purpose: Renders a trash icon button for deletion actions.
  Used In: src/components/cart/CartSummary.vue
  Notes: Accepts disabled and ariaLabel props, emits click. -->
<template>
  <button class="btn-trash" :disabled="disabled" :aria-label="ariaLabel" @click="$emit('click')">
    <img src="@/assets/icons/cart/icon-trash.svg" :alt="ariaLabel" />
  </button>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: 'Delete',
    },
  })
  const emits = defineEmits(['click'])
</script>

<style scoped>
  .btn-trash {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--radius-sm);
    cursor: pointer;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .btn-trash img {
    width: 20px;
    height: 20px;
  }

  .btn-trash:hover:not(:disabled) {
    border-color: #e74c3c;
  }

  .btn-trash:hover:not(:disabled) img {
    filter: invert(27%) sepia(90%) saturate(1500%) hue-rotate(330deg) brightness(90%);
  }

  .btn-trash:disabled {
    border-color: rgba(0, 0, 0, 0.15);
    cursor: not-allowed;
    opacity: 0.4;
  }
</style>
