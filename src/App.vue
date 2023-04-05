<template>
  <!-- header -->
  <div id="app">
    <!-- header main -->

    <header id="header">
      <div class="container container-v1">
        <div class="row align-items-center">
          <logo-web></logo-web>
          <NavBar></NavBar>
          <Currencies></Currencies>
        </div>
      </div>
    </header>
    <!-- header-mobile -->
    <div class="header-mobile justify-content-between align-items-center">
      <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
        <i class="bi bi-list"></i>
      </div>
      <navbarMobile
        :class="{ open: showNav }"
        @toggle="showNav = false"
      ></navbarMobile>
      <LogoMobile></LogoMobile>
      <CurrenciesMobile></CurrenciesMobile>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
// header
import logo from "../src/components/Header/Logo.vue";
import Currencies from "./components/Header/Currencies.vue";
import NavBar from "./components/Header/NavBar.vue";
// header Mobile
import LogoMobile from "./components/HeaderMobile/LogoMobile.vue";
import navbarMobile from "./components/HeaderMobile/navbarMobile.vue";
import CurrenciesMobile from "./components/HeaderMobile/CurrenciesMobile.vue";
export default {
  name: "App",
  data() {
    return {
      mobileView: true,
      showNav: false,
    };
  },
  components: {
    // header
    "logo-web": logo,
    NavBar,
    Currencies,
    // header mobile
    navbarMobile,
    LogoMobile,
    CurrenciesMobile,
  },
  methods: {
    test() {
      this;
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/mixin";
@import "./assets/scss/variables";

#app {
  font-family: "Sofia Sans Semi Condensed", sans-serif;
  #navigation-icon {
    padding: 10px 10px 20px;
    cursor: pointer;
    i {
      font-size: 1.5rem;
    }
  }
  #header {
    padding: 10px 0;
  }
  .header-mobile {
    display: flex;
  }
}
.open {
  transform: translateX(0) !important;
}
@media only screen and (max-width: 990px) {
  header {
    display: none !important;
  }
}
@media only screen and (min-width: 991px) {
  .header-mobile {
    display: none !important;
  }
}
</style>
