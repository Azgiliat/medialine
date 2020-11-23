export function getTotalPrice (state) {
  let result = 0
  for (let key in state.goods) {
    result += state.goods[key].amountInCart * state.goods[key].item.usdPrice
  }
  return result
}
