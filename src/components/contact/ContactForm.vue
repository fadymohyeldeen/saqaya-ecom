<template>
  <div class="contact__details">
    <!-- contact info -->
    <div class="contact__info-card">
      <div class="contact__info-block">
        <div class="contact__info-header">
          <div class="contact__icon-circle">
            <img src="@/assets/icons/contact/icon-phone.svg" alt="Phone" />
          </div>
          <span class="contact__info-title">Call us</span>
        </div>
        <div class="contact__info-body">
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>

      <div class="contact__divider"></div>

      <div class="contact__info-block">
        <div class="contact__info-header">
          <div class="contact__icon-circle">
            <img src="@/assets/icons/contact/icon-mail.svg" alt="Mail" />
          </div>
          <span class="contact__info-title">Write To US</span>
        </div>
        <div class="contact__info-body">
          <p>Fill out our form and we will contact you within 24 hours.</p>
        </div>
      </div>
    </div>

    <!-- contact form -->
    <div class="contact__form-card">
      <div class="contact__form-row">
        <div class="contact__field">
          <input type="text" placeholder="Your Name *" />
        </div>
        <div class="contact__field">
          <input type="email" placeholder="Your Email *" />
        </div>
      </div>
      <div class="contact__field">
        <textarea placeholder="Your Message" rows="8"></textarea>
      </div>
      <div class="contact__form-actions">
        <AppButton :label="'Send Message'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* ── Desktop ── */
  .contact__details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0;
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
    flex-direction: row;
    gap: 16px;
    width: 100%;
  }

  .contact__field {
    width: 100%;
  }

  .contact__field input,
  .contact__field textarea {
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

  .contact__field textarea {
    height: auto;
  }

  .contact__field input::placeholder,
  .contact__field textarea::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  /* ── Tablet ── */
  @media (max-width: 1023px) {
    .contact__details {
      padding: 24px 40px;
    }
  }

  /* ── Mobile ── */
  @media (max-width: 767px) {
    .contact__details {
      padding: 16px;
    }

    .contact__form-row {
      flex-direction: column;
    }
  }
</style>

<script>
  import AppButton from '@/components/shared/AppButton.vue'

  export default {
    name: 'ContactForm',
    components: { AppButton },
  }
</script>
