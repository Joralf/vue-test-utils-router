import {router} from '@/router'
import Component from '@/views/Component.vue'
import { flushPromises, mount } from '@vue/test-utils'

describe("test component with router without a mock with singleton router", () => {
  beforeEach(async () => {
    router.push("/");
    await router.isReady();
  });

  it('allows authenticated user to edit a post', async () => {
    const wrapper = mount(Component, {
      props: {
        isAuthenticated: true
      },
      global: {
        plugins: [router],
      }
    });

    await wrapper.find('button').trigger('click');
              
    await flushPromises();

    expect(router.currentRoute.value.fullPath).toBe("/posts/1");
  })

  it('redirect an unauthenticated user to 404', async () => {
    const wrapper = mount(Component, {
      props: {
        isAuthenticated: false
      },
      global: {
        plugins: [router],
      }
    });


    await wrapper.find('button').trigger('click');

    await flushPromises();

    expect(router.currentRoute.value.fullPath).toBe("/404");

  })
})
