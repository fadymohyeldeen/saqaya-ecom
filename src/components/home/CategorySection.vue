<!-- Purpose: Displays a section of scrollable CategoryCards.
  Used In: src/views/HomeView.vue
  Notes: Wraps CategoryCards with a SectionHeader. -->
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
        v-for="category in categories"
        :key="category"
        :name="category"
        @select="onSelect"
      />
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import CategoryCard from '@/components/home/CategoryCard.vue'
  import SectionHeader from '@/components/shared/SectionHeader.vue'

  export default {
    name: 'CategorySection',
    components: { SectionHeader, CategoryCard },
    props: {
      categories: {
        type: Array,
        required: true,
      },
    },
    setup() {
      const router = useRouter()
      const scrollContainer = ref(null)
      function scrollNext() {
        const container = scrollContainer.value
        const card = container.firstElementChild
        if (!card) return
        container.scrollBy({ left: card.offsetWidth, behavior: 'smooth' })
      }
      function scrollPrev() {
        const container = scrollContainer.value
        const card = container.firstElementChild
        if (!card) return
        container.scrollBy({ left: -card.offsetWidth, behavior: 'smooth' })
      }
      function onSelect(category) {
        router.push({ path: '/products', query: { category } })
      }
      return {
        scrollNext,
        scrollPrev,
        onSelect,
        scrollContainer,
      }
    },
  }
</script>

<style scoped>
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

  @media (min-width: 768px) {
    .categories-section {
      margin-bottom: 60px;
    }

    .categories-section__grid {
      gap: 30px;
    }
  }
</style>
