<template>
  <div class="about">
    <AppBreadcrumb />
    <StorySection />
    <AboutStats />
    <AboutTeam />
    <ServicesStrip />
  </div>
</template>

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import StorySection from '@/components/about/StorySection.vue'
  import AboutStats from '@/components/about/AboutStats.vue'
  import AboutTeam from '@/components/about/AboutTeam.vue'
  import ServicesStrip from '@/components/shared/ServicesStrip.vue'

  export default {
    name: 'AboutView',
    components: { AppBreadcrumb, StorySection, AboutStats, AboutTeam, ServicesStrip },
  }
</script>
