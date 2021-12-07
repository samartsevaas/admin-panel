<template>
  <button
    :type="type"
    class="base-button-group"
    :class="[getIconColor]"
    @click="$emit('click')"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButtonGroup",
  props: {
    theme: {
      type: String,
      default: "",
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
    margin-right: 5px;
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
.base-button-group {
  height: 29px;
  width: 110px;
  border: none;
  font-size: 11.5px;
  color: $font-color-grey;
  cursor: pointer;
  text-align: center;
  background: $main-white;
}
</style>
