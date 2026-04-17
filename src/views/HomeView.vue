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

    <CategorySection />

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
  import ServiceItems from '@/components/shared/ServiceItems.vue'
  import ProductSection from '@/components/shared/ProductSection.vue'

  export default Vue.extend({
    name: 'HomeView',
    components: {
      HeroBanner,
      CategorySection,
      ServiceItems,
      ProductSection,
    },
    data() {
      return {
        services: [
          {
            icon: require('@/assets/icons/header/icon-cart.svg'),
            alt: 'Delivery',
            title: 'FREE AND FAST DELIVERY',
            description: 'Free delivery for all orders over $140',
            inverted: true,
          },
          {
            icon: require('@/assets/icons/about/icon-customer.svg'),
            alt: 'Customer Service',
            title: '24/7 CUSTOMER SERVICE',
            description: 'Friendly 24/7 customer support',
            inverted: false,
          },
          {
            icon: require('@/assets/icons/about/icon-dollar.svg'),
            alt: 'Money Back',
            title: 'MONEY BACK GUARANTEE',
            description: 'We return money within 30 days',
            inverted: false,
          },
        ],
      }
    },
    async mounted() {
      await Promise.all([
        this.$store.dispatch('products/getFlashSaleProducts'),
        this.$store.dispatch('products/getExploreProducts'),
      ])
    },
    computed: {
      flashSaleProducts() {
        return this.$store.state.products.flashSaleProducts
      },
      exploreProducts() {
        return this.$store.state.products.exploreProducts
      },
      isLoading() {
        return this.$store.state.products.isLoading
      },
    },
  })
</script>
