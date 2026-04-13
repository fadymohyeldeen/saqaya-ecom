import api from '@/services/api'

export default {
  namespaced: true,
  state: () => ({
    // ---------- Products Grid ---------------
    products: [],
    displayedProductsCount: 20,

    // ---------- Single Product --------------
    selectedProduct: null,

    // ---------- Home Page Sections ----------
    categoryList: [],
    flashSaleProducts: [],

    // ---------- Error Handling --------------
    error: null,

    // ---------- Loading ---------------------
    isLoading: false,
  }),
  mutations: {
    // ---------- Products Grid ---------------
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    APPEND_PRODUCTS(state, newProducts) {
      state.products = [...state.products, ...newProducts]
    },
    SET_DISPLAYED_PRODUCTS_COUNT(state, count) {
      state.displayedProductsCount = count
    },

    // ---------- Single Product --------------
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

    // ---------- Error Handling --------------
    SET_ERROR(state, message) {
      state.error = message
    },

    // ---------- Loading ---------------------
    SET_LOADING(state, loading) {
      state.isLoading = loading
    },
  },
  getters: {
    // ---------- Products Grid ---------------
    displayedProducts: state => {
      return state.products.slice(0, state.displayedProductsCount)
    },

    // ---------- Home Page Sections ----------
    exploreProducts: state => {
      return state.products.slice(0, 8)
    },
  },
  actions: {
    // --- Products Grid / Explore Products ---
    async getProducts({ commit }) {
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const response = await api.get('/products?limit=40')
        commit('SET_PRODUCTS', response.data.products)
        commit('SET_LOADING', false)
      } catch (error) {
        console.error(error)
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },
    async loadMoreProducts({ commit, state }) {
      try {
        commit('SET_ERROR', null)
        const response = await api.get(`/products?limit=20&skip=${state.products.length}`)
        commit('APPEND_PRODUCTS', response.data.products)
        commit('SET_DISPLAYED_PRODUCTS_COUNT', state.displayedProductsCount + 20)
      } catch (error) {
        console.error(error)
        commit('SET_ERROR', error.message)
      }
    },

    // ---------- Single Product --------------
    async getProductById({ commit }, productId) {
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const response = await api.get(`/products/${productId}`)
        commit('SET_SELECTED_PRODUCT', response.data)
        commit('SET_LOADING', false)
      } catch (error) {
        console.error(error)
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },

    // ---------- Home Sections -----------
    async getCategoryList({ commit }) {
      try {
        commit('SET_ERROR', null)
        const response = await api.get('/products/category-list')
        commit('SET_CATEGORY_LIST', response.data)
      } catch (error) {
        console.error(error)
        commit('SET_ERROR', error.message)
      }
    },
    async getFlashSaleProducts({ commit }) {
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const response = await api.get('/products?limit=8&sortBy=discountPercentage&order=desc')
        commit('SET_FLASH_SALE_PRODUCTS', response.data.products)
        commit('SET_LOADING', false)
      } catch (error) {
        console.error(error)
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },
  },
}
