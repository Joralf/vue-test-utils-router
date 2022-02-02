import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Component from "../views/Component.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Component
  },
  {
    path: '/404',
    component: {
      template: `404`
    },
  },
  {
    path: "/posts/:id",
    component: {
      template: `posts`
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export { router, routes };
