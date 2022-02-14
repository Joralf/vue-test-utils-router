import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import VeeValidateField from "@/views/VeeValidateField.vue";
import VeeValidateForm from "@/views/VeeValidateForm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/vee-validate-field",
    component: VeeValidateField,
  },
  {
    path: "/vee-validate-form",
    component: VeeValidateForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export { router, routes };
