import { CATEGORY_NAME, GROUP_ID, ITEMS_LIST, ITEM_ID, ITEM_NAME, USD_PRICE, COUNT_LEFT } from '@/utils/filedsNames'

//  на основаниии загруженного списка товаров,
//  выберем из двух json'ов нужныю для отображения информацию
export function formattedGoods (state) {
  return state.goods.reduce((accum, item) => {
    const groupId = item[GROUP_ID],
      itemId = item[ITEM_ID]
    if (!accum[groupId]) {
      accum[groupId] = {
        groupName: state.names[groupId][CATEGORY_NAME],
        goods: []
      }
    }
    accum[groupId].goods.push({
      itemId,
      itemName: state.names[groupId][ITEMS_LIST][itemId][ITEM_NAME],
      usdPrice: item[USD_PRICE],
      countLeft: item[COUNT_LEFT]
    })

    return accum
  }, {})
}
