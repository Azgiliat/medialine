<template>
  <div class="cart">
    <h2 class="cart__title">
      Корзина
    </h2>
    <CartHeader />
    <ul class="cart__list">
      <li class="cart__item" v-for="element in goodsInCart" :key="`cart_${element.item.itemId}`">
        <CartItem :item="element.item" :amountInCart="element.amountInCart"/>
      </li>
    </ul>
    <CartTotalPrice class="cart__total-price" />
  </div>
</template>

<script>
import CartTotalPrice from '@/components/Cart/CartTotalPrice'
import CartItem from '@/components/Cart/CartItem'
import CartHeader from '@/components/Cart/CartHeader'
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartHeader,
    CartItem,
    CartTotalPrice
  },
  computed: {
    ...mapState('cart', {
      goodsInCart: 'goods'
    })
  },
}
</script>

<style lang="scss" scoped>
.cart {
  --name-width: 50%;
  --amount-width: 20%;
  --price-width: 1;
  --column-gap: 10px;
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
