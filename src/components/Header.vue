<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <span class="brand"><strong>{{brandName | to-upper}}</strong></span>
      <div v-on:click="toggleMenu()"
           v-bind:class="{ 'navbar-burger' : true,
            'is-active': burgerIsActive}">
        <span area-hidden="true"></span>
        <span area-hidden="true"></span>
        <span area-hidden="true"></span>
      </div>
    </div>export default {
    name: 'Banner.vue'
  }

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
  data: function data() {
    return {
      brandName: "Shekh Ataul",
      links: [
        { tag: "Home", link: "/" },
        { tag: "Projects", link: "/projects" },
        { tag: "About", link: "/about" },
        { tag: "Contact", link: "/contact" }
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
  letter-spacing: 0.3em;
  font-family: "Montserrat", sans-serif;
}

.brand {
  margin: auto 10px;
  font-size: 16px;
}

a span {
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
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
