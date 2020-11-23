<template>
<div class="cart-item">
  <div class="cart-item__element cart-item__element--name">
    <p class="cart-item__text">
      {{item.itemName}}
    </p>
  </div>
  <div class="cart-item__element cart-item__element--amount">
    <AppInput :value.sync="amount" :type="'number'">
      <span class="cart-item__text" slot="title">
        шт.
      </span>
    </AppInput>
  </div>
  <div class="cart-item__element cart-item__element--price">
    <p class="cart-item__text cart-item__text--price">
      {{priceInRUB}}
    </p>
  </div>
  <div class="cart-item__element cart-item__element--remove">
    <button class="cart-item__remove-button" type="button" @click="removeFromCart(item.itemId)" />
  </div>
</div>
</template>

<script>
import AppInput from '@/components/UI/AppInput'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'CartItem',
  components: {
    AppInput
  },
  props: {
    item: {
      type: Object,
      require: true
    },
    amountInCart: {
      type: Number,
      require: true
    }
  },
  methods: {
    ...mapMutations('cart', {
      setAmountInCart: 'setAmountInCart',
      removeFromCart: 'removeItemFromCart'
    })
  },
  computed: {
    ...mapGetters('global', {
      getPriceInRUB: 'getPriceInRUB'
    }),
    priceInRUB() {
      return `${this.getPriceInRUB(this.item.usdPrice)}${this.$currencySymbols.RUB}`
    },
    amount: {
      get() {
        return this.amountInCart
      },
      set(val) {
        this.setAmountInCart({
          newAmount: val,
          itemId: this.item.itemId
        })
        this.$forceUpdate() //  обновляем, чтобы актуализировать количество.
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  padding: 15px 5px;
  border-top: 1px solid $main-grey;

  &__element {
    &:not(:last-child) {
      margin-right: var(--column-gap);
    }
    &--name {
      width: var(--name-width);
    }

    &--amount {
      width: var(--amount-width);
    }

    &--price {
      flex-grow: var(--price-width);
    }

    &--remove {
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__text {
    margin: 0;
    text-align: left;

    &--price {
      font-weight: bolder;
    }
  }

  &__remove-button {
    display: block;
    border: none;
    outline: none;
    width: 15px;
    height: 15px;
    position: relative;
    background-color: transparent;

    &::before, &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: $error;
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
