import Vue from 'vue'
import Vuex from 'vuex'
//modules
import global from './global/index'
import goods from './goods/index'
import cart from './cart/index'
Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    global,
    goods,
    cart
  }
})

export default store
