<template>
  <div class="main-content wrapper">
    <div class="main-content__title">Список авто</div>
    <section class="main-content__wrapper">
      <div class="main-content__header">
        <div class="main-content__header-select">
          <select
            v-model="selectedCategory"
            class="select"
            @change="updateSelectedCategory"
          >
            <option v-for="(category, index) in carsCategories" :key="index">
              {{ category }}
            </option>
          </select>
          <select v-model="selectedModel" class="select">
            <option v-for="(models, index) in carsModels" :key="index">
              {{ models }}
            </option>
          </select>
        </div>
        <div class="main-content__header-buttons">
          <base-button
            FontColor="white"
            borderRadius="standard"
            theme="confirm"
            type="button"
            >Сбросить</base-button
          >
          <base-button
            FontColor="white"
            borderRadius="standard"
            theme="delete"
            type="button"
            @click="getPaginateData"
            >Применить</base-button
          >
        </div>
      </div>
      <section v-if="carsModels.length" class="main-content__table">
        <div class="main-content__table-header">
          <div class="title">Категория</div>
          <div class="title">Модель</div>
          <div class="title">Номер</div>
          <div class="title">Цена от</div>
          <div class="title">Цена до</div>
          <div class="title">Цвет</div>
          <div class="title">Фото</div>
        </div>
        <div
          class="main-content__table-items"
          v-for="(car, index) in cars.data"
          :key="index"
        >
          <div class="main-content__table-item">
            <div>{{ car.categoryId.name }}</div>
          </div>
          <div class="main-content__table-item">
            <div>{{ car.name }}</div>
          </div>
          <div class="main-content__table-item">
            <div>{{ car.number }}</div>
          </div>
          <div class="main-content__table-item">
            <div>{{ car.priceMin }}</div>
          </div>
          <div class="main-content__table-item">
            <div>{{ car.priceMax }}</div>
          </div>
          <div class="main-content__table-item colors">
            <div v-for="(color, index) in car.colors" :key="index">
              {{ color }}
            </div>
          </div>
          <div class="main-content__table-item">
            <picture>
              <img :src="car.thumbnail.path" />
            </picture>
          </div>
        </div>
      </section>
      <base-loader v-else></base-loader>
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
import BaseButton from "@elements/BaseButton/index.vue";
import BaseLoader from "@elements/BaseLoader/index.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "ListOfCarsViews",
  components: {
    BaseButton,
    BaseLoader,
  },
  data() {
    return {
      page: 1,
      notesOnPage: 10,
      selectedModel: "",
      selectedCategory: "",
    };
  },
  methods: {
    ...mapActions({
      getListOfCars: "cars/getListOfCars",
      getListOfCarsByCategory: "cars/getListOfCarsByCategory",
    }),
    ...mapMutations({
      setSelectedCategory: "cars/setSelectedCategory",
    }),
    updateSelectedCategory() {
      this.setSelectedCategory(this.selectedCategory);
    },
    async getPaginateData() {
      if (this.selectedByCategory) {
        await this.getListOfCarsByCategory({
          page: this.page,
          notes: this.notesOnPage,
          selected: this.selectedByCategory,
        });
        return;
      }
      await this.getListOfCars({ page: this.page, notes: this.notesOnPage });
    },
  },
  computed: {
    ...mapState({
      cars: (state) => state.cars.cars,
      ...mapGetters({
        allCars: "cars/allCars",
        selectedByCategory: "cars/selectedByCategory",
        carsCategories: "cars/carsCategories",
        carsModels: "cars/carsModels",
      }),
    }),
    getCountOfPage() {
      let count = this.cars.count;
      let notesOnPage = this.notesOnPage;
      return Math.ceil(count / notesOnPage);
    },
  },
  async mounted() {
    await this.getPaginateData();
  },
};
</script>

<style lang="scss">
.main-content {
  &__header {
    display: flex;
    justify-content: space-between;
    @extend .content-padding;
    &-select {
      display: flex;
      justify-content: space-between;
      & :first-child {
        margin-right: 15px;
      }
    }
    &-buttons {
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
    &-header {
      display: flex;
      justify-content: space-between;
      & .title {
        font-weight: 700;
        padding: 5px;
        flex: 1;
        display: flex;
        justify-content: center;
        @media screen and (max-width: 768px) {
          padding: 2px;
          font-size: 12px;
        }
      }
    }
    &-items {
      display: flex;
      justify-content: space-between;
      & .colors {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &-item {
      display: flex;
      flex: 1;
      justify-content: center;
      border-bottom: 0.5px solid $header-border;
      & div,
      & picture {
        font-size: 14px;
        padding: 5px;
        width: 90px;
        display: flex;
        justify-content: center;
        flex: 1;
        & img {
          width: 140px;
          object-fit: contain;
        }
        @media screen and (max-width: 768px) {
          padding: 2px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
