import VeeValidateForm from "@/views/VeeValidateForm.vue";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";

import { ComponentPublicInstance } from "vue";
export const setInputField = async (
  component: VueWrapper<ComponentPublicInstance>,
  value: string | null
): Promise<void> => {
  await component.find("input").setValue(value);
};

describe("test vee validate form", () => {
  it("doesn't show an error when mounting component", async () => {
    const wrapper = mount(VeeValidateForm, {});

    expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(false);
  });

  it("doesn't show an error after entering a value in the input field", async () => {
    const wrapper = mount(VeeValidateForm, {});

    await setInputField(wrapper, "Hi Vee Validate peeps!");
    await flushPromises();
    expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(false);
  });

  it("shows an error after entering a value in the input field and erasing it afterwards -- this test fails", async () => {
    const wrapper = mount(VeeValidateForm, {});

    await setInputField(wrapper, "Hi Vee Validate peeps!");
    await setInputField(wrapper, "");
    await flushPromises();

    expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(true);
  });

  it("shows an error after entering a value in the input field and erasing it afterwards -- wrapping in a setTimeout let's the test succeed", async () => {
    const wrapper = mount(VeeValidateForm, {});

    await setInputField(wrapper, "Hi Vee Validate peeps!");
    await setInputField(wrapper, "");
    await flushPromises();

    setTimeout(() => {
      expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(true);
    }, 500);
  });
});
