<template>
  <div class="home">
    <HeaderMain/>
    <MainContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import MainContent from '@/components/blocks/MainContent.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    MainContent
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.home {
  background-color: #161516;
  overflow-y: hidden;
  height: 100%;
}

</style>
