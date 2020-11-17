<template>
  <div class="Actualite container mx-auto">
    <div class="actuality-bar py-2">
      <div class="border-b-8 border-blue-800">
        <div class="flex justify-left text-3xl font-sans font-light">
          Actualite
        </div>
      </div>
    </div>
    <div class="actuality-components">
      <div class="grid grid-cols-4 space-x-4">
        <div class="first-col col-span-2">
          <div class="space-y-2">
            <ActualiteBox1 />
            <ActualiteBox2 />
            <ActualiteBox1 />
          </div>
        </div>
        <div class="second-col">
          <Ads2 />
          <div>
            <ActualiteBox3 />
          </div>
        </div>
        <div class="third-col"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ActualiteBox1 from "../components/ActualiteBox1.vue";
import ActualiteBox2 from "../components/ActualiteBox2.vue";
import Ads2 from "../components/Ads2.vue";
import ActualiteBox3 from "../components/ActualiteBox3.vue";

export default {
  components: {
    ActualiteBox1,
    ActualiteBox2,
    Ads2,
    ActualiteBox3,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
