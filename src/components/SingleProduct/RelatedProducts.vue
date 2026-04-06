<template>
  <div class="related-products">
    <div class="related-products__section-label">
      <span class="related-products__section-bar"></span>
      <span class="related-products__section-text">More of this category</span>
    </div>
    <div class="related-products__grid">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :originalPrice="item.originalPrice"
        :discount="item.discount"
        :image="item.image"
        :rating="item.rating"
        :reviews="item.reviews"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/shared/ProductCard.vue";

export default {
  name: "RelatedProducts",
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* ─── Mobile base ─── */
.related-products {
  margin-bottom: 40px;
}

.related-products__section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.related-products__section-bar {
  display: inline-block;
  width: 16px;
  height: 34px;
  background: var(--color-primary);
  border-radius: var(--radius-sm);
}

.related-products__section-text {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-md);
  color: var(--color-primary);
}

/* Related: horizontal scroll like home page */
.related-products__grid {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.related-products__grid::-webkit-scrollbar {
  display: none;
}

.related-products__grid > * {
  scroll-snap-align: start;
  flex-shrink: 0;
}

/* ─── Tablet (768px+) ─── */
@media (min-width: 768px) {
  .related-products {
    margin-bottom: 60px;
  }

  .related-products__section-label {
    margin-bottom: 40px;
  }

  .related-products__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    overflow-x: visible;
    padding-bottom: 0;
    scroll-snap-type: none;
  }

  .related-products__grid > * {
    flex-shrink: 1;
  }
}

/* ─── Desktop (1024px+) ─── */
@media (min-width: 1024px) {
  .related-products {
    margin-bottom: 80px;
  }

  .related-products__section-label {
    margin-bottom: 60px;
  }

  .related-products__section-bar {
    width: 20px;
    height: 40px;
  }

  .related-products__grid {
    grid-template-columns: repeat(4, 270px);
    gap: 30px;
  }
}
</style>
