<template>
  <div class="footer foot-container">
    <div class="content content-container">
      <p class="foot-tag">
        Made by Shekh Ataul &#9829;
      </p>

      <contact-links class="contact-links-adjust" v-bind:size="''" v-bind:platform="false"></contact-links>
    </div>
  </div>
</template>

<script>
import ContactLinks from "./ContactLinks";
export default {
  name: "Footer",
  components: {
    "contact-links": ContactLinks
  }
};
</script>

<style scoped>
.foot-container {
  max-height: 1.2rem;
  padding: 0.6rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.foot-tag {
  padding: 0.3rem 0 0 0.62rem;
  color: #aaaaaa;
  font-family: sans-serif;
  font-size: 0.75rem;
}
.content-container {
  display: flex;
  justify-content: space-between;
  padding-right: 1.12rem;
}
.contact-links-adjust {
  margin: -3px 0 0 0;
}
</style>
