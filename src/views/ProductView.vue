<template>
  <div class="single-product">
    <AppBreadcrumb :product-name="product ? product.title : ''" />

    <div v-if="isLoading || product" class="single-product__main">
      <ProductGallery
        :isLoading="isLoading"
        :images="product ? product.images : []"
        :selectedImage="selectedImage"
        :alt="product ? product.title : ''"
        @select="selectedImage = $event"
      />
      <ProductInfo
        :isLoading="isLoading"
        :product="product"
        :quantity="quantity"
        @increase-qty="increaseQty"
        @decrease-qty="decreaseQty"
      />
    </div>

    <ErrorMessage v-else message="Product Not Found.. Please try again later!" />
    <ProductSection
      v-if="relatedProducts.length || isLoading"
      label="More of this category"
      :products="relatedProducts"
      :isLoading="isLoading"
    />
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { onBeforeRouteUpdate, useRoute } from 'vue-router'

  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ErrorMessage from '@/components/shared/ErrorMessage.vue'
  import ProductSection from '@/components/shared/ProductSection.vue'
  import ProductGallery from '@/components/single-product/ProductGallery.vue'
  import ProductInfo from '@/components/single-product/ProductInfo.vue'
  import { useProductsStore } from '@/stores/products'

  const selectedImage = ref(0)
  const quantity = ref(1)
  const route = useRoute()
  const productsStore = useProductsStore()
  const product = computed(() => {
    return productsStore.selectedProduct
  })
  const relatedProducts = computed(() => {
    return productsStore.relatedProducts
  })
  const isLoading = computed(() => {
    return productsStore.isLoading
  })
  const category = computed(() => {
    return productsStore.selectedProduct?.category
  })

  onMounted(async () => {
    // first visit
    await productsStore.getProductById(route.params.id)
    await productsStore.getRelatedProducts(category.value)
  })
  onBeforeRouteUpdate(async (to, _from, next) => {
    // when navigating between products
    selectedImage.value = 0
    quantity.value = 1
    await productsStore.getProductById(to.params.id)
    await productsStore.getRelatedProducts(category.value)
    next()
  })
  function increaseQty() {
    quantity.value++
  }
  function decreaseQty() {
    if (quantity.value > 1) quantity.value--
  }
</script>

<style scoped>
  .single-product__main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    .single-product__main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 80px;
    }
  }

  @media (min-width: 1024px) {
    .single-product__main {
      grid-template-columns: 670px 1fr;
      gap: 60px;
      margin-bottom: 140px;
    }
  }
</style>
