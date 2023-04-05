<template>
  <section class="best-Seller">
    <div class="container">
      <h2 class="title">BEST SELLER</h2>
      <ul class="nav justify-content-center">
        <li class="nav-item" @click="show = !show">New Arrivals</li>
        <li class="nav-item" @click="show = !show">Best Sellers</li>
      </ul>
      <!-- BestSell items -->
      <Sell v-show="show"></Sell>
      <!-- New Arrivals items -->
      <New v-show="!show"></New>
    </div>
  </section>
</template>

<script>
import Sell from "./BestSellerBody/Sell.vue";
import New from "./BestSellerBody/New.vue";
export default {
  name: "best-Seller",
  data() {
    return {
      show: true,
    };
  },
  components: {
    Sell,
    New,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_mixin.scss";
@import "../../../assets/scss/_variables.scss";

img {
  width: 100%;
  display: block;
}
.best-Seller {
  @include titleSpacing;
  .nav {
    margin: 20px 0;
    width: 100%;
    gap: 20px;
    .nav-item {
      padding: 15px 30px;
      background-color: white;
      color: $mainColor;
      cursor: pointer;
      border: 1px solid $mainColor;
      &:hover {
        background-color: $mainColor;
        color: White;
        transition: 0.4s;
      }
    }
  }
}
@media only screen and (max-width: 990px) {
  .sell,
  .new {
    &__Main {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>