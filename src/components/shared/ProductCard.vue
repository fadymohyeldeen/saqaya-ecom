<template>
  <!-- ProductCard -->
  <div class="product-card">
    <!-- Image Section -->
    <div class="product-card__image-wrap">
      <!-- Discount Badge -->
      <span v-if="discount" class="product-card__discount"
        >-{{ discount }}%</span
      >

      <!-- Action Buttons -->
      <div class="product-card__actions">
        <button class="product-card__action-btn" aria-label="Add to wishlist">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="17" fill="white" />
            <path
              d="M17 24S9 19 9 13.5C9 11.5 10.5 10 12.5 10C14 10 15.5 10.8 17 12.5C18.5 10.8 20 10 21.5 10C23.5 10 25 11.5 25 13.5C25 19 17 24 17 24Z"
              stroke="#000"
              stroke-width="1.5"
            />
          </svg>
        </button>

        <button class="product-card__action-btn" aria-label="Quick view">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="17" fill="white" />
            <path
              d="M17 11C11 11 8 17 8 17C8 17 11 23 17 23C23 23 26 17 26 17C26 17 23 11 17 11Z"
              stroke="#000"
              stroke-width="1.5"
            />
            <circle cx="17" cy="17" r="3" stroke="#000" stroke-width="1.5" />
          </svg>
        </button>
      </div>

      <!-- Product Image -->
      <img :src="image" :alt="name" class="product-card__image" />

      <!-- Add To Cart — shown on hover -->
      <div class="product-card__add-to-cart">
        <button>Add To Cart</button>
      </div>
    </div>

    <!-- Info Section -->
    <div class="product-card__info">
      <h3 class="product-card__name">{{ name }}</h3>
      <div class="product-card__prices">
        <span class="product-card__price">${{ price }}</span>
        <span v-if="originalPrice" class="product-card__original-price"
          >${{ originalPrice }}</span
        >
      </div>
      <div class="product-card__rating">
        <div class="product-card__stars">
          <svg
            v-for="star in 5"
            :key="star"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z"
              :fill="star <= rating ? '#FFAD33' : '#000000'"
              :fill-opacity="star <= rating ? '1' : '0.25'"
              stroke="none"
            />
          </svg>
        </div>
        <span class="product-card__reviews">({{ reviews }})</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 270px;
  cursor: pointer;
}

.product-card__image-wrap {
  position: relative;
  width: 270px;
  height: 250px;
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-card__discount {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #db4444;
  color: #fafafa;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding: 4px 12px;
  border-radius: 4px;
  z-index: 1;
}

.product-card__actions {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
}

.product-card__action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__action-btn:hover circle:first-child {
  fill: #db4444;
}

.product-card__action-btn:hover path,
.product-card__action-btn:hover circle:not(:first-child) {
  stroke: #ffffff;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card__add-to-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  background: #000000;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card__add-to-cart:hover {
  background-color: #db4444;
}

.product-card__add-to-cart button {
  background: none;
  border: none;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}

/* Show Add To Cart on hover */
.product-card__image-wrap:hover .product-card__add-to-cart {
  transform: translateY(0);
}

.product-card__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card__name {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.product-card__prices {
  display: flex;
  align-items: center;
  gap: 12px;
}

.product-card__price {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #db4444;
}

.product-card__original-price {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  opacity: 0.5;
  text-decoration: line-through;
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-card__stars {
  display: flex;
}

.product-card__star {
  width: 20px;
  height: 20px;
  background: #000000;
  opacity: 0.25;
  border-radius: 1.4px;
  display: inline-block;
}

.product-card__star--filled {
  background: #ffad33;
  opacity: 1;
}

.product-card__reviews {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
}
</style>

<script>
export default {
  name: "ProductCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      default: null,
    },
    discount: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
};
</script>
