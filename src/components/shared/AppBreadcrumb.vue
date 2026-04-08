<template>
  <nav class="breadcrumb">
    <template v-for="(item, index) in items">
      <!-- generates a link or a span based on item.to value, and a separator if needed -->
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
        :class="{ 'breadcrumb__item--muted': index < items.length - 1 }"
        >{{ item.label }}</span
      >
      <!-- used different keys for each span so that vue knows these are two different elements -->
      <!-- renderes / between items except the last one -->
      <span v-if="index < items.length - 1" :key="`sep-${index}`" class="breadcrumb__sep">/</span>
    </template>
  </nav>
</template>

<script>
  export default {
    name: 'AppBreadcrumb',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  }
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
