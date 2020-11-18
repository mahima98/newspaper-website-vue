<template>
  <div class="Actualite container mx-auto">
    <div class="actuality-bar py-2">
      <div class="border-b-4 border-blue-800">
        <div class="flex justify-left text-3xl font-sans font-light">
          Actualite
        </div>
      </div>
    </div>
    <div class="actuality-components">
      <div class="grid grid-cols-4 gap-4">
        <!-- <div class="first-col col-span-2 ">
          <div class="grid grid-rows-3 gap-2">
            <ActualiteBox1 />
            <ActualiteBox2 />
            <ActualiteBox1 />
          </div>
        </div>
        <div class="second-col">
          <div class="grid grid-rows-4 gap-2">
            <Ads2 />
            <div class="row-span-3">
              <ActualiteBox3
                v-for="(description, index) in descriptions"
                :myvalues="description"
                :key="index"
              />
            </div>
          </div>
        </div>
        <div class="third-col"></div> -->

        <div class="section1 col-span-3 space-y-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
              <ActualiteBox1
                v-for="(description, index) in firstdatas"
                :firstvalues="description"
                :key="index"
              />
            </div>
            <div>
              <Ads2 />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 space-y-4">
              <ActualiteBox2 />
              <ActualiteBox1
                v-for="(description, index) in thirdatas"
                :firstvalues="description"
                :key="index"
              />
            </div>
            <div>
              <ActualiteBox3
                v-for="(description, index) in secondatas"
                :myvalues="description"
                :key="index"
              />
            </div>
          </div>
        </div>
        <div class="section2">
          <div class="space-y-4">
            <div class="ads">
              <img
                class="object-cover w-full"
                src="../assets/images/ads3.jpg"
              />
            </div>
            <div class="moreoption bg-gray-200">
              <div class="grid grid-cols-3">
                <button
                  class="flex justify-center items-center space-x-1 py-4 px-8 text-white bg-blue-800"
                >
                  <div>
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 8.00002C0.75 8.00002 3.75 2.66669 9 2.66669C14.25 2.66669 17.25 8.00002 17.25 8.00002C17.25 8.00002 14.25 13.3334 9 13.3334C3.75 13.3334 0.75 8.00002 0.75 8.00002Z"
                        stroke="white"
                        stroke-width="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 10C10.2426 10 11.25 9.10457 11.25 8C11.25 6.89543 10.2426 6 9 6C7.75736 6 6.75 6.89543 6.75 8C6.75 9.10457 7.75736 10 9 10Z"
                        stroke="white"
                        stroke-width="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>POV</div>
                </button>
                <button
                  class="flex justify-center items-center space-x-1 py-4 px-8 text-black"
                >
                  <div>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66666 13.8125C2.66666 13.3429 2.84225 12.8924 3.15481 12.5604C3.46737 12.2283 3.8913 12.0417 4.33332 12.0417H13.3333"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.33332 1.41669H13.3333V15.5834H4.33332C3.8913 15.5834 3.46737 15.3968 3.15481 15.0647C2.84225 14.7326 2.66666 14.2822 2.66666 13.8125V3.18752C2.66666 2.71787 2.84225 2.26745 3.15481 1.93535C3.46737 1.60326 3.8913 1.41669 4.33332 1.41669V1.41669Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>Article</div>
                </button>
                <button
                  class="flex justify-center items-center space-x-1 py-4 px-4 text-black"
                >
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.666687C7.46957 0.666687 6.96086 0.877401 6.58579 1.25247C6.21071 1.62755 6 2.13625 6 2.66669V8.00002C6 8.53045 6.21071 9.03916 6.58579 9.41423C6.96086 9.78931 7.46957 10 8 10C8.53043 10 9.03914 9.78931 9.41421 9.41423C9.78929 9.03916 10 8.53045 10 8.00002V2.66669C10 2.13625 9.78929 1.62755 9.41421 1.25247C9.03914 0.877401 8.53043 0.666687 8 0.666687V0.666687Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.6667 6.66669V8.00002C12.6667 9.2377 12.175 10.4247 11.2998 11.2999C10.4247 12.175 9.23767 12.6667 8 12.6667C6.76232 12.6667 5.57533 12.175 4.70016 11.2999C3.82499 10.4247 3.33333 9.2377 3.33333 8.00002V6.66669"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 12.6667V15.3334"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.33333 15.3333H10.6667"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>Radio</div>
                </button>
              </div>
              <div class="p-4">
                <img
                  class="object-cover w-full"
                  src="../assets/images/image2.png"
                />
                <div class="space-y-2 py-2">
                  <div class="text-center text-gray-500">
                    <a href="">Partager cette carricature</a>
                  </div>
                  <div class="grid grid-cols-3">
                    <button
                      class="flex justify-center items-center space-x-1 py-4 px-8 text-white bg-blue-500"
                    >
                      <div>
                        <svg
                          width="25"
                          height="21"
                          viewBox="0 0 25 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.75 1.75H15.625C14.2437 1.75 12.9189 2.21094 11.9421 3.03141C10.9654 3.85188 10.4167 4.96468 10.4167 6.125V8.75H7.29166V12.25H10.4167V19.25H14.5833V12.25H17.7083L18.75 8.75H14.5833V6.125C14.5833 5.89294 14.6931 5.67038 14.8884 5.50628C15.0838 5.34219 15.3487 5.25 15.625 5.25H18.75V1.75Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <button
                      class="flex justify-center items-center space-x-1 py-4 px-8 text-black bg-blue-600"
                    >
                      <div class="text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-twitter"
                        >
                          <path
                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    <button
                      class="flex justify-center items-center space-x-1 py-4 px-4 text-black bg-black"
                    >
                      <div>
                        <svg
                          width="21"
                          height="18"
                          viewBox="0 0 21 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 3H17.5C18.4625 3 19.25 3.675 19.25 4.5V13.5C19.25 14.325 18.4625 15 17.5 15H3.5C2.5375 15 1.75 14.325 1.75 13.5V4.5C1.75 3.675 2.5375 3 3.5 3Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.25 4.5L10.5 9.75L1.75 4.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div class="text-center text-sm text-gray-600">
                    <a href="">Plus de carricature de POV</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="ads">
              <img
                class="object-cover w-full"
                src="../assets/images/ads4.jpg"
              />
            </div>
          </div>
        </div>
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
  data: () => {
    return {
      //   subtitle: false,
      firstdatas: [
        {
          title: "PJ : «Gouvernement pou fer tou so possib pou paye pansion»",
          date: "7 NOV 2020",
          time: "11:45",
          msg: "0",
          description:
            "Comme prévu, le feuilleton parlementaire tient toutes ses promesses en ce mardi 17 novembre. Shakeel Mohamed et Patrick Assirvaden ont été expulsés",
        },
      ],
      secondatas: [
        {
          title: "Examens post-internat: 289 nouveaux médecins et 18 recalés",
          date: "7 NOV 2020",
          time: "11:45",
          msg: "0",
        },
        {
          title: "St.-Louis Gate: Alain Hao Thyn Voon libéré",
          date: "6 NOV 2020",
          time: "12:00",
          msg: "0",
        },
        {
          title:
            "Deal entre la MTPA et le Liverpool FC: Rs 400 millions pour 2",
          date: "6 NOV 2020",
          time: "12:00",
          msg: "0",
        },
        {
          title:
            "Présidentielle américaine: le débat Trump-Biden vire au chaos",
          date: "6 NOV 2020",
          time: "12:00",
          msg: "0",
        },
        {
          title: "Coronavirus: le point sur la pandémie dans le monde",
          date: "6 NOV 2020",
          time: "12:00",
          msg: "0",
        },
        {
          title: "Les grands titres de l'express de ce jeudi 1er octobre 2020",
          date: "6 NOV 2020",
          time: "12:00",
          msg: "0",
        },
      ],
      thirdatas: [
        {
          title: "Vijay Ramanjooloo:«Le cerveau de l’être humain est structuré",
          date: "7 NOV 2020",
          time: "11:45",
          msg: "0",
          description:
            "Cette question est sur toutes les lèvres depuis la découverte du cas d’infanticide : «Comment une mère a-t-elle pu laisser son enfant être battu mort…",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>
