<template>
<div class="main-content wrapper">
  <div class="main-content__title">Список авто</div>
  <section class="main-content__wrapper">
    <div class="main-content__header">
      <div class="main-content__header-select">
        <base-select>
          <slot>
            <option value="category">Категория</option>
          </slot>
        </base-select>
        <base-select>
          <slot>
            <option value="model">Марка</option>
          </slot>
        </base-select>
      </div>
      <div class="main-content__header-buttons">
        <base-button FontColor="white" borderRadius="standard" theme="confirm" type="button">Сбросить</base-button>
        <base-button FontColor="white" borderRadius="standard" theme="delete" type="button">Применить</base-button>
      </div>
    </div>

    <section class="main-content__table">
      <div class="main-content__table-header">
        <div class="title">Категория</div>
        <div class="title">Модель</div>
        <div class="title">Номер</div>
        <div class="title">Ценовая категория</div>
        <div class="title">Цвет</div>
        <div class="title">Фото</div>
      </div>
      <div class="main-content__table-items">
        <div class="main-content__table-item">
          <div>Категория</div>
          <div>Категория</div>
          <div>Категория</div>
        </div>
        <div class="main-content__table-item">
          <div>Модель</div>
          <div>Модель</div>
          <div>Модель</div>
        </div>
        <div class="main-content__table-item">
          <div>Номер</div>
          <div>Номер</div>
          <div>Номер</div>
        </div>
        <div class="main-content__table-item">
          <div>Ценовая категория</div>
          <div>Ценовая категория</div>
          <div>Ценовая категория</div>
        </div>
        <div class="main-content__table-item">
          <div>Цвет</div>
          <div>Цвет</div>
          <div>Цвет</div>
        </div>
        <div class="main-content__table-item">
          <div>Фото</div>
          <div>Фото</div>
          <div>Фото</div>
        </div>
      </div>
    </section>

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
import PaginationLink from "@elements/BasePaginationLink/index.vue";
import BaseButton from "@elements/BaseButton/index.vue";
export default {
  name: "ListOfCarsViews",
  components: {
    BaseSelect,
    PaginationLink,
    BaseButton,
  },
};
</script>

<style scoped lang="scss">
.main-content {
  &__header {
    display: flex;
    justify-content: space-between;
    @extend .content-padding;
    &-select{
      display: flex;
      justify-content: space-between;
      & :first-child {
        margin-right: 15px;
      }
    }
    &-buttons{
      display: flex;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      & :first-child {
        margin-right: 15px;
      }
    }
  }
  &__table {
    @extend .content-padding;
    &-header{
      display: flex;
      justify-content: space-between;
      & .title{
        font-weight: 700;
        padding: 11px;
        @media screen and (max-width: 768px) {
          padding: 2px;
          font-size: 12px;
        }
      }
    }
    &-items{
      display: flex;
      justify-content: space-between;
    }
    &-item{
      display: flex;
      flex-direction: column;
      & div{
        padding: 11px;
        @media screen and (max-width: 768px) {
          padding: 2px;
          font-size: 10px;
        }
      }
    }
  }
  &__footer{
    padding: 21px 0;
    &-pagination{
      @extend .horizon;
    }
  }
}
</style>