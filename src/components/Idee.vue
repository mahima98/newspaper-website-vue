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

      <div class="grid grid-cols-4 gap-2">
        <div class="col-span-3">
          <div class="grid grid-cols-4 gap-4">
            <IdeeBox
              v-for="(description, index) in firstdatas"
              :key="index"
              :ideevalues="description"
            />
          </div>
        </div>
        <div class="space-y-4">
          <Ads2 />
          <Ads2 />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IdeeBox from "../components/IdeeBox.vue";
import Ads2 from "../components/Ads2.vue";

import cards from "../data.js";

export default {
  components: {
    IdeeBox,
    Ads2,
  },

  data: () => {
    return {
      firstdatas: cards.slice(0, 8),
    };
  },
};
</script>
