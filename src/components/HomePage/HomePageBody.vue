<template>
  <div class="columns body-container">
    <div class="column is-offset-3 is-4 is-flex vertical-items">
      <span class="body-title">About me</span>

      <span class="about-content">
          {{user.name}} loves programming, writing, speaking, traveling, and
        lifting heavy things.
        </span>
    </div>
    <div class="column is-offset-1 is-4 is-flex vertical-items">
      <span class="body-title ">Contact</span>
      <contact-links v-bind:platform="true" v-bind:size="'2x'"></contact-links>
    </div>
  </div>
</template>

<script>
import ContactLinks from "../ContactLinks";
export default {
  name: "HomePageBody",
  props: {
    user: Object
  },
  components: {
    "contact-links": ContactLinks
  }
};
</script>

<style scoped>
.debug {
  border: 2px solid green;
}
.body-container {
  padding: 2rem;
}
.vertical-items {
  flex-direction: column;
  padding: 0;
}
.about-content {
  margin: 1rem;
  font-family: "Merriweather", sans-serif;
}
.body-title {
  font-family: sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.16px;
  font-weight: 600;
  margin: 2rem 1rem;
}
</style>
