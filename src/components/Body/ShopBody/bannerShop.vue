<template>
  <div class="banner">
    <div class="banner__inner">
      <h2>Products</h2>
      <span>Home</span>
      <i class="bi bi-arrow-right"></i>
      <span>Products</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/mixin";
@import "../../../assets/scss/variables";
.banner {
  background-image: url("../../../assets/image/banner\ Shop\ PR.webp");
  &__inner {
    text-align: center;
    padding: 20px;
    color: white;
  }
  h2 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  span {
    display: inline-block;
    font-size: 17px;
    font-weight: 400;
  }
  i {
    padding: 0 10px;
  }
}
</style>