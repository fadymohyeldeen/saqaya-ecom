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
        <ButtonApp
          v-if="hasMoreProducts"
          label="Load More ..."
          :disabled="isLoadingMore"
          @click="loadMore"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

  import filterIcon from '@/assets/icons/products/icon-filter.svg'
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import DropdownMenu from '@/components/shared/DropdownMenu.vue'
  import ErrorMessage from '@/components/shared/ErrorMessage.vue'
  import ProductCard from '@/components/shared/ProductCard.vue'
  import { useProductsStore } from '@/stores/products'
  import { SORT_OPTIONS } from '@/utils/constants'
  import { formatName } from '@/utils/formatters'

  const route = useRoute()
  const router = useRouter()
  const sortOptions = SORT_OPTIONS
  const productsStore = useProductsStore()

  const products = computed(() => productsStore.displayedProducts)
  const categories = computed(() => productsStore.categoryList)
  const error = computed(() => productsStore.error)
  const isLoading = computed(() => productsStore.isLoading)
  const isLoadingMore = computed(() => productsStore.isLoadingMore)
  const hasMoreProducts = computed(() => {
    return productsStore.totalProductsCount > products.value.length
  })
  const filterOptions = computed(() => {
    const all = [{ label: 'All Categories', value: null }]
    const cats = categories.value.map(cat => ({ label: formatName(cat), value: cat }))
    return [...all, ...cats]
  })

  onMounted(() => {
    fetchByCategory(route.query.category)
    productsStore.getCategoryList()
  })

  onBeforeRouteUpdate(async (to, _from, next) => {
    await fetchByCategory(to.query.category)
    next()
  })

  function loadMore() {
    productsStore.loadMoreProducts()
  }
  async function fetchByCategory(category) {
    productsStore.setCategory(category || null)
    await productsStore.getProducts()
  }
  function onFilterSelect(option) {
    const category = option.value
    const sameCategory = (route.query.category || null) === (category || null)
    if (sameCategory) return
    router.push({ path: '/products', query: category ? { category } : {} })
  }
  async function onSortSelect(option) {
    productsStore.setSort({ sortBy: option.value, sortOrder: option.order })
    await productsStore.getProducts()
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
