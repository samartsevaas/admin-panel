<template>
  <component
    :is="isDefineTag.tag"
    v-bind="isDefineTag.attributes"
    class="base-button"
    :class="[getTheme]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    theme: {
      type: String,
      validator: (theme) =>
        ["confirm", "delete", "cancel", "neutral"].includes(theme),
      default: "confirm",
    },
  },
  computed: {
    isDefineTag() {
      if (this.href) {
        return {
          tag: "router-link",
          attributes: {
            to: this.href,
          },
        };
      }
      return {
        tag: "button",
        attributes: {
          type: "button",
        },
      };
    },
    getTheme() {
      return `base-button_${this.theme}`;
    },
  },
};
</script>

<style scoped lang="scss">
.base-button {
  height: 29px;
  width: 110px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  border: none;
  font-size: 11.5px;
  color: $main-white;
  cursor: pointer;
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
    background-color: transparent;
    color: $button-confirm;
    &:hover {
      color: $base-font_color;
    }
    &:active {
      color: $base-font_color;
    }
  }
}
</style>
