<template>
  <header
    :class="{
      'header container': true,
      'header__basket': basketHeader
    }"
    >
    <router-link to="/" v-if="basketHeader">
      <BaseActionBtn
      arrow
    />
    </router-link>
    
    <h1 class="header__title">
      {{ basketHeader ? 'Корзина с выбраными товарами' : 'НАША ПРОДУКЦИЯ}}
    </h1>
    <div class="header__basket" v-if="basketHeader">
      <div class="header__basket-count">
        <span>3 товара<br></span>
        <span>на сумму 3 500 ₽</span>
      </div>
      <router-link to="/basket">
        <BasketMcon/>
      </router-link>
    </div>
  </header>
</template>

<script>
import BasketMcon from '@/components/icons/BasketMcon.vue'
import BaseActionBtn from '@/components/ui/BaseActionBtn'

export default {
  name: 'HeaderMain',
  components: {
    BasketMcon,
    BaseActionBtn
  },
  props: {
    basketHeader: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1310px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 50px;

  

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

  &__basket {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-count {
      display: flex;
      flex-direction: column;
      display: inline-block;
      width: 151px;
      font-family: Montserrat;
      font-weight: 500;
      font-size: 17px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: right;
      text-decoration: none;
      color: #ffffff;
      padding: 15px 5px 15px;
    }
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
