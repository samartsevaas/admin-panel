import Vue from "vue";
import Vuex from "vuex";
import auth from "@modules/auth.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      ...auth,
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
