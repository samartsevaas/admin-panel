<template>
<div class="error-page">
  <div class="error-page_number">500</div>
  <div class="error-page_message-error">Что-то пошло не так</div>
  <div class="error-page_message-action">Попробуйте перезагрузить страницу</div>
  <div class="error-page_number-button">
    <base-button
        FontColor="white"
        borderRadius="standard"
        theme="confirm"
        type="button"
    >Назад</base-button
    >
  </div>
</div>
</template>

<script>
import BaseButton from "@elements/BaseButton/index.vue";
export default {
  name: "ErrorPage",
  components:{
    BaseButton
  }
}
</script>

<style scoped lang="scss">
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  &_number{
    font-family: Roboto;
    font-size: 75px;
    font-weight: 500;
    line-height: 88px;
    color: $font-color-grey_lightMax;
    margin-bottom: 15px;
  }
  &_message-error{
    font-size: 50px;
    font-weight: 400;
    line-height: 57px;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }
  &_message-action{
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 15px;
  }
}
</style>