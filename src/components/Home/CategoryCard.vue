<template>
  <div class="category-card">
    <component :is="icons[name]" class="category-card__icon" />
    <span class="category-card__name">{{ name }}</span>
  </div>
</template>

<style scoped>
/* ─── Mobile ─── */
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 200px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.category-card:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.category-card__icon {
  width: 35px;
  height: 35px;
  color: var(--color-text);
}

.category-card:hover .category-card__icon,
.category-card:hover .category-card__name {
  color: var(--color-text-light);
}

.category-card__name {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: var(--text-sm);
  line-height: 24px;
  color: var(--color-text);
  text-align: center;
}

/* ─── Tablet/Desktop ─── */
@media (min-width: 768px) {
  .category-card {
    width: 100%;
    max-width: 170px;
    height: 145px;
  }
}
</style>

<script>
import BeautyIcon from "../icons/Beauty.vue";
import FurnitureIcon from "../icons/Furniture.vue";
import FragranceIcon from "../icons/Fragrance.vue";
import CameraIcon from "../icons/Camera.vue";
import MobileAccessoriesIcon from "../icons/MobileAccessories.vue";
import HomeAccessoriesIcon from "../icons/HomeAccessories.vue";

export default {
  name: "CategoryCard",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        Beauty: BeautyIcon,
        Furniture: FurnitureIcon,
        Fragrance: FragranceIcon,
        Camera: CameraIcon,
        "Mobile Accessories": MobileAccessoriesIcon,
        "Home Accessories": HomeAccessoriesIcon,
      },
    };
  },
};
</script>
