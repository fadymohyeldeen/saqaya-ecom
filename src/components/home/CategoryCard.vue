<template>
  <!-- CategoryCard -->
  <div class="category-card" :class="{ 'category-card--active': active }">
    <div class="category-card__icon">
      <component :is="icons[name]" />
      <!-- looks up icons[name] in the icons object in data() finds it by name as an index-->
    </div>
    <span class="category-card__name">{{ name }}</span>
  </div>
</template>

<style scoped>
.category-card {
  box-sizing: border-box;
  width: var(--category-card-width);
  height: var(--category-card-height);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-card:hover,
.category-card--active {
  background: var(--color-primary);
  border: none;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
}

.category-card__icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

.category-card:hover .category-card__icon,
.category-card--active .category-card__icon {
  color: var(--color-primary-light);
}

.category-card__name {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text);
  text-align: center;
}

.category-card:hover .category-card__name,
.category-card--active .category-card__name {
  color: var(--color-text-light);
}

/* Responsive */
@media (max-width: 768px) {
  .category-card {
    width: 120px;
    height: 110px;
  }

  .category-card__name {
    font-size: 12px;
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
    active: {
      type: Boolean,
      default: false,
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
