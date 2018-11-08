<template>
  <div>
    <page-header v-bind:user="user"></page-header>
    <page-banner v-bind:user="user"></page-banner>
    <page-body v-bind:user="user"></page-body>
    <page-footer v-bind:user="user"></page-footer>
  </div>
</template>

<script>
import PageHeader from "../Header";
import HomePageBanner from "./HomePageBanner";
import HomePageBody from "./HomePageBody";
import PageFooter from "../Footer";

export default {
  name: "HomePage",
  props: {
    user: Object
  },
  components: {
    "page-header": PageHeader,
    "page-banner": HomePageBanner,
    "page-body": HomePageBody,
    "page-footer": PageFooter
  }
};
</script>

<style scoped>
</style>
