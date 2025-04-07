<template>
  <div class="info">
    <HeaderCard/>
    <div class="info-wrapper">
      <img :src="currentProduct?.img" alt="" class="info-wrapper__img">
      <div class="info-wrapper__description">
        <h2 class="info-wrapper__description-title">{{ currentProduct?.title }}</h2>
        <p class="info-wrapper__description-text">
          Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.
        </p>

        <div class="info-wrapper__description-price">
          <p>{{ currentProduct?.price }} ₽</p>
          <baseButton name="В корзину" orange @clickBaseButton="add"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { uuid } from 'vue-uuid'

import HeaderCard from '@/components/blocks/HeaderCard'
import BaseButton from '@/components/ui/BaseButton'

export default {
  name: 'ProductInfoPage',
  components: {
    HeaderCard,
    BaseButton
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    onMounted(() => {
      store.commit('setCurrentProduct', route.params.id)
    })

    const currentProduct = computed(() => {
      return store.getters.getCurrentProduct
    })

    const add = () => {
      store.commit('setAddProductsInBasket',
        {
          idx: uuid.v1(),
          id: currentProduct.value.id,
          img: currentProduct.value.img,
          title: currentProduct.value.title,
          price: currentProduct.value.price
        }
      )
    }

    return {
      currentProduct,
      add
    }
  }
}

</script>

<style lang="scss" scoped>
.info {
  height: 100vh;
  background: url('../assets/images/background.png') no-repeat;
  background-size: cover;
  background-color: #131313;

  &-wrapper {
    display: flex;
    align-items: center;
    gap: 199px;
    padding-left: 140px;
    color: #ffffff;

    &__img {
      width: 501px;
      height: 503px;
    }

    &__description {
      &-title {
        max-width: 414px;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
        color: #D58C51;
        margin-bottom: 21px;
      }

      &-text {
        margin-botton: 34px;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        margin-right: 70px;
        font-family: Montserrat;
      }

      &-price {
        display: flex;
        align-items: center;
        gap: 137px;
        font-family: Montserrat;
        font-size: 23px;
        font-weight: 500;
        line-height: 100%;
        margin-top: 30px;
      }
    }
  }
}

</style>
