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
        <div class="home__section-title-row">
          <h2 class="home__section-title">Flash Sales</h2>
          <div class="home__section-nav">
            <button class="home__section-nav-btn" aria-label="Previous">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                <path
                  d="M26 16L19 23L26 30"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="home__section-nav-btn" aria-label="Next">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                <path
                  d="M20 16L27 23L20 30"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="home__products-scroll">
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
        <div class="home__section-title-row">
          <h2 class="home__section-title">Explore Our Products</h2>
          <div class="home__section-nav">
            <button class="home__section-nav-btn" aria-label="Previous">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                <path
                  d="M26 16L19 23L26 30"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="home__section-nav-btn" aria-label="Next">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                <path
                  d="M20 16L27 23L20 30"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="home__products-scroll">
        <ProductCard
          :id="5"
          name="GP11 Shift Pro Controller"
          :price="190"
          :originalPrice="250"
          :discount="24"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="4"
          :reviews="65"
        />
        <ProductCard
          :id="6"
          name="RGB Liquid CPU Cooler"
          :price="160"
          :originalPrice="170"
          :discount="6"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="57"
        />
        <ProductCard
          :id="7"
          name="Small BookShelf"
          :price="360"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="99"
        />
        <ProductCard
          :id="8"
          name="Breed Dry Dog Food"
          :price="100"
          :originalPrice="120"
          :discount="17"
          image="https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg"
          :rating="5"
          :reviews="35"
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
            <circle cx="40" cy="40" r="30" fill="#000000" />
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
            <circle cx="40" cy="40" r="30" fill="#000000" />
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
            <circle cx="40" cy="40" r="30" fill="#000000" />
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
/* ─── Mobile (base) ─── */

/* ─── Mobile (base) ─── */

.home__section {
  margin-bottom: 40px;
}

.home__section-header {
  margin-bottom: 24px;
}

.home__section-tag {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.home__section-bar {
  display: block;
  width: 16px;
  height: 34px;
  background: var(--color-primary);
  border-radius: var(--radius-sm);
}

.home__section-label {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-primary);
}

/* Title row: title + nav arrows side by side */
.home__section-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.home__section-title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

/* Arrow nav buttons (Figma: Frame 616) */
.home__section-nav {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
}

.home__section-nav-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: opacity 0.2s ease;
}

.home__section-nav-btn:hover path {
  stroke: white;
}

.home__section-nav-btn:hover svg circle {
  fill: var(--color-primary);
}

/* Horizontal scroll — shared by Flash Sales & Explore on mobile */
.home__products-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.home__products-scroll::-webkit-scrollbar {
  display: none;
}

.home__products-scroll > * {
  scroll-snap-align: start;
  flex-shrink: 0;
}

.home__categories {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.home__categories::-webkit-scrollbar {
  display: none;
}

.home__divider {
  width: 100%;
  height: 1px;
  background: var(--color-text);
  opacity: 0.3;
  margin: 40px 0;
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
}

.home__btn:hover {
  opacity: 0.9;
}

.home__services {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 0 48px;
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
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: var(--color-text);
  margin-bottom: 6px;
}

.home__service-text p {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: var(--color-text);
}

/* ─── Tablet/Desktop ─── */

@media (min-width: 768px) {
  /* .home padding is now handled by .container in DefaultLayout.vue */

  .home__section {
    margin-bottom: 60px;
  }

  .home__section-header {
    margin-bottom: 40px;
  }

  .home__section-tag {
    margin-bottom: 20px;
  }

  .home__section-bar {
    width: 20px;
    height: 40px;
  }

  .home__section-label {
    font-size: 16px;
  }

  .home__section-title {
    font-size: 36px;
    line-height: 48px;
  }

  .home__products-scroll {
    gap: 30px;
  }

  .home__categories {
    gap: 30px;
  }

  .home__divider {
    margin: 60px 0;
  }

  .home__center {
    margin-top: 40px;
  }

  .home__btn {
    padding: 16px 48px;
    font-size: 16px;
  }

  .home__services {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    padding: 40px 0 60px;
  }

  .home__service-text h3 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
  }

  .home__service-text p {
    font-size: 14px;
    line-height: 21px;
  }
}

/* ─── Desktop (1024px+) ─── */

@media (min-width: 1024px) {
  /* .home padding is now handled by .container in DefaultLayout.vue */

  .home__services {
    gap: 88px;
    flex-wrap: nowrap;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import HeroBanner from "@/components/home/HeroBanner.vue";
import ProductCard from "@/components/shared/ProductCard.vue";
import CategoryCard from "@/components/home/CategoryCard.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    HeroBanner,
    ProductCard,
    CategoryCard,
  },
});
</script>
