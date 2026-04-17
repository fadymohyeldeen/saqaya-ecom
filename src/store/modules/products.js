import api from '@/services/api'

export default {
  namespaced: true,
  state: () => ({
    // ---------- Products Grid ---------------
    products: [],
    displayedProductsCount: 20,
    totalProductsCount: 0,

    // ---------- Single Product --------------
    selectedProduct: null,
    relatedProducts: [],

    // ---------- Home Page Sections ----------
    categoryList: [],
    flashSaleProducts: [],
    exploreProducts: [],

    // ---------- Category Filter -------------
    selectedCategory: null,

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
      // --- guards Load more rapid clicks ----
      const existingProducts = new Set(state.products.map(p => p.id)) // returns a Set of current products' ids
      state.products = [...state.products, ...newProducts.filter(p => !existingProducts.has(p.id))]
    }, // adds only products with Ids that are not in products (makes sure no duplicate products are added)
    SET_DISPLAYED_PRODUCTS_COUNT(state, count) {
      state.displayedProductsCount = count
    },
    SET_TOTAL_PRODUCTS_COUNT(state, count) {
      state.totalProductsCount = count
    },

    // ---------- Single Product --------------
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product
    },
    SET_RELATED_PRODUCTS(state, products) {
      state.relatedProducts = products
    },

    // ---------- Home Page Sections ----------
    SET_FLASH_SALE_PRODUCTS(state, products) {
      state.flashSaleProducts = products
    },
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList
    },
    SET_EXPLORE_PRODUCTS(state, products) {
      state.exploreProducts = products
    },

    // ---------- Category Filter -------------
    SET_CATEGORY(state, category) {
      state.selectedCategory = category
      state.displayedProductsCount = 20
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
  },
  actions: {
    // ----------- Products Grid --------------
    async getProducts({ commit, state }) {
      const url = state.selectedCategory
        ? `/products/category/${state.selectedCategory}?limit=40`
        : '/products?limit=40'
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const response = await api.get(url)
        commit('SET_PRODUCTS', response.data.products)
        commit('SET_TOTAL_PRODUCTS_COUNT', response.data.total)
        commit('SET_LOADING', false)
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },

    async loadMoreProducts({ commit, state }) {
      const url = state.selectedCategory
        ? `/products/category/${state.selectedCategory}?limit=20&skip=${state.products.length}`
        : `/products?limit=20&skip=${state.products.length}`
      try {
        commit('SET_ERROR', null)
        const response = await api.get(url)
        commit('APPEND_PRODUCTS', response.data.products)
        commit('SET_DISPLAYED_PRODUCTS_COUNT', state.displayedProductsCount + 20)
        commit('SET_TOTAL_PRODUCTS_COUNT', response.data.total)
      } catch (error) {
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
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },

    async getRelatedProducts({ commit }, category) {
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const response = await api.get(`/products/category/${category}?limit=8`)
        commit('SET_RELATED_PRODUCTS', response.data.products)
        commit('SET_LOADING', false)
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },

    // ---------- Home Sections -----------

    async getFlashSaleProducts({ commit }) {
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const response = await api.get('/products?limit=8&sortBy=discountPercentage&order=desc')
        commit('SET_FLASH_SALE_PRODUCTS', response.data.products)
        commit('SET_LOADING', false)
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },

    async getCategoryList({ commit }) {
      try {
        commit('SET_ERROR', null)
        const response = await api.get('/products/category-list')
        commit('SET_CATEGORY_LIST', response.data)
      } catch (error) {
        commit('SET_ERROR', error.message)
      }
    },

    async getExploreProducts({ commit }) {
      try {
        commit('SET_LOADING', true)
        commit('SET_ERROR', null)
        const skip = Math.floor(Math.random() * 100)
        const response = await api.get(`/products?limit=8&skip=${skip}`)
        commit('SET_EXPLORE_PRODUCTS', response.data.products)
        commit('SET_LOADING', false)
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error.message)
      }
    },
  },
}
