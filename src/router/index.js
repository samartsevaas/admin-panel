import Vue from "vue";
import VueRouter from "vue-router";
import AuthViews from "@views/Auth/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: AuthViews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
