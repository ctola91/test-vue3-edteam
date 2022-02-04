import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const useTodo = (initialValue = []) => {
  // reactive vars
  const tasks = ref(initialValue);

  // methods
  const addTask = ({ inputText }) => {
    console.log(inputText.value);
    tasks.value.push({
      id: uuidv4(),
      task: inputText.value,
      isCompleted: false,
    });
  };

  const completeTask = (task) => {
    //let taskSelected = tasks.value.filter(t => t.id === task.id);
    task.isCompleted = true;
  };

  const deleteTask = (taskRemoved) => {
    const filteredTasks = tasks.value.filter((task) => {
      return task.id !== taskRemoved.id;
    });
    console.log(filteredTasks);
    tasks.value = filteredTasks;
  };

  // computed properties
  const numberOfTasks = computed(() => {
    return tasks.value.length;
  });

  const tasksCompleted = computed(() => {
    const completedTasks = tasks.value.filter((task) => {
      return task.isCompleted === true;
    });
    return completedTasks.length;
  });

  const pendingTasks = computed(() => {
    const pending = tasks.value.filter((task) => {
      return task.isCompleted === false;
    });
    return pending.length;
  });

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
    numberOfTasks,
    tasksCompleted,
    pendingTasks,
  };
};

export default useTodo;
