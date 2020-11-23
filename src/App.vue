<template>
  <div id="app" class="app">
    <router-view class="app__body"/>
    <Popup :isOpen.sync="isPopupOpen">
      <EnterCourse @close="isPopupOpen = false"/>
    </Popup>
    <div class="overlay" v-show="isPopupOpen" @click="isPopupOpen = !isPopupOpen"/>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import EnterCourse from '@/components/EnterCourse'
import Popup from '@/components/UI/Popup'

export default {
  name: 'App',
  components: {
    Popup,
    EnterCourse
  },
  data () {
    return {
      isPopupOpen: false
    }
  },
  methods: {
    ...mapMutations('cart', {
      clearCart: 'clearCart'
    }),
    ...mapActions('goods', {
      loadGoods: 'loadGoods'
    })
  },
  mounted () {
    setInterval(() => {
      if (!this.isPopupOpen) {
        this.clearCart()
        this.loadGoods()
        this.isPopupOpen = true
      }
    }, 15000)
  }
}
</script>
<style lang="scss">
.app {
  position: relative;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  &__body {
    flex-grow: 1;
  }
}
</style>
