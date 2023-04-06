<template>
  <div class="Blog">
    <!-- banner -->
    <bannerBlog></bannerBlog>
    <div class="container">
      <!-- Content Blog -->
      <ContentBlog></ContentBlog>
      <!-- footer -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import bannerBlog from "@/components/Body/BlogBody/bannerBlog.vue";
import ContentBlog from "@/components/Body/BlogBody/ContentBlog.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Blog",
  components: {
    bannerBlog,
    ContentBlog,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
/*  Css */
@import "../assets/scss/_mixin.scss";
@import "../assets/scss/_variables.scss";
</style>