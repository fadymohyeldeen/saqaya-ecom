<template>
  <div>
    <AppHeader />
    <transition name="cart-slide">
      <CartSidebar v-if="isCartOpen" />
    </transition>
    <main class="container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
  import { useCartStore } from '@/stores/cart'
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
    computed: {
      isCartOpen() {
        return useCartStore().isCartOpen
      },
    },
  }
</script>
