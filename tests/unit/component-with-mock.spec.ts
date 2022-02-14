import Component from "@/views/Component.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

import { useRouter, useRoute } from "vue-router";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

describe("test component with router with a mock", () => {
  it("allows authenticated user to edit a post", async () => {
    (useRoute as jest.Mock).mockImplementationOnce(() => ({
      params: {
        id: 1,
      },
    }));

    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementationOnce(() => ({
      push,
    }));

    const wrapper = mount(Component, {
      props: {
        isAuthenticated: true,
      },
      global: {
        stubs: { RouterLink: RouterLinkStub, "router-view": true },
      },
    });

    await wrapper.find("button").trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/posts/1");
  });

  it("redirect an unauthenticated user to 404", async () => {
    (useRoute as jest.Mock).mockImplementationOnce(() => ({
      params: {
        id: 1,
      },
    }));

    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementationOnce(() => ({
      push,
    }));

    const wrapper = mount(Component, {
      props: {
        isAuthenticated: false,
      },
      global: {
        stubs: ["router-link", "router-view"],
      },
    });

    await wrapper.find("button").trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/404");
  });
});
