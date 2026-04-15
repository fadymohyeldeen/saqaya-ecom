<template>
  <section class="our-story">
    <div class="our-story__text">
      <h2 class="our-story__heading">Our Story</h2>
      <p class="our-story__body">
        Launced in 2015, Exclusive is South Asia's premier online shopping markerplace with an
        active presense in Bangladesh. Supported by wide range of tailored marketing, data and
        service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
        customers across the region.
      </p>
      <p class="our-story__body">
        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
        offers a diverse assotment in categories ranging from consumer.
      </p>
    </div>
    <div class="our-story__image">
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Our Story"
      />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'StorySection',
  }
</script>

<style scoped>
  .our-story {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 75px;
    margin-bottom: 80px;
  }

  .our-story__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .our-story__heading {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 54px;
    line-height: 64px;
    letter-spacing: 0.03em;
    color: var(--color-text);
  }

  .our-story__body {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-text);
  }

  .our-story__image {
    flex: 1;
    border-radius: 4px;
    overflow: hidden;
  }

  .our-story__image img {
    width: 100%;
    display: block;
  }

  @media (max-width: 767px) {
    .our-story {
      flex-direction: column;
      gap: 32px;
      margin-bottom: 48px;
    }

    .our-story__heading {
      font-size: 36px;
      line-height: 44px;
    }
  }
</style>
