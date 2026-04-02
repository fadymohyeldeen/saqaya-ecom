<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "DefaultLayout";
      /* in the router each route should declare its layout in the meta field and it will be used here
     otherwise it will use the default layout */
    },
  },
};
</script>
