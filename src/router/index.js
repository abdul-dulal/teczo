import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/features/home/page/HomePge.vue"),
  },
  {
    path: "/home-two",
    name: "Home",
    component: () => import("@/features/HomeTwo/page/HomeTwo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
