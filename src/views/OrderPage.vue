<template>
  <main class="main">
    <form action="" class="main__form">
      <h2 class="title">
        Вы оформили заказ!
      </h2>
      <div class="button">
        <router-link to="/">
          <baseButton
            name="На главную"
          />
        </router-link>
      </div>
    </form>
  </main>
</template>

<script>
import { useStore } from 'vuex'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'OrderPage',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    const store = useStore()
    const clearBasket = () => {
      store.commit('setClearBasket')
    }

    return {
      clearBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: linear-gradient(to right, rgba(0,0,0,0.4) 600px, rgba(0,0,0,0)),  url('../assets/images/authBackground.png') no-repeat;
  background-size: cover;
  max-width: 1540px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    background:rgb(99, 237, 221);
    width: 450px;
    height: 300px;
    padding: 25px;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    border-radius: 20px;
  }
}

.title {
  text-align: center;
}

.button {
  text-align: center;
  border-radius: 5px;
  background-color:rgb(240, 225, 11);
  width: 200px;
  align-items: center;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
}

</style>
