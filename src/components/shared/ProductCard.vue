<template>
  <!-- ProductCard -->
  <div>
    <template v-if="isLoading">
      <div class="product-card__skeleton">
        <SkeletonBox height="250px" />
        <div class="product-card__skeleton-info">
          <SkeletonBox height="16px" width="70%" />
          <SkeletonBox height="16px" width="40%" />
          <SkeletonBox height="16px" width="55%" />
        </div>
      </div>
    </template>
    <template v-else>
      <router-link :to="`/products/${product.id}`">
        <div class="product-card">
          <!-- Image Section -->
          <div class="product-card__image-wrap">
            <!-- Discount Badge -->
            <span v-if="product.discountPercentage" class="product-card__discount"
              >-{{ Math.round(product.discountPercentage) }}%</span
            >

            <!-- Action Buttons -->
            <div class="product-card__actions">
              <FavButton />

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
            <img :src="product.thumbnail" :alt="product.title" class="product-card__image" />

            <!-- Add To Cart — shown on hover -->
            <div class="product-card__add-to-cart" @click.prevent="addToCart">
              <button>Add To Cart</button>
            </div>
          </div>

          <!-- Info Section -->
          <div class="product-card__info">
            <h3 class="product-card__name">{{ product.title }}</h3>
            <div class="product-card__prices">
              <span class="product-card__price">${{ priceAfterDiscount }}</span>
              <span v-if="product.discountPercentage" class="product-card__original-price"
                >${{ product.price }}</span
              >
            </div>
            <div class="product-card__rating">
              <div class="product-card__stars">
                <StarRating :rating="product.rating" />
              </div>
              <span class="product-card__reviews">({{ product.reviews.length }})</span>
            </div>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
  import FavButton from '@/components/shared/FavButton.vue'
  import StarRating from '@/components/shared/StarRating.vue'
  import SkeletonBox from '@/components/shared/SkeletonBox.vue'

  export default {
    name: 'ProductCard',
    components: { FavButton, StarRating, SkeletonBox },
    props: {
      product: { type: Object, default: null },
      isLoading: { type: Boolean, default: false },
    },
    computed: {
      priceAfterDiscount() {
        if (!this.product) return 0
        return (
          this.product.price -
          this.product.price * (this.product.discountPercentage / 100)
        ).toFixed(2)
      },
    },
    methods: {
      addToCart() {
        this.$store.commit('cart/ADD_TO_CART', { newItem: this.product, quantity: 1 })
      },
    },
  }
</script>

<style scoped>
  /* ─── Mobile ─── */

  .product-card__skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: var(--product-card-width);
  }

  .product-card__skeleton-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .product-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: var(--product-card-width);
    cursor: pointer;
  }

  .product-card__image-wrap {
    position: relative;
    width: var(--product-card-width);
    height: var(--product-card-image-height);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .product-card__discount {
    position: absolute;
    top: 8px;
    left: 8px;
    background: var(--color-primary);
    color: var(--color-text-light);
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    z-index: 1;
  }

  .product-card__actions {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
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
    fill: var(--color-primary);
  }

  .product-card__action-btn:hover path,
  .product-card__action-btn:hover circle:not(:first-child) {
    stroke: var(--color-primary-light);
  }

  .product-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* On mobile (touch), the Add To Cart bar is always visible */
  .product-card__add-to-cart {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 38px;
    background: var(--color-primary-dark);
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .product-card__add-to-cart:hover {
    background-color: var(--color-primary);
  }

  .product-card__add-to-cart button {
    background: none;
    border: none;
    color: var(--color-primary-light);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  .product-card__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .product-card__name {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-text);
  }

  .product-card__prices {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .product-card__price {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-primary);
  }

  .product-card__original-price {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-text);
    opacity: 0.5;
    text-decoration: line-through;
  }

  .product-card__rating {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .product-card__reviews {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-text);
    opacity: 0.5;
  }

  /* ─── Tablet/Desktop ─── */

  @media (min-width: 768px) {
    .product-card {
      gap: 16px;
    }

    .product-card__discount {
      top: 12px;
      left: 12px;
      font-size: 12px;
      line-height: 18px;
      padding: 4px 12px;
    }

    .product-card__actions {
      top: 12px;
      right: 12px;
      gap: 8px;
    }

    /* Restore hover-slide behaviour on desktop */
    .product-card__add-to-cart {
      height: 41px;
      transform: translateY(100%);
    }

    .product-card__image-wrap:hover .product-card__add-to-cart {
      transform: translateY(0);
    }

    .product-card__add-to-cart button {
      font-size: 16px;
      line-height: 24px;
    }

    .product-card__info {
      gap: 8px;
    }

    .product-card__name {
      font-size: 16px;
      line-height: 24px;
    }

    .product-card__prices {
      gap: 12px;
    }

    .product-card__price {
      font-size: 16px;
      line-height: 24px;
    }

    .product-card__original-price {
      font-size: 16px;
      line-height: 24px;
    }

    .product-card__rating {
      gap: 8px;
    }

    .product-card__reviews {
      font-size: 14px;
      line-height: 21px;
    }
  }
</style>
