import { createApp } from "vue";
// import { Hello } from "./mixin";
import App from "./App.vue";
import router from "./router";

const Vue = createApp(App);

// // introduccion global
// Vue.mixin(Hello);
Vue.use(router);

Vue.mount("#app");
