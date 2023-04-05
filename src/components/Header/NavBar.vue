<template>
  <div class="col-lg-8 d-flex justify-content-center">
    <div class="menu right">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="link" to="/shop">Shop</router-link>
              </li>
              <li class="nav-item">
                <router-link class="link" to="/feature">Feature</router-link>
              </li>
              <li class="nav-item">
                <router-link class="link" to="/pages">Pages</router-link>
              </li>
              <li class="nav-item">
                <router-link class="link" to="/blogs">Blogs</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
@import "../../assets/scss/variables";
.menu {
  .link {
    margin: 0 18px;
    @include fontInfor(18px, 600);
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }
  nav {
    margin-bottom: 0px;
    .navbar-nav {
      height: 100%;
      .nav-item {
        padding: 5px 0;
        margin: 5px;
        position: relative;
        &:hover {
          transition: 0.4s;
          a {
            transition: 0.2s;
            color: $mainColor;
          }
          &::before {
            width: 100%;
          }
        }
        &::before {
          content: "";
          position: absolute;
          background-color: $mainColor;
          color: red;
          height: 2px;
          width: 0;
          left: 0;
          bottom: -0px;
          transition: 0.4s;
        }
      }
    }
  }
  .navbar {
    height: 100%;
  }
}
</style>