<template>
  <div class="home">
    <Menubar />
    <Ads />
    <Actualite />
    <Multimedia />
  </div>
</template>

<script>
import Menubar from "../components/Menubar.vue";
import Ads from "../components/Ads.vue";
import Actualite from "../components/Actualite.vue";
import Multimedia from "../components/Multimedia.vue";

export default {
  components: {
    Menubar,
    Ads,
    Actualite,
    Multimedia,
  },
};
</script>
