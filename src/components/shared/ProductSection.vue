<!-- Purpose: Renders a horizontal container of ProductCards with a SectionHeader.
  Used In: src/views/HomeView.vue, src/views/ProductView.vue
  Notes: Scrolls horizontally through products -->
<template>
  <section class="products-section">
    <SectionHeader :label="label" :title="title" @next="scrollNext()" @prev="scrollPrev()" />

    <div ref="scrollContainer" class="products-section__scroll">
      <template v-if="isLoading">
        <ProductCard v-for="n in 4" :key="n" :isLoading="true" />
      </template>
      <template v-else>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </template>
    </div>

    <div v-if="viewAllLink" class="products-section__center">
      <ButtonApp label="View All Products" :to="viewAllLink" />
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import ProductCard from '@/components/shared/ProductCard.vue'
  import SectionHeader from '@/components/shared/SectionHeader.vue'

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    products: {
      type: Array,
      required: true,
    },

    viewAllLink: {
      type: String,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  })
  const scrollContainer = ref(null)
  function scrollNext() {
    const card = scrollContainer.value.firstElementChild
    if (!card) return
    scrollContainer.value.scrollBy({ left: card.offsetWidth, behavior: 'smooth' }) // scrolls by the width of a card
  }
  function scrollPrev() {
    const card = scrollContainer.value.firstElementChild
    if (!card) return
    scrollContainer.value.scrollBy({ left: -card.offsetWidth, behavior: 'smooth' })
  }
</script>

<style scoped>
  .products-section {
    margin-bottom: 40px;
  }

  .products-section__scroll {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding-bottom: 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .products-section__scroll::-webkit-scrollbar {
    display: none;
  }

  .products-section__scroll > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  .products-section__center {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }

  @media (min-width: 768px) {
    .products-section {
      margin-bottom: 60px;
    }

    .products-section__scroll {
      gap: 30px;
    }

    .products-section__center {
      margin-top: 40px;
    }
  }

  @media (min-width: 1024px) {
    .products-section {
      margin-bottom: 80px;
    }
  }
</style>
