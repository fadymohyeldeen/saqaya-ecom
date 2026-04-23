<!-- Purpose: Clickable card displaying a formatted category name.
  Used In: src/components/home/CategorySection.vue
  Notes: Emits select event with category data. -->
<template>
  <div class="category-card" @click="$emit('select', name)">
    <span class="category-card__name">{{ formatName(name) }}</span>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  import { formatName } from '@/utils/formatters'

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  })
  const emits = defineEmits(['select'])
</script>

<style scoped>
  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 200px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--radius-sm);
    padding: 0 16px;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .category-card:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .category-card:hover .category-card__name {
    color: var(--color-text-light);
  }

  .category-card__name {
    text-transform: capitalize;
    font-family: var(--font-body);
    font-weight: 400;
    font-size: var(--text-md);
    line-height: 24px;
    color: var(--color-text);
    text-align: center;
  }

  @media (min-width: 768px) {
    .category-card {
      width: 100%;
      max-width: 170px;
      height: 145px;
    }
  }
</style>
