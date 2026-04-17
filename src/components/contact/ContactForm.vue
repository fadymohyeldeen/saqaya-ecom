<template>
  <div class="contact__details">
    <div class="contact__info-card">
      <ContactInfo
        title="Call us"
        :body="['We are available 24/7, 7 days a week.', 'Phone: +8801611112222']"
      >
        <template #icon>
          <img src="@/assets/icons/contact/icon-phone.svg" alt="Phone" />
        </template>
      </ContactInfo>

      <div class="contact__divider"></div>

      <ContactInfo
        title="Write To US"
        :body="['Fill out our form and we will contact you within 24 hours.']"
      >
        <template #icon>
          <img src="@/assets/icons/contact/icon-mail.svg" alt="Mail" />
        </template>
      </ContactInfo>
    </div>

    <div class="contact__form-card">
      <div class="contact__form-row">
        <InputField type="text" name="name" placeholder="Your Name *" />
        <InputField type="email" name="email" placeholder="Your Email *" />
      </div>
      <InputField type="textarea" name="message" placeholder="Your Message" />
      <div class="contact__form-actions">
        <ButtonApp :label="'Send Message'" />
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonApp from '@/components/shared/ButtonApp.vue'
  import ContactInfo from '@/components/contact/ContactInfo.vue'
  import InputField from '@/components/shared/InputField.vue'

  export default {
    name: 'ContactForm',
    components: { ButtonApp, ContactInfo, InputField },
  }
</script>

<style scoped>
  .contact__details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }

  .contact__info-card {
    background: var(--color-bg);
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    border-radius: var(--radius-sm);
    padding: 40px 35px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .contact__divider {
    width: 100%;
    height: 1px;
    background: var(--color-text);
    opacity: 0.5;
  }

  .contact__form-card {
    background: var(--color-bg);
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
    border-radius: var(--radius-sm);
    padding: 40px 31px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }

  .contact__form-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .contact__details {
      padding: 24px 40px;
    }

    .contact__form-row {
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
    .contact__details {
      padding: 0;
    }
  }
</style>
