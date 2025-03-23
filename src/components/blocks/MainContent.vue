<template>
  <div class="main">
    <ProduktItem
      v-for="(item, i) in produktList"
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
  name: 'MainContent',
  components: {
    ProduktItem
  },
  props: {
  },
  setup () {
    const store = useStore()

    const produktList = computed(() => {
      return store.getters.getProducts
    })

    return {

    }
  }
}

</script>