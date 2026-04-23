<!-- Purpose: A generic button that can be used as a router-link or standard button.
  Used In: src/views/ProductsView.vue, src/views/ErrorView.vue, src/components/cart/CartSummary.vue, src/components/shared/ProductSection.vue, src/components/contact/ContactForm.vue, src/components/single-product/ProductActions.vue
  Notes: if passed 'to' prop, it will be a router-link, otherwise it will be a standard button -->
<template>
  <!-- for navigation -->
  <router-link v-if="to" :to="to" class="app-btn">
    {{ label }}
  </router-link>

  <!-- for actions -->
  <button v-else class="app-btn" :disabled="disabled" @click="$emit('click', $event)">
    {{ label }}
  </button>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })
  const emit = defineEmits(['click'])
</script>

<style scoped>
  .app-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 20px;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: var(--text-xs);
    white-space: nowrap;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: opacity 0.2s ease, scale 0.2s ease-in-out;
    background: var(--color-primary);
    color: var(--color-text-light);
  }

  .app-btn:hover {
    opacity: 0.9;
  }

  .app-btn:disabled {
    background: rgba(0, 0, 0, 0.15);
    cursor: not-allowed;
  }

  .app-btn:disabled:hover {
    opacity: 1;
    scale: 1;
  }

  @media (min-width: 768px) {
    .app-btn {
      font-size: var(--text-sm);
      padding: 0 32px;
    }
  }

  @media (min-width: 1024px) {
    .app-btn {
      font-size: var(--text-md);
      padding: 10px 36px;
    }
  }
</style>
