export default {
  namespaced: true,
  state: () => ({
    // ---------- Cart Items ------------------
    cartItems: [],

    // ---------- Sidebar ---------------------
    isCartOpen: false,
  }),
  mutations: {
    // ---------- Cart Items ------------------
    ADD_TO_CART(state, newItem) {
      const itemExists = state.cartItems.find(item => item.id === newItem.id)
      if (itemExists) {
        itemExists.quantity++
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 })
      }
    },

    REMOVE_FROM_CART(state, itemId) {
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
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
    },

    CLEAR_CART(state) {
      state.cartItems = []
    },

    // ---------- Sidebar ----------
    TOGGLE_CART(state) {
      state.isCartOpen = !state.isCartOpen
    },
  },
  getters: {
    // ---------- Cart Totals -----------------
    cartItemsCount: state => state.cartItems.reduce((count, item) => count + item.quantity, 0),
    cartTotal: state =>
      state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  },
}
