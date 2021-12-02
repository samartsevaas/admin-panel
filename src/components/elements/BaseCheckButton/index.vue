<template>
  <label class="base-checkbox checkbox-styled" :class="[getColorCheckbox]">
    <input
        @change="$emit('input', !value)"
        :checked="value"
        type="checkbox"
        class="base-checkbox__input"
    /><span></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "BaseCheckButton",
  props: ["value", "color"],
  computed: {
    getColorCheckbox() {
      return `base-checkbox__button-${this.color}`;
    },
  },
};
</script>

<style lang="scss">
.base-checkbox {
  font-weight: 300;
  font-size: 10px;
  line-height: 16px;
  color: $main-gray;
  padding-left: 1.7em;
  margin-right: 18px;
  &:hover {
    color: $main-black;
    cursor: pointer;
  }
}

.base-checkbox__button-blue{
  & .base-checkbox__input {
    appearance: none;
    position: absolute;
    background-repeat: no-repeat;
    &:hover + span {
      background-image: url(~@/assets/images/checkbox-onfocus_blue.svg);
      background-repeat: no-repeat;
    }
    &:checked + span {
      background-image: url(~@/assets/images/checkbox-checked-vector_blue.svg),
      url(~@/assets/images/checkbox-onfocus_blue.svg);
      background-position: center;
      background-repeat: no-repeat, no-repeat;
    }
  }
  & span {
    position: absolute;
    margin-left: -1.7em;
    width: 1em;
    height: 1em;
    background-image: url(~@/assets/images/checkbox-nonfocus_blue.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
}

.base-checkbox__button-green{
  & .base-checkbox__input {
    appearance: none;
    position: absolute;
    background-repeat: no-repeat;
    &:hover + span {
      background-image: url(~@/assets/images/checkbox-onfocus.svg);
      background-repeat: no-repeat;
    }
    &:checked + span {
      background-image: url(~@/assets/images/checkbox-checked-vector.svg),
      url(~@/assets/images/checkbox-onfocus.svg);
      background-repeat: no-repeat, no-repeat;
    }
  }
  & span {
    position: absolute;
    margin-left: -1.7em;
    margin-top: 0.15em; // картинка такая, пришлось добавить
    width: 1em;
    height: 1em;
    background-image: url(~@/assets/images/checkbox-nonfocus.svg);
    background-repeat: no-repeat;
    @media screen and (min-width: 1024px) {
      margin-left: -1.0em;
    }
  }
}

.base-checkbox:hover {
  color: $main-black;
}
.checkbox-styled {
  display: block;
  margin-bottom: 8px;
}
</style>
