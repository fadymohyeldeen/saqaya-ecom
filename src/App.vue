<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<!--------------------------------->

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
