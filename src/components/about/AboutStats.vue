<template>
  <section class="about-stats">
    <div v-for="stat in stats" :key="stat.label" class="about-stats__card">
      <div class="about-stats__icon-wrap">
        <div class="about-stats__icon-outer">
          <div class="about-stats__icon-inner">
            <img class="about-stats__svg" :src="stat.icon" :alt="stat.label" />
          </div>
        </div>
      </div>
      <span class="about-stats__number">{{ stat.number }}</span>
      <span class="about-stats__label">{{ stat.label }}</span>
    </div>
  </section>
</template>

<script>
  import { STATS } from '@/utils/constants'

  export default {
    name: 'AboutStats',
    data() {
      return {
        stats: STATS,
      }
    },
  }
</script>

<style scoped>
  .about-stats {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    margin-bottom: 80px;
    flex-wrap: wrap;
  }

  .about-stats__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 30px 0;
    width: 270px;
    border: 1px solid rgba(0, 0, 0, 0.13);
    border-radius: 4px;
    text-align: center;
    transition: background 0.2s, color 0.2s ease-in-out;
  }
  .about-stats__card:hover {
    background-color: var(--color-primary);
  }

  .about-stats__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-stats__icon-outer {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-stats__card:hover .about-stats__icon-outer {
    background: rgba(255, 255, 255, 0.3);
  }

  .about-stats__icon-inner {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--color-primary-dark);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-stats__card:hover .about-stats__icon-inner {
    background: var(--color-primary-light);
  }

  .about-stats__icon-inner img {
    width: 32px;
    height: 32px;
  }

  .about-stats__card:hover .about-stats__icon-inner img {
    filter: invert(1); /* invert reverses the colors of the image */
  }

  .about-stats__number {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: var(--color-text);
  }

  .about-stats__card:hover .about-stats__number {
    color: var(--color-primary-light);
  }

  .about-stats__label {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-text);
  }

  .about-stats__card:hover .about-stats__label {
    color: var(--color-primary-light);
  }

  @media (max-width: 767px) {
    .about-stats__card {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
