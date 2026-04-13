<template>
  <div>
    <AppHeader />
    <main class="container">
      <slot />
      <!-- any component passed to parent will be rendered here -->
    </main>
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from '@/components/layout/AppHeader.vue'
  import AppFooter from '@/components/layout/AppFooter.vue'
  export default {
    name: 'DefaultLayout',
    components: {
      AppHeader,
      AppFooter,
    },
    watch: {
      $route() {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
