<template>
  <div class="Article">
    <Header />
    <ArticleBox />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import ArticleBox from "../components/ArticleBox.vue";

export default {
  components: {
    Header,
    ArticleBox,
  },
};
</script>
