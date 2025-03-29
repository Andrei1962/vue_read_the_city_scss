<template>
  <div class="basket">
    <div class="basket__wrapper">
      <HeaderMain basketHeader/>
      <BasketContent/>
    </div>
    <FooterBasket/>
  </div>
</template>

<script>
// import { ref } from 'vue'
import HeaderMain from '@/components/blocks/HeaderMain'
import BasketContent from '@/components/blocks/BasketContent'
import FooterBasket from '@/components/blocks/FooterBasket'

export default {
  name: 'BasketPage',
  components: {
    HeaderMain,
    BasketContent,
    FooterBasket
  }
}
</script>

<style lang="scss" scoped>
.basket {
  max-width: 1540px;
  height: 100%;
  background-color: #161516;
  overflow-y: hidden;

  &__wrapper {
    max-width: 860px;
    margin: 0 auto;
    overflow-y: hidden;
  }

  &__line {
    width: 1540px;
    background-color:rgb(240, 198, 11);
    height: 1px;
    margin-left: -341px;
  }

  &__basket {
    display: flex;
    aling-items: center;
    justify-content: spase-between;
    width: 1540px;
    background-color:rgb(10, 10, 9);
    height: 89px;
    margin-left: -341px;
  }

  &__basket-text {
    display: inline-block;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 21px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: #ffffff;
    padding-left: 290px;
    padding-top: 28px;
  }

  &__basket-price {
    display: inline-block;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #D58C51;
    padding-top: 30px;
    padding-left: 16px;
  }

  &__basket-btn {
    width: 200px;
    height: 42px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #131313;
    background-color: #D58C51;
    margin-top: 20px;
    margin-left: 430px;
  }
}

</style>
