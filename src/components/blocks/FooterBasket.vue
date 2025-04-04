<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <p class="footer__order">
        Заказ на сумму:
        <span class="footer__order-sum">{{ sumInBasket }} ₽ </span>
      </p>
    </div>
    <BaseButton  @clickBaseButton="arrangeBasket" class="footer__order-btn" name="Оформить заказ" orange/>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton'

export default {
  name: 'FooterBasket',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const sumInBasket = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })

    const arrangeBasket = () => {
      if (sumInBasket.value !== 0) {
        router.push('/order')
        store.commit('setClearBasket')
      } else {
        alert('Корзина пуста')
      }
    }

    return {
      sumInBasket,
      arrangeBasket
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
  max-height: 89px;

  &__wrapper {
    position: relative;
    display: flex;
    aling-items: center;
    justify-content: spase-between;
    max-width: 860px;
    margin: 0 auto;
  }

  &__order {
    position: relative;
    display: inline-block;
    color: #ffffff;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 21px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
    margin-left: 100px;
    margin-top: 8px;

    &-sum {
      position: relative;
      display: inline-block;
      color: #D58C51;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0%;
      margin-left: 10px;
    }

    &-btn {
      position: relative;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
      margin-right: 400px;
    }
  }
}

</style>
