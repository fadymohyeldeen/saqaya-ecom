import api from '@/services/api'

export default {
  namespaced: true,
  /* All actions and mutations from all modules live together in a global namespace (one big store). 
  a conflict can happen if two modules have the same action or mutation name.
  namespaced: true makes sure that actions and mutations are named after their module.
  eg: products/SET_PRODUCTS and cart/SET_PRODUCTS
  */
  state: () => ({
    products: [],
    selectedProduct: null,
    categoryList: [],
  }),
  mutations: {
    // the only functions allowed to change the state.
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
  },

  actions: {
    // operations that eventually calls mutations.
    async getAllProducts({ commit }) {
      const response = await api.get('/products')
      commit('SET_PRODUCTS', response.data)
    },
    async getProductById({ commit }, productId) {
      const response = await api.get(`/products/${productId}`)
      commit('SET_SELECTED_PRODUCT', response.data)
    },
    async getCategoryList({ commit }) {
      const response = await api.get('/products/category-list')
      commit('SET_CATEGORIES', response.data)
    },
  },
}
// commit is a function that calls mutations from actions to update the state.
// dispatch is a function that calls actions from component to update the state.
