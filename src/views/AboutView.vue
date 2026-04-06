<template>
  <div class="about">
    <AppBreadcrumb :items="breadcrumbs" />
    <h1>About Us</h1>
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/shared/AppBreadcrumb.vue";

export default {
  name: "AboutView",
  components: { AppBreadcrumb },
  data() {
    return {
      breadcrumbs: [{ label: "Home", to: "/" }, { label: "About Us" }],
    };
  },
};
</script>
