<template>
  <div class="input-group">
    <input :type="type" :placeholder="placeholder" class="input-group__input" v-model="_value"/>
    <div class="input-group__title">
      <slot name="title"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      require: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      require: false,
      default: ''
    },
    value: {
      type: [String, Number],
      require: true
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  display: flex;
  align-items: center;
  width: 100%;

  &__input {
    border-radius: 10px;
    border: 1px solid $main-black;
    outline: none;
    padding: 5px;
    width: calc(100% - 30px);
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  &__title {
    width: 30px;
    margin-left: 5px;
  }
}
</style>
