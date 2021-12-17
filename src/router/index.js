import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/explore",
    name: "explore",
    component: () => import("../views/Explore.vue"),
  },
  {
    path: "/breeds",
    name: "breeds",
    component: Home,
  },
  {
    path: "/breeds/:id",
    name: "breed",
    component: () => import("../views/Breed.vue"),
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/Favorite.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
