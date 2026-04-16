<template>
  <div class="products__container">
    <AppBreadcrumb :items="breadcrumbs" />
    <ErrorMessage v-if="error" :message="`Products Not Found.. Please try again later!`" />
    <div v-else>
      <div class="products__header">
        <h2 class="section-title">Explore Our Products</h2>
        <div class="products__sort">
          <p>Sort by</p>
          <select name="" id="" class="products__select">
            <option value="">Highest Rating</option>
            <option value="">Price: Low to high</option>
            <option value="">Price: High to low</option>
            <option value="">Discount percentage</option>
            <option value="">Brand</option>
          </select>
        </div>
      </div>

      <div class="products__grid">
        <template v-if="isLoading">
          <ProductCard v-for="n in 20" :key="n" :isLoading="true" />
        </template>
        <template v-else>
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </template>
      </div>

      <div class="products__load-more">
        <AppButton label="Load More ..." @click="loadMore" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .products__header {
    justify-content: space-between;
    display: flex;
    margin-bottom: 32px;
  }

  .products__header .section-title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.04em;
    color: var(--color-text);
  }

  .products__sort {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 40px;
  }

  .products__select {
    background-image: url('@/assets/icons/products/icon-drop-down.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    appearance: none;
    padding: 12px 20px;
    border-radius: var(--radius-sm);
    border: none;
    font-size: 14px;
    font-weight: 500;
    background-color: var(--color-primary-dark);
    color: white;
    cursor: pointer;
    outline: none;
  }

  .products__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 20px;
  }

  .products__load-more {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }

  @media (max-width: 768px) {
    .products__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .products__header .section-title {
      font-size: 20px;
    }

    .products__sort {
      width: 100%;
      justify-content: space-between;
      padding-right: 0;
    }

    .products__select {
      width: 100%;
      flex: 1;
    }
  }
</style>

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import AppButton from '@/components/shared/AppButton.vue'
  import ProductCard from '@/components/shared/ProductCard.vue'
  import ErrorMessage from '@/components/shared/ErrorMessage.vue'

  export default {
    name: 'ProductsView',
    components: {
      AppBreadcrumb,
      AppButton,
      ProductCard,
      ErrorMessage,
    },
    data() {
      return {
        breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Products' }],
      }
    },

    async mounted() {
      const category = this.$route.query.category || null
      this.$store.commit('products/SET_CATEGORY', category)
      await this.$store.dispatch('products/getProducts')
    },
    async beforeRouteUpdate(to, from, next) {
      this.$store.commit('products/SET_CATEGORY', to.query.category || null)
      await this.$store.dispatch('products/getProducts')
      next()
    },

    computed: {
      products() {
        return this.$store.getters['products/displayedProducts']
      },
      error() {
        return this.$store.state.products.error
      },
      isLoading() {
        return this.$store.state.products.isLoading
      },
    },

    methods: {
      loadMore() {
        this.$store.dispatch('products/loadMoreProducts')
      },
    },
  }
</script>
