export default {
  state: {
    orders: [],
    selectedCity: "",
    selectedOrder: "",
    selectedModel: "",
  },
  mutations: {
    getOrders(state, orders) {
      state.orders = orders;
    },
    setSelectedOrder(state, order) {
      state.selectedOrder = order;
    },
    setSelectedModel(state, model) {
      state.selectedModel = model;
    },
    setSelectedCity(state, city) {
      state.selectedCity = city;
    },
  },
  actions: {
    async getOrders({ commit }, { page, notes }) {
      const { count, data } = await this.$services.orders.getOrders(
        page,
        notes
      );
      commit("getOrders", { count, data });
    },
    async getOrdersByCity({ commit }, { page, notes, selected }) {
      const { count, data } = await this.$services.orders.getOrdersByCity(
        page,
        notes,
        selected
      );
      commit("getOrders", { count, data });
    },
  },
  getters: {
    correctData(state) {
      let data = [];
      if (Array.isArray(state.orders.data)) {
        state.orders.data.forEach((item) => {
          if (item.cityId && item.carId) {
            data.push(item);
          }
        });
      }
      return data;
    },
    selectedCityId(state, getters) {
      let cityIdforSelect = "";
      getters.correctData.find((item) => {
        if (item.cityId) {
          if (item.cityId.name === state.selectedCity) {
            cityIdforSelect = item.cityId.id;
          }
        }
      });
      return cityIdforSelect;
    },
  },
};
