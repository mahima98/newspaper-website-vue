<template>
  <div class="multimediaBox3">
    <div>
      <img class="object-cover h-64 w-full" src="../assets/images/image1.png" />
    </div>
    <div class="description-sec col-span-3 py-4">
      <div class="space-y-2  text-left text-gray-600">
        <div class="title text-md leading-5">
          <a href="" class="hover:underline">
            {{ myvaluesmultimedia.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["myvaluesmultimedia"],
};
</script>
