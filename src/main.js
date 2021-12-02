import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.scss";
import Services from "./services";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPen, faList, faPlus, faBars, faSearch, faBell, faTimes, faEllipsisV, faCheck}  from "@fortawesome/free-solid-svg-icons";

Vue.prototype.$services = Services;
store.$services = Services;
library.add(faPen, faList, faPlus, faBars, faSearch, faBell, faEllipsisV, faTimes, faCheck);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
