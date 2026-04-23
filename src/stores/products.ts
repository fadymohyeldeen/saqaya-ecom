import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import api from '@/services/api'
import type { Product, ProductsResponse } from '@/types/product'

export const useProductsStore = defineStore('products', () => {
  // --------------- State ------------------
  // ----------------------------------------
  // ------------- Products Grid ------------
  const products = ref<Product[]>([])
  const displayedProductsCount = ref(20)
  const totalProductsCount = ref(0)

  // ------------ Single Product ------------
  const selectedProduct = ref<Product | null>(null)
  const relatedProducts = ref<Product[]>([])

  // ---------- Home Sections ----------
  const categoryList = ref<string[]>([])
  const flashSaleProducts = ref<Product[]>([])
  const exploreProducts = ref<Product[]>([])

  // ----------- Category Filter ------------
  const selectedCategory = ref<string | null>(null)

  // ----------------- Sort -----------------
  const sortBy = ref('createdAt')
  const sortOrder = ref('desc')

  // ------------ Error Handling ------------
  const error = ref<string | null>(null)

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
      limit: '40',
      sortBy: sortBy.value,
      order: sortOrder.value,
    })

    const url = selectedCategory.value
      ? `/products/category/${selectedCategory.value}?${params}`
      : `/products?${params}`

    try {
      isLoading.value = true
      error.value = null
      const response = await api.get<ProductsResponse>(url)
      products.value = response.data.products
      totalProductsCount.value = response.data.total
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  async function loadMoreProducts() {
    const params = new URLSearchParams({
      limit: '20',
      skip: String(products.value.length),
      sortBy: sortBy.value,
      order: sortOrder.value,
    })

    const url = selectedCategory.value
      ? `/products/category/${selectedCategory.value}?${params}`
      : `/products?${params}`

    try {
      error.value = null
      const response = await api.get<ProductsResponse>(url)
      products.value = [...products.value, ...response.data.products]
      displayedProductsCount.value += 20
      totalProductsCount.value = response.data.total
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  // ------------ Single Product ------------
  async function getProductById(productId: number) {
    try {
      isLoading.value = true
      error.value = null
      const response = await api.get<Product>(`/products/${productId}`)
      selectedProduct.value = response.data
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  async function getRelatedProducts(category: string) {
    try {
      isLoading.value = true
      error.value = null
      const response = await api.get<ProductsResponse>(`/products/category/${category}?limit=8`)
      relatedProducts.value = response.data.products
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  // ------------- Home Sections ------------
  async function getFlashSaleProducts() {
    try {
      isLoading.value = true
      error.value = null
      const response = await api.get<ProductsResponse>(
        '/products?limit=8&sortBy=discountPercentage&order=desc'
      )
      flashSaleProducts.value = response.data.products
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  async function getCategoryList() {
    try {
      error.value = null
      const response = await api.get<string[]>('/products/category-list')
      categoryList.value = response.data
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  async function getExploreProducts() {
    try {
      isLoading.value = true
      error.value = null
      const skip = Math.floor(Math.random() * 100)
      const response = await api.get<ProductsResponse>(`/products?limit=8&skip=${skip}`)
      exploreProducts.value = response.data.products
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  // ----------- Category & Sort ------------
  function setCategory(category: string) {
    selectedCategory.value = category
    displayedProductsCount.value = 20
  }

  function setSort({ sortBy: by, sortOrder: order }: { sortBy: string; sortOrder: string }) {
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
