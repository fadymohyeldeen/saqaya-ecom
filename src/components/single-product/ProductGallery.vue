<!-- Purpose: Renders the active large product image and a strip of thumbnails for selection.
  Used In: src/views/ProductView.vue -->
<template>
  <div class="product-gallery">
    <template v-if="isLoading">
      <div class="product-gallery__thumbs">
        <SkeletonBox v-for="n in 4" :key="n" width="80px" height="65px" />
      </div>
      <SkeletonBox class="product-gallery__image-wrap" height="100%" />
    </template>

    <template v-else>
      <div class="product-gallery__thumbs">
        <button
          v-for="(img, idx) in images.slice(0, 4)"
          :key="idx"
          class="product-gallery__thumb-btn"
          :class="{ 'product-gallery__thumb-btn--active': selectedImage === idx }"
          @click="$emit('select', idx)"
        >
          <img :src="img" :alt="`Product view ${idx + 1}`" class="product-gallery__thumb-img" />
        </button>
      </div>

      <div class="product-gallery__image-wrap">
        <img :src="images[selectedImage]" :alt="alt" class="product-gallery__image" />
      </div>
    </template>
  </div>
</template>

<script setup>
  import SkeletonBox from '@/components/shared/SkeletonBox.vue'

  const props = defineProps({
    isLoading: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      default: () => [],
    },
    selectedImage: {
      type: Number,
      default: 0,
    },
    alt: {
      type: String,
      default: 'Product image',
    },
  })
  const emit = defineEmits(['select'])
</script>

<style scoped>
  .product-gallery {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-gallery__thumbs {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
  }

  .product-gallery__thumbs::-webkit-scrollbar {
    display: none;
  }

  .product-gallery__thumb-btn {
    flex-shrink: 0;
    width: 80px;
    height: 65px;
    background: var(--color-bg-secondary);
    border: 2px solid transparent;
    border-radius: var(--radius-sm);
    padding: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-gallery__thumb-btn--active {
    border-color: var(--color-text);
  }

  .product-gallery__thumb-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .product-gallery__image-wrap {
    aspect-ratio: 4 / 3;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .product-gallery__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    .product-gallery {
      flex-direction: row;
      align-items: flex-start;
    }

    .product-gallery__thumbs {
      flex-direction: column;
      overflow-x: visible;
      gap: 16px;
      flex-shrink: 0;
    }

    .product-gallery__thumb-btn {
      width: 170px;
      height: 138px;
    }

    .product-gallery__image-wrap {
      flex: 1;
    }
  }

  @media (min-width: 1024px) {
    .product-gallery__image-wrap {
      height: 600px;
      aspect-ratio: auto;
    }
  }
</style>
