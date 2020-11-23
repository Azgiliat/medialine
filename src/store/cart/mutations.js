export function addGoodsToCart (state, payload) {
  const itemInCart = state.goods[payload.itemId]
  if (itemInCart) {
    itemInCart.amountInCart++
  } else {
    state.goods[payload.itemId] = {
      amountInCart: 1,
      item: payload
    }
  }

  state.goods = {...state.goods}  // чтобы сработала реактивность
}

export function setAmountInCart (state, {itemId, newAmount}) {
  const itemInCart = state.goods[itemId],
    countLeft = itemInCart.item.countLeft
  let resultAmount = newAmount >= countLeft ? countLeft : newAmount
  if (typeof resultAmount === 'string') {
    resultAmount = Number.parseInt(resultAmount, 10)
  }
  itemInCart.amountInCart = resultAmount
}

export function removeItemFromCart (state, payload) {
  // eslint-disable-next-line no-unused-vars
  const { [payload]: removedItem, ...other} = state.goods
  state.goods = other
}

export function clearCart (state) {
  state.goods = {}
}
