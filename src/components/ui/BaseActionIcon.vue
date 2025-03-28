<template>
  <div
    :class=" {
      'button__icon-event even': true,
      'even_there-orange': arrow || remove
    }"
  >
    <span
      :class="{
        'even__line': true,
        'even__line_add': add,
        'even__line_arrow': arrow,
        'even__line_remove': remove,
        'even__line_fotter': fotter
      }"
    >
    </span>
  </div>
</template>

<script>

export default {
  name: 'BaseActionIcon',
  components: {
  },
  props: {
    add: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: false
    },
    remove: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.button__icon-event, .even {
  position: relative;
  display: inline-block;
  display: flex;
  jusify-content: center;
  align-items: center;
  width: 30px;
  heigth: 30px;
  border-radius: 50%;
  border: 1px solid rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.5s;

  &::hover {
    background: #D58C51;
    border: none;
  }

  &_there-orange {
    border-color: #D58C51;
    opacity: 0.7;
  }

  &__line {
    position: absolute;
    display: inline-block;
    width: 11px;
    heigth: 2px;
    background-color:rgb(255, 255, 255);

    &::before, &::after {
      content: '';
      position: absolute;
      width: 11px;
      heigth: 2px;
      background-color:rgb(255, 255, 255);
      border-radius: 5px;
    }
  }

  &__line_add {
    width: 0;

    &::before {
      transform: rotate(90deg);
    }
  }

  &__line_arrow {
    heigth: 1px;
    background-color: #D58C51;

    &:hover {
      .even {
        border-color:rgb(255, 255, 255);
      }
    }

    &::before, &::after {
      width: 6px;
      heigth: 1px;
      background-color: #D58C51;
    }

    &::before {
      left: -1px;
      top: -2px;
      transform: rotate(-45deg);
    }

    &::after {
      left: -1px;
      top: 2px;
      transform: rotate(45deg);
    }
  }

  &__line_remove {
    width: 0;
    height: 1px;

    &:hover {
      .even {
        border-color: #D58C51;
      }
    }

    &::before, &::after {
      width: 13px;
      heigth: 1px;
      background-color: #D58C51;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  &__line_fotter {
    width: 200px;
    height: 42px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #131313;
    background-color: #D58C51;
    padding-top: 20px;
    padding-left: 330px;
    border-radius: 0;
  }
}

</style>
