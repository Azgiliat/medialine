export function getPriceInRUB (state) {
  return function (priceInUSD) {
    return (priceInUSD * state.exchangeRatio).toFixed(2)
  }
}
