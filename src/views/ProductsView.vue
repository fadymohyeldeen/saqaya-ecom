<template>
  <div class="products__container">
    <AppBreadcrumb />
    <ErrorMessage v-if="error" :message="`Products Not Found.. Please try again later!`" />
    <div v-else>
      <div class="products__header">
        <h2 class="section-title">Explore Our Products</h2>
        <div class="products__sort">
          <div ref="sortRef" class="products__sort-dropdown">
            <button class="products__select" @click="sortOpen = !sortOpen">
              Sort by
              <img
                src="@/assets/icons/products/icon-drop-down.svg"
                alt=""
                class="products__select-arrow"
              />
            </button>
            <div v-if="sortOpen" class="products__filter-dropdown">
              <p v-for="option in sortOptions" :key="option.value" class="products__filter-option">
                {{ option.label }}
              </p>
            </div>
          </div>
          <div ref="filterRef" class="products__filter">
            <img
              src="@/assets/icons/products/icon-filter.svg"
              alt="Filter"
              class="products__filter-icon"
              @click="filterOpen = !filterOpen"
            />
            <div v-if="filterOpen" class="products__filter-dropdown">
              <p class="products__filter-option" @click="filterByCategory(null)">All Categories</p>
              <p
                v-for="category in categories"
                :key="category"
                class="products__filter-option"
                @click="filterByCategory(category)"
              >
                {{ formatName(category) }}
              </p>
            </div>
          </div>
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
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import ProductCard from '@/components/shared/ProductCard.vue'
  import ErrorMessage from '@/components/shared/ErrorMessage.vue'

  export default {
    name: 'ProductsView',
    components: {
      AppBreadcrumb,
      ButtonApp,
      ProductCard,
      ErrorMessage,
    },
    data() {
      return {
        filterOpen: false,
        sortOpen: false,
        sortOptions: [
          { label: 'Price: Low to High', value: 'price-asc' },
          { label: 'Price: High to Low', value: 'price-desc' },
          { label: 'Rating: High to Low', value: 'rating-desc' },
          { label: 'Rating: Low to High', value: 'rating-asc' },
        ],
      }
    },

    computed: {
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
      document.addEventListener('click', this.handleOutsideClick)
    },

    async beforeRouteUpdate(to, _from, next) {
      await this.fetchByCategory(to.query.category)
      next()
    },

    beforeDestroy() {
      document.removeEventListener('click', this.handleOutsideClick)
    },

    methods: {
      loadMore() {
        this.$store.dispatch('products/loadMoreProducts')
      },

      handleOutsideClick(e) {
        if (this.$refs.filterRef && !this.$refs.filterRef.contains(e.target)) {
          this.filterOpen = false
        }
        if (this.$refs.sortRef && !this.$refs.sortRef.contains(e.target)) {
          this.sortOpen = false
        }
      },

      async fetchByCategory(category) {
        this.$store.commit('products/SET_CATEGORY', category || null)
        await this.$store.dispatch('products/getProducts')
      },

      filterByCategory(category) {
        this.$router.push({ path: '/products', query: category ? { category } : {} })
        this.filterOpen = false
      },

      formatName,
    },
  }
</script>

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
    padding-right: 10px;
  }

  .products__sort-dropdown {
    position: relative;
  }

  .products__select {
    display: flex;
    align-items: center;
    gap: 8px;
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

  .products__select-arrow {
    width: 16px;
    height: 16px;
  }

  .products__filter {
    position: relative;
  }

  .products__filter-icon {
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: var(--color-primary-dark);
    border-radius: var(--radius-sm);
    cursor: pointer;
    box-sizing: border-box;
    display: block;
  }

  .products__filter-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background-color: var(--color-bg);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--radius-sm);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 180px;
    max-height: 300px;
    overflow-y: auto;
  }

  .products__filter-option {
    padding: 10px 16px;
    font-size: var(--text-sm);
    color: var(--color-text);
    cursor: pointer;
    text-transform: capitalize;
  }

  .products__filter-option:hover {
    background-color: var(--color-primary);
    color: var(--color-text-light);
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
