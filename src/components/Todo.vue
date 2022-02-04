<template>
  <!-- <input type="text" v-model="newTask" @keyup.enter="addTask" /> -->
  <TodoForm @text="addTask" />
  <!-- <p v-if="isVisible">Este es un parrafo que quiero ocultar</p>
  <p v-else>
    Este es el parrafo que quiero mostrar cuando el primero se oculta
  </p> -->
  <TodoInfo
    :number-of-tasks="numberOfTasks"
    :tasks-completed="tasksCompleted"
    :pending-tasks="pendingTasks"
  />
  <ul>
    <TodoItem
      :class="{ 'margin-15': isDesktop }"
      :task="task"
      v-for="task in tasks"
      :key="task.id"
      :complete-task="completeTask"
      :delete-task="deleteTask"
    />
  </ul>
</template>
<script>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";
import TodoInfo from "./TodoInfo.vue";
import useTodo from "../composables/useTodo";

export default {
  name: "Todo",
  components: {
    TodoItem,
    TodoForm,
    TodoInfo,
  },
  setup() {
    const {
      tasks,
      deleteTask,
      completeTask,
      addTask,
      numberOfTasks,
      tasksCompleted,
      pendingTasks,
    } = useTodo();

    // lifecycle
    onMounted(() => {
      console.log("mounted");
      const initialTasks = [
        {
          id: uuidv4(),
          task: "Crear curso de EDteam",
          isCompleted: true,
        },
        {
          id: uuidv4(),
          task: "Revisar comentarios del curso",
          isCompleted: false,
        },
        {
          id: uuidv4(),
          task: "Grabar nuevas secciones",
          isCompleted: false,
        },
        {
          id: uuidv4(),
          task: "Modificar secciones anteriores",
          isCompleted: false,
        },
      ];
      tasks.value = initialTasks;
    });

    onBeforeUnmount(() => {
      console.log("BeforeUnmount");
    });

    // methods
    // const completeTask = (task) => {
    //   //let taskSelected = tasks.value.filter(t => t.id === task.id);
    //   task.isCompleted = true;
    // };

    // const addTask = ({ inputText }) => {
    //   console.log(inputText.value);
    //   tasks.value.push({
    //     id: uuidv4(),
    //     task: inputText.value,
    //     isCompleted: false,
    //   });
    // };
    // const deleteTask = (taskRemoved) => {
    //   const filteredTasks = tasks.value.filter((task) => {
    //     return task.id !== taskRemoved.id;
    //   });
    //   console.log(filteredTasks);
    //   tasks.value = filteredTasks;
    // };

    // computed properties
    // const numberOfTasks = computed(() => {
    //   return tasks.value.length;
    // });

    // const tasksCompleted = computed(() => {
    //   const completedTasks = tasks.value.filter((task) => {
    //     return task.isCompleted === true;
    //   });
    //   return completedTasks.length;
    // });

    // const pendingTasks = computed(() => {
    //   const pending = tasks.value.filter((task) => {
    //     return task.isCompleted === false;
    //   });
    //   return pending.length;
    // });

    return {
      tasks,
      numberOfTasks,
      tasksCompleted,
      pendingTasks,
      addTask,
      completeTask,
      deleteTask,
      isVisible: ref(true),
      activeColor: ref("#fff"),
      background: ref("green"),
      fontSize: ref(16),
      isDesktop: ref(true),
    };
  },
};
</script>
<style>
.flex {
  display: flex;
  max-width: 500px;
  margin: auto;
}
.space-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
}
</style>
