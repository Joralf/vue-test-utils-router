import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders h1 correctly", () => {
    const wrapper = shallowMount(Home, {});
    expect(wrapper.find("[data-testid='homepage']").find("h1").text()).toMatch(
      "This is home page"
    );
  });
});
