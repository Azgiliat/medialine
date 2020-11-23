import data from '@/json/data.json'
import names from '@/json/names.json'

// eslint-disable-next-line no-unused-vars
function requestGoods () {
  return new Promise(resolve => {
    resolve(data.Value.Goods)
  })
}

function requestNames () {
  return new Promise(resolve => {
    resolve(names)
  })
}

export function loadGoods({ commit }) {
  commit('setIsLoading', true)
  return this.$axios({
    method: 'get',
    url: 'api/about'
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  // return requestGoods()
  //   .then(res => {
  //     commit('setGoods', res)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
  //   .finally(() => {
  //     commit('setIsLoading', false)
  //   })
}

export function loadNames({ commit }) {
  commit('setIsLoading', true)
  return requestNames()
    .then(res => {
      commit('setNames', res)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      commit('setIsLoading', false)
    })
}
