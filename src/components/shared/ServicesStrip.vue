<template>
  <section class="services-strip">
    <div class="services-strip__item">
      <div class="services-strip__icon">
        <div class="services-strip__icon-outer">
          <div class="services-strip__icon-inner">
            <img
              src="@/assets/icons/cart.svg"
              alt="Delivery"
              class="services-strip__icon-cart"
            />
          </div>
        </div>
      </div>
      <div class="services-strip__text">
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
    </div>

    <div class="services-strip__item">
      <div class="services-strip__icon">
        <div class="services-strip__icon-outer">
          <div class="services-strip__icon-inner">
            <img
              src="@/assets/icons/customer.svg"
              alt="Customer Service"
              class="services-strip__icon-customer"
            />
          </div>
        </div>
      </div>
      <div class="services-strip__text">
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
    </div>

    <div class="services-strip__item">
      <div class="services-strip__icon">
        <div class="services-strip__icon-outer">
          <div class="services-strip__icon-inner">
            <img
              src="@/assets/icons/dollar.svg"
              alt="Money Back"
              class="services-strip__icon-dollar"
            />
          </div>
        </div>
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

.services-strip__icon-outer {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-strip__icon-inner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-strip__icon-inner img {
  object-fit: contain;
}

.services-strip__icon-cart {
  filter: invert(1);
  width: 28px;
  height: 28px;
}

.services-strip__icon-customer {
  width: 32px;
  height: 32px;
}

.services-strip__icon-dollar {
  width: 32px;
  height: 32px;
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
