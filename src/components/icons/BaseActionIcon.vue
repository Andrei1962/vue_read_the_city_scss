<template>
  <button
    :class=" {
      'button__icon-event even': true,
      'even_theme-orange': arrow || remove
    }"
    @click.stop="$emit('clickBaseActionIcon')"
  >
    <span
    :class="{
      'even__line': true,
      'even__line_add': add,
      'even__line_arrow': arrow,
      'even__line_remove': remove
    }"
    >
    </span>
  </button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgb(255, 255, 255);
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;

  &:hover {
    background-color: #D58C51;
    border: none;
  }

  &_theme-orange {
    border-color: #D58C51;

    &:hover {
      border: 2px solid #D58C51;
      background-color: #151615;
    }
  }

  &__line {
    position: absolute;
    display: inline-block;
    width: 11px;
    height: 2px;
    background-color:rgb(255, 255, 255);

    &::before, &::after {
      content: '';
      position: absolute;
      width: 11px;
      height: 2px;
      background-color:rgb(255, 255, 255);
      right: -6px;
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
    height: 1px;
    background-color: #D58C51;

    &::before, &::after {
      width: 6px;
      height: 1px;
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

    &::before, &::after {
      width: 13px;
      height: 1px;
      background-color: #D58C51;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }
}

</style>
