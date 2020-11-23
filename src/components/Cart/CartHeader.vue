<template>
  <div class="cart-header">
    <div class="cart-header__element cart-header__element--name">
      <p class="cart-header__text">
        Наименование товара
      </p>
    </div>
    <div class="cart-header__element cart-header__element--amount">
      <p class="cart-header__text">
        Количество
      </p>
    </div>
    <div class="cart-header__element cart-header__element--price">
      <p class="cart-header__text">
        Цена ({{$currencySymbols.RUB}}./шт)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartHeader',
}
</script>

<style lang="scss" scoped>
.cart-header {
  display: flex;
  width: 100%;
  margin-bottom: 20px;

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
      flex-grow: var(--prive-width);
    }
  }

  &__text {
    margin: 0;
    text-align: left;
  }
}
</style>
