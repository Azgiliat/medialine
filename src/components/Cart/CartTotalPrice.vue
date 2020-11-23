<template>
  <div class="total-price">
    <p class="total-price__text">
      Общая стоимость: <span class="total-price__text--accent">{{priceInRUB}}{{$currencySymbols.RUB}}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartTotalPrice',
  computed: {
    ...mapGetters('cart', {
      totalPrice: 'getTotalPrice'
    }),
    ...mapGetters('global', {
      getPriceInRUB: 'getPriceInRUB'
    }),
    priceInRUB() {
      return this.getPriceInRUB(this.totalPrice)
    }
  }
}
</script>

<style lang="scss" scoped>
.total-price {
  &__text {
    margin: 0;

    &--accent {
      font-weight: bolder;
      color: $dark-green;
    }
  }
}
</style>
