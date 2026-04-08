<template>
  <div class="about">
    <AppBreadcrumb :items="breadcrumbs" />
    <OurStory />
    <AboutStats />
    <AboutTeam />
    <ServicesStrip />
  </div>
</template>

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import OurStory from '@/components/About/OurStory.vue'
  import AboutStats from '@/components/About/AboutStats.vue'
  import AboutTeam from '@/components/About/AboutTeam.vue'
  import ServicesStrip from '@/components/shared/ServicesStrip.vue'

  export default {
    name: 'AboutView',
    components: { AppBreadcrumb, OurStory, AboutStats, AboutTeam, ServicesStrip },
    data() {
      return {
        breadcrumbs: [{ label: 'Home', to: '/' }, { label: 'About Us' }],
      }
    },
  }
</script>
