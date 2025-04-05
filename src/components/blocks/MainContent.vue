<template>
  <div class="main container">
    <ProduktItem
      @click="$router.push('/info')"
      v-for="(item, i) in productslist"
      :key="i"
      :title="item.title"
      :description="item.description"
      :urlImage="item.img"
      :price="item.price"
      @clickProductBtn="addToBasket(item)"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { uuid } from 'vue-uuid'
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

    const addToBasket = (item) => {
      store.commit('setAddProductsInBasket',
        {
          idx: uuid.v1(),
          id: item.id,
          img: item.img,
          title: item.title,
          price: item.price
        }
      )
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
  width: 100%;
  margin: 0 auto;
}

.main {
  height: 100%;
  display: flex;
  aling-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px 20px;
  overflow: auto;

  :deep(.card) {
    width: 312px;
    height: 552px;
  }
}
</style>
