<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "BaseLoader",
};
</script>

<style lang="scss">
.loader {
  border: 16px solid $main-blue;
  border-top: 16px solid $font-color-grey_lightMax;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
