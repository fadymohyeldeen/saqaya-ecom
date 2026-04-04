<template>
  <div class="products__container">
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
        :id="1"
        name="HAVIT HV-G92 Gamepad"
        :price="120"
        :originalPrice="160"
        :discount="15"
        image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
        :rating="5"
        :reviews="88"
      />
      <ProductCard
        :id="2"
        name="AK-900 Wired Keyboard"
        :price="960"
        :originalPrice="1160"
        :discount="37"
        image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
        :rating="4"
        :reviews="75"
      />
      <ProductCard
        :id="3"
        name="IPS LCD Gaming Monitor"
        :price="370"
        :originalPrice="400"
        :discount="54"
        image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
        :rating="5"
        :reviews="99"
      />
      <ProductCard
        :id="4"
        name="S-Series Comfort Chair"
        :price="375"
        :originalPrice="400"
        :discount="35"
        image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
        :rating="5"
        :reviews="99"
      />
    </div>
    <div class="home__center">
      <button class="home__btn">Load More ...</button>
    </div>
  </div>
</template>

<style scoped>
.products__container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 24px var(--container-padding);
  padding: 100px 0px 100p;
}

.products__header {
  justify-content: space-between;
  display: flex;
  padding: 60px 0px 60px 0px;
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
  background-image: url("@/assets/icons/drop-down-arrow.svg");
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

.home__center {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.home__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  background: var(--color-primary);
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: opacity 0.3s ease;
  border: none;
  cursor: pointer;
}

.home__btn:hover {
  opacity: 0.9;
}
</style>
<script>
import ProductCard from "@/components/shared/ProductCard.vue";

export default {
  name: "ProductsView",
  components: {
    ProductCard,
  },
};
</script>
