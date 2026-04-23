<template>
  <div class="about">
    <AppBreadcrumb />
    <StorySection />
    <AboutStats />
    <AboutTeam />
    <ServiceItems :services="services" />
  </div>
</template>

<script setup>
  import AboutStats from '@/components/about/AboutStats.vue'
  import AboutTeam from '@/components/about/AboutTeam.vue'
  import StorySection from '@/components/about/StorySection.vue'
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import ServiceItems from '@/components/shared/ServiceItems.vue'
  import { SERVICES } from '@/utils/constants'

  const services = SERVICES
</script>
