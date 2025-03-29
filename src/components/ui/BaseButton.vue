<template>
  <button
    :class="{
      'button': true,
      'button_orange': orange
    }"
  >
    {{ name }}
  </button>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'BaseButton',
  components: {
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    orange: {
      type: Boolean,
      default: true
    }

  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 12px 75px;
  font-size: 14px;
  font-weight: 400;
  color: #D58C51;
  background: #161516;
  border: 1px solid;
  border-color: #D58C51;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #131313;
    background-color: #D58C51;
    transition: 0.5s;
  }

  &_orange {
    padding: 12px 40px;
    border: none;
    color: #131313;
    background: #D58C51;

    &:hover {
      color: #ffffff;
    }
  }
}

</style>
