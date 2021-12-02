<template>
  <div class="main-content wrapper test">
    <div class="main-content__title">Карточка автомобиля</div>
    <div class="sections">
      <section class="main-content__wrapper width_30">
        <div class="main-content__card">
          <div class="main-content__card-img">
            <img src="@/assets/images/car.png" alt="car">
          </div>
          <div class="main-content__card-model">
            Hyndai, i30 N
          </div>
          <div class="main-content__card-category">
            Компакт-кар
          </div>
          <div class="main-content__card-load">
            <base-download-input type="file">
            </base-download-input>
          </div>
          <div class="main-content__card-progress">
            <div class="main-content__card-progress-title">
              <div class="condition">Заполнено</div>
              <div class="condition">74%</div>
            </div>
            <div class="main-content__card-progress-bar">
              <span class="progress"></span>
            </div>
          </div>
          <div class="main-content__card-info">
            <div class="main-content__card-info-title">Описание</div>
            <div class="main-content__card-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?</div>
          </div>
        </div>
      </section>
      <section class="main-content__wrapper width_70">
        <div class="main-content__setting">
          <div class="main-content__setting-title">Настройки автомобиля</div>
          <div class="main-content__setting-input">
            <div class="main-content__setting-input_row">
              <div class="main-content__setting-model">
              <div class="main-content__setting-label">Модель автомобиля</div>
              <base-input type="text"></base-input>
            </div>
              <div class="main-content__setting-type">
                <div class="main-content__setting-label">Тип автомобиля</div>
                <base-input type="text"></base-input>
              </div>
            </div>
            <div>
              <div class="main-content__setting-color">
                <div>
                  <div class="main-content__setting-label">Доступные цвета</div>
                  <base-input type="text"></base-input>
                </div>
                <div class="main-content__setting-add">
                  <div class="main-content__setting-label"></div>
                  <base-button class="btn-setting" iconColor="grey" borderRadius="standard" border="standard" theme="neutral" FontColor="grey" :icon="['fas', 'plus']" type="button" ></base-button>
                </div>
              </div><div class="main-content__color-checkbox">
              <base-check-button color="blue">Красный</base-check-button>
              <base-check-button color="blue">Синий</base-check-button>
              <base-check-button color="blue">Черный</base-check-button>
            </div>
            </div>
          </div>
        </div>

        <div class="main-content__buttons">
          <div class="main-content__buttons_left">
            <base-button FontColor="white" borderRadius="standard" theme="confirm" type="button">Сохранить</base-button>
            <base-button FontColor="white" borderRadius="standard" theme="grey" type="button">Отменить</base-button>
          </div>
          <div class="main-content__buttons_right">
            <base-button
              FontColor="white"
              borderRadius="standard"
              theme="delete"
              type="button"
              >Удалить</base-button
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BaseDownloadInput from "@elements/BaseDownloadInput/index.vue";
import BaseInput from "@elements/BaseInput/index.vue";
import BaseButton from "@elements/BaseButton/index.vue";
import BaseCheckButton from "@elements/BaseCheckButton/index.vue";
export default {
  name: "CardOfCar",
  components: {
    BaseDownloadInput,
    BaseInput,
    BaseButton,
    BaseCheckButton,
  },
};
</script>

<style scoped lang="scss">
.btn-setting {
  width: 30px;
  height: 30px;
}
.sections{
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
  & .width_30{
    width: 30%;
    margin-right: 28px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  & .width_70{
    width: 70%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

.main-content{
  &__card{
    display: flex;
    flex-direction: column;
    max-width: 340px;
    padding: 45px 23px;
    &-model{
      @extend .horizon;
      margin-top: 10px;
    }
    &-img {
      @extend .horizon;
      & img {
        @media screen and (max-width: 1024px) {
          max-width: 200px;
        }
      }
    }
    &-setting{
      @media screen and (max-width: 768px) {
        margin-top: 30px;
      }
    }
    &-category{
      font-size: 13px;
      line-height: 14px;
      color: $card-category;
      @extend .horizon;
      margin-top: 4px;
    }
    &-load{
      @extend .horizon;
      margin-top: 11px;
    }
    &-progress{
      margin-top: 22px;
      padding: 14px 0;
      &-title{
        display: flex;
        justify-content: space-between;
        & .condition{
          font-size: 13px;
          line-height: 15px;
          color: $font-color-grey_light;
        }
      }
      &-bar{
        height: 5px;
        max-width: 290.5px;
        width: 100%;
        border-radius: 4px;
        background-color: rgba(233, 236, 239, 0.99);
        position: relative;
        & .progress{
          width: 74%;
          background-color: $main-blue;
          position: absolute;
          height: 5px;
          border-radius: 4px;
        }
      }
    }
    &-info{
      &-title{
        font-family: Roboto;
        font-size: 13px;
        font-weight: 500;
        line-height: 15px;
        color: $font-color-grey_light;
      }
      &-text{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: $font-color-grey;
      }
    }
  }
  &__setting {
    &-model,&-type{
      flex: 0.5;
    }
    &-model{
      margin-right: 28px;
    }
    &-input{
      &_row {
        display: flex;
        justify-content: space-between;
      }
    }
    &-color {
      display: flex;
    }
    &-add {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      margin-left:8px;
    }
    &-title{
      font-family: Roboto;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;

    }
    &-label{
      font-size: 11px;
      font-weight: 400;
      line-height: 12px;
      color: $main-black;
      margin: 31px 0 5px 0;
    }
  }
  &__color-checkbox{
    margin-top: 15px;
    padding-left: 10px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    &_left {
      & :first-child{
        margin-right: 13px;
      }
    }
  }
}
</style>