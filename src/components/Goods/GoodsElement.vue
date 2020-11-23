<template>
  <div class="goods-element">
    <div class="goods-element__title-block">
      <p class="goods-element__title">
        {{ info.itemName }}
        <span class="goods-element__count-left">
          ({{ info.countLeft }})
        </span>
      </p>
    </div>
    <div class="goods-element__price-block">
      <p class="goods-element__price">
        {{ priceInRUB }}{{ $currencySymbols.RUB }}
      </p>
    </div>
    <div class="goods-element__cart-block">
      <svg class="goods-element__cart-icon" @click="addToCart(info)">
        <use xlink:href="#cart" />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'GoodsElement',
  props: {
    info: {
      type: Object,
      require: true
    }
  },
  methods: {
    ...mapMutations('cart', {
      addToCart: 'addGoodsToCart'
    })
  },
  computed: {
    ...mapGetters('global', {
      getPriceInRUB: 'getPriceInRUB'
    }),
    priceInRUB() {
      return this.getPriceInRUB(this.info.usdPrice)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-element {
  display: flex;
  align-items: stretch;
  border: 1px solid $main-black;

  &__title-block {
    padding: 5px 10px;
  }

  &__price-block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background-color: $main-grey;
    padding: 5px 10px;
  }

  &__price {
    margin: 0;
    text-align: center;
    font-weight: bolder;
  }

  &__title {
    margin: 0;
  }

  &__cart-block {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__cart-icon {
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
