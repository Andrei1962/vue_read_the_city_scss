<template>
  <div class="basket-list">
    <ProduktItem
      basket
      v-for="(item, i) in productsIntBasket"
      :key="i"
      :title="item.title"
      :description="item.description"
      :urlImage="item.img"
      :price="item.price"
      @clickProductBtn="deleteProductInBasket(item.id)"
    />
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
    const productsIntBasket = computed(() => {
      return store.getters.getBasketProducts
    })

    const deleteProductInBasket = (id) => {
      store.commit('setDeleteProductInBasket', id)
    }
    return {
      productsIntBasket,
      deleteProductInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-list {
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding-bottom: 102px;
  height: calc(100vh - 218px);
  margin-bottom: 40px;
  overflow: auto;
}

</style>
