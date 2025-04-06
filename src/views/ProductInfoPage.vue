<template>
  <div class="card">
    {{ currentProduct }}
    <div class="card__wrapper">
      <HeaderCard/>
      <ProduktItem
        :title="currentProduct?.title"
        :price="currentProduct?.price"
        :urlImage="currentProduct?.img"
        :description="currentProduct?.description"
        @clickBtn="add"
      />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { uuid } from 'vue-uuid'

import HeaderCard from '@/components/blocks/HeaderCard'
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'ProductInfoPage',
  components: {
    HeaderCard,
    ProduktItem
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    onMounted(() => {
      store.commit('setCurrentProduct', route.params.id)
    })

    const currentProduct = computed(() => {
      return store.getters.getCurrentProduct
    })

    const add = () => {
      store.commit('setAddProductInBasket',
        {
          idx: uuid.v1(),
          id: currentProduct.value.id,
          img: currentProduct.value.img,
          title: currentProduct.value.title,
          price: currentProduct.value.price
        }
      )
    }

    return {
      currentProduct,
      add
    }
  }
}

</script>

<style lang="scss" scoped>
.card {
  max-width: 1440px;
  max-height: 734px;
  background-color: #161516;
  color: #ffffff;
  padding: 48px 70px 108px 70px;
}

</style>
