
<template>
  <div class="homePage">
    <!-- main-slider -->
    <SliderMain></SliderMain>
    <!-- featured-slider -->
    <SliderFeatured></SliderFeatured>
    <!-- Best-Seller -->
    <BestSeller></BestSeller>
    <!-- Image Page -->
    <imagePage></imagePage>
    <!-- Lastest New -->
    <latest></latest>
    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
// import child component
import SliderMain from "@/components/Body/HomeBody/SliderMain.vue";
import SliderFeatured from "@/components/Body/HomeBody/SliderFeatured.vue";
import BestSeller from "@/components/Body/HomeBody/BestSeller.vue";
import imagePage from "@/components/Body/HomeBody/imagePage.vue";
import Latest from "@/components/Body/HomeBody/Latest.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "homePage",
  components: {
    SliderMain,
    SliderFeatured,
    BestSeller,
    imagePage,
    Latest,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
@import "../assets/scss/_variables.scss";

.homePage {
  position: relative;
}
</style>