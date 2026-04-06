<template>
  <section class="products-section">
    <SectionHeader
      :label="label"
      :title="title"
      :showNav="showNav"
      @prev="$emit('prev')"
      @next="$emit('next')"
    />

    <div
      class="products-section__scroll"
      :class="{ 'products-section__scroll--grid': !alwaysScroll }"
    >
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

    <div v-if="viewAllLink" class="products-section__center">
      <AppButton label="View All Products" :to="viewAllLink" />
    </div>
  </section>
</template>

<script>
import SectionHeader from "@/components/shared/SectionHeader.vue";
import ProductCard from "@/components/shared/ProductCard.vue";
import AppButton from "@/components/shared/AppButton.vue";

export default {
  name: "ProductsSection",
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
    showNav: {
      type: Boolean,
      default: false,
    },
    viewAllLink: {
      type: String,
      default: null,
    },
    alwaysScroll: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["prev", "next"],
};
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

  /* Switch to grid when alwaysScroll is false */
  .products-section__scroll--grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    overflow-x: visible;
    padding-bottom: 0;
    scroll-snap-type: none;
  }

  .products-section__scroll--grid > * {
    flex-shrink: 1;
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

  .products-section__scroll--grid {
    grid-template-columns: repeat(4, 270px);
    gap: 30px;
  }
}
</style>
