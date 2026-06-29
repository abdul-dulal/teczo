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
  {
    path: "/team",
    name: "Team",
    component: () => import("@/features/team/page/Team.vue"),
  },
  {
    path: "/team-details",
    name: "TeamDetails",
    component: () => import("@/features/TeamDetails/page/TeamDeatils.vue"),
  },
  {
    path: "/testmonial",
    name: "Testimonial",
    component: () => import("@/features/testimonial/page/Testimonial.vue"),
  },
  {
    path: "/price-plan",
    name: "Priceplan",
    component: () => import("@/features/pricePlan/page/PricePlan.vue"),
  },
  {
    path: "/faq",
    name: "Our Faq",
    component: () => import("@/features/faq/page/Faq.vue"),
  },
  {
    path: "/services",
    name: "Our Services",
    component: () => import("@/features/services/page/Services.vue"),
  },
  {
    path: "/service-details",
    name: "Service Details",
    component: () => import("@/features/service-details/page/page.vue"),
  },
  {
    path: "/portfolio",
    name: "Our Portfolio",
    component: () => import("@/features/portfolio/page/Portfolio.vue"),
  },
  {
    path: "/portfolio-details",
    name: "Portfolio Details",
    component: () =>
      import("@/features/portfolio-details/page/PortfolioDetails.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/features/blog/page/page.vue"),
  },
  {
    path: "/blog-sidebar",
    name: "Blog Sidebar",
    component: () => import("@/features/blogSidebar/page/page.vue"),
  },
  {
    path: "/blog-details",
    name: "Blog Details",
    component: () => import("@/features/blogDetails/page/page.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/features/contact/page/page.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: import("@/features/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
