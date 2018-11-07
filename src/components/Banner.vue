<template>
  <section class="hero content-container">
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image is-128x128" style="margin: 0 auto;">
          <img src="../assets/profile.jpeg" v-bind:alt="user" class="is-rounded profile-image"></figure>
        <h1 class="big-title">{{user.name}}</h1>
        <h2 class="big-subtitle">{{user.role}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: {
    user: Object
  }
};
</script>

<style scoped>
.content-container {
  background-color: #f5f8fa;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
}
.profile-image {
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
  padding: 0.5rem;
}

.profile-image:hover {
  border-color: grey;
}
.big-title {
  font-size: 3rem;
  letter-spacing: 0.16rem;
}

.big-title:hover {
  color: #007199;
}
.big-subtitle {
  font-size: 1.5rem;
  color: #aaaaaa;
  letter-spacing: 0.16px;
}
</style>
