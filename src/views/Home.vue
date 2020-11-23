<template>
  <div class="home">
    <Header />
    <Actualite />
    <Multimedia />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Actualite from "../components/Actualite.vue";
import Multimedia from "../components/Multimedia.vue";

export default {
  components: {
    Header,
    Actualite,
    Multimedia,
  },
};
</script>
