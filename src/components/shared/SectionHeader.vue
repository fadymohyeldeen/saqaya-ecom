<template>
  <div class="section-header">
    <div class="section-header__tag">
      <span class="section-header__bar"></span>
      <span class="section-header__label">{{ label }}</span>
    </div>

    <template v-if="title">
      <div v-if="showNav" class="section-header__title-row">
        <h2 class="section-header__title">{{ title }}</h2>
        <div class="section-header__nav">
          <button class="section-header__nav-btn" aria-label="Previous" @click="$emit('prev')">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M26 16L19 23L26 30"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="section-header__nav-btn" aria-label="Next" @click="$emit('next')">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M20 16L27 23L20 30"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <h2 v-else class="section-header__title">{{ title }}</h2>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SectionHeader',
    props: {
      label: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: null,
      },
      showNav: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['prev', 'next'],
  }
</script>

<style scoped>
  /* ─── Mobile base ─── */
  .section-header {
    margin-bottom: 24px;
  }

  .section-header__tag {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .section-header__bar {
    display: block;
    width: 16px;
    height: 34px;
    background: var(--color-primary);
    border-radius: var(--radius-sm);
    flex-shrink: 0;
  }

  .section-header__label {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: var(--text-sm);
    color: var(--color-primary);
  }

  .section-header__title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .section-header__title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.04em;
    color: var(--color-text);
  }

  .section-header__nav {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .section-header__nav-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: opacity 0.2s ease;
  }

  .section-header__nav-btn:hover path {
    stroke: white;
  }

  .section-header__nav-btn:hover svg circle {
    fill: var(--color-primary);
  }

  /* ─── Tablet (768px+) ─── */
  @media (min-width: 768px) {
    .section-header {
      margin-bottom: 40px;
    }

    .section-header__tag {
      margin-bottom: 20px;
    }

    .section-header__bar {
      width: 20px;
      height: 40px;
    }

    .section-header__label {
      font-size: var(--text-md);
    }

    .section-header__title {
      font-size: 36px;
      line-height: 48px;
    }
  }
</style>
