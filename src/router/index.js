import { createRouter, createWebHistory } from "vue-router";

// import views
import Home from "@/features/home/page/HomePge.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
