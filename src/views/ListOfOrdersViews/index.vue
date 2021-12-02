<template>
  <div class="main-content wrapper">
    <div class="main-content__title">Заказы</div>
    <section class="main-content__wrapper">
      <div class="main-content__header">
        <div class="main-content__header-select">
          <base-select>
            <slot>
              <option value="date">За неделю</option>
            </slot>
          </base-select>
          <base-select>
            <slot>
              <option value="model">Киа</option>
            </slot>
          </base-select>
          <base-select>
            <slot>
              <option value="city">Казань</option>
            </slot>
          </base-select>
          <base-select>
            <slot>
              <option value="status">В процессе</option>
            </slot>
          </base-select>
        </div>
        <div class="main-content__header-apply">
          <base-button
            FontColor="white"
            borderRadius="standard"
            theme="confirm"
            type="button"
            >Применить</base-button
          >
        </div>
      </div>
      <div class="main-content__orders">
        <div class="main-content__orders-img">
          <!--        <img src="" alt="urCar">-->
        </div>
        <div class="main-content__orders-data">
          <div>ELANTRA в Ульяновск, Нариманова 42</div>
          <div>12.06.2019 12:00 — 13.06.2019 12:00</div>
          <div>Цвет: Голубой</div>
        </div>
        <div class="main-content__orders-add">
          <base-check-button color="green">Полный бак</base-check-button>
          <base-check-button color="green">Детское кресло</base-check-button>
          <base-check-button color="green">Правый руль</base-check-button>
        </div>
        <div class="main-content__orders-sum">4 300 ₽</div>

        <div class="main-content__orders-buttons">
          <base-button
            iconColor="green"
            class="apply"
            border="right-none"
            borderRadius="standard-left"
            FontColor="grey"
            theme="neutral"
            type="button"
            :icon="['fas', 'check']"
          >
            Готово
          </base-button>
          <base-button
            iconColor="red"
            border="standard"
            theme="neutral"
            FontColor="grey"
            :icon="['fas', 'times']"
            type="button"
            >Отмена</base-button
          >
          <base-button
            iconColor="neutral"
            border="left-none"
            borderRadius="standard-right"
            theme="neutral"
            FontColor="grey"
            type="button"
            :icon="['fas', 'ellipsis-v']"
          >
            Изменить</base-button
          >
        </div>
      </div>

      <div class="main-content__footer">
        <div class="main-content__footer-pagination">
          <pagination-link href="#">1</pagination-link>
          <pagination-link href="#">2</pagination-link>
          <pagination-link href="#">3</pagination-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseSelect from "@elements/BaseSelect/index.vue";
import BaseButton from "@elements/BaseButton/index.vue";
import BaseCheckButton from "@elements/BaseCheckButton/index.vue";
import PaginationLink from "@elements/BasePaginationLink/index.vue";
export default {
  name: "ListOfOrdersViews",
  components: {
    BaseSelect,
    BaseButton,
    BaseCheckButton,
    PaginationLink,
  },
  props: {
    icon: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.cancel {
  position: relative;
  &::before,
  &::after {
    position: absolute;
    left: 25px;
    top: 5px;
    content: "";
    height: 12px;
    width: 1px;
    background-color: $button-cancel;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
}
.main-content {
  &__header {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    @extend .content-padding;
    border-bottom: 0.5px solid $header-elem-bottom;
    &-select {
      display: flex;
      justify-content: space-between;
      flex: 0.5;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    &-apply {
      flex: 0.5;
      display: flex;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
        justify-content: flex-start;
      }
    }
  }
  &__orders {
    display: flex;
    justify-content: space-between;
    min-height: 386px;
    @media screen and (max-width: 1024px) {
      display: block;
    }
    @extend .content-padding;
    &-img {
      height: 63px;
      width: 138px;
      background-color: tomato; // чисто для разметки
    }
    &-sum {
      font-size: 24px;
      line-height: 28px;
      margin-left: 80px;
      @media screen and (max-width: 1024px) {
        margin-left: 0;
      }
    }
    &-buttons {
    }
    &-data {
      & div {
        font-size: 13px;
        font-family: Roboto;
        font-weight: 300;
        color: $font-color-grey;
      }
    }
  }
  &__footer {
    padding: 21px 0;
    border-top: 0.5px solid $header-elem-bottom;
    &-pagination {
      @extend .horizon;
    }
  }
}
</style>
