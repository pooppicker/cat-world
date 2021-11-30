import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: Home,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/Favorite.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/Upload.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
