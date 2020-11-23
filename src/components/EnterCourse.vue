<template>
  <div class="enter-course">
    <p class="enter-course__title">
      Введите новый курс {{$currencySymbols.USD}}:
    </p>
    <AppInput :value.sync="newCourse" />
    <button type="button" class="enter-course__button" @click="acceptNewCourse">
      Ok
    </button>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'
import AppInput from '@/components/UI/AppInput'

export default {
  name: 'EnterCourse',
  components: { AppInput },
  data() {
    return {
      newCourse: 0
    }
  },
  methods: {
    ...mapMutations('global', {
      setExchangeRatio: 'setExchangeRatio'
    }),
    acceptNewCourse() {
      this.setExchangeRatio(this.newCourse)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.enter-course {
  &__button {
    display: block;
    margin: 15px auto 0 auto;
  }
}
</style>
