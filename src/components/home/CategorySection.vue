<template>
  <section class="categories-section">
    <SectionHeader
      label="Categories"
      title="Browse By Category"
      @next="scrollNext"
      @prev="scrollPrev"
    />
    <div class="categories-section__grid" ref="scrollContainer">
      <CategoryCard
        v-for="category in categoryList"
        :key="category"
        :name="category"
        @select="onSelect"
      />
    </div>
  </section>
</template>

<script>
  import SectionHeader from '@/components/shared/SectionHeader.vue'
  import CategoryCard from '@/components/home/CategoryCard.vue'

  export default {
    name: 'CategorySection',
    components: { SectionHeader, CategoryCard },
    mounted() {
      this.$store.dispatch('products/getCategoryList')
    },
    computed: {
      categoryList() {
        return this.$store.state.products.categoryList
      },
    },
    methods: {
      scrollNext() {
        const container = this.$refs.scrollContainer
        const card = container.firstElementChild
        if (!card) return
        container.scrollBy({ left: card.offsetWidth, behavior: 'smooth' })
      },
      scrollPrev() {
        const container = this.$refs.scrollContainer
        const card = container.firstElementChild
        if (!card) return
        container.scrollBy({ left: -card.offsetWidth, behavior: 'smooth' })
      },
      onSelect(category) {
        this.$router.push({ path: '/products', query: { category } })
      },
    },
  }
</script>

<style scoped>
  /* ─── Mobile  ─── */
  .categories-section {
    margin-bottom: 40px;
  }

  .categories-section__grid {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .categories-section__grid::-webkit-scrollbar {
    display: none;
  }

  /* ─── Tablet/Desktop  ─── */
  @media (min-width: 768px) {
    .categories-section {
      margin-bottom: 60px;
    }

    .categories-section__grid {
      gap: 30px;
    }
  }
</style>
