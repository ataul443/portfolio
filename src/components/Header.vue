<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <span class="brand"><strong>{{this.user.name | to-upper}}</strong></span>
      <div v-on:click="toggleMenu()"
           v-bind:class="{ 'navbar-burger' : true,
            'is-active': burgerIsActive}">
        <span area-hidden="true"></span>
        <span area-hidden="true"></span>
        <span area-hidden="true"></span>
      </div>
    </div>

    <div v-bind:class="{'navbar-menu': true,
     'is-active': burgerIsActive}">
      <div class="navbar-end">
        <a
          v-for="link in links"
          v-bind:key="link.tag"
          v-bind:href="link.link"
          class="navbar-item">
          <span>{{link.tag | to-upper}}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: Object
  },
  data: function data() {
    return {
      links: [
        { tag: "Blog", link: "/" },
        { tag: "Projects", link: "/projects" },
        { tag: "Photos", link: "/about" }
      ],
      burgerIsActive: false
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.burgerIsActive = !this.burgerIsActive;
    }
  },
  filters: {
    "to-upper": function toUpper(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
nav span {
  letter-spacing: 0.2rem;
  font-family: "Montserrat", sans-serif;
}

.brand {
  margin: auto 0.62rem;
  font-size: 1rem;
}

a span {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.31rem;
}
a span:hover {
  color: #0c66a1;
}
a.navbar-item:hover {
  background-color: #e7f1f5;
}
div.navbar-menu {
  padding: 0;
}
</style>
