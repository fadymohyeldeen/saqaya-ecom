import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    // -------------- Cart Items --------------
    cartItems: getFromLocalStorage('cartItems') || [],

    // --------------- Sidebar ----------------
    isCartOpen: false,
  }),
  mutations: {
    // -------------- Cart Items --------------
    ADD_TO_CART(state, { newItem, quantity = 1 }) {
      state.isCartOpen = true
      const itemExists = state.cartItems.find(item => item.id === newItem.id)
      if (itemExists) {
        itemExists.quantity += quantity
      } else {
        state.cartItems.push({ ...newItem, quantity })
      }
      setToLocalStorage('cartItems', state.cartItems)
    },

    REMOVE_FROM_CART(state, itemId) {
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
      setToLocalStorage('cartItems', state.cartItems)
    },

    UPDATE_CART_ITEM_QUANTITY(state, { itemId, quantity }) {
      const item = state.cartItems.find(item => item.id === itemId)
      if (quantity === 0) {
        state.cartItems = state.cartItems.filter(item => item.id !== itemId)
      } else {
        if (item) {
          item.quantity = quantity
        }
      }
      setToLocalStorage('cartItems', state.cartItems)
    },

    CLEAR_CART(state) {
      state.cartItems = []
      removeFromLocalStorage('cartItems')
    },

    // --------------- Sidebar ----------------
    TOGGLE_CART(state) {
      state.isCartOpen = !state.isCartOpen
    },
  },
  getters: {
    // ------------- Cart Totals --------------
    cartItemsCount: state => state.cartItems.reduce((count, item) => count + item.quantity, 0),
    cartTotal: state =>
      state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  },
}
