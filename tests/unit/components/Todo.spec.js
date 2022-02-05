import { mount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Todo.vue", () => {
  it("El componente puede registrar una nueva tarea", async () => {
    const wrapper = mount(Todo);
    const TodoForm = wrapper.findComponent('input[type="text"]');
    TodoForm.find('input[type="text"]').setValue("Crear tests para el curso");
    await TodoForm.trigger("keyup.enter");
    expect(wrapper.vm.tasks.length).toBe(5);
    expect(wrapper.vm.tasks[4].task).toBe("Crear tests para el curso");
    expect(wrapper.vm.tasks[4].isCompleted).toBeFalsy();
  });
});
