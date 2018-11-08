<template>
  <div class="section">
    <div class="container">

      <div class="columns body-container">
        <div class="column is-offset-3 is-4 is-flex vertical-items">
          <span class="body-title">About me</span>

          <span class="about-content">
          {{user.name}} loves programming, writing, speaking, traveling, and
        lifting heavy things. He does not love talking about himself in the
        3rd person. He is the co-founder of Gruntwork, a company that provides
        DevOps as a Service. He's also the author of two books published by
        O'Reilly Media: Hello, Startup and Terraform: Up & Running. Previously,
        he worked as a software engineer at LinkedIn, TripAdvisor, Cisco
        Systems, and Thomson Financial and got his BS and Masters at Cornell
        University. For more info, check out his writing, speaking, projects,
        and photos.
        </span>
        </div>
        <div class="column is-offset-1 is-4 is-flex vertical-items">
          <span class="body-title ">Contact</span>
          <contact-links v-bind:platform="true" v-bind:size="'2x'"></contact-links>
        </div>
      </div>

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
