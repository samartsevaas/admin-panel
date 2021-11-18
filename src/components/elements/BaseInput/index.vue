<template>
  <label
    ><slot></slot>
    <input
      :type="type"
      class="base-input"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.base-input {
  border-radius: 3px;
  border: 0.5px solid $border-auth;
  color: $placeholder-auth;
  padding: 11.5px 8px;
  font-size: 11px;
  width: 100%;
  &:hover {
    border: 0.5px solid $border-auth_hover;
  }
}
</style>
