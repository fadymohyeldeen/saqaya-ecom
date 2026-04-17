<template>
  <div class="about">
    <AppBreadcrumb />
    <StorySection />
    <AboutStats />
    <AboutTeam />
    <ServiceItems :services="services" />
  </div>
</template>

<script>
  import AppBreadcrumb from '@/components/shared/AppBreadcrumb.vue'
  import StorySection from '@/components/about/StorySection.vue'
  import AboutStats from '@/components/about/AboutStats.vue'
  import AboutTeam from '@/components/about/AboutTeam.vue'
  import ServiceItems from '@/components/shared/ServiceItems.vue'

  export default {
    name: 'AboutView',
    components: { AppBreadcrumb, StorySection, AboutStats, AboutTeam, ServiceItems },
    data() {
      return {
        services: [
          {
            icon: require('@/assets/icons/header/icon-cart.svg'),
            alt: 'Delivery',
            title: 'FREE AND FAST DELIVERY',
            description: 'Free delivery for all orders over $140',
            inverted: true,
          },
          {
            icon: require('@/assets/icons/about/icon-customer.svg'),
            alt: 'Customer Service',
            title: '24/7 CUSTOMER SERVICE',
            description: 'Friendly 24/7 customer support',
            inverted: false,
          },
          {
            icon: require('@/assets/icons/about/icon-dollar.svg'),
            alt: 'Money Back',
            title: 'MONEY BACK GUARANTEE',
            description: 'We return money within 30 days',
            inverted: false,
          },
        ],
      }
    },
  }
</script>
