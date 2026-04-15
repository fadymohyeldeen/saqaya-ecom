<template>
  <div class="delivery-box">
    <div class="delivery-box__item">
      <img src="@/assets/icons/shared/icon-truck.svg" alt="Delivery" class="delivery-box__icon" />
      <div class="delivery-box__text">
        <p class="delivery-box__title">Free Delivery</p>
        <p class="delivery-box__sub">Enter your postal code for Delivery Availability</p>
      </div>
    </div>

    <hr class="delivery-box__hr" />

    <div class="delivery-box__item">
      <img src="@/assets/icons/shared/icon-return.svg" alt="Return" class="delivery-box__icon" />
      <div class="delivery-box__text">
        <p class="delivery-box__title">Return Delivery</p>
        <p class="delivery-box__sub">Free 30 Days Delivery Returns. <a href="#">Details</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DeliveryBox',
  }
</script>

<style scoped>
  .delivery-box {
    max-width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: var(--radius-sm);
    padding: 0 16px;
    margin-top: 0;
  }

  .delivery-box__item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
  }

  .delivery-box__icon {
    flex-shrink: 0;
  }

  .delivery-box__text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .delivery-box__title {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: var(--text-md);
    color: var(--color-text);
  }

  .delivery-box__sub {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: var(--text-xs);
    color: var(--color-text);
    text-decoration: underline;
  }

  .delivery-box__sub a {
    color: var(--color-text);
  }

  .delivery-box__hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0;
  }

  /* ─── Tablet ─── */
  @media (min-width: 768px) {
    .delivery-box {
      margin-top: 16px;
    }
  }

  /* ─── Desktop ─── */
  @media (min-width: 1024px) {
    .delivery-box {
      max-width: 399px;
      margin-top: 24px;
    }
  }
</style>
