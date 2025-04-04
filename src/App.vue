<template>
  <router-view/>    <!-- главный файл -->
</template>
<script>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'StartView',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()
    // проверка на регистрацию
    onBeforeMount(() => {
      if (localStorage.isAuth === undefined) {
        localStorage.setItem('isAuth', JSON.stringify(false))
      }

      if (!JSON.parse(localStorage.isAuth)) {
        router.push('/auth')
      }
    })
  }
}
</script>
