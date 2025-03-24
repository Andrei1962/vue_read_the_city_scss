<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title" href="">наша продукция</h1>
      <div class="header__block">
        <p class="header__description" href="">3 товара<br>на сумму 3 500 ₽</p>
        <button class="header__button"><BasketMcon/></button>
      </div>
    </div>
  </header>
</template>

<script>
import BasketMcon from '@/components/icons/BasketMcon.vue'

export default {
  name: 'HeaderMain',
  components: {
    BasketMcon
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
  margin: o auto;

  &__container {
    max-width: 1310px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 70px;
    padding-top: 24px;
    padding-bottom: 50px;
    margin: 0 auto;
  }

  &__title {
    display: inline-block;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 31px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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

    &:hover {
      background: #151615;
    }
  }
}

</style>
