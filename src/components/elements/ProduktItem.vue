<template>
  <div
    :class="{
      'card': true,
      'card_basket': basket
    }"
  >
    <img class="card__image" :src="urlimage" alt="">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__description">{{ description }}</p>
    <div class="card__footer">
      <span class="card__footer-footer">
        {{ price }}
      </span>
      <BaseActionIcon
        add
      />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import BaseActionIcon from '@/components/icons/BaseActionIcon'

export default {
  name: 'ProduktItem',
  components: {
    BaseActionIcon
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
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 43px 21px 36px 21px;
  border: 1px solid #D58C51;

  &__image {
    margin-bottom: 31px;
  }

  &__title {
    margin-bottom: 9px;
    font-size: 17px;
    font-weight: 500;
    text-align: left;
    color: #ffffff;
  }

  &__description {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
  }

  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    font-size: 17px;
    color: #ffffff;
  }
}

</style>
