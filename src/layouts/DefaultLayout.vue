<template>
  <div>
    <AppHeader />
    <CartSidebar />
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
  import CartSidebar from '@/components/cart/CartSidebar.vue'
  export default {
    name: 'DefaultLayout',
    components: {
      AppHeader,
      AppFooter,
      CartSidebar,
    },
    watch: {
      $route() {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
