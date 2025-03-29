<template>
  <header
    :class="{
      'header container': true,
      'header_basket': basketHeader
    }"
    >
    <BaseActionBtn
      v-if="basketHeader"
      @clickActionBtn="goBack"
      arrow
    />
    <h1 class="header__title">
      {{ basketHeader ? 'Корзина с выбранными товарами' : 'наша продукция'}}
    </h1>
    <div class="header__basket" v-if="!basketHeader">
      <div class="header__basket-count">
        <span>{{ constBasket }} товара<br></span>
        <span>на сумму {{ sumInBasket }} ₽</span>
      </div>
      <router-link to="/basket">
        <BasketMcon/>
      </router-link>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
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
    const store = useStore()
    const router = useRouter()
    const constBasket = computed(() => {
      return store.getters.getCountProductsInBasket
    })
    const sumInBasket = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })

    const goBack = () => {
      router.go(-1)
    }
    return {
      constBasket,
      sumInBasket,
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1310px;
  margin: 0 auto;
}

.header, .header__basket {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  padding-top: 54px;
  padding-bottom: 81px;

  &_basket {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 63px;
    margin-bottom: 38px;
  }

  &__basket {
    gap: 20px;

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
      padding: 15px 0 15px;
    }
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

  &__button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #151615;
    border: none;
    padding-left: 20px;

    &:hover {
      background: #151615;
    }
  }
}

</style>
