<template>
  <div v-bind:class="getSocialContainerClass()">

    <router-link v-for="link in links" :to="'//' + link.link" target="_blank" v-bind:key="link.link" v-bind:class="getSocialItemClass()">
      <span v-bind:title="size? '': link.platform" class="icon is-medium">
              <i  v-bind:class="getIconClass(link.platform)"></i>
            </span>
      <span v-show="platform">{{link.platform}}</span>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "ContactLinks",
  props: {
    platform: Boolean,
    size: String
  },
  data: function data() {
    return {
      links: [
        { platform: "Github", link: "www.github.com/ataul443" },
        { platform: "Email", link: "mailto:ataul.one@gmail.com" },
        { platform: "Facebook", link: "www.facebook.com/dev.shekh21" },
        {
          platform: "Linkedin",
          link: "www.linkedin.com/in/shekh-ataul-383512143"
        },
        {
          platform: "Medium",
          link: "www.medium.com/@ataul.one"
        }
      ]
    };
  },
  methods: {
    getIconClass: function getIconClass(platform) {
      let classSize = "fa-" + this.size;
      if (platform === "Email") {
        let className = { fas: true, "fa-envelope-square": true };
        className[classSize] = true;
        return className;
      } else {
        let className = { fab: true };
        let temp =
          "fa-" +
          platform.toLowerCase() +
          (platform === "Linkedin" || "Medium" ? "" : "-square");
        className[temp] = true;
        className[classSize] = true;
        return className;
      }
    },
    getSocialContainerClass: function getSocialContainerClass() {
      let className = {
        "social-container": true,
        "is-flex": true
      };
      if (this.platform) {
        className["social-container-vertical"] = true;
        return className;
      }
      return className;
    },
    getSocialItemClass: function getSocialItemClass() {
      if (this.platform) {
        return { "social-item": true, "si-color": true };
      } else {
        return { "social-item": true, "si-footer-color": true };
      }
    }
  }
};
</script>

<style scoped>
.social-container {
  margin: 1rem;
}

.social-container-vertical {
  flex-direction: column;
}

.social-item {
  display: flex;
  align-items: center;
  padding-bottom: 0.31rem;
}
.si-color {
  color: #0a0a0a;
}

.si-footer-color {
  color: #aaaaaa;
}
.social-item > span:nth-child(2) {
  padding: 0.31rem;
}
.social-item:hover {
  color: #007199;
}
</style>
