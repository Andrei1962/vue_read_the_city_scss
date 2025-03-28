<template>
  <div
    :class="{
      'card': true,
      'card-basket': basket
    }"
  >
    <img class="card__image" :src="urlImage" alt="">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description" v-if="!basket">{{ description }}</p>
    <div class="card__footer">
      <span class="card__footer-footer">
        {{ price }}
      </span>
      <BaseActionBtn
        add
        :remove="basket"
      />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import BaseActionBtn from '@/components/ui/BaseActionBtn'

export default {
  name: 'ProduktItem',
  components: {
    BaseActionBtn
  },
  props: {
    basket: {
      type: Boolean,
      default: false
    },
    urlImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 43px 21px 36px 21px;
  border: 1px solid #D58C51;
  border-sizing: border-box;

  &:hover {
    .card__title, .card__description, .card__footer {
      color: #D58C51;
    }
  }

  &__image {
    margin-bottom: 31px;
  }

  &__title {
    margin-bottom: 9px;
    font-size: 17px;
    font-weight: 500;
    text-align: left;
    font-family: Montserrat;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
  }

  &__description {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    font-family: Montserrat;
    line-height: 100%;
    margin-bottom: auto;
  }

  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;

    :deep(.button__icon-event) {
      margin-left: auto;
    }

    &-footer {
      font-family: Montserrat;
      font-weight: 500;
      font-size: 17px;
      line-height: 100%;
      letter-spacing: 0%;
    }
  }
}
.card-basket {
  padding: 0;
  flex-direction: row;
  align-items: center;
  border: none;
  width: 100%;
  cursor: pointer;

  &:hover {
    .card__title {
      color:rgb(255, 255, 255);
    }
  }

  .card__image {
    width: 132px;
    height: 132px;
    margin-bottom: 0;
    margin-right: 88px;
  }

  .card__title {
    margin-bottom: 0;
    max-width: 310px;
  }

  .card__footer {
    margin-top: 0;
    margin-left: auto;
    gap: 15px;
    color: #D58C51;
    margin-right: 20px;
  }
}
</style>
