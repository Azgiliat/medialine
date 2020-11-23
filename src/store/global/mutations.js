export function setExchangeRatio (state, payload) {
  state.exchangeRatio = Number.parseInt(payload, 10).toFixed(2)
}
