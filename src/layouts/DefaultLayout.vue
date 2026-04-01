<template>
  <div>
    <AppHeader />
    <slot />
    <!-- any component passed to parent will be rendered here -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
