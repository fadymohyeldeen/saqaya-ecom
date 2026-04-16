<template>
  <div class="not-found">
    <AppBreadcrumb product-name="404 Error" />

    <div class="not-found__content">
      <h1 class="not-found__heading">404 Not Found</h1>
      <p class="not-found__subtitle">Your visited page not found. You may go home page.</p>
      <AppButton label="Back to home page" to="/" />
    </div>
  </div>
</template>

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import AppButton from '@/components/shared/AppButton.vue'

  export default {
    name: 'ErrorView',
    components: {
      AppBreadcrumb,
      AppButton,
    },
  }
</script>

<style scoped>
  .not-found__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px 0 160px;
  }

  .not-found__heading {
    font-weight: 500;
    font-size: 110px;
    color: var(--color-text);
    line-height: 1;
  }

  .not-found__subtitle {
    font-size: var(--text-md);
    color: var(--color-text);
    opacity: 0.5;
  }

  /* ─── Tablet (768px+) ─── */
  @media (min-width: 768px) {
    .not-found__content {
      padding: 200px 0 250px;
    }
  }
</style>
