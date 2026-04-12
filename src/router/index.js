import { createRouter, createWebHistory } from "vue-router";
import HomePge from "@/features/home/page/HomePge.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: HomePge,
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
