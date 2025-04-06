<template>
  <div class="info">
    <HeaderCard/>
    <div class="info-wrapper">
      <img :src="currentProduct?.img" alt="" class="info-wrapper__img">
      <div class="info-wrapper__description">
        <h2 class="info-wrapper__description-title">{{ currentProduct?.title }}</h2>
        <p class="info-wrapper__description-text">{{ currentProduct?.description }}</p>

        <div class="info-wrapper__description-price">
          <p>{{ currentProduct?.price }} p</p>
          <baseButton name="В корзину" orange @clickbaseButton="add"/>
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
import baseButton from '@/components/ui/baseButton'

export default {
  name: 'ProductInfoPage',
  components: {
    HeaderCard,
    baseButton
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
      store.commit('setAddProductInBasket',
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
  background-color: #161516;
  color: #ffffff;  

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 199px;
    padding-left: 140px;

    &__img {
      width: 501px;
      height: 503px;
    }

    &__description {
      &-title {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 30px;
        line-height: 100%;
        color: #D58C51;
      }

      &text {
        margin-botton: 34px;
        font-weight: 400;
        font-size: 14px;
      }

      &-price
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &__image {
        position: absolute;
        width: 501px;
        height: 503px;
        top: 0;
      }

      &__specification {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        &-title {
          width: 414px;
          height: 74px;
          font-family: Montserrat;
          font-weight: 500;
          font-size: 30px;
          line-height: 100%;
          color: #D58C51;
        }

        &-description {
          width: 528px;
          height: 213px;
          font-family: Montserrat;
          font-weight: 400;
          font-size: 14px;
          line-height: 100%;
          color: #ffffff;
        }

        &__footer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          &-price {
            width: 83px;
            height: 28px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 23px;
            line-height: 100%;
            color: #ffffff;
          }

          &-btn {
            width: 200px;
            height: 42px;
            font-family: Montserrat;
            font-weight: 400;
            font-size: 14px;
            line-height: 100%;
            background-color: #D58C51;
            color: #131313;
          }
        }
      }
    }
  }
}

</style>
