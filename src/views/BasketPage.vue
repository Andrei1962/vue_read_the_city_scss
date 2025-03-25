<template>
  <div class="container">
    <HeaderMain/>
    <MainContent/>
  </div>
</template>

<script>
// import { ref } from 'vue'
import HeaderMain from '@/components/blocks/HeaderMain'
import MainContent from '@/components/blocks/MainContent'

export default {
  name: 'BasketPage',
  components: {
    HeaderMain,
    MainContent
  }
}
</script>

<style lang="scss" scoped>
.container {
  widht: 1440px;
  height: 1379px;
  background-color: #161516;
}

</style>
