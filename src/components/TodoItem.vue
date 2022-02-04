<template>
  <li
    class="flex space-between align-center"
    :class="{ done: task.isCompleted }"
  >
    <span>{{ task.task }}</span>
    <div>
      <TodoItemBtn
        :handle-click="completeTask"
        :task="task"
        :hideOnCompleted="true"
        text-class="complete"
      >
        <i class="fas fa-check"></i>
        <!-- {{ Completar }} -->
      </TodoItemBtn>
      <TodoItemBtn :handle-click="deleteTask" :task="task" text-class="delete">
        <i class="fas fa-times"></i>
      </TodoItemBtn>
    </div>
    <!-- <button @click="completeTask(task)" v-show="!task.isCompleted">
      Completar
    </button> -->
  </li>
</template>
<script>
import TodoItemBtn from "./TodoItemBtn.vue";
export default {
  components: { TodoItemBtn },
  name: "TodoItem",
  props: {
    task: Object,
    completeTask: Function,
    deleteTask: Function,
  },
  setup() {},
};
</script>
<style>
li {
  list-style: none;
  padding-left: 5px;
}
.done {
  color: #ffffff;
  background: #3eaf7c;
  font-size: 16px;
}
</style>
