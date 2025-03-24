<template>
  <div class="card">
    <img :src="srcImg" alt="" class="card__image">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__subtitle">{{ subtitle }}</p>
    <div class="card__futtor">
      <p class="card__price">{{ price }}</p>
      <BaseActionIcon add/>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import BaseActionIcon from '@/components/icons/BaseActionIcon'

export default {
  name: 'CardProduct',
  components: {
    BaseActionIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    srcImg: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  height: 552px;
  max-width: 312px;
  border: 1px solid #D58C51;
  padding: 43px 36px;
  margin: 0 auto;
  color: #FFFFFF;

  &:hover {
    color: #D58C51;
  }

  &__image {
    width: 270px;
    height: 271px;
    margin: 0 auto;
  }

  &__title {
    max-width: 226px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  &__subtitle {
    max-width: 261px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }

  &__futtor {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 21px;
  }

  &__price {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  &__button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgb(255, 255, 255);
    background-color: #151615;
    font-size: 25px;
    color: #ffffff;
  }
}

</style>
