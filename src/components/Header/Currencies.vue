<template>
  <div class="col-lg-2 currencies right">
    <div class="inner-currencies">
      <ul class="list-inline d-flex justify-content-end">
        <li class="list-inline-item">
          <router-link class="link" to="/login">
            <i class="bi bi-person-fill"> </i>
          </router-link>
        </li>
        <li class="list-inline-item">
          <router-link class="link" to="/cart">
            <i class="bi bi-bag"> </i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "currencies",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
@import "../../assets/scss/variables";
.currencies {
  li {
    cursor: pointer;
    font-size: 20px;
    &:hover {
      i {
        color: $mainColor;
        transition: 0.3s;
      }
    }
  }
  .link {
    color: black;
  }
}
</style>