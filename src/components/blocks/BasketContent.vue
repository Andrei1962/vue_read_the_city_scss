<template>
  <div class="basket-list">
    <ProduktItem
      basket
      v-for="(item, i) in productsInBasket"
      :key="i"
      :title="item.title"
      :description="item.description"
      :urlImage="item.img"
      :price="item.price"
      @clickProductBtn="deleteProductsInBasket(item.id)"
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
    const productsInBasket = computed(() => {
      return store.getters.getBasketProducts
    })

    const deleteProductsInBasket = (id) => {
      store.commit('setDeleteProductsInBasket', id)
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
  height: calc(100vh - 160px);
}

</style>
