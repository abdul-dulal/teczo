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
    name: "HomeTwo",
    component: () => import("@/features/HomeTwo/page/HomeTwo.vue"),
  },
  {
    path: "/home-three",
    name: "HomeThree",
    component: () => import("@/features/HomeThree/page/HomeThree.vue"),
  },
  {
    path: "/home-four",
    name: "HomeFour",
    component: () => import("@/features/HomeFour/page/HomeFour.vue"),
  },
  {
    path: "/home-five",
    name: "HomeFive",
    component: () => import("@/features/HomeFive/page/HomeFive.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/features/about/page/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
