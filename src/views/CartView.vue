<template>
  <div class="cart">
    <!-- Cart Content -->
    <CartContent></CartContent>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import CartContent from "@/components/Body/CartBody/CartContent.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Cart",
  components: {
    CartContent,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
/*  Css */
@import "../assets/scss/_mixin.scss";
@import "../assets/scss/_variables.scss";
</style>