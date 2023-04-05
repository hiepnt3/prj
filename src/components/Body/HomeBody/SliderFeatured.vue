<template>
  <!-- featured-product  -->
  <section class="featured-product container" :wrap-around="true">
    <h2 class="title">FEATURED PRODUCTS</h2>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 8" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "SliderFeature",
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },

  data: () => ({
    // slide-item
    item: [
      {
        id: 16,
        name: "Banana",
        price: 45,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
        category: "fruits",
      },
      {
        id: 17,
        name: "Grapes",
        price: 60,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
        category: "fruits",
      },
      {
        id: 18,
        name: "Mango",
        price: 75,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
        category: "fruits",
      },
      {
        id: 19,
        name: "Musk Melon",
        price: 36,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
        category: "fruits",
      },
      {
        id: 20,
        name: "Orange",
        price: 75,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
        category: "fruits",
      },
      {
        id: 21,
        name: "Pears",
        price: 69,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
        category: "fruits",
      },
      {
        id: 22,
        name: "Pomegranate",
        price: 95,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
        category: "fruits",
      },
      {
        id: 23,
        name: "Raspberry",
        price: 160,
        image:
          "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
        category: "fruits",
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },

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
@import "../../../assets/scss/_mixin.scss";
@import "../../../assets/scss/_variables.scss";
.featured-product {
  @include titleSpacing;
  .carousel__item {
    // min-height: 200px;
    min-width: 180px;
    min-height: 180px;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .carousel__slide {
    padding: 10px;
  }
}
image {
  width: 100%;
  object-fit: cover;
}
</style>