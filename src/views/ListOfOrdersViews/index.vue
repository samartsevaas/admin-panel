<template>
  <div class="main-content wrapper">
    <div class="main-content__title">Заказы</div>
    <section class="main-content__wrapper">
      <div class="main-content__header">
        <div class="main-content__header-select">
          <span class="main-content__header-select-title">Город</span>
          <select
            v-model="selectedCity"
            class="select"
            @change="updateSelectedCity"
          >
            <option v-for="order in correctData" :key="order.id">
              {{ order.cityId.name }}
            </option>
          </select>
          <span class="main-content__header-select-title">Модель</span>
          <select v-model="selectedOrder" class="select">
            <option v-for="order in correctData" :key="order.id">
              {{ order.carId.name }}
            </option>
          </select>
          <span class="main-content__header-select-title">Статус</span>
          <select v-model="selectedModel" class="select">
            <option v-for="order in correctData" :key="order.id">
              {{ order.orderStatusId.name }}
            </option>
          </select>
        </div>
        <div class="main-content__header-apply">
          <base-button theme="confirm" type="button" @click="getPaginateData"
            >Применить</base-button
          >
          <base-button theme="delete" type="button">Удалить</base-button>
        </div>
      </div>
      <div
        class="main-content__orders"
        v-for="(order, index) in correctData"
        :key="index"
      >
        <div class="main-content__orders-img" v-if="order.cityId">
          <img :src="order.carId.thumbnail.path" alt="car" />
        </div>
        <div class="main-content__orders-img" v-else>
          <img src="@/assets/images/car.png" alt="car" />
        </div>
        <div class="main-content__orders-data">
          <div v-if="order.carId">
            <span>{{ order.carId.name }}</span>
          </div>
          <div v-if="order.pointId">{{ order.pointId }}</div>
          <div v-if="order.cityId">
            c <span>{{ convertFormatDate(order.dateFrom) }}</span> до
            <span>{{ convertFormatDate(order.dateTo) }}</span>
          </div>
          <div v-if="order.cityId">
            <span>{{ order.cityId.name }}</span>
          </div>
          <div></div>
          <div>
            Цвет: <span>{{ order.color }}</span>
          </div>
        </div>
        <div class="main-content__orders-add">
          <base-check-button :color="order.isFullTank ? 'apply' : 'cancel'"
            >Полный бак</base-check-button
          >
          <base-check-button
            :color="order.isNeedChildChair ? 'apply' : 'cancel'"
            >Детское кресло</base-check-button
          >
          <base-check-button :color="order.isRightWheel ? 'apply' : 'cancel'"
            >Правый руль</base-check-button
          >
        </div>
        <div class="main-content__orders-sum">{{ order.price }} ₽</div>

        <div class="main-content__orders-buttons">
          <base-button-group
            class="apply"
            iconColor="green"
            :icon="['fas', 'check']"
            type="button"
          >
            Готово
          </base-button-group>
          <base-button-group
            class="cancel"
            iconColor="red"
            :icon="['fas', 'times']"
            type="button"
            >Отмена</base-button-group
          >
          <base-button-group
            class="change"
            iconColor="neutral"
            :icon="['fas', 'ellipsis-v']"
            type="button"
          >
            Изменить</base-button-group
          >
        </div>
      </div>

      <div class="main-content__footer">
        <div class="main-content__footer-pagination">
          <paginate
            :page-count="getCountOfPage"
            :container-class="'pagination'"
            :page-class="'item'"
            :page-range="3"
            :margin-pages="1"
            :page-link-class="'item-link'"
            :prevText="'«'"
            :nextText="'»'"
            :prev-class="'prev-link'"
            :next-class="'next-link'"
            v-model="page"
            :click-handler="getPaginateData"
          >
          </paginate>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseCheckButton from "@elements/BaseCheckButton/index.vue";
import BaseButtonGroup from "@elements/BaseButtonGroup";
import BaseButton from "@elements/BaseButton";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import dayjs from "dayjs";

export default {
  name: "ListOfOrdersViews",
  components: {
    BaseButtonGroup,
    BaseCheckButton,
    BaseButton,
  },
  data() {
    return {
      page: 1,
      notesOnPage: 10,
      selectedCity: "",
      selectedOrder: "",
      selectedModel: "",
    };
  },
  props: {
    icon: {
      type: String,
    },
  },
  methods: {
    ...mapActions({
      getOrders: "orders/getOrders",
      getOrdersByCity: "orders/getOrdersByCity",
    }),
    async getPaginateData() {
      if (this.selectedCityId) {
        await this.getOrdersByCity({
          page: this.page,
          notes: this.notesOnPage,
          selected: this.selectedCityId,
        });
        return;
      }
      await this.getOrders({ page: this.page, notes: this.notesOnPage });
    },
    convertFormatDate(data) {
      let result;
      if (data) {
        result = dayjs(data).format("DD.MM.YYYY HH:mm");
      }
      return result;
    },
    ...mapMutations({
      setSelectedOrder: "orders/setSelectedOrder",
      setSelectedModel: "orders/setSelectedModel",
      setSelectedCity: "orders/setSelectedCity",
    }),
    updateSelectedCity() {
      this.setSelectedCity(this.selectedCity);
    },
  },
  computed: {
    ...mapState({
      orders: (state) => state.orders.orders,
    }),
    ...mapGetters({
      correctData: "orders/correctData",
      selectedCityId: "orders/selectedCityId",
    }),
    getCountOfPage() {
      let count = this.orders.count;
      let notesOnPage = this.notesOnPage;
      return Math.ceil(count / notesOnPage);
    },
  },
  async mounted() {
    await this.getPaginateData();
  },
};
</script>

<style scoped lang="scss">
.cancel {
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
      flex: 0.4;
      & select {
        margin-right: 15px;
      }
      &-title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-family: Roboto;
        font-weight: 300;
        color: #5a6169;
        margin-right: 15px;
        width: 100%;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    &-apply {
      flex: 0.5;
      display: flex;
      justify-content: flex-end;
      & :first-child {
        margin-right: 10px;
      }
      @media screen and (max-width: 768px) {
        justify-content: flex-start;
      }
    }
  }
  &__orders {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      display: block;
    }
    @extend .content-padding;
    &-img {
      & img {
        width: 140px;
        height: 100px;
        object-fit: contain;
      }
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
      & .apply {
        border-top-left-radius: 4px 4px;
        border-bottom-left-radius: 4px 4px;
        border: 0.5px solid $neutral-border;
      }
      & .cancel {
        border-bottom: 0.5px solid $neutral-border;
        border-top: 0.5px solid $neutral-border;
      }
      & .change {
        border-top-right-radius: 4px 4px;
        border-bottom-right-radius: 4px 4px;
        border: 0.5px solid $neutral-border;
      }
    }
    &-data {
      width: 250px;
      & div,
      & span {
        font-size: 13px;
        font-family: Roboto;
        font-weight: 300;
        color: $font-color-grey;
      }
      & span {
        font-weight: 700;
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
