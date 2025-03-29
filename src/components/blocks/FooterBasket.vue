<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <p class="footer__order">
        Заказ на сумму:
        <span class="footer__order-sum">{{ sumInBasket }} ₽ </span>
      </p>
    </div>
    <BaseButton class="footer__order-btn" name="Оформить заказ" orange/>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import BaseButton from '@/components/ui/BaseButton'

export default {
  name: 'FooterBasket',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    const store = useStore()
    const sumInBasket = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })
    return {
      sumInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  aling-items: center;
  justify-content: center;
  border-top: 1px solid #D58C51;
  padding: 20px 0 27px 0;
  width: 100%;

  &__wrapper {
    display: flex;
    aling-items: center;
    justify-content: spase-between;
    max-width: 860px;
    margin: 0 auto;
  }

  &__order {
    display: inline-block;
    color: #ffffff;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 21px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;

    &-sum {
      display: inline-block;
      color: #D58C51;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0%;
    }

    &-btn {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
      margin-right: 250px;
    }
  }
}

</style>
