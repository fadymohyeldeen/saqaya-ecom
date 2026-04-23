<!-- Purpose: Displays a row of service highlight icons and descriptions.
  Used In: src/views/AboutView.vue, src/views/HomeView.vue
  Notes: Iterates over a services array prop. -->
<template>
  <section class="services-strip">
    <div v-for="service in services" :key="service.title" class="services-strip__item">
      <div class="services-strip__icon-outer">
        <div class="services-strip__icon-inner">
          <img
            :src="service.icon"
            :alt="service.alt"
            class="services-strip__icon-img"
            :class="{ 'services-strip__icon-img--inverted': service.inverted }"
          />
        </div>
      </div>
      <div class="services-strip__text">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    services: {
      type: Array,
      required: true,
    },
  })
</script>

<style scoped>
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
    background: var(--color-primary-dark);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .services-strip__icon-img {
    width: 32px;
    height: 32px;
    display: block;
    object-fit: contain;
  }

  .services-strip__icon-img--inverted {
    filter: invert(1);
    width: 36px;
    height: 36px;
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

  @media (min-width: 1024px) {
    .services-strip {
      gap: 88px;
      flex-wrap: nowrap;
    }
  }
</style>
