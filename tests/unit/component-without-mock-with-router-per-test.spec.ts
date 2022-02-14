import { routes } from "@/router";
import Component from "@/views/Component.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

describe("test component with router without a mock with router per test", () => {
  let router: any;
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/");
    await router.isReady();
  });

  it("allows authenticated user to edit a post", async () => {
    const wrapper = mount(Component, {
      props: {
        isAuthenticated: true,
      },
      global: {
        plugins: [router],
      },
    });

    await wrapper.find("button").trigger("click");

    await flushPromises();

    expect(router.currentRoute.value.fullPath).toBe("/posts/1");
  });

  it("redirect an unauthenticated user to 404", async () => {
    const wrapper = mount(Component, {
      props: {
        isAuthenticated: false,
      },
      global: {
        plugins: [router],
      },
    });

    await wrapper.find("button").trigger("click");

    await flushPromises();

    expect(router.currentRoute.value.fullPath).toBe("/404");
  });
});
