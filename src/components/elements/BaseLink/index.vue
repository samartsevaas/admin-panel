<template>
  <a class="base-link"><slot></slot></a>
</template>

<script>
export default {
  name: "BaseLink",
};
</script>

<style lang="scss">
.base-link {
  color: $base-font_color;
  cursor: pointer;
  &:hover {
    color: $hover;
  }
}
</style>
