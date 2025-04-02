<template>
  <main class="main">
    <form action="" class="form">
                <!-- клик на верхную строку - зарегистрироваться -->
      <span class=" form__toggle" @click="toggleForm">{{ namesForm.toggleName }}</span>
      <h2 class="form__title">{{ namesForm.titleForm }}</h2>

      <input
        type="text"
        class="input__email"
        placeholder="Логин"
        v-model.trim="login"
        @input="getLaunchValidForm"
      >
      <p style="color: red;">{{ errorLogin }}</p>

      <input
        type="password"
        class="input__password"
        placeholder="Пароль"
        v-model.trim="password"
        @input="getLaunchValidForm"
      >
      <p style="color: red;">{{ errorPassword }}</p>

      <label for="" class="input__label">
        <input type="checkbox">
        Я согласен получать обновления на почту
      </label>

      <label class="input__customCheckbox">
        <input type="checkbox" class="input__customCheckbox_input">
        <span class="input__customCheckbox_checkmark" ></span>
        <span class="input__customCheckbox_label" >Я согласен с Правилами пользования приложением</span>
      </label>

      {{ errorValidAuthReg }}

      <BaseButton :name= "namesForm.buttonName" orange/>
    </form>
  </main>
</template>

<script>
import { ref, reactive, onBeforeMount } from 'vue'
// import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton'

export default {
  name: 'AuthPage',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    // const router = useRouter()

    const login = ref('')
    const password = ref('')
    const errorLogin = ref('')
    const errorPassword = ref('')
    const errorValidAuthReg = ref('')

    const isToggleForm = ref(true)

    const namesForm = reactive({
      toggleName: 'Зарегистророватся',
      titleForm: 'Вход',
      buttonName: 'Войти'
    })

    onBeforeMount(() => {
      if (localStorage.userList === undefined) {
        localStorage.setItem('userList', JSON.stringify([]))
      }
    })

    const getLaunchValidForm = () => {
      isToggleForm.value ? getValidInputAuth() : getValidInputReg()
    }

    const getValidInputReg = () => {
      if (login.value.length === 0) {
        errorLogin.value = 'Поле не должно быть пустым'
      }

      if (password.value.length === 0) {
        errorPassword.value = 'Поле не должно быть пустым'
      }

      if (login.value.length > 0 && login.value.length < 4) {
        errorLogin.value = 'Логин должен содержать не менее 4=х символов'
      } else if (login.value.length >= 4) {
        errorLogin.value = ''
      }

      if (password.value.length > 0 && password.value.length < 4) {
        errorPassword.value = 'Пароль должен содержать не менее 4=х символов'
      } else if (password.value.length >= 4) {
        errorPassword.value = ''
      }
    }

    const getValidInputAuth = () => {
      if (login.value.length === 0) {
        errorLogin.value = 'Поле не должно быть пустым'
      } else {
        errorLogin.value = ''
      }

      if (password.value.length === 0) {
        errorPassword.value = 'Поле не должно быть пустым'
      } else {
        errorPassword.value = ''
      }
    }

    // обработка клика на верхную строку -Зарегистрироваться\Авторизоваться
    const toggleForm = () => {
      // изменение ключа Авторизация-Регистрация
      isToggleForm.value = !isToggleForm.value

      login.value = ''
      password.value = ''
      errorLogin.value = ''
      errorPassword.value = ''

      if (isToggleForm.value) {
        namesForm.toggleName = 'Зарегистрироватся'
        namesForm.titleForm = 'Вход'
        namesForm.buttonName = 'Войти'
      } else {
        namesForm.toggleName = 'Авторизоваться'
        namesForm.titleForm = 'Регистрация'
        namesForm.buttonName = 'Зарегистрироватся'
      }
    }

    return {
      login,
      password,
      errorLogin,
      errorPassword,
      errorValidAuthReg,
      isToggleForm,
      namesForm,
      toggleForm,
      getValidInputReg,
      getValidInputAuth,
      getLaunchValidForm
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('../assets/images/authBackground.png') no-repeat;
  background-size: cover;

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 460px;
    height: 340px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 7px 20px 34px 20px;

    &__toggle {
      position: relative;
      font-family: Montserrat;
      font-weight: 300;
      font-size: 11px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: right;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: 0%;
      text-decoration-thickness: 0%;
      color: #D58C51;
      right: -160px;
      margin-top: 50px;
    }

    &__title {
      position: relative;
      font-family: Montserrat;
      font-weight: 300;
      font-size: 11px;
      line-height: 100%;
      letter-spacing: 0%;
      text-align: right;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: 0%;
      text-decoration-thickness: 0%;
      color: #151615;
    }

    .input {
      position: reactive;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 39px;
      border-radius: 61px;
      border: 1px solid #D58C51;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #161516;
      padding-left: 20px;

      &__email {
        position: reactive;
        margin: auto 0;
        margin-left: 20px;
      }

      &__password {
        position: relative;
        outline: none;
        margin: auto 0;
        margin-left: 20px;
      }

      &__label {
        font-family: Montserrat;
        font-weight: 300;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #161516;
      }

      &__customCheckbox {
        position: relative;
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        color: #787878;      /* цвет звездочки черный */
        margin-left: -9px;
        top: 280px;

        &_input {
          position: relative;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        &_checkmark {
          position: relative;
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          left: 6px;
          border: 2px solid #787878;/* цвет рамки галочки */
          margin-right: 10px;
        }

        &_label {
          position: relative;
          color: #787878; /* цвет текста */
          margin-left: 10px;
          font-family: Roboto;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
}

</style>
