<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="comp">
        <HeaderCard/>
      </div>
      <div class="choice">
        <div class="choice__image">
          {{ urlImage }}
        </div>
        <div class="choice__specification">
          <div class="choice__specification-title">
            {{ currentProduct?.title }}
          </div>
          <div class="choice__specification-description">
            {{ currentProduct?.description }}
          </div>
          <div class="choice__footer">
            <div class="choice__footer-price">
              {{ currentProduct?.price }}
            </div>
            <div class="button">
              <router-link to="/basket">
                <baseButton
                class="choice__footer-btn"
                name="В корзину"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <ProduktItem
        :title="currentProduct?.title"
        :price="currentProduct?.price"
        :urlImage="currentProduct?.img"
        :description="currentProduct?.description"
      />
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
import ProduktItem from '@/components/elements/ProduktItem'

export default {
  name: 'ProductInfoPage',
  components: {
    HeaderCard,
    ProduktItem
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
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  max-height: 734px;
  background-color: #161516;
  background-size: cover;
  overflow: auto;
  color: #ffffff;
  padding: 48px 70px 108px 70px;

  &__wrapper {
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .comp {
      width: 1440px;
    }

    .choice {
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
