<template>
  <h1>Product {{ productId }}</h1>
  <div>
    {{ num }}
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { Hello } from "../mixin";

export default {
  data() {
    return {
      num: 0,
    };
  },
  mixins: [Hello],
  setup() {
    const route = useRoute();
    const productId = route.params.productId;

    return {
      productId,
    };
  },
};
</script>
