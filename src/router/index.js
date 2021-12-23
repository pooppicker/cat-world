import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../views/Explore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    redirect: "/explore",
  },
  {
    path: "/explore",
    name: "explore",
    component: Explore,
  },
  {
    path: "/breeds",
    name: "breeds",
    component: () => import("../views/Breeds.vue"),
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
