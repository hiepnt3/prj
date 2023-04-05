<template>
  <section class="slider-main">
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide v-for="slide in 1" :key="slide">
        <div class="carousel__item">
          <img :src="imageSlide" alt="" />
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
    <div class="content">
      <h1>FIGHT FOOD WASTE WITH EVERY MOUTHFUL</h1>
      <p>We will share all the fresh fruit and veg with you.</p>
      <div class="btn">
        <a href="#">FIND MORE</a>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "SliderMain",
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    imageSlide: [
      "https://cdn.shopify.com/s/files/1/0594/1696/9392/files/slide1.1.jpg?v=1629733271",
      "https://cdn.shopify.com/s/files/1/0594/1696/9392/files/slide1.2.jpg?v=1629733411",
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_mixin.scss";
@import "../../../assets/scss/_variables.scss";

.carousel__pagination {
  display: none !important;
}
img {
  width: 100%;
  display: block;
}
.content {
  position: absolute;
  color: white;
  width: 100%;
  backdrop-filter: blur(3px);
  text-align: center;
  top: 0;

  p {
    margin: 10px 0;
  }
}
.btn {
  padding: 10px 20px;
  background-color: $mainColor;

  a {
    text-decoration: none;
    color: white;
  }
}
@media only screen and (max-width: 990px) {
  // .slide-main {
  //   min-height: 200%;
  // }
}
</style>