import Vue from "vue";
import Vuex from "vuex";
import auth from "@modules/auth.js";
import cars from "@modules/cars.js";
import orders from "@modules/orders";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      ...auth,
    },
    cars: {
      namespaced: true,
      ...cars,
    },
    orders: {
      namespaced: true,
      ...orders,
    },
  },
  getters: {
    getAuth(state, getters, rootState) {
      const { userEmail, userPassword } = rootState.auth;
      return {
        userPassword,
        userEmail,
      };
    },
  },
});
