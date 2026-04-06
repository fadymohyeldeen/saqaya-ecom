<template>
  <div class="home">
    <HeroBanner />

    <ProductsSection
      label="Today's"
      title="Flash Sales"
      :products="flashSaleProducts"
      :showNav="true"
      viewAllLink="/products"
      :alwaysScroll="true"
    />

    <div class="home__divider"></div>

    <CategoriesSection />

    <div class="home__divider"></div>

    <ProductsSection
      label="Our Products"
      title="Explore Our Products"
      :products="exploreProducts"
      :showNav="true"
      viewAllLink="/products"
      :alwaysScroll="true"
    />

    <ServicesStrip />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeroBanner from "@/components/Home/HeroBanner.vue";
import CategoriesSection from "@/components/Home/CategoriesSection.vue";
import ServicesStrip from "@/components/Home/ServicesStrip.vue";
import ProductsSection from "@/components/shared/ProductsSection.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    HeroBanner,
    CategoriesSection,
    ServicesStrip,
    ProductsSection,
  },
  data() {
    return {
      flashSaleProducts: [
        {
          id: 1,
          name: "HAVIT HV-G92 Gamepad",
          price: 120,
          originalPrice: 160,
          discount: 15,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 88,
        },
        {
          id: 2,
          name: "AK-900 Wired Keyboard",
          price: 960,
          originalPrice: 1160,
          discount: 37,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 4,
          reviews: 75,
        },
        {
          id: 3,
          name: "IPS LCD Gaming Monitor",
          price: 370,
          originalPrice: 400,
          discount: 54,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 99,
        },
        {
          id: 4,
          name: "S-Series Comfort Chair",
          price: 375,
          originalPrice: 400,
          discount: 35,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 99,
        },
      ],
      exploreProducts: [
        {
          id: 5,
          name: "GP11 Shift Pro Controller",
          price: 190,
          originalPrice: 250,
          discount: 24,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 4,
          reviews: 65,
        },
        {
          id: 6,
          name: "RGB Liquid CPU Cooler",
          price: 160,
          originalPrice: 170,
          discount: 6,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 57,
        },
        {
          id: 7,
          name: "Small BookShelf",
          price: 360,
          originalPrice: null,
          discount: null,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 99,
        },
        {
          id: 8,
          name: "Breed Dry Dog Food",
          price: 100,
          originalPrice: 120,
          discount: 17,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 35,
        },
      ],
    };
  },
});
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
