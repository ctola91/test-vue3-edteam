<template>
  <div>
    <p v-if="error" id="message-error">{{ error }}</p>
    <p v-else id="message">{{ message.text }}</p>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { getMessage } from "@/services/axios";

export default {
  setup() {
    const message = ref({});
    const error = ref(null);

    onMounted(async () => {
      try {
        message.value = await getMessage();
      } catch (e) {
        error.value = "Ha ocurrido un error";
      }
    });

    return {
      message,
      error,
    };
  },
};
</script>