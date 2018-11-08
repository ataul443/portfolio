<template>
  <div class="section is-paddingless">
    <div class="container">

      <div class="columns body-container">
        <div class="column is-offset-1 is-6 is-flex vertical-items">
          <span class="body-title">About me</span>

          <span class="about-content">

            <p>I'm an engineering student pursuing my B.Tech in Computer Science
            right now. I hold a rational mindset and a thrive to solve real
            world problems my audacious and undaunted nature pushes me to
            leave not a single stone unturned no matter how difficult the
            challenge is.
              <hr/>
              <p>I adore the approach more than the technicality
            required to solve the problem enabling me to resolve big problems
            into practically small rectifiable ones and hence dissolving the
            parent problem.</p>
            <hr/>

            <p>I've been proffering my Full-Stack developer skills to <router-link to="//www.fiverr.com/shekhataul170" title="Fiverr" target="_blank">Fiverr</router-link> for
            past 6 months. I am keenly interested in <router-link to="//en.wikipedia.org/wiki/Blockchain" title="Blockhain" target="_blank">Blockchain</router-link> and
              <router-link to="//en.wikipedia.org/wiki/Distributed_ledger" title="Distributed Ledger" target="_blank">distributed
            ledger</router-link>. I love spending my spare time reading books and exercising my
            personality which enables me to psychologically analyze people helping me
            to charm out in team projects and innovating the next big together.</p>
            <hr/>
            <p><i>Read enough about me?</i><br>
             <i> Let's create something impactful and big together.
            Want me to work on something, Let's roll out then follow any the
            below links to get connected with me on social media or drop me a
            direct message through <router-link to="//mailto:ataul.one@gmail.com" title="ataul.one@gmail.com" target="_blank">email</router-link>.</i></p>

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
