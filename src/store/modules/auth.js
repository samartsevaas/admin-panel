export default {
  state: {
    userEmail: "",
    userPassword: "",
    sendAuth: {},
  },
  mutations: {
    setCurrentUserEmail(state, userEmail) {
      state.userEmail = userEmail;
    },
    setCurrentUserPassword(state, userPassword) {
      state.userPassword = userPassword;
    },
    sendAuth(state, sendAuth) {
      state.sendAuth = sendAuth;
    },
  },
  actions: {
    async sendAuth({ commit }, params) {
      try {
        const data = await this.$services.auth.sendAuth(params);
        commit("sendAuth", data);
      } catch (e) {
        console.log(e);
        console.log(`ошибка: ${e.response.data} статус: ${e.response.status}`);
        throw new Error(e.response);
      }
    },
  },
  getters: {},
};
