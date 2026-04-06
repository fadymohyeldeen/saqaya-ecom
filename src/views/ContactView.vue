<template>
  <div class="contact">
    <AppBreadcrumb :items="breadcrumbs" />
    <h1>Contact</h1>
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/shared/AppBreadcrumb.vue";

export default {
  name: "ContactView",
  components: { AppBreadcrumb },
  data() {
    return {
      breadcrumbs: [{ label: "Home", to: "/" }, { label: "Contact" }],
    };
  },
};
</script>
