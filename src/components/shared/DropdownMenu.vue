<template>
  <div ref="dropdownRef" class="dropdown-menu">
    <img v-if="icon" :src="icon" alt="" class="dropdown-menu__icon" @click="toggle" />
    <button v-else class="dropdown-menu__trigger" @click="toggle">
      {{ label }}
      <img src="@/assets/icons/products/icon-drop-down.svg" alt="" class="dropdown-menu__arrow" />
    </button>
    <div v-if="isOpen" class="dropdown-menu__list">
      <p
        v-for="option in options"
        :key="option.label"
        class="dropdown-menu__option"
        @click="select(option)"
      >
        {{ option.label }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DropdownMenu',
    props: {
      label: { type: String, default: '' },
      options: { type: Array, required: true },
      icon: { type: String, default: null },
    },
    data() {
      return {
        isOpen: false,
      }
    },
    mounted() {
      document.addEventListener('click', this.handleOutsideClick)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleOutsideClick)
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen
      },
      select(option) {
        this.$emit('select', option)
        this.isOpen = false
      },
      handleOutsideClick(e) {
        if (this.$refs.dropdownRef && !this.$refs.dropdownRef.contains(e.target)) {
          this.isOpen = false
        }
      },
    },
  }
</script>

<style scoped>
  .dropdown-menu {
    position: relative;
  }

  .dropdown-menu__trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: var(--radius-sm);
    border: none;
    font-size: 14px;
    font-weight: 500;
    background-color: var(--color-primary-dark);
    color: white;
    cursor: pointer;
    outline: none;
  }

  .dropdown-menu__arrow {
    width: 16px;
    height: 16px;
  }

  .dropdown-menu__icon {
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: var(--color-primary-dark);
    border-radius: var(--radius-sm);
    cursor: pointer;
    box-sizing: border-box;
    display: block;
  }

  .dropdown-menu__list {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background-color: var(--color-bg);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--radius-sm);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 180px;
    max-height: 300px;
    overflow-y: auto;
  }

  .dropdown-menu__option {
    padding: 10px 16px;
    font-size: var(--text-sm);
    color: var(--color-text);
    cursor: pointer;
    text-transform: capitalize;
  }

  .dropdown-menu__option:hover {
    background-color: var(--color-primary);
    color: var(--color-text-light);
  }
</style>
