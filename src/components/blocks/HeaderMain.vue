<template>
  <header
    :class="{
      'header container': true,
      'header_basket': basketHeader,
      'header_card' : cardHeader
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
        <span>{{ countBasket }} товара<br></span>
        <span>на сумму {{ sumInBasket }} ₽</span>
      </div>
      <router-link to="/basket">
        <BasketMcon/>
      </router-link>
      <div class="header__auth">
        <router-link to="/auth">
          <baseButton
            class="header__auth"
            name="Выйти"
          />
        </router-link>
      </div>
    </div>
    <div class="header__authh" v-if="basketHeader">
      <router-link to="/auth">
        <baseButton
          class="header__authh"
          name="Выйти"
        />
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
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'HeaderMain',
  components: {
    BasketMcon,
    BaseActionBtn,
    BaseButton
  },
  props: {
    basketHeader: {
      type: Boolean,
      default: false
    },
    price: {
      type: Number,
      default: 0
    }
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const countBasket = computed(() => {
      return store.getters.getCountProductsInBasket
    })
    const sumInBasket = computed(() => {
      return store.getters.getAllPriceProductsInBasket
    })

    const goBack = () => {
      router.push('/')
    }

    return {
      countBasket,
      sumInBasket,
      goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1710px;
  margin: 0 auto;
}

.header, .header__basket, .header_card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  max-width: 1310px;
  padding-top: 53px;
  padding-bottom: 38px;
  gap: 20px;

  &_basket {
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 38px;
    gap: 90px;
  }

  &_card {
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 38px;
    gap: 90px;
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
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    max-width: 671px;
  }

  &__button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #151615;
    border: none;
    padding-left: 5px;

    &:hover {
      background: #151615;
    }
  }

  &__auth {
    height: 42px;
    width: 200px;
    color: #D58C51;
    background-color: #151615;
    border: 1px solid #D58C51;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;

  }

  &__authh {
    height: 42px;
    width: 200px;
    color: #D58C51;
    background-color: #151615;
    border: 1px solid #D58C51;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
}

</style>
