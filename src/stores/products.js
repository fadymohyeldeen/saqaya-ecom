// --------------------------------------------------------
// TOOLKIT
// defineStore(id, setup) — creates a Pinia store
//   id: unique string name for the store (used in devtools)
//   setup: a function (like a Vue 3 setup()) that returns state, getters, actions
//
// ref(value) — reactive state variable (like data() in Options API)
//   read/write with .value inside JS: products.value
//   in template and returned object: Vue unwraps automatically, no .value needed
//
// computed(() => ...) — reactive derived value (like getters in Vuex)
//   read with .value inside JS: displayedProducts.value
//   re-runs automatically when its dependencies change
//
// return {} — everything returned is accessible to components
//   state, computed, and actions must all be returned
// --------------------------------------------------------

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/services/api'

export const useProductsStore = defineStore('products', () => {
  // --------------- State ------------------
  // ----------------------------------------
  // ------------- Products Grid ------------
  const products = ref([])
  const displayedProductsCount = ref(20)
  const totalProductsCount = ref(0)

  // ------------ Single Product ------------
  const selectedProduct = ref(null)
  const relatedProducts = ref([])

  // ---------- Home Page Sections ----------
  const categoryList = ref([])
  const flashSaleProducts = ref([])
  const exploreProducts = ref([])

  // ----------- Category Filter ------------
  const selectedCategory = ref(null)

  // ----------------- Sort -----------------
  const sortBy = ref('createdAt')
  const sortOrder = ref('desc')

  // ------------ Error Handling ------------
  const error = ref(null)

  // --------------- Loading ----------------
  const isLoading = ref(false)

  // ------------- Getters ------------------
  // ----------------------------------------
  // ------------- Products Grid ------------
  const displayedProducts = computed(() => {
    return products.value.slice(0, displayedProductsCount.value)
  })

  // -------------- Actions -----------------
  // ----------------------------------------
  // ------------- Products Grid ------------
  async function getProducts() {
    const params = new URLSearchParams({
      limit: 40,
      sortBy: sortBy.value,
      order: sortOrder.value,
    })

    const url = selectedCategory.value
      ? `/products/category/${selectedCategory.value}?${params}`
      : `/products?${params}`

    try {
      isLoading.value = true
      error.value = null
      const response = await api.get(url)
      products.value = response.data.products
      totalProductsCount.value = response.data.total
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err.message
    }
  }

  async function loadMoreProducts() {
    const params = new URLSearchParams({
      limit: 20,
      skip: products.value.length,
      sortBy: sortBy.value,
      order: sortOrder.value,
    })

    const url = selectedCategory.value
      ? `/products/category/${selectedCategory.value}?${params}`
      : `/products?${params}`

    try {
      error.value = null
      const response = await api.get(url)
      products.value = [...products.value, ...response.data.products]
      displayedProductsCount.value += 20
      totalProductsCount.value = response.data.total
    } catch (err) {
      error.value = err.message
    }
  }

  // ------------ Single Product ------------
  async function getProductById(productId) {
    try {
      isLoading.value = true
      error.value = null
      const response = await api.get(`/products/${productId}`)
      selectedProduct.value = response.data
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err.message
    }
  }

  async function getRelatedProducts(category) {
    try {
      isLoading.value = true
      error.value = null
      const response = await api.get(`/products/category/${category}?limit=8`)
      relatedProducts.value = response.data.products
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err.message
    }
  }

  // ------------- Home Sections ------------
  async function getFlashSaleProducts() {
    try {
      isLoading.value = true
      error.value = null
      const response = await api.get('/products?limit=8&sortBy=discountPercentage&order=desc')
      flashSaleProducts.value = response.data.products
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err.message
    }
  }

  async function getCategoryList() {
    try {
      error.value = null
      const response = await api.get('/products/category-list')
      categoryList.value = response.data
    } catch (err) {
      error.value = err.message
    }
  }

  async function getExploreProducts() {
    try {
      isLoading.value = true
      error.value = null
      const skip = Math.floor(Math.random() * 100)
      const response = await api.get(`/products?limit=8&skip=${skip}`)
      exploreProducts.value = response.data.products
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err.message
    }
  }

  // ----------- Category & Sort ------------
  function setCategory(category) {
    selectedCategory.value = category
    displayedProductsCount.value = 20
  }

  function setSort({ sortBy: by, sortOrder: order }) {
    sortBy.value = by
    sortOrder.value = order
    displayedProductsCount.value = 20
  }

  // -------------- Return ---------------
  return {
    products,
    displayedProductsCount,
    totalProductsCount,
    selectedProduct,
    relatedProducts,
    categoryList,
    flashSaleProducts,
    exploreProducts,
    selectedCategory,
    sortBy,
    sortOrder,
    error,
    isLoading,
    displayedProducts,
    getProducts,
    loadMoreProducts,
    getProductById,
    getRelatedProducts,
    getFlashSaleProducts,
    getCategoryList,
    getExploreProducts,
    setCategory,
    setSort,
  }
})
