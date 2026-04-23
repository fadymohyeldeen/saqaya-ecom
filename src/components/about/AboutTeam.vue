<!-- Purpose: Displays the team members with their photos, roles, and social media links.
  Used In: src/views/AboutView.vue
  Notes: Data is sourced from @/utils/constants -->
<template>
  <section class="about-team">
    <div class="about-team__grid">
      <div v-for="member in team" :key="member.name" class="about-team__card">
        <div class="about-team__photo">
          <img :src="member.image" :alt="member.name" />
        </div>
        <div class="about-team__info">
          <h3 class="about-team__name">{{ member.name }}</h3>
          <p class="about-team__role">{{ member.role }}</p>
          <div class="about-team__socials">
            <a :href="member.twitter" aria-label="Twitter">
              <img src="@/assets/icons/footer/icon-twitter.svg" alt="Twitter" />
            </a>
            <a :href="member.instagram" aria-label="Instagram">
              <img src="@/assets/icons/footer/icon-instagram.svg" alt="Instagram" />
            </a>
            <a :href="member.linkedin" aria-label="LinkedIn">
              <img src="@/assets/icons/footer/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { TEAM } from '@/utils/constants'

  export default {
    name: 'AboutTeam',
    setup() {
      return {
        team: TEAM,
      }
    },
  }
</script>

<style scoped>
  .about-team {
    margin-bottom: 80px;
  }

  .about-team__grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .about-team__card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    min-width: 200px;
    max-width: 100%;
  }

  .about-team__photo {
    width: 100%;
    aspect-ratio: 3 / 4;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-sm);
    overflow: hidden;
  }

  .about-team__photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  .about-team__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .about-team__name {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: var(--color-text);
  }

  .about-team__role {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-text);
    margin-bottom: 8px;
  }

  .about-team__socials {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .about-team__socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .about-team__socials img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: invert(1);
  }

  @media (min-width: 768px) {
    .about-team__grid {
      flex-direction: row;
      align-items: flex-start;
    }

    .about-team__card {
      max-width: 370px;
    }

    .about-team__name {
      font-size: 32px;
      line-height: 40px;
    }
  }
</style>
