<template>
  <div class="contact">
    <AppBreadcrumb />

    <div class="contact__body">
      <div class="contact__side-image">
        <img src="@/assets/images/contact.jpeg" alt="Contact" />
      </div>
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
  import ContactForm from '@/components/contact/ContactForm.vue'
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
</script>

<style scoped>
  .contact__body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 34px;
    margin-bottom: 80px;
  }

  .contact__side-image {
    flex: 1;
    background: var(--color-contact-bg);
    border-radius: 4px;
    overflow: hidden;
    height: 300px;
  }

  .contact__side-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media (min-width: 768px) {
    .contact__body {
      margin-bottom: 100px;
    }

    .contact__side-image {
      height: 500px;
    }
  }

  @media (min-width: 1024px) {
    .contact__body {
      flex-direction: row;
      margin-bottom: 140px;
    }

    .contact__side-image {
      height: auto;
    }
  }
</style>
