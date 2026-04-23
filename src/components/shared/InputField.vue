<!-- Purpose: Generic input wrapper that can render as a standard text input or textarea.
  Used In: src/components/contact/ContactForm.vue -->
<template>
  <div class="input-field">
    <textarea
      v-if="type === 'textarea'"
      class="input-field__input"
      :name="name"
      :placeholder="placeholder"
    />
    <input v-else class="input-field__input" :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: '',
    },
  })
</script>

<style scoped>
  .input-field {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  textarea.input-field__input {
    height: 200px;
  }

  .input-field__input {
    width: 100%;
    background: var(--color-bg-secondary);
    border: none;
    border-radius: var(--radius-sm);
    padding: 13px 16px;
    font-family: var(--font-body);
    font-weight: 400;
    font-size: var(--text-md);
    line-height: 24px;
    color: rgba(0, 0, 0, 0.5);
    outline: none;
    resize: none;
    box-sizing: border-box;
  }

  .input-field__input::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
</style>
