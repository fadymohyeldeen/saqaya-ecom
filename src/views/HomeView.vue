<template>
  <div class="home">
    <HeroBanner />
    <div v-if="flashSaleProducts.length || isLoading">
      <ProductSection
        label="Today's"
        title="Flash Sales"
        :products="flashSaleProducts"
        viewAllLink="/products"
        :isLoading="isLoading"
      />

      <div class="home__divider"></div>
    </div>

    <CategorySection :categories="categoryList" />

    <div class="home__divider"></div>

    <ProductSection
      v-if="exploreProducts.length || isLoading"
      label="Our Products"
      title="Explore Our Products"
      :products="exploreProducts"
      viewAllLink="/products"
      :isLoading="isLoading"
    />

    <ServiceItems :services="services" />
  </div>
</template>

<script lang="ts">
  import HeroBanner from '@/components/home/HeroBanner.vue'
  import CategorySection from '@/components/home/CategorySection.vue'
  import ServiceItems from '@/components/shared/ServiceItems.vue'
  import ProductSection from '@/components/shared/ProductSection.vue'
  import { SERVICES } from '@/utils/constants'
  import { useProductsStore } from '@/stores/products'

  export default {
    name: 'HomeView',
    components: {
      HeroBanner,
      CategorySection,
      ServiceItems,
      ProductSection,
    },
    data() {
      return {
        services: SERVICES,
      }
    },
    computed: {
      productsStore() {
        return useProductsStore()
      },
      flashSaleProducts() {
        return this.productsStore.flashSaleProducts
      },
      exploreProducts() {
        return this.productsStore.exploreProducts
      },
      isLoading() {
        return this.productsStore.isLoading
      },
      categoryList() {
        return this.productsStore.categoryList
      },
    },

    async mounted() {
      await Promise.all([
        this.productsStore.getFlashSaleProducts(),
        this.productsStore.getExploreProducts(),
        this.productsStore.getCategoryList(),
      ])
    },
  }
</script>

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
