<template>
  <div class="hero">
    <div class="hero__container">
      <div
        class="hero__slide"
        :style="{
          backgroundColor: slides[currentSlide].bg,
          backgroundImage: `url(${slides[currentSlide].imageBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <!-- Left Content -->
        <div class="hero__content">
          <div class="hero__brand">
            <span class="hero__brand-logo">{{
              slides[currentSlide].logo
            }}</span>
            <span class="hero__brand-name">{{
              slides[currentSlide].brandName
            }}</span>
          </div>

          <h1 class="hero__title">{{ slides[currentSlide].title }}</h1>

          <router-link to="/products" class="hero__cta">
            <span class="hero__cta-text">
              Shop Now
              <span class="hero__cta-line"></span>
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#FAFAFA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>

        <!-- Carousel Dots -->
        <div class="hero__dots">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            class="hero__dot"
            :class="{ 'hero__dot--active': index === currentSlide }"
            @click="changeCurrentSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  margin-bottom: 60px;
  margin-top: 0;
}

.hero__container {
  position: relative;
  width: 100%;
}

.hero__slide {
  width: 100%;
  height: 346px;
  display: flex;
  align-items: center;
  padding: 0 64px;
  position: relative;
  overflow: hidden;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
}

.hero__brand {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero__brand-logo {
  font-size: 40px;
  color: #fafafa;
}

.hero__brand-name {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
}

.hero__title {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.04em;
  color: #fafafa;
  width: 300px;
  height: 120px;
  overflow: hidden;
}

.hero__cta {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.hero__cta-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fafafa;
}

.hero__cta-line {
  display: block;
  width: 100%;
  height: 1px;
  background: #fafafa;
}

.hero__dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 2;
}

.hero__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.hero__dot--active {
  opacity: 1;
  width: 14px;
  height: 14px;
  background: #db4444;
  border: 2px solid #ffffff;
}

/* Tablet */
@media (max-width: 1024px) {
  .hero__title {
    font-size: 36px;
    line-height: 48px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero__slide {
    height: 250px;
    padding: 0 24px;
  }

  .hero__title {
    font-size: 24px;
    line-height: 32px;
  }

  .hero__brand-logo {
    font-size: 28px;
  }
}
</style>

<script>
export default {
  name: "HeroBanner",
  data() {
    return {
      currentSlide: 0,
      autoPlayInterval: null,
      slides: [
        {
          bg: "#0f172a",
          imageBg:
            "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80",
          logo: "",
          brandName: "iPhone 14 Series",
          title: "Up to 10% off Voucher",
        },
        {
          bg: "#7c2d12",
          imageBg:
            "https://www.m1.com.sg/content/dam/M1/hero-banner-carousel/2025/jan/samsung/pre/21125/new/1440x520.png",
          logo: "",
          brandName: "Samsung Galaxy Series",
          title: "Up to 15% off Today",
        },
        {
          bg: "#065f46",
          imageBg:
            "https://techlingo.co/wp-content/uploads/2018/10/OnePlus-6T-Banner-1500x500.jpg",
          logo: "",
          brandName: "OnePlus Series",
          title: "Best Deals This Week",
        },
        {
          bg: "#4c1d95",
          imageBg:
            "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80",
          logo: "",
          brandName: "Nothing Phone Series",
          title: "Up to 20% off Voucher",
        },
        {
          bg: "#9f1239",
          imageBg:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80",
          logo: "",
          brandName: "Xiaomi Series",
          title: "Up to 25% off Voucher",
        },
      ],
    };
  },
  methods: {
    changeCurrentSlide(slideNumber) {
      this.currentSlide = slideNumber;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      // when currentSlide == slides.length it will go back to 0 and start again.
    },
    autoPlaySlider() {
      this.autoPlayInterval = setInterval(() => {
        // runs nextSlide() every 3 sec, and saves its ID in autoPlayInterval to kill it later.
        this.nextSlide();
      }, 2000);
    },
  },
  mounted() {
    this.autoPlaySlider();
  },
  beforeDestroy() {
    clearInterval(this.autoPlayInterval);
  },
};
</script>
