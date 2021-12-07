<template>
  <label class="base-search">
    <font-awesome-icon :icon="['fas', 'search']" />
    <input class="base-search__input" :placeholder="placeholder" />
  </label>
</template>

<script>
export default {
  name: "BaseSearch",
  props: {
    placeholder: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.base-search {
  & path {
    color: $icon;
  }
  & svg {
    margin-right: 5px;
  }
  &__input {
    border: none;
    &:focus {
      outline: none !important;
      border: none;
    }
  }
}
</style>
