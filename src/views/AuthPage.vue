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

      <label for="" class="input__label">
        <input type="checkbox">
        Я согласен получать обновления на почту
      </label>

      <label class="input__customCheckbox">
        <input type="checkbox" class="input__customCheckbox_input">
        <span class="input__customCheckbox_checkmark" ></span>
        <span class="input__customCheckbox_label" >Я согласен получать обновления на почту</span>
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
        namesForm.titleForm = 'ВХОД'
        namesForm.buttonName = 'Войти'
      } else {
        namesForm.toggleName = 'Авторизоваться'
        namesForm.titleForm = 'РЕГИСТРАЦИЯ'
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
    justify-content: space-between;
    gap: 15px;
    width: 460px;
    height: 340px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 9px 20px 47px 20px;

    &__toggle {
      font-family: Montserrat;
      font-weight: 300;
      font-size: 11px;
      line-height: 100%;
      text-align: right;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: 0%;
      text-decoration-thickness: 0%;
      color: #D58C51;
      cursor: pointer;
      margin-buttom: 13px;
    }

    &__title {
      font-family: Montserrat;
      font-weight: 900;
      font-size: 31px;
      line-height: 100%;
      text-transform: uppercase;
      color: #151615;
      margin-buttom: 36px;
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
        width: 100%;
        height: 39px;
        border-radius: 61px;
        padding-left: 18px;
        margin-buttom: 15px;
        top: 110px;
      }

      &__password {
        position: absolute;
        border: 1px solid #D58C51;
        width: 100%;
        height: 39px;
        border-radius: 61px;
        padding-left: 18px;
        margin-buttom: 15px;
        top: 175px;
      }

      &__loginError {
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
        font-size: 8px;
        line-height: 100%;
        margin-buttom: 1px;
      }

      &__passwordError {
        color: #FF0B0B;
        font-family: Montserrat;
        font-weight: 300;
        font-size: 8px;
        line-height: 100%;
        text-align: left;
        margin-buttom: 1px;
      }

      &__label {
        font-family: Montserrat;
        font-weight: 300;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #161516;
        margin-buttom: 5px;
      }

      &__customCheckbox {
        position: relative;
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        color: #787878;      /* цвет звездочки черный */
        margin-left: -9px;
        top: 1px;

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
          border: 1px solid #D58C51;/* цвет рамки чекбокса */
          margin-right: 10px;
        }

        &_label {
          position: relative;
          color: #301411; /* цвет текста */
          margin-left: 9px;
          font-family: Montserrat;
          font-weight: 300;
          font-size: 11px;
          line-height: 100%;
          margin-buttom: 30px;
        }
      }
    }
  }
}

</style>
