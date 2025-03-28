<template>
  <div class="basket-list">
    <ProduktItem
      basket
      v-for="(item, i) in Productslist"
      :key="i"
      :title="item.title"
      :description="item.description"
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
  name: 'BasketContent',
  components: {
    ProduktItem
  },
  props: {
  },
  setup () {
    const store = useStore()
    const Productslist = computed(() => {
      return store.getters.getProducts
    })
    return {
      Productslist
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-list {
  display: flex;
  flex-direction: column;
  gap: 31px;
  height: calc(100vh - 218px);
  overflow: auto;
  margin-bottom: 40px;
  background-color: #151615;
}

.footor__line {
  width: 100%;
  height: 1px;
  border: 1px colid #D58C51;
  margin: 0 auto;
}

.footor__basket {
  width: 1440px;
  background-color: #151615;
  height: 89px;
}
</style>
