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
    flashSaleProducts: [],
    exploreProducts: [],
  }),
  mutations: {
    // the only functions allowed to change the state.
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product
    },
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList
    },
    SET_FLASH_SALE_PRODUCTS(state, products) {
      state.flashSaleProducts = products
    },
    SET_EXPLORE_PRODUCTS(state, products) {
      state.exploreProducts = products
    },
  },

  actions: {
    // operations that eventually calls mutations.
    async getAllProducts({ commit }) {
      const response = await api.get('/products')
      commit('SET_PRODUCTS', response.data.products)
    },
    async getProductById({ commit }, productId) {
      const response = await api.get(`/products/${productId}`)
      commit('SET_SELECTED_PRODUCT', response.data)
    },
    async getCategoryList({ commit }) {
      const response = await api.get('/products/category-list')
      commit('SET_CATEGORIES', response.data)
    },
    async getFlashSaleProducts({ commit }) {
      const response = await api.get('/products?limit=8&sortBy=discountPercentage&order=desc')
      commit('SET_FLASH_SALE_PRODUCTS', response.data.products)
    },
    async getExploreProducts({ commit }) {
      const response = await api.get('/products?limit=8')
      commit('SET_EXPLORE_PRODUCTS', response.data.products)
    },
  },
}
// commit is a function that calls mutations from actions to update the state.
// dispatch is a function that calls actions from component to update the state.
