<template>
  <div class="download">
    <label class="download-label">
      <input class="download-input" type="file" />
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseDownloadInput",
};
</script>

<style lang="scss">
.download {
  position: relative;
  &-label {
    border: 0.5px solid $neutral-border;
    border-radius: 4px;
    background: $main-white;
    max-width: 235px;
    padding: 8px 13px 9.5px 13px;
    &::after {
      content: "Обзор";
      position: absolute;
      font-family: Roboto;
      font-weight: 400;
      color: $download-font-color;
      font-size: 10px;
      line-height: 12px;
      bottom: -7px;
      right: 2px;
      background-color: $download-background-color;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 12px 20px;
      border-left: 0.5px solid $neutral-border;
      @media screen and (min-width: 1024px) {
        padding: 12px 12px;
        right: 1px;
      }
    }
    &::before {
      content: "Выберите файл...";
      position: absolute;
      left: 13px;
      font-family: Roboto;
      font-weight: 400;
      color: $download-font-color;
      font-size: 10px;
      line-height: 12px;
      bottom: 5px;
    }
  }
  &-input {
    visibility: hidden;
    max-width: 231px;
    @media screen and (min-width: 1024px) {
      max-width: 130px;
    }
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
  }
}
</style>
