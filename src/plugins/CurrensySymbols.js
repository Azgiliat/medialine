export default {
  install (Vue) {
    Vue.prototype.$currencySymbols = {
      USD: '$',
      RUB: '₽'
    }
  }
}
