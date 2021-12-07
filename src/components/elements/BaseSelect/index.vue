<template>
  <select class="select">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "BaseSelect",
};
</script>

<style lang="scss">
.select {
  padding: 8px 28px 8px 14px;
  border-radius: 4px;
  font-size: 11px;
  color: $select;
  line-height: 13px;
  min-width: 110px;
}
</style>
