<template>
  <h1>Hola Mundo</h1>
  <Todo />
</template>
<script>
import Todo from "../components/Todo.vue";

export default {
  name: "Home",
  components: {
    Todo,
  },
};
</script>
