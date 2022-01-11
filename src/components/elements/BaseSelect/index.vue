<template>
  <select
    class="select"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
.select {
  padding: 8px 28px 8px 14px;
  border-radius: 4px;
  font-size: 11px;
  color: $select;
  line-height: 13px;
  min-width: 130px;
}
</style>
