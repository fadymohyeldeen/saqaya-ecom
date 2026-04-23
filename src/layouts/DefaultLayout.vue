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

<script setup>
  import { computed } from 'vue'

  import CartSidebar from '@/components/cart/CartSidebar.vue'
  import AppFooter from '@/components/layout/AppFooter.vue'
  import AppHeader from '@/components/layout/AppHeader.vue'
  import { useCartStore } from '@/stores/cart'

  const cartStore = useCartStore()
  const isCartOpen = computed(() => {
    return cartStore.isCartOpen
  })
</script>
