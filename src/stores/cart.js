import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '@/utils/storage'

export const useCartStore = defineStore('cart', () => {
  // --------------- State ------------------
  // ----------------------------------------
  // -------------- Cart Items --------------
  const cartItems = ref(getFromLocalStorage('cartItems') || [])

  // --------------- Sidebar ----------------
  const isCartOpen = ref(false)

  // ------------- Getters ------------------
  // ------------- Cart Totals --------------
  const cartItemsCount = computed(() =>
    cartItems.value.reduce((count, item) => count + item.quantity, 0)
  )
  const cartTotal = computed(() =>
    cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  )
  // -------------- Actions -----------------
  // ----------------------------------------
  // -------------- Cart Items --------------
  function addToCart({ newItem, quantity = 1 }) {
    isCartOpen.value = true
    const itemExists = cartItems.value.find(item => item.id === newItem.id)
    if (itemExists) {
      itemExists.quantity += quantity
    } else {
      cartItems.value.push({ ...newItem, quantity })
    }
    setToLocalStorage('cartItems', cartItems.value)
  }

  function removeFromCart(itemId) {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId)
    setToLocalStorage('cartItems', cartItems.value)
  }

  function updateCartItemQuantity({ itemId, quantity }) {
    const item = cartItems.value.find(item => item.id === itemId)
    if (quantity === 0) {
      cartItems.value = cartItems.value.filter(item => item.id !== itemId)
    } else {
      if (item) {
        item.quantity = quantity
      }
    }
    setToLocalStorage('cartItems', cartItems.value)
  }

  function clearCart() {
    cartItems.value = []
    removeFromLocalStorage('cartItems')
  }

  // --------------- Sidebar ----------------
  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }

  // -------------- Return ---------------
  return {
    cartItems,
    isCartOpen,
    cartItemsCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    toggleCart,
  }
})
