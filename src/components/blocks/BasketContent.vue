d<template>
  <div class="basket-list">
    <ProduktItem
      basket
      v-for="(item, i) in productsInBasket"
      :key="i"
      :title="item.title"
      :description="item.description"
      :urlImage="item.img"
      :price="item.price"
      @clickProductBtn="deleteProductsInBasket(item.idx)"
    />
    <div id="arrange" class="basket__arrange">Ваш заказ оформлен, менеджер свяжется с вами</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'BasketContent',
  components: {
    ProduktItem
  },
  props: {
  },
  setup () {
    const store = useStore()
    const productsInBasket = computed(() => {
      return store.getters.getBasketProducts
    })

    const deleteProductsInBasket = (idx) => {
      store.commit('setDeleteProductsInBasket', idx)
    }
    return {
      productsInBasket,
      deleteProductsInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-list {
  display: flex;
  flex-direction: column;
  gap: 31px;
  overflow: auto;
  margin-bottom: 40px;
  height: calc(100vh - 300px);
}

.basket__arrange {
  display: none;
  position: absolut;
  weight: 300px;
  height: 50px;
  color: #ffffff;
  background-color: #D58C51;
  z-index: 2;
  top: 100px;
  margin: 0 auto;
  font-size: 20px;
}
</style>
