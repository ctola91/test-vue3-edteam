import useTodo from "@/composables/useTodo.js";
import { mount } from "vue-composable-tester";

describe("useTodo", () => {
  it("inicializar el hook useTodo sin valores", () => {
    const { result } = mount(() => useTodo());
    expect(result.tasks.value).toBeInstanceOf(Array);
  });

  it("Crear nueva tarea", () => {
    const mockMessage = {
      value: "Hello Test",
    };
    const { result } = mount(() => useTodo());
    result.addTask({ inputText: mockMessage });

    expect(result.tasks.value.length).toBe(1);
    expect(result.tasks.value[0].task).toMatch(mockMessage.value);
  });
});
