<template>
  <div class="goods-group">
    <h6 class="goods-group__title">
      {{title}}
    </h6>
    <GoodsElement class="goods-group__goods-element" :key="goodsElement.itemId" :info="goodsElement" v-for="goodsElement in goodsList" />
  </div>
</template>

<script>
import GoodsElement from '@/components/Goods/GoodsElement'
export default {
  name: 'GoodsGroup',
  props: {
    goodsList: {
      type: Array,
      require: true
    },
    title: {
      type: String,
      require: true
    }
  },
  components: {
    GoodsElement
  }
}
</script>

<style lang="scss" scoped>
.goods-group {
  padding: 10px;
  border: 1px solid $main-black;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  &__title {
    flex-basis: 100%;
    padding: 5px 15px;
    margin: 0 0 10px 0;
    background-color: $dark-green;
    color: $main-white;
  }

  &__goods-element {
    width: 50%;

    &:nth-of-type(2n) {
      border-left: none;
    }

    &:nth-of-type(n+3) {
      border-top: none;
    }
  }
}
</style>
