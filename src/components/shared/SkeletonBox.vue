<template>
  <div class="skeleton-block" :style="{ width: width, height: height }"></div>
</template>

<script>
  export default {
    name: 'SkeletonBlock',
    props: {
      width: {
        type: String,
        default: '100%',
      },
      height: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .skeleton-block {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: var(--radius-sm);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>
