import { createWebHashHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/TheIndex.vue"),
    },
    {
      path: "/show",
      component: () => import("../components/TheShow.vue"),
    },
  ],
});
