<template>
  <div class="slideShop">
    <h2 class="slideShop__title">
      <i class="bi bi-award"></i>
      BEST SELLERS
    </h2>
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide v-for="slide in 8" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "slideShop",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/mixin";
@import "../../../assets/scss/variables";
.slideShop {
  &__title {
    i {
      color: $mainColor !important;
    }
  }
}
// slide
.carousel {
  &__item {
    min-height: 300px;
    width: 100%;
    background-color: $mainColor;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__slide {
    padding: 10px;
  }
}
</style>