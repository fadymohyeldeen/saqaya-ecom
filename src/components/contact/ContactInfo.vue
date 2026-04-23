<!-- Purpose: Reusable info block component containing an icon slot, title, and body list.
  Used In: src/components/contact/ContactForm.vue
  Notes: Iterates through props to display info. -->
<template>
  <div class="contact__info-block">
    <div class="contact__info-header">
      <div class="contact__icon-circle">
        <slot name="icon"></slot>
      </div>
      <span class="contact__info-title">{{ title }}</span>
    </div>
    <div class="contact__info-body">
      <p v-for="(text, index) in body" :key="index">{{ text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactInfo',
    props: {
      title: {
        type: String,
        required: true,
      },
      body: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style scoped>
  .contact__info-block {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .contact__info-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .contact__icon-circle {
    width: 40px;
    height: 40px;
    background: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .contact__info-title {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: var(--text-md);
    line-height: 24px;
    color: var(--color-text);
  }

  .contact__info-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .contact__info-body p {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: var(--text-sm);
    line-height: 21px;
    color: var(--color-text);
    margin: 0;
  }
</style>
