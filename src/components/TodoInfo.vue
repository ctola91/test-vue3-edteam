<template>
  <div class="flex space-between">
    <p>Total de Tareas: {{ numberOfTasks }}</p>
    <p>Tareas completadas: {{ tasksCompleted }}</p>
    <p>Tareas incompletas: {{ pendingTasks }}</p>
  </div>
</template>
<script>
export default {
  name: "TodoInfo",
  props: ["numberOfTasks", "tasksCompleted", "pendingTasks"],
};
</script>
