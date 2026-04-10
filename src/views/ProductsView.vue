<template>
  <div class="products__container">
    <AppBreadcrumb :items="breadcrumbs" />

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
          <option value="">Category</option>
        </select>
      </div>
    </div>

    <div class="products__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.title"
        :price="priceAfterDiscount(product.price, product.discountPercentage)"
        :originalPrice="product.price"
        :discount="Math.round(product.discountPercentage)"
        :image="product.thumbnail"
        :rating="product.rating"
        :reviews="product.reviews.length"
      />
    </div>

    <div class="products__load-more">
      <AppButton label="Load More ..." />
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
    background-image: url('@/assets/icons/products/drop-down-arrow.svg');
    background-repeat: no-repeat;
    background-position: right 10px center;
    appearance: none;
    padding: 12px 20px;
    border-radius: var(--radius-sm);
    border: none;
    font-size: 14px;
    font-weight: 500;
    background-color: #403a45;
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

  export default {
    name: 'ProductsView',
    components: {
      AppBreadcrumb,
      AppButton,
      ProductCard,
    },
    data() {
      return {
        breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'Products' }],
      }
    },
    async mounted() {
      await this.$store.dispatch('products/getAllProducts')
    },
    computed: {
      products() {
        return this.$store.state.products.products
      },
    },
    methods: {
      priceAfterDiscount(price, discount) {
        return (price - price * (discount / 100)).toFixed(2)
      },
    },
  }
</script>
