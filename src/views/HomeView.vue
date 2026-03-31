<template>
  <div class="home">
    <!-- Hero Banner -->
    <HeroBanner />

    <!-- Flash Sales Section -->
    <section class="home__section">
      <div class="home__section-header">
        <div class="home__section-tag">
          <span class="home__section-bar"></span>
          <span class="home__section-label">Today's</span>
        </div>
        <h2 class="home__section-title">Flash Sales</h2>
      </div>
      <div class="home__products-scroll">
        <ProductCard
          :id="1"
          name="HAVIT HV-G92 Gamepad"
          :price="120"
          :originalPrice="160"
          :discount="35"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="88"
        />
        <ProductCard
          :id="2"
          name="AK-900 Wired Keyboard"
          :price="960"
          :originalPrice="1160"
          :discount="35"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="4"
          :reviews="75"
        />
        <ProductCard
          :id="3"
          name="IPS LCD Gaming Monitor"
          :price="370"
          :originalPrice="400"
          :discount="35"
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
        <router-link to="/products" class="home__btn"
          >View All Products</router-link
        >
      </div>
    </section>

    <div class="home__divider"></div>

    <!-- Browse By Category Section -->
    <section class="home__section">
      <div class="home__section-header">
        <div class="home__section-tag">
          <span class="home__section-bar"></span>
          <span class="home__section-label">Categories</span>
        </div>
        <h2 class="home__section-title">Browse By Category</h2>
      </div>
      <div class="home__categories">
        <CategoryCard name="Beauty" />
        <CategoryCard name="Furniture" />
        <CategoryCard name="Fragrance" />
        <CategoryCard name="Camera" />
        <CategoryCard name="Mobile Accessories" />
        <CategoryCard name="Home Accessories" />
      </div>
    </section>

    <div class="home__divider"></div>

    <!-- Explore Products Section -->
    <section class="home__section">
      <div class="home__section-header">
        <div class="home__section-tag">
          <span class="home__section-bar"></span>
          <span class="home__section-label">Our Products</span>
        </div>
        <h2 class="home__section-title">Explore Our Products</h2>
      </div>
      <div class="home__products-grid">
        <ProductCard
          :id="5"
          name="HAVIT HV-G92 Gamepad"
          :price="120"
          :originalPrice="160"
          :discount="35"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="88"
        />
        <ProductCard
          :id="5"
          name="HAVIT HV-G92 Gamepad"
          :price="120"
          :originalPrice="160"
          :discount="35"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="88"
        />
        <ProductCard
          :id="5"
          name="HAVIT HV-G92 Gamepad"
          :price="120"
          :originalPrice="160"
          :discount="35"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="88"
        />
        <ProductCard
          :id="5"
          name="HAVIT HV-G92 Gamepad"
          :price="120"
          :originalPrice="160"
          :discount="35"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="88"
        />
      </div>
      <div class="home__center">
        <router-link to="/products" class="home__btn"
          >View All Products</router-link
        >
      </div>
    </section>

    <!-- Services Strip -->
    <section class="home__services">
      <div class="home__service">
        <div class="home__service-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#2F2E30" fill-opacity="0.3" />
            <circle cx="40" cy="40" r="34.5" fill="#000000" />
            <path
              d="M24 44L28 36H52L56 44"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M20 44H60"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="28" cy="48" r="3" stroke="#FAFAFA" stroke-width="2" />
            <circle cx="52" cy="48" r="3" stroke="#FAFAFA" stroke-width="2" />
            <path
              d="M28 36V28H44"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="home__service-text">
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>
      <div class="home__service">
        <div class="home__service-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#2F2E30" fill-opacity="0.3" />
            <circle cx="40" cy="40" r="34.5" fill="#000000" />
            <path
              d="M30 50V46C30 44 32 42 34 42H46C48 42 50 44 50 46V50"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="40" cy="34" r="6" stroke="#FAFAFA" stroke-width="2" />
            <path
              d="M50 55V53"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="home__service-text">
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
      </div>
      <div class="home__service">
        <div class="home__service-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#2F2E30" fill-opacity="0.3" />
            <circle cx="40" cy="40" r="34.5" fill="#000000" />
            <path
              d="M40 26L48 30V40C48 45 44 49 40 50C36 49 32 45 32 40V30L40 26Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36 39L39 42L44 37"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="home__service-text">
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 135px;
}

.home__section {
  margin-bottom: 60px;
}

.home__section-header {
  margin-bottom: 40px;
}

.home__section-tag {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.home__section-bar {
  display: block;
  width: 20px;
  height: 40px;
  background: #db4444;
  border-radius: 4px;
}

.home__section-label {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #db4444;
}

.home__section-title {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.04em;
  color: #000000;
}

.home__products-scroll {
  display: flex;
  flex-direction: row;
  gap: 30px;
  overflow-x: auto;
  padding-bottom: 16px;
}

.home__products-scroll::-webkit-scrollbar {
  display: none;
}

.home__products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
}

.home__categories {
  display: flex;
  flex-direction: row;
  gap: 30px;
  overflow-x: auto;
}

.home__categories::-webkit-scrollbar {
  display: none;
}

.home__divider {
  width: 100%;
  height: 1px;
  background: #000000;
  opacity: 0.3;
  margin: 60px 0;
}

.home__center {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.home__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;
  background: #db4444;
  color: #fafafa;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.home__btn:hover {
  opacity: 0.9;
}

.home__services {
  display: flex;
  justify-content: center;
  gap: 88px;
  padding: 40px 0 60px;
}

.home__service {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  max-width: 256px;
}

.home__service-text h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 8px;
}

.home__service-text p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
}

/* Tablet */
@media (max-width: 1024px) {
  .home {
    padding: 40px;
  }

  .home__services {
    gap: 40px;
    flex-wrap: wrap;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .home {
    padding: 24px 16px;
  }

  .home__section-title {
    font-size: 24px;
    line-height: 32px;
  }

  .home__products-grid {
    justify-content: center;
  }

  .home__categories {
    gap: 16px;
  }

  .home__services {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import HeroBanner from "@/components/HeroBanner.vue";
import ProductCard from "@/components/ProductCard.vue";
import CategoryCard from "@/components/CategoryCard.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    HeroBanner,
    ProductCard,
    CategoryCard,
  },
});
</script>
