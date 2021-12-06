<template>
  <button
    :type="type"
    class="base-button"
    :class="[getTheme]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    theme: {
      type: String,
      validator: (theme) =>
        ["confirm", "delete", "cancel", "neutral", "outline"].includes(theme),
      default: "confirm",
    },
    type: {
      type: String,
      default: "button",
    },
    icon: {
      type: [Array, String],
      default: "",
    },
  },

  computed: {
    getTheme() {
      return `base-button_${this.theme}`;
    },
  },
};
</script>

<style lang="scss">
.base-button {
  height: 29px;
  width: 110px;
  border: none;
  font-size: 11.5px;
  color: $main-white;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  &_confirm {
    background-color: $button-confirm;
    &:hover {
      background: linear-gradient(90deg, #409aff 2.61%, #64afff 112.6%);
    }
    &:active {
      background: linear-gradient(90deg, #409aff 2.61%, #64afff 112.6%);
    }
  }
  &_delete {
    background-color: $button-delete;
    &:hover {
      background: linear-gradient(90deg, #c74d62 2.61%, #c9657a 112.6%);
    }
    &:active {
      background: linear-gradient(90deg, #c74d62 2.61%, #c9657a 112.6%);
    }
  }
  &_cancel {
    background-color: $button-cancel;
    &:hover {
      background: linear-gradient(90deg, #d2cccc 2.61%, #efefef 112.6%);
    }
    &:active {
      background: linear-gradient(90deg, #d2cccc 2.61%, #efefef 112.6%);
    }
  }
  &_neutral {
    color: $main-blue;
    background-color: transparent;
    &:hover {
      color: $base-font_color;
    }
    &:active {
      color: $base-font_color;
    }
  }
  &_grey {
    color: $base-font_color;
    background-color: $button-grey;
    &:hover {
      color: $button-grey;
      background-color: $base-font_color;
    }
    &:active {
      color: $button-grey;
      background-color: $base-font_color;
    }
  }
}
</style>
