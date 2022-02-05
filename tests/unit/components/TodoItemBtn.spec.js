import { mount } from "@vue/test-utils";
import TodoItemBtn from "@/components/TodoItemBtn.vue";

describe("TodoItemBtn.vue", () => {
  it("El boton se carga sin pasarle un slot", () => {
    const wrapper = mount(TodoItemBtn, {
      props: {
        task: {
          id: 1,
          task: "Probar que funciona mi boton",
          isCompleted: false,
        },
      },
    });
    // expect(wrapper.find("span").text()).toBe("Button");
    expect(wrapper.html()).toContain("Button");
  });

  it("El boton se carga con un slot", () => {
    const wrapper = mount(TodoItemBtn, {
      props: {
        task: {
          id: 1,
          task: "Probar que funciona mi botom",
          isCompleted: false,
        },
      },
      slots: {
        default: "<div>Aceptar</div>",
      },
    });
    expect(wrapper.html()).toContain("Aceptar");
  });
});
