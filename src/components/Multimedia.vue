<template>
  <div class="Multimedia bg-gray-200">
    <div class="container mx-auto">
      <div class="multimedia-bar py-2">
        <div class="border-b-4 border-pink-700">
          <div class="flex justify-between items-end">
            <div class="text-3xl font-sans font-light">
              Multimedia
            </div>
            <div class="text-md px-2">
              <a href="" class="hover:underline">Plus d'element multimedia »</a>
            </div>
          </div>
        </div>
      </div>
      <div class="multimedia-video-header">
        <div class="flex space-x-2">
          <div class="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-youtube"
            >
              <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
              ></path>
              <polygon
                points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
              ></polygon>
            </svg>
          </div>
          <div class="flex justify-center items-center">
            <div>Videos »</div>
          </div>
        </div>
      </div>
      <div class="multimedia-video-section py-2">
        <div class="grid grid-cols-4 gap-4">
          <MultimediaBox1
            v-for="(description, index) in firstdatas"
            :myvaluesmultimedia="description"
            :key="index"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="multimedia-a-ecouter">
          <div class="multimedia-a-ecouter-header">
            <div class="flex space-x-2">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mic"
                >
                  <path
                    d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                  ></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <div class="flex justify-center items-center">
                <div>A ecouter »</div>
              </div>
            </div>
          </div>
          <div class="multimedia-a-ecouter-section py-2">
            <div class="grid grid-cols-2 gap-4">
              <MultimediaBox2
                v-for="(description, index) in secondatas"
                :myvaluesmultimedia="description"
                :key="index"
              />
            </div>
          </div>
        </div>
        <div class="multimedia-diaporamas">
          <div class="multimedia-diaporamas-header">
            <div class="flex space-x-2">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-camera"
                >
                  <path
                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                  ></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
              <div class="flex justify-center items-center">
                <div>Diaporamas »</div>
              </div>
            </div>
          </div>
          <div class="multimedia-video-section py-2">
            <div class="grid grid-cols-2 gap-4">
              <MultimediaBox3
                v-for="(description, index) in thirdatas"
                :myvaluesmultimedia="description"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MultimediaBox1 from "../components/MultimediaBox1.vue";
import MultimediaBox2 from "../components/MultimediaBox2.vue";
import MultimediaBox3 from "../components/MultimediaBox3.vue";

import cards from "../data.js";

export default {
  components: {
    MultimediaBox1,
    MultimediaBox2,
    MultimediaBox3,
  },
  data: () => {
    return {
      //   subtitle: false,
      firstdatas: cards.slice(0, 4),
      secondatas: cards.slice(4, 6),
      thirdatas: cards.slice(6, 8),
    };
  },
};
</script>
