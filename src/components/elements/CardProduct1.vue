<template>
  <div class="card">
    <img :src="srcImg" alt="" class="card__image">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__subtitle">{{ subtitle }}</p>
    <div class="card__futtor">
      <p class="card__price">{{ price }}</p>
      <button class="card__button">+</button>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'CardProduct',
  components: {
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
  text-align: center;
  width: 312px;
  height: 552px;
  border: 1px solid #D58C51;

  &__image {
    width: 270px;
    height: 271px;
    padding: 43px 21px 31px 21px;
  }

  &__title {
    width: 226px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
    color: #FFFFFF;
    padding-left: 21px;
    padding-right: 27px;
  }

  &__subtitle {
    weight: 261px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 26px;
    padding-left: 21px;
    padding-right: 30px;
  }

  &__futtor {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 21px;
    margin-bottom: 30px;
  }

  &__price {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
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
