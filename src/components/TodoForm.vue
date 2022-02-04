<template>
  <input type="text" v-model="inputText" @keyup.enter="addTask" />
</template>
<script>
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    const inputText = ref("");

    // methods
    const addTask = () => {
      emit("text", { inputText });
      inputText.value = "";
    };

    return {
      addTask,
      inputText,
    };
  },
};
</script>
