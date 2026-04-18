<template>
  <div class="star-rating">
    <div class="star-rating__stars">
      <svg
        v-for="star in 5"
        :key="star"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        class="star-rating__star"
      >
        <path
          d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z"
          :fill="star <= rating ? '#FFAD33' : '#000000'"
          :fill-opacity="star <= rating ? '1' : '0.25'"
        />
      </svg>
    </div>
    <span v-if="reviews" class="star-rating__reviews">({{ reviews }})</span>
    <span v-else class="star-rating__reviews">No reviews</span>
  </div>
</template>

<script>
  export default {
    name: 'StarRating',
    props: {
      rating: {
        type: Number,
        required: true,
      },
      reviews: {
        type: Number,
        default: null,
      },
    },
  }
</script>

<style scoped>
  .star-rating {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .star-rating__stars {
    display: flex;
  }

  .star-rating__reviews {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text);
    opacity: 0.5;
  }
</style>
