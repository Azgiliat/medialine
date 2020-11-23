import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
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

store.$axios = Axios.create({
  baseURL: `https://localhost:${process.env.VUE_APP_PORT}`
})

export default store
