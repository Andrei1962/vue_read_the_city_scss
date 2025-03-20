<template>
  <button class="btn">{{ name }}</button>
</template>

<script>

export default {
  name: 'ButtonCard',
  components: {
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setur () {
  }
}
</script>

<style lang="css" scoped>
.btn {
  background-color: #3278ff;
  color: #ffffff;
  padding: 6px 38px;
  border-radius: 7px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  margin-top: auto;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
}
</style>
