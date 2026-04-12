<template>
  <div class="single-product">
    <AppBreadcrumb :items="breadcrumbs" />

    <div class="single-product__main" v-if="product">
      <ProductGallery
        :images="product.images"
        :selectedImage="selectedImage"
        :alt="product.title"
        @select="selectedImage = $event"
      />
      <ProductInfo
        :product="product"
        :quantity="quantity"
        @increase-qty="increaseQty"
        @decrease-qty="decreaseQty"
      />
    </div>

    <ProductsSection label="More of this category" :products="relatedProducts" />
  </div>
</template>

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ProductGallery from '@/components/SingleProduct/ProductGallery.vue'
  import ProductInfo from '@/components/SingleProduct/ProductInfo.vue'
  import ProductsSection from '@/components/shared/ProductsSection.vue'

  export default {
    name: 'ProductView',
    components: {
      AppBreadcrumb,
      ProductGallery,
      ProductInfo,
      ProductsSection,
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
      await this.$store.dispatch('products/getProductById', this.$route.params.id)
      await this.$store.dispatch('products/getFlashSaleProducts')
    },
    computed: {
      product() {
        return this.$store.state.products.selectedProduct
      },
      breadcrumbs() {
        return [
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: this.product?.title },
        ]
      },
      relatedProducts() {
        return this.$store.state.products.exploreProducts
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
