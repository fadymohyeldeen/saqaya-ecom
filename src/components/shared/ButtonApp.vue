<template>
  <!-- for navigation -->
  <router-link v-if="to" :to="to" class="app-btn">
    {{ label }}
  </router-link>

  <!-- for actions -->
  <button v-else class="app-btn" :disabled="disabled" @click="$emit('click', $event)">
    {{ label }}
  </button>
</template>

<style scoped>
  .app-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 10px 36px;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: var(--text-md);
    white-space: nowrap;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: opacity 0.2s ease, scale 0.2s ease-in-out;
    background: var(--color-primary);
    color: var(--color-text-light);
  }

  .app-btn:hover {
    opacity: 0.9;
  }

  .app-btn:disabled {
    background: rgba(0, 0, 0, 0.15);
    cursor: not-allowed;
  }

  .app-btn:disabled:hover {
    opacity: 1;
    scale: 1;
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
    name: 'ButtonApp',
    props: {
      label: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['click'],
  }
</script>
