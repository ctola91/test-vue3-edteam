import { useRoute } from "vue-router";
import { mount } from "@vue/test-utils";
import Product from "@/views/Product";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
}));

describe("Product.vue", () => {
  it("verificar que Product.vue puede recibir un parametro", () => {
    // /products/1
    const id = 1;
    useRoute.mockImplementationOnce(() => ({
      params: {
        productId: id,
      },
    }));

    const wrapper = mount(Product, {
      global: {
        mocks: {
          // en composition api esto ya no se necesita
        },
      },
    });
    expect(wrapper.find("h1").text()).toBe(`Product ${id}`);
  });
});
