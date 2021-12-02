<template>
  <label class="label">
    <slot></slot>
    <font-awesome-icon :icon="['fas', 'search']"/>
    <input class="base-search" :type="type" :placeholder="placeholder" />
  </label>
</template>

<script>
export default {
  name: "BaseSearch",
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.label {
  & path {
    color: $icon;
  }
  & svg {
    margin-right: 5px;
  }
}
.base-search {
  border: none;
  &:focus {
    outline: none !important;
    border: none;
  }
}
</style>