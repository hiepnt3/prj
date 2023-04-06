<template>
  <div class="shop">
    <!-- banner-shop -->
    <bannerShop></bannerShop>
    <div class="container">
      <!-- sliderShop -->
      <sliderShop></sliderShop>
      <!-- contentShop -->
      <contentShop></contentShop>
      <!-- Footer -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import bannerShop from "@/components/Body/ShopBody/bannerShop.vue";
import sliderShop from "@/components/Body/ShopBody/sliderShop.vue";
import contentShop from "@/components/Body/ShopBody/contentShop.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "shop",
  components: {
    bannerShop,
    sliderShop,
    contentShop,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
/*  Css */
@import "../assets/scss/_mixin.scss";
@import "../assets/scss/_variables.scss";
</style>