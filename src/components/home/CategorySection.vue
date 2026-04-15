<template>
  <section class="categories-section">
    <SectionHeader label="Categories" title="Browse By Category" />
    <div class="categories-section__grid">
      <CategoryCard name="Beauty" />
      <CategoryCard name="Furniture" />
      <CategoryCard name="Fragrance" />
      <CategoryCard name="Camera" />
      <CategoryCard name="Mobile Accessories" />
      <CategoryCard name="Home Accessories" />
    </div>
  </section>
</template>

<script>
  import SectionHeader from '@/components/shared/SectionHeader.vue'
  import CategoryCard from '@/components/home/CategoryCard.vue'

  export default {
    name: 'CategorySection',
    components: { SectionHeader, CategoryCard },
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
