<template>
  <div class="home">
    <HeaderMain/>
    <CardsMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import CardsMain from '@/components/blocks/CardsMain.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderMain,
    CardsMain
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.home {
  background-color: #161516;
}

</style>
