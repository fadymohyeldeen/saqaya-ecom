<template>
  <div class="home">
    <HeroBanner />
    <div v-if="flashSaleProducts.length">
      <ProductsSection
        label="Today's"
        title="Flash Sales"
        :products="flashSaleProducts"
        viewAllLink="/products"
      />

      <div class="home__divider"></div>
    </div>

    <CategoriesSection />

    <div class="home__divider"></div>

    <ProductsSection
      v-if="exploreProducts.length"
      label="Our Products"
      title="Explore Our Products"
      :products="exploreProducts"
      viewAllLink="/products"
    />

    <ServicesStrip />
  </div>
</template>

<style scoped>
  .home__divider {
    width: 100%;
    height: 1px;
    background: var(--color-text);
    opacity: 0.3;
    margin: 40px 0;
  }

  @media (min-width: 768px) {
    .home__divider {
      margin: 60px 0;
    }
  }
</style>

<script lang="ts">
  import Vue from 'vue'
  import HeroBanner from '@/components/Home/HeroBanner.vue'
  import CategoriesSection from '@/components/Home/CategoriesSection.vue'
  import ServicesStrip from '@/components/shared/ServicesStrip.vue'
  import ProductsSection from '@/components/shared/ProductsSection.vue'

  export default Vue.extend({
    name: 'HomeView',
    components: {
      HeroBanner,
      CategoriesSection,
      ServicesStrip,
      ProductsSection,
    },
    async mounted() {
      await this.$store.dispatch('products/getFlashSaleProducts')
      await this.$store.dispatch('products/getProducts')
    },
    computed: {
      flashSaleProducts() {
        return this.$store.state.products.flashSaleProducts
      },
      exploreProducts() {
        return this.$store.getters['products/exploreProducts']
      },
    },
  })
</script>
