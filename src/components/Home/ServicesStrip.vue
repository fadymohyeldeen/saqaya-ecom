<template>
  <section class="services-strip">
    <div class="services-strip__item">
      <div class="services-strip__icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="40" fill="#2F2E30" fill-opacity="0.3" />
          <circle cx="40" cy="40" r="30" fill="#000000" />
          <path
            d="M24 44L28 36H52L56 44"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M20 44H60"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle cx="28" cy="48" r="3" stroke="#FAFAFA" stroke-width="2" />
          <circle cx="52" cy="48" r="3" stroke="#FAFAFA" stroke-width="2" />
          <path
            d="M28 36V28H44"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="services-strip__text">
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
    </div>

    <div class="services-strip__item">
      <div class="services-strip__icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="40" fill="#2F2E30" fill-opacity="0.3" />
          <circle cx="40" cy="40" r="30" fill="#000000" />
          <path
            d="M30 50V46C30 44 32 42 34 42H46C48 42 50 44 50 46V50"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
          />
          <circle cx="40" cy="34" r="6" stroke="#FAFAFA" stroke-width="2" />
          <path
            d="M50 55V53"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="services-strip__text">
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
    </div>

    <div class="services-strip__item">
      <div class="services-strip__icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="40" fill="#2F2E30" fill-opacity="0.3" />
          <circle cx="40" cy="40" r="30" fill="#000000" />
          <path
            d="M40 26L48 30V40C48 45 44 49 40 50C36 49 32 45 32 40V30L40 26Z"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36 39L39 42L44 37"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="services-strip__text">
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesStrip",
};
</script>

<style scoped>
/* ─── Mobile  ─── */
.services-strip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 0 48px;
}

.services-strip__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  max-width: 256px;
}

.services-strip__text h3 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: var(--color-text);
  margin-bottom: 6px;
}

.services-strip__text p {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: var(--color-text);
}

/* ─── Tablet ─── */
@media (min-width: 768px) {
  .services-strip {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    padding: 40px 0 60px;
  }

  .services-strip__text h3 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
  }

  .services-strip__text p {
    font-size: 14px;
    line-height: 21px;
  }
}

/* ─── Desktop  ─── */
@media (min-width: 1024px) {
  .services-strip {
    gap: 88px;
    flex-wrap: nowrap;
  }
}
</style>
