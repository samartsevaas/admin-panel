<template>
  <component
      class="base-link"
      v-bind="isDefineTag.attributes"
      :is="isDefineTag.tag"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    href: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
  },
  computed: {
    isDefineTag(){
      console.log(this.href);
      if (this.href) {
        return {
          tag: "a",
          attributes: {
            href: this.href,
          },
        };
      }
      return {
          tag: "router-link",
          attributes: {
            to: this.to,
          },
        };
    },
  },
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
