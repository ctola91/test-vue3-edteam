<template>
  <button
    :class="textClass"
    @click="handleClick(task)"
    v-show="!(task.isCompleted && hideOnCompleted)"
  >
    <slot>
      <span>Button</span>
    </slot>
  </button>
</template>
<script>
export default {
  props: [
    "text",
    "icon",
    "handleClick",
    "task",
    "hideOnCompleted",
    "textClass",
  ],
};
</script>
<style scoped>
button {
  background: rgba(255, 255, 255, 0);
  /* color: #fff; */
  margin: 0 5px;
  border-style: none;
  padding: 10px;
}
.complete {
  color: #3eaf7c;
}
.delete {
  color: red;
}
</style>
