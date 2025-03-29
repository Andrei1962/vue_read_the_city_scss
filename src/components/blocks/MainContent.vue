<template>
  <div class="main container">
    <ProduktItem
      v-for="(item, i) in productslist"
      :key="i"
      :title="item.title"
      :description="item.description"
      :urlImage="item.img"
      :price="item.price"
      @clickProductBtn="addToBasket(item.id)"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'MainContent',
  components: {
    ProduktItem
  },
  props: {
  },
  setup () {
    const store = useStore()

    const productslist = computed(() => {
      return store.getters.getProducts
    })

    const addToBasket = (id) => {
      store.commit('setAddProductInBasket', id)
    }

    return {
      productslist,
      addToBasket
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  max-width: 1500px;
  margin: 0 auto;
}

.main {
  height: 100%;
  display: flex;
  aling-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px 20px;
  padding-bottom: 67px;

  :deep(.card) {
    width: 312px;
    height: 552px;
  }
}
</style>
