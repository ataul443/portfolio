<template>
  <div>
    <app-header v-bind:user="user"></app-header>
    <app-banner v-bind:user="user"></app-banner>
    <home-page-body v-bind:user="user"></home-page-body>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Header from "./components/Header";
import Banner from "./components/Banner";
import HomePageBody from "./components/HomePage/HomePageBody";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-banner": Banner,
    "home-page-body": HomePageBody,
    "app-footer": Footer
  },
  data: function data() {
    return {
      user: {
        name: "Shekh Ataul",
        role: "Software Developer"
      }
    };
  }
};
</script>

<style>
html {
  font-size: 16px;
}
</style>
