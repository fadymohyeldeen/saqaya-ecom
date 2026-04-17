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
      <!-- renderes / between items except the last one -->
      <span v-if="index < breadcrumbs.length - 1" :key="`sep-${index}`" class="breadcrumb__sep"
        >/</span
      >
    </template>
  </nav>
</template>

<script>
  import { formatName } from '@/utils/formatters'

  export default {
    name: 'AppBreadcrumb',
    props: {
      productName: {
        type: String,
        default: null,
      },
    },
    computed: {
      breadcrumbs() {
        const urlSegments = this.$route.path.split('/').filter(Boolean)
        const crumbs = [{ label: 'Home', to: '/' }]

        urlSegments.forEach((segment, index) => {
          const isLastSegment = index === urlSegments.length - 1
          const label = formatName(segment)

          crumbs.push({
            label: isLastSegment && this.productName ? this.productName : label,
            to: isLastSegment ? null : '/' + urlSegments.slice(0, index + 1).join('/'),
          })
        })

        return crumbs
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
