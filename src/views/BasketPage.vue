<template>
  <div class="container">
    <ProduktItem/>
  </div>
</template>

<script>
// import { ref } from 'vue'
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'BasketPage',
  components: {
    ProduktItem
  }
}
</script>

<style lang="scss" scoped>
.container {
  widht: 1440px;
  height: 1379px;
  background-color: #161516;

  .bufer {
  color: #ffffff;
  }
}

</style>
