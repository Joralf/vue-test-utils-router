import VeeValidateField from "@/views/VeeValidateField.vue";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";

import { ComponentPublicInstance } from "vue";
export const setInputField = async (
  component: VueWrapper<ComponentPublicInstance>,
  value: string | null
): Promise<void> => {
  await component.find("input").setValue(value);
};

describe("test vee validate field", () => {
  it("doesn't show an error when mounting component", async () => {
    const wrapper = mount(VeeValidateField, {});

    expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(false);
  });

  it("doesn't show an error after entering a value in the input field", async () => {
    const wrapper = mount(VeeValidateField, {});

    await setInputField(wrapper, "Hi Vee Validate peeps!");
    await flushPromises();
    expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(false);
  });

  it("shows an error after entering a value in the input field and erasing it afterwards", async () => {
    const wrapper = mount(VeeValidateField, {});

    await setInputField(wrapper, "Hi Vee Validate peeps!");
    await setInputField(wrapper, "");
    await flushPromises();

    expect(wrapper.find('[data-testid="error-message"]').exists()).toBe(true);
  });
});
