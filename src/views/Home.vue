<template>
  <div class="home">
    <Menubar />
    <Ads />
    <Actualite />
  </div>
</template>

<script>
import Menubar from "../components/Menubar.vue";
import Ads from "../components/Ads.vue";
import Actualite from "../components/Actualite.vue";

export default {
  components: {
    Menubar,
    Ads,
    Actualite,
  },
};
</script>
