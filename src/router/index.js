import Vue from "vue";
import VueRouter from "vue-router";
import AuthViews from "@views/Auth/index.vue";
import AdminPanel from "@views/Main/index.vue";
import ListOfOrdersViews from "@views/ListOfOrdersViews/index.vue";
import ListOfCarsViews from "@views/ListOfCarsViews/index.vue";
import CardOfCar from "@views/CardOfCar/index.vue";
import ErrorPage from "@views/ErrorPage/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: AuthViews,
  },
  {
    path: "/admin-panel",
    name: "AdminPanel",
    component: AdminPanel,
    children: [
        { path: "orders", component: ListOfOrdersViews },
      { path: "cars", component: ListOfCarsViews },
      { path: "card", component: CardOfCar },
      { path: "error", component: ErrorPage }],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
