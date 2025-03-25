<template>
  <div class="main container">
    <ProduktItem
      v-for="(item, i) in Products"
      :key="i"
      :title="item.title"
      :decoration="ite.decoration"
      :urlImage="item.img"
      :price="item.price"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'CardsMain',
  components: {
    ProduktItem
  },
  props: {
  },
  setup () {
    const store = useStore()

    const Products = computed(() => {
      return store.getters.getProducts
    })

    return {
      Products
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1310px;
  margin: 0 auto;
}
.main {
  display: flex;
  flex-wrap: wrap;
  gap: 35px 20 px;
  overflow: auto;
  height: 100%;

  :deep(.card) {
    width: 312px;
    height: 552px;
  }
}

.list {
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  gap: 35px 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
  margin: 0 auto;
}

</style>
