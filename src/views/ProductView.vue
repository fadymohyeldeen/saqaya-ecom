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

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ProductGallery from '@/components/single-product/ProductGallery.vue'
  import ProductInfo from '@/components/single-product/ProductInfo.vue'
  import ProductSection from '@/components/shared/ProductSection.vue'
  import ErrorMessage from '@/components/shared/ErrorMessage.vue'
  import { useProductsStore } from '@/stores/products'

  export default {
    name: 'ProductView',
    components: {
      AppBreadcrumb,
      ProductGallery,
      ProductInfo,
      ProductSection,
      ErrorMessage,
    },
    data() {
      return {
        selectedImage: 0,
        quantity: 1,
      }
    },
    methods: {
      increaseQty() {
        this.quantity++
      },
      decreaseQty() {
        if (this.quantity > 1) this.quantity--
      },
    },
    async mounted() {
      // first visit
      await this.productsStore.getProductById(this.$route.params.id)
      await this.productsStore.getRelatedProducts(this.category)
    },

    async beforeRouteUpdate(to, _from, next) {
      // when navigating between products
      await this.productsStore.getProductById(to.params.id)
      await this.productsStore.getRelatedProducts(this.category)
      next()
    },

    computed: {
      productsStore() {
        return useProductsStore()
      },
      product() {
        return this.productsStore.selectedProduct
      },
      relatedProducts() {
        return this.productsStore.relatedProducts
      },
      isLoading() {
        return this.productsStore.isLoading
      },
      category() {
        return this.productsStore.selectedProduct?.category
      },
    },
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
