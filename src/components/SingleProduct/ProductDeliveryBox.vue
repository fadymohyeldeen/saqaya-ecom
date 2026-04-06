<template>
  <div class="delivery-box">
    <div class="delivery-box__item">
      <svg
        class="delivery-box__icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect width="40" height="40" fill="none" />
        <path
          d="M33 25H7V13C7 11.895 7.895 11 9 11H27C28.105 11 29 11.895 29 13V17H31L35 21V25H33Z"
          stroke="#000"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="28" r="3" stroke="#000" stroke-width="2" />
        <circle cx="28" cy="28" r="3" stroke="#000" stroke-width="2" />
      </svg>
      <div class="delivery-box__text">
        <p class="delivery-box__title">Free Delivery</p>
        <p class="delivery-box__sub">
          Enter your postal code for Delivery Availability
        </p>
      </div>
    </div>

    <hr class="delivery-box__hr" />

    <div class="delivery-box__item">
      <svg
        class="delivery-box__icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect width="40" height="40" fill="none" />
        <path
          d="M20 10C15.582 10 12 13.582 12 18"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M20 30C24.418 30 28 26.418 28 22"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12 14L12 18L16 18"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 26L28 22L24 22"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="delivery-box__text">
        <p class="delivery-box__title">Return Delivery</p>
        <p class="delivery-box__sub">
          Free 30 Days Delivery Returns. <a href="#">Details</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDeliveryBox",
};
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
