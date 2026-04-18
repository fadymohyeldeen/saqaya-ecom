<template>
  <div class="products__container">
    <AppBreadcrumb />
    <ErrorMessage v-if="error" :message="`Products Not Found.. Please try again later!`" />
    <div v-else>
      <div class="products__header">
        <h2 class="section-title">Explore Our Products</h2>
        <div class="products__sort">
          <DropdownMenu label="Sort by" :options="sortOptions" @select="onSortSelect" />
          <DropdownMenu :icon="filterIcon" :options="filterOptions" @select="onFilterSelect" />
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
        <ButtonApp v-if="hasMoreProducts" label="Load More ..." @click="loadMore" />
      </div>
    </div>
  </div>
</template>

<script>
  import { formatName } from '@/utils/formatters'
  import { SORT_OPTIONS } from '@/utils/constants'
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import ProductCard from '@/components/shared/ProductCard.vue'
  import ErrorMessage from '@/components/shared/ErrorMessage.vue'
  import DropdownMenu from '@/components/shared/DropdownMenu.vue'
  import filterIcon from '@/assets/icons/products/icon-filter.svg'

  export default {
    name: 'ProductsView',
    components: {
      AppBreadcrumb,
      ButtonApp,
      ProductCard,
      ErrorMessage,
      DropdownMenu,
    },
    data() {
      return {
        sortOptions: SORT_OPTIONS,
        filterIcon,
      }
    },
    computed: {
      filterOptions() {
        const all = [{ label: 'All Categories', value: null }]
        const cats = this.categories.map(cat => ({ label: formatName(cat), value: cat }))
        return [...all, ...cats]
      },
      products() {
        return this.$store.getters['products/displayedProducts']
      },
      categories() {
        return this.$store.state.products.categoryList
      },
      error() {
        return this.$store.state.products.error
      },
      isLoading() {
        return this.$store.state.products.isLoading
      },
      hasMoreProducts() {
        return this.$store.state.products.totalProductsCount > this.products.length
      },
    },
    mounted() {
      this.fetchByCategory(this.$route.query.category)
      this.$store.dispatch('products/getCategoryList')
    },
    async beforeRouteUpdate(to, _from, next) {
      await this.fetchByCategory(to.query.category)
      next()
    },
    methods: {
      loadMore() {
        this.$store.dispatch('products/loadMoreProducts')
      },
      async fetchByCategory(category) {
        this.$store.commit('products/SET_CATEGORY', category || null)
        await this.$store.dispatch('products/getProducts')
      },
      onFilterSelect(option) {
        const category = option.value
        const sameCategory = (this.$route.query.category || null) === (category || null)
        if (sameCategory) return
        this.$router.push({ path: '/products', query: category ? { category } : {} })
      },
      async onSortSelect(option) {
        this.$store.commit('products/SET_SORT', { sortBy: option.value, sortOrder: option.order })
        await this.$store.dispatch('products/getProducts')
      },
    },
  }
</script>

<style scoped>
  .products__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 32px;
  }

  .products__header .section-title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: var(--color-text);
  }

  .products__sort {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
    padding-right: 0;
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

  @media (min-width: 768px) {
    .products__header {
      flex-direction: row;
      align-items: center;
      gap: 0;
    }

    .products__header .section-title {
      font-size: 36px;
    }

    .products__sort {
      width: auto;
      justify-content: flex-end;
      padding-right: 10px;
    }
  }
</style>
