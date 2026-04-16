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

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ContactForm from '@/components/contact/ContactForm.vue'

  export default {
    name: 'ContactView',
    components: { AppBreadcrumb, ContactForm },
  }
</script>

<style scoped>
  .contact__body {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 34px;
    margin-bottom: 140px;
  }

  .contact__side-image {
    flex: 1;
    background: var(--color-contact-bg);
    border-radius: 4px;
    overflow: hidden;
    height: auto;
  }

  .contact__side-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media (max-width: 1023px) {
    .contact__body {
      flex-direction: column;
      margin-bottom: 100px;
    }

    .contact__side-image {
      height: 500px;
    }
  }

  @media (max-width: 767px) {
    .contact__body {
      margin-bottom: 80px;
    }

    .contact__side-image {
      height: 300px;
    }
  }
</style>
