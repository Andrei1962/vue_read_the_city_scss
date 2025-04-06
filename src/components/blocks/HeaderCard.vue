<template>
  <header class="header container">
    <BaseActionBtn
      @clickActionBtn="goBack"
      arrow
    />
    <div class="header__basket">
      <div class="header__basket-count">
        <span>{{ countBasket }} товара<br></span>
        <span>на сумму {{ sumInBasket }} ₽</span>
      </div>
      <router-link to="/basket">
        <BasketMcon/>
      </router-link>
      <div class="header__auth">
        <baseButton
          class="header__auth"
          name="Выйти"
          @click="exit"
        />
      </div>
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
  name: 'HeaderCard',
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

    const exit = () => {
      localStorage.isAuth = JSON.stringify(false)
      router.push('/auth')
    }

    return {
      countBasket,
      sumInBasket,
      goBack,
      exit
    }
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
  max-width: 1310px;
  padding-top: 53px;
  padding-bottom: 38px;
  gap: 20px;

  &__basket {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    &-count {
      display: flex;
      flex-direction: row;
      display: inline-block;
      width: 351px;
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
