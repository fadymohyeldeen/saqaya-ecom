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
      await this.$store.dispatch('products/getProductById', this.$route.params.id)
      await this.$store.dispatch('products/getProducts')
    },

    async beforeRouteUpdate(to, _from, next) {
      // when navigating between products
      await this.$store.dispatch('products/getProductById', to.params.id)
      await this.$store.dispatch('products/getProducts')
      next()
    },

    computed: {
      product() {
        return this.$store.state.products.selectedProduct
      },
      relatedProducts() {
        return this.$store.getters['products/exploreProducts']
      },
      isLoading() {
        return this.$store.state.products.isLoading
      },
    },
  }
</script>

<style scoped>
  /* ─── Mobile base ─── */
  .single-product__main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 60px;
  }

  /* ─── Tablet (768px+) ─── */
  @media (min-width: 768px) {
    .single-product__main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 80px;
    }
  }

  /* ─── Desktop (1024px+) ─── */
  @media (min-width: 1024px) {
    .single-product__main {
      grid-template-columns: 670px 1fr;
      gap: 60px;
      margin-bottom: 140px;
    }
  }
</style>
