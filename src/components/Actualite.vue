<template>
  <div class="Actualite-section container mx-auto">
    <div class="actuality-bar py-2">
      <div class="border-b-8 border-blue-800">
        <div class="flex justify-left text-3xl font-sans font-light">
          Actualite
        </div>
      </div>
    </div>
    <div class="actuality-components">
      <div class="grid grid-cols-4">
        <div class="first-col col-span-2">
          <div class="space-y-2">
            <ActualiteBox1 />
            <ActualiteBox2 />
            <ActualiteBox1 />
          </div>
        </div>
        <div class="second-col"></div>
        <div class="third-col"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ActualiteBox1 from "../components/ActualiteBox1.vue";
import ActualiteBox2 from "../components/ActualiteBox2.vue";

export default {
  components: {
    ActualiteBox1,
    ActualiteBox2,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
