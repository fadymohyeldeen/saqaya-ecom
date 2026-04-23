<!-- Purpose: Displays a dynamic navigation trail based on current Vue Router path.
  Used In: src/views/AboutView.vue, src/views/ProductView.vue, src/views/ProductsView.vue, src/views/ErrorView.vue, src/views/ContactView.vue -->
<template>
  <nav class="breadcrumb">
    <template v-for="(item, index) in breadcrumbs">
      <router-link
        v-if="item.to"
        :key="`item-${index}`"
        :to="item.to"
        class="breadcrumb__item breadcrumb__item--muted"
        >{{ item.label }}</router-link
      >
      <span
        v-else
        :key="`span-${index}`"
        class="breadcrumb__item"
        :class="{ 'breadcrumb__item--muted': index < breadcrumbs.length - 1 }"
        >{{ item.label }}</span
      >
      <!-- renders / between items except the last one -->
      <span v-if="index < breadcrumbs.length - 1" :key="`sep-${index}`" class="breadcrumb__sep"
        >/</span
      >
    </template>
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  import { formatName } from '@/utils/formatters'

  const props = defineProps({
    productName: {
      type: String,
      default: null,
    },
  })
  const route = useRoute()
  const breadcrumbs = computed(() => {
    const urlSegments = route.path.split('/').filter(Boolean) // splits the current path into segments and removes empty strings
    const crumbs = [{ label: 'Home', to: '/' }] // always starts with home

    urlSegments.forEach((segment, index) => {
      const isLastSegment = index === urlSegments.length - 1
      const label = formatName(segment) // removes hyphens and capitalizes

      crumbs.push({
        label: isLastSegment && props.productName ? props.productName : label, // uses productName on last segment if its a product page
        to: isLastSegment ? null : '/' + urlSegments.slice(0, index + 1).join('/'), // adds a link to the current segment if its not the last one
      })
    })
    return crumbs
  })
</script>

<style scoped>
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 30px 0;
  }

  .breadcrumb__item {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text);
    text-decoration: none;
    text-transform: capitalize;
  }

  .breadcrumb__item--muted {
    opacity: 0.5;
  }

  .breadcrumb__item--muted:hover {
    color: var(--color-primary);
    opacity: 1;
  }

  .breadcrumb__sep {
    opacity: 0.5;
    font-size: var(--text-sm);
  }
</style>
