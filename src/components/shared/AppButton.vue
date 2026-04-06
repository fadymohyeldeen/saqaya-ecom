<template>
  <button
    class="app-btn"
    :class="`app-btn--${variant}`"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.app-btn {
  height: 44px;
  padding: 0 48px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-md);
  white-space: nowrap;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.app-btn--primary {
  background: var(--color-primary);
  color: var(--color-text-light);
}

.app-btn--primary:hover {
  opacity: 0.9;
}

.app-btn--outline {
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.app-btn--outline:hover {
  background: var(--color-bg-secondary);
}

@media (max-width: 1023px) {
  .app-btn {
    font-size: var(--text-sm);
    padding: 0 32px;
  }
}

@media (max-width: 767px) {
  .app-btn {
    font-size: var(--text-xs);
    padding: 0 20px;
  }
}
</style>

<script>
export default {
  name: "AppButton",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
      validator: (v) => ["primary", "outline"].includes(v),
    },
  },
  emits: ["click"],
};
</script>
