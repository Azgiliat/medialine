<template>
<div class="popup" v-if="isOpen">
 <slot />
</div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    isOpen: {
      type: Boolean,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  background-color: $main-white;
  position: fixed;
  z-index: 110;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 15px;
  border: 1px solid $dark-green;
}
</style>
