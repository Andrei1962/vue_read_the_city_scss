<template>
  <div class="home">
    <HeaderMain/>
    <MainContent/>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import MainContent from '@/components/blocks/MainContent.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    MainContent
  },
  setup () {
    const store = useStore()
    onBeforeMount(() => {
      store.commit('setDataDistribution')
    })
  }
}

</script>
<style lang="scss" scoped>
.home {
  background-color: #161516;
  overflow: auto;
  height: 100%;
  padding-bottom: 67px;
}

</style>
