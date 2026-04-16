<template>
  <div class="home">
    <HeroBanner />
    <div v-if="flashSaleProducts.length">
      <ProductSection
        label="Today's"
        title="Flash Sales"
        :products="flashSaleProducts"
        viewAllLink="/products"
        :isLoading="isLoading"
      />

      <div class="home__divider"></div>
    </div>

    <CategorySection />

    <div class="home__divider"></div>

    <ProductSection
      v-if="exploreProducts.length"
      label="Our Products"
      title="Explore Our Products"
      :products="exploreProducts"
      viewAllLink="/products"
      :isLoading="isLoading"
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
  import HeroBanner from '@/components/home/HeroBanner.vue'
  import CategorySection from '@/components/home/CategorySection.vue'
  import ServicesStrip from '@/components/shared/ServicesStrip.vue'
  import ProductSection from '@/components/shared/ProductSection.vue'

  export default Vue.extend({
    name: 'HomeView',
    components: {
      HeroBanner,
      CategorySection,
      ServicesStrip,
      ProductSection,
    },
    async mounted() {
      await Promise.all([
        this.$store.dispatch('products/getFlashSaleProducts'),
        this.$store.dispatch('products/getProducts'),
      ])
    },
    computed: {
      flashSaleProducts() {
        return this.$store.state.products.flashSaleProducts
      },
      exploreProducts() {
        return this.$store.getters['products/exploreProducts']
      },
      isLoading() {
        return this.$store.state.products.isLoading
      },
    },
  })
</script>
