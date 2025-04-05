<template>
  <main class="main">
    <form action="" class="form">
                <!-- клик на верхную строку - зарегистрироваться -->
      <span class="form__toggle" @click="toggleForm">{{ namesForm.toggleName }}</span>
      <h2 class="form__title">{{ namesForm.titleForm }}</h2>

      <input
        type="text"
        class="input__login"
        placeholder="Логин"
        v-model.trim="login"
        @input="getLaunchValidForm"
      >
      <p class="input__loginError">{{ errorLogin }}</p>

      <input
        type="password"
        class="input__password"
        placeholder="Пароль"
        v-model.trim="password"
        @input="getLaunchValidForm"
      >
      <p class="input__passwordError">{{ errorPassword }}</p>

      <label class="form__label">
        <input type="checkbox" class="form__label_checkbox">
      </label>

      <label class="form__customCheckbox">
        <input type="checkbox" class="form__customCheckbox_input">
        <span class="form__customCheckbox_checkmark" ></span>
        <span class="form__customCheckbox_label" >Я согласен получать обновления на почту</span>
      </label>

      <p class="form__customCheckbox_errorValidAuthReg">{{ errorValidAuthReg }}</p>

      <div class="form__button">
        <router-link to="/">
          <baseButton
            name="Войти"
          />
        </router-link>
      </div>
    </form>
  </main>
</template>

<script>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton'

export default {
  name: 'AuthPage',
  components: {
    BaseButton
  },
  props: {
  },
  setup () {
    const router = useRouter()

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

    // обработка клика на верхную строку -Зарегистрироваться\Авторизоваться
    const toggleForm = () => {
      // изменение ключа Авторизация-Регистрация
      isToggleForm.value = !isToggleForm.value
      console.log(isToggleForm.value)

      login.value = ''
      password.value = ''
      errorLogin.value = ''
      errorPassword.value = ''
      errorValidAuthReg.value = ''

      if (isToggleForm.value) {
        namesForm.toggleName = 'Зарегистрироватся'
        namesForm.titleForm = 'ВХОД'
        namesForm.buttonName = 'Войти'
      } else {
        namesForm.toggleName = 'Авторизоваться'
        namesForm.titleForm = 'РЕГИСТРАЦИЯ'
        namesForm.buttonName = 'Зарегистрироватся'
      }
    }

    const setRegistrationUser = () => {
      getValidInputReg()
      if (errorLogin.value !== '' && errorPassword.value !== '') {
        return
      }

      const userList = JSON.parse(localStorage.userList) /* получаем массив из зарегистрированных пользователей */

      const isActiveUser = userList.some(item => { /* проверка на совпадение */
        return item.login === login.value
      })

      if (isActiveUser) {
        errorValidAuthReg.value = 'Такой логин уже существует, придумайте другой'
      } else {
        userList.push({
          login: login.value,
          password: password.value,
          basket: []
        })
        toggleForm()
      }

      localStorage.userList = JSON.stringify(userList)
    }

    const goAuthorization = () => {
      getValidInputAuth()
      const userAuth = JSON.parse(localStorage.userList)

      const currentSeachUser = userAuth.find(item => item.login === login.value)

      if (currentSeachUser?.password === password.value) {
        localStorage.isAuth = JSON.stringify(true)
        localStorage.currentUser = JSON.stringify({
          currentUser: currentSeachUser.login,
          basket: currentSeachUser.basket
        })
        router.push('/')
      } else if (password.value.length !== 0 && login.value.length !== 0) {
        errorValidAuthReg.value = 'Логин или пароль не верный'
      }
    }

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
        errorLogin.value = 'Логин должен содержать не менее 4-х символов'
      } else if (login.value.length >= 4) {
        errorLogin.value = ''
      }

      if (password.value.length > 0 && password.value.length < 4) {
        errorPassword.value = 'Пароль должен содержать не менее 4-х символов'
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
      getLaunchValidForm,
      goAuthorization,
      setRegistrationUser
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: url('../assets/images/authBackground.png') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 460px;
    height: 340px;
    background-color: #ffffff;
    border-radius: 5px;

    &__toggle {
      position: absolute;
      align-self: flex-end;
      font-family: Montserrat;
      font-weight: 300;
      font-size: 11px;
      line-height: 100%;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: 0%;
      text-decoration-thickness: 0%;
      color: #D58C51;
      cursor: pointer;
      top: 9px;
      right: 19px;
    }

    &__title {
      position: absolute;
      font-family: Montserrat;
      font-weight: 900;
      font-size: 31px;
      line-height: 100%;
      text-transform: uppercase;
      color: #151615;
      top: 36px;
    }

    .input {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #161516;

      &__login {
        position: absolute;
        border: 1px solid #D58C51;
        width: 85%;
        height: 39px;
        border-radius: 61px;
        padding-left: 18px;
        top: 110px;
      }

      &__password {
        position: absolute;
        border: 1px solid #D58C51;
        width: 85%;
        height: 39px;
        border-radius: 61px;
        padding-left: 18px;
        margin-buttom: 15px;
        top: 164px;
      }

      &__loginError {
        position: absolute;
        align-self: flex-start;
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
        font-size: 8px;
        line-height: 100%;
        margin-top: 154px;
        margin-left: 38px;
      }

      &__passwordError {
        align-self: flex-start;
        position: absolute;
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
        font-size: 8px;
        line-height: 100%;
        margin-top: 208px;
        margin-left: 38px;
      }
    }

    &__label {
      position: absolute;
      align-self: flex-start;
      font-family: Montserrat;
      font-weight: 300;
      font-size: 11px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #161516;
      top: 221px;
      margin-left: 20px;
      z-index: 1;

      &_checkbox {
        border-color: #D58C51;
      }
    }

    &__customCheckbox {
      position: absolute;
      display: flex;
      align-self: flex-start;
      cursor: pointer;
      color: #787878;      /* цвет звездочки черный */
      margin-left: 20px;
      top: 220px;

      &_input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        color: #000000;
        top: 246px;
      }

      &_checkmark {
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        left: 6px;
        border: 1px solid #D58C51;/* цвет рамки чекбокса */
        margin-right: 10px;
      }

      &_label {
        color: #301411; /* цвет текста */
        margin-left: 9px;
        font-family: Montserrat;
        font-weight: 300;
        font-size: 11px;
        line-height: 100%;
        margin-top: 5px;
      }

      &_errorValidAuthReg {
        position: absolute;
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
        font-size: 8px;
        line-height: 100%;
        margin-top: 242px;
      }
    }

    &__button {
      position: absolute;
      top: 264px;
      background-color: #D58C51;
    }
  }
}

</style>
