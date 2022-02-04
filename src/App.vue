<template>
  <h1>{{ title }}</h1>
  <div style="display: flex; justify-content: space-evenly">
    <button @click="goToURL('/')">Go to Home</button>

    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link :to="userURL">Go to User</router-link>
    <router-link to="/products/test">Go to Product</router-link>
  </div>
  <router-view></router-view>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const title = ref("Bienvenidos al curso de Vue.js version 3");
    const userURL = ref("/users/christian");
    const router = useRouter();

    const goToURL = (route) => {
      router.push(route);
    };

    return {
      title,
      userURL,
      goToURL,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.margin-15 {
  margin-bottom: 15px;
}
</style>
