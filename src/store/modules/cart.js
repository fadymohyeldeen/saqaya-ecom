export default {
  namespaced: true,
  state: () => ({
    // ---------- Cart Items ------------------
    cartItems: JSON.parse(localStorage.getItem('cartItems') || []),

    // ---------- Sidebar ---------------------
    isCartOpen: false,
  }),
  mutations: {
    // ---------- Cart Items ------------------
    ADD_TO_CART(state, { newItem, quantity = 1 }) {
      state.isCartOpen = true
      const itemExists = state.cartItems.find(item => item.id === newItem.id)
      if (itemExists) {
        itemExists.quantity += quantity
      } else {
        state.cartItems.push({ ...newItem, quantity })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    REMOVE_FROM_CART(state, itemId) {
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
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
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    CLEAR_CART(state) {
      state.cartItems = []
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
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
