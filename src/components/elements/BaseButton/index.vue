<template>
  <button
    :type="type"
    class="base-button"
    :class="[getTheme, getBorderRadius, getColor, getBorder, getIconColor]"
    @click="$emit('click')"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
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
    borderRadius: {
      type: String,
      default: "none",
    },
    FontColor: {
      type: String,
    },
    border: {
      type: String,
    },
    icon: {
      type: [Array, String],
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
  },

  computed: {
    getTheme() {
      return `base-button_${this.theme}`;
    },
    getBorderRadius() {
      return `base-button_border-radius-${this.borderRadius}`;
    },
    getColor() {
      return `base-button_font-color-${this.FontColor}`;
    },
    getBorder() {
      return `base-button_border-${this.border}`;
    },
    getIconColor() {
      return `icon_${this.iconColor}`;
    },
  },
};
</script>

<style lang="scss">
.icon_red {
  & svg {
    margin-right: 5px;
  }
  & path {
    color: $button-cancel;
  }
}
.icon_grey {
  & svg {
    //margin-right: 5px;
  }
  & path {
    color: $neutral-border;
  }
}
.icon_green {
  & svg {
    margin-right: 5px;
  }
  & path {
    color: $button-apply;
  }
}
.icon_neutral {
  & svg {
    margin-right: 5px;
  }
  & path {
    color: $button-change;
  }
}
.icon_search {
  & svg {
    margin-right: 5px;
  }
  & path {
    color: $search-color;
  }
}
.base-button {
  height: 29px;
  width: 110px;
  border: none;
  font-size: 11.5px;
  color: $main-white;
  cursor: pointer;
  text-align: center;
  &_font-color {
    &-white {
      color: $main-white;
    }
    &-grey {
      color: $font-color-grey;
    }
    &-confirm-blue {
      color: $button-confirm;
    }
    &-main-blue {
      color: $base-font_color;
    }
  }
  &_border-radius {
    &-none {
      border-radius: 0;
    }
    &-standard {
      border-radius: 4px;
    }
    &-standard-left {
      border-top-left-radius: 4px 4px;
      border-bottom-left-radius: 4px 4px;
    }
    &-standard-right {
      border-top-right-radius: 4px 4px;
      border-bottom-right-radius: 4px 4px;
    }
  }
  &_border {
    &-none {
      border: 0;
    }
    &-standard {
      border: 0.5px solid $neutral-border;
    }
    &-right-none {
      border-right: 0;
      border-left: 0.5px solid $neutral-border;
      border-top: 0.5px solid $neutral-border;
      border-bottom: 0.5px solid $neutral-border;
    }
    &-left-none {
      border-left: 0;
      border-right: 0.5px solid $neutral-border;
      border-top: 0.5px solid $neutral-border;
      border-bottom: 0.5px solid $neutral-border;
    }
  }
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
