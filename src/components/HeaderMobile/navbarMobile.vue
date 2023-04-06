<template>
  <nav class="navMobile" :class="{ open: showNav }">
    <div class="logo">
      <div class="logoMenu" @click="toggle()">
        <i class="bi bi-x-lg"></i>
      </div>
    </div>
    <div class="navMobile_content">
      <ul id="tabMenuMobile">
        <li class="nav-item">
          <router-link class="link" to="/">Home</router-link>
          <i class="bi bi-arrow-right"></i>
        </li>
        <li class="nav-item">
          <router-link class="link" to="/shop">Shop</router-link>
          <i class="bi bi-arrow-right"></i>
        </li>
        <li class="nav-item">
          <router-link class="link" to="/blogs">Blogs</router-link>
          <i class="bi bi-arrow-right"></i>
        </li>
        <li class="nav-item">
          <router-link class="link" to="/pages">Pages</router-link>
          <i class="bi bi-arrow-right"></i>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarMobile",
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_mixin.scss";
@import "../../assets/scss/_variables.scss";
.navMobile {
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: white;
  width: 70%;
  height: 100%;
  transform: translateX(-100%);
  transition: 0.3s;
  border: 1px solid #dedede;
  .logo {
    display: flex;
    justify-content: flex-end;
    .logoMenu {
      margin: 20px 10px;
    }
  }
  .nav-item {
    text-decoration: none;
    display: flex;
    padding: 20px 10px;
    justify-content: space-between;
    border: inherit;
    .link {
      @include fontInfor(15px, 600);
      text-decoration: none;
      text-transform: uppercase;
      color: black;
    }
  }
}
</style>