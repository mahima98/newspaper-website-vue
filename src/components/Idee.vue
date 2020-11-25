<template>
  <div class="idee">
    <div class="container mx-auto">
      <div class="idee-bar py-2">
        <div class="border-b-4 border-pink-700">
          <div class="flex justify-between items-end">
            <div class="text-3xl font-sans font-light">
              idee
            </div>
            <div class="text-md px-2">
              <a href="" class="hover:underline">Plus d'element idee »</a>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <IdeeBox
          v-for="(description, index) in firstdatas"
          :key="index"
          :ideevalues="description"
        />
      </div>
    </div>
  </div>
</template>
<script>
import IdeeBox from "../components/IdeeBox.vue";
import cards from "../data.js";

export default {
  components: {
    IdeeBox,
  },

  data: () => {
    return {
      firstdatas: cards.slice(0, 8),
    };
  },
};
</script>
