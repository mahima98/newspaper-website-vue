<template>
  <div class="home">
    <Menubar />
    <Ads />
  </div>
</template>

<script>
import Menubar from "../components/Menubar.vue";
import Ads from "../components/Ads.vue";

export default {
  components: {
    Menubar,
    Ads,
  },
};
</script>
