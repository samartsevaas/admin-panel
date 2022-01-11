export default {
  state: {
    cars: [],
    page: "",
    selectedCategory: "",
  },
  mutations: {
    getListOfCars(state, cars) {
      state.cars = cars;
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
  },
  actions: {
    async getListOfCars({ commit }, { page, notes }) {
      const { count, data } = await this.$services.cars.getListOfCars(
        page,
        notes
      );
      commit("getListOfCars", { count, data });
    },
    async getListOfCarsByCategory({ commit }, { page, notes, selected }) {
      const { count, data } = await this.$services.cars.getListOfCarsByCategory(
        page,
        notes,
        selected
      );
      commit("getListOfCars", { count, data });
    },
  },
  getters: {
    allCars(state) {
      return state.cars;
    },
    carsCategories(state, getters) {
      let arrOfCategories = [];
      if (Array.isArray(getters.allCars.data)) {
        getters.allCars.data.forEach((item) => {
          return arrOfCategories.push(item.categoryId.name);
        });
      }
      return Array.from(new Set(arrOfCategories));
    },
    carsModels(state, getters) {
      let arrOfCarsModel = [];
      if (Array.isArray(getters.allCars.data)) {
        getters.allCars.data.forEach((item) => {
          return arrOfCarsModel.push(item.name);
        });
      }
      return Array.from(new Set(arrOfCarsModel));
    },
    selectedByCategory(state, getters) {
      let categoryIdBySelect = "";
      if (Array.isArray(getters.allCars.data)) {
        getters.allCars.data.find((item) => {
          if (item.categoryId.name === state.selectedCategory) {
            categoryIdBySelect = item.categoryId.id;
          }
        });
      }
      return categoryIdBySelect;
    },
  },
};
