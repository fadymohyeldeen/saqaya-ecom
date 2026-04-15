<template>
  <section class="products-section">
    <SectionHeader :label="label" :title="title" @next="scrollNext()" @prev="scrollPrev()" />

    <div ref="scrollContainer" class="products-section__scroll">
      <!-- ref: vue's getElementById -->
      <template v-if="isLoading">
        <ProductCard v-for="n in 4" :key="n" :isLoading="true" />
      </template>
      <template v-else>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </template>
    </div>

    <div v-if="viewAllLink" class="products-section__center">
      <AppButton label="View All Products" :to="viewAllLink" />
    </div>
  </section>
</template>

<script>
  import SectionHeader from '@/components/shared/SectionHeader.vue'
  import ProductCard from '@/components/shared/ProductCard.vue'
  import AppButton from '@/components/shared/AppButton.vue'

  export default {
    name: 'ProductsSection',
    components: { SectionHeader, ProductCard, AppButton },
    props: {
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
    },
    methods: {
      scrollNext() {
        const scrollContainer = this.$refs.scrollContainer // selects the div with ref scrollContainer
        const card = scrollContainer.firstElementChild // selects the first product card
        if (!card) return
        scrollContainer.scrollBy({ left: card.offsetWidth, behavior: 'smooth' }) // scrolls by the width of a card
      },
      scrollPrev() {
        const scrollContainer = this.$refs.scrollContainer
        const card = scrollContainer.firstElementChild
        if (!card) return
        scrollContainer.scrollBy({ left: -card.offsetWidth, behavior: 'smooth' })
      },
    },
  }
</script>

<style scoped>
  /* ─── Mobile base ─── */
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

  /* ─── Tablet (768px+) ─── */
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

  /* ─── Desktop (1024px+) ─── */
  @media (min-width: 1024px) {
    .products-section {
      margin-bottom: 80px;
    }
  }
</style>
