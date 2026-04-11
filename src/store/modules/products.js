import api from '@/services/api'

export default {
  namespaced: true,
  /* All actions and mutations from all modules live together in a global namespace (one big store). 
  a conflict can happen if two modules have the same action or mutation name.
  namespaced: true makes sure that actions and mutations are named after their module.
  eg: products/SET_PRODUCTS and cart/SET_PRODUCTS
  */
  state: () => ({
    // ---------- Products Grid -----------
    products: [], // all products
    displayedProductsCount: 20, // the num of products displayed in grid
    skip: 40, // the num of products to skip in new fetch

    // ---------- Single Product ----------
    selectedProduct: null,

    // ---------- Home Page Sections ----------
    categoryList: [],
    flashSaleProducts: [],
    exploreProducts: [],
  }),
  mutations: {
    // ---------- Products Grid ----------
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    APPEND_PRODUCTS(state, newProducts) {
      state.products = [...state.products, ...newProducts]
    },
    SET_DISPLAYED_PRODUCTS_COUNT(state, count) {
      state.displayedProductsCount = count
    },
    SET_SKIP(state, skip) {
      state.skip = skip
    },

    // ---------- Single Product ----------
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product
    },

    // ---------- Home Page Sections ----------
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
  getters: {
    // ---------- Products Grid ----------
    displayedProducts: state => {
      return state.products.slice(0, state.displayedProductsCount)
      // returns the first 'N' products from the products array
    },
  },
  actions: {
    // ---------- Products Grid ----------
    async getAllProducts({ commit }) {
      const response = await api.get('/products?limit=40')
      commit('SET_PRODUCTS', response.data.products)
      commit('SET_DISPLAYED_PRODUCTS_COUNT', 20)
      commit('SET_SKIP', 40)
    },
    async loadMoreProducts({ commit, state }) {
      const response = await api.get(`/products?limit=20&skip=${state.skip}`)
      commit('APPEND_PRODUCTS', response.data.products)
      commit('SET_DISPLAYED_PRODUCTS_COUNT', state.displayedProductsCount + 20)
      commit('SET_SKIP', state.skip + 20)
    },

    // ---------- Single Product ----------
    async getProductById({ commit }, productId) {
      const response = await api.get(`/products/${productId}`)
      commit('SET_SELECTED_PRODUCT', response.data)
    },

    // ---------- Home Page Sections ----------
    async getCategoryList({ commit }) {
      const response = await api.get('/products/category-list')
      commit('SET_CATEGORY_LIST', response.data)
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
