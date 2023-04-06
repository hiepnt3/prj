<template>
  <div class="login">
    <!-- login Content -->
    <LoginContent></LoginContent>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
import LoginContent from "@/components/Body/LoginBody/LoginContent.vue";
export default {
  name: "login",
  components: {
    LoginContent,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
/*  Css */
@import "../assets/scss/_mixin.scss";
@import "../assets/scss/_variables.scss";
</style>