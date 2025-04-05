<template>
  <div class="card">
    <div class="basket__wrapper">
      <HeaderMain cardHeader/>
      <ProduktItem
        :title="currentProduct.title"
        :price="currentProduct.price"
        :image="currentProduct.img"
        :description="currentProduct.description"
      />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'

import HeaderMain from '@/components/blocks/HeaderMain'
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'ProductInfoPage',
  components: {
    HeaderMain,
    ProduktItem
  },
  props: {
  },
  setup () {
  }
}

</script>

<style lang="scss" scoped>
.card {
  background-color: #161516;
  height: 100vh;
  color: #ffffff;
  font-size: 30px;
}

</style>
