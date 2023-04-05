<template>
  <div class="CurrenciesM right">
    <div class="inner-currencies">
      <ul class="list-inline">
        <li class="list-inline-item">
          <i class="bi bi-person-fill"></i>
        </li>
        <li class="list-inline-item">
          <i class="bi bi-bag"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrenciesM",
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
      }
    }
  }
}
</style>