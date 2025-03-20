<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title" href="">наша продукция</h1>
      <BaseActionIcon remove/>
      <div class="header__bloc">
        <p class="header__description" href="">3 товара<br>на сумму 3 500 ₽</p>
        <button class="header__button"><img src="@/components/icons/BasketIcon.svg"></button>
      </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import BaseActionIcon from '@/components/icons/BaseActionIcon'

export default {
  name: 'HeaderMain',
  components: {
    BaseActionIcon
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 1302px;
  margin-bottom: 74px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 45px;
  }

  &__title {
    display: inline-block;
    width: 535px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 31px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    margin-left: 70px;
  }

  &__bloc {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: -70px;
  }

  &__description {
    display: inline-block;
    width: 171px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: right;
    text-decoration: none;
    color: #ffffff;
    padding: 15px 0 15px 0;
  }

  &__button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #151615;
    border: none;
  }
}

</style>
