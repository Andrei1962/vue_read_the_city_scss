<template>
  <div class="container">
    <BaseActionIcon/>
    <h1 class="bufer">BasketPage</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseActionIcon from '@/components/icons/BaseActionIcon.vue'

export default {
  name: 'BasketPage',
  components: {
    BaseActionIcon
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
