import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
    children: [
      {
        path: "products",
        name: "products",
        component: () => import("@/views/Products"),
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/Orders"),
      },
      {
        path: "coupons",
        name: "coupons",
        component: () => import("@/views/Coupons"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/Userboard.vue"),
    children: [
      {
        path: "cart",
        component: () => import("@/views/UserCart"),
      },
      {
        path: "product/:productId",
        component: () => import("@/views/UserProduct"),
      },
      {
        path: "checkout/:orderId",
        component: () => import("@/views/Usercheckout"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
