import { shallowMount } from "@vue/test-utils";
import SomePage from "@/views/SomePage.vue";

describe("Somepage.vue", () => {
  it("renders h1 correctly", () => {
    const wrapper = shallowMount(SomePage, {});
    expect(wrapper.find("[data-testid='somepage']").find("h1").text()).toMatch(
      "This is some page"
    );
  });
});
