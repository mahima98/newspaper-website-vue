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
      <div class="grid grid-cols-4">
        <!-- <div class="first-col col-span-2">
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
        <div class="section2"></div>
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
