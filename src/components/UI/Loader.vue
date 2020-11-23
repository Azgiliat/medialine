<template>
  <div class="loader">
    <svg class="loader__icon">
      <use xlink:href="#loader"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100px;
  height: 100px;

  &__icon {
    width: 100px;
    height: 100px;
  }
}
</style>
