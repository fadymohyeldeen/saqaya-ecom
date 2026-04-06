<template>
  <nav class="breadcrumb">
    <template v-for="(item, idx) in items">
      <router-link
        v-if="item.to"
        :key="`item-${idx}`"
        :to="item.to"
        class="breadcrumb__item breadcrumb__item--muted"
        >{{ item.label }}</router-link
      >
      <span
        v-else
        :key="`item-${idx}`"
        class="breadcrumb__item"
        :class="{ 'breadcrumb__item--muted': idx < items.length - 1 }"
        >{{ item.label }}</span
      >
      <span
        v-if="idx < items.length - 1"
        :key="`sep-${idx}`"
        class="breadcrumb__sep"
        >/</span
      >
    </template>
  </nav>
</template>

<script>
export default {
  name: "AppBreadcrumb",
  props: {
    items: {
      type: Array,
      required: true,
      // Each item: { label: String, to?: String }
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
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
