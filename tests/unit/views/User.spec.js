import { mount } from "@vue/test-utils";
import User from "@/views/User";

describe("User.vue", () => {
  it("verificar que User.vue puede recibir un parametro", () => {
    // /users/1
    const id = 1;
    const mockRoute = {
      params: {
        id,
      },
    };

    const wrapper = mount(User, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.find("h1").text()).toBe(`Hola ${id}!!`);
  });
});
