<template>
  <section class="goods">
    <div class="container">
      <transition mode="out-in" name="goods-loading">
        <Loader class="goods__loader" :key="'loader'" v-if="isLoading"/>
        <div class="goods__content"  v-else>
          <ul class="goods__list" :key="'list'">
            <li class="goods__item" v-for="group in formattedGoods" :key="group.groupName">
              <GoodsGroup class="goods__group" :title="group.groupName" :goodsList="group.goods"/>
            </li>
          </ul>
          <Cart class="goods__cart"/>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Cart from '@/components/Cart/Cart'
import Loader from '@/components/UI/Loader'
import GoodsGroup from '@/components/Goods/GoodsGroup'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'Goods',
  components: {
    GoodsGroup,
    Loader,
    Cart
  },
  methods: {
    ...mapActions('goods', {
      loadGoods: 'loadGoods',
      loadNames: 'loadNames'
    })
  },
  computed: {
    ...mapState('goods', {
      isLoading: 'isLoading',
    }),
    ...mapGetters('goods', {
      formattedGoods: 'formattedGoods'
    })
  },
  created () {
    this.loadGoods()
    this.loadNames()
  }
}
</script>

<style lang="scss" scoped>
.goods {
  position: relative;
  padding-top: 50px;

  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 50%;
  }

  &__item {
    margin-bottom: 25px;
  }

  .goods-loading {
    &-enter, &-leave-to {
      opacity: 0;
    }

    &-enter-to {
      opacity: 1;
    }

    &-enter-active, &-leave-active {
      will-change: opacity;
      transition: opacity $transition;
    }
  }

  &__content {
    display: flex;
  }

  &__cart {
    margin-left: 20px;
    width: calc(50% - 20px);
  }
}
</style>
