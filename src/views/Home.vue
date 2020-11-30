<template>
  <div class="home">
    <Header />
    <Actualite />
    <Multimedia />
    <Idee />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Actualite from "../components/Actualite.vue";
import Multimedia from "../components/Multimedia.vue";
import Idee from "../components/Idee.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Actualite,
    Multimedia,
    Idee,
    Footer,
  },
};
</script>
