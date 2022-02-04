import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import Product from "./views/Product.vue";
import User from "./views/User.vue";
// import UserProfile from "./views/UserProfile.vue";
import NotFound from "./views/NotFound.vue";

const About = () => import("./views/About.vue");
const Product = () => import("./views/Product.vue");
const Login = () => import("./views/Login.vue");

const beforeEnterHook = (to) => {
  return console.log("Path: " + to.path);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: [beforeEnterHook],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/products/:productId",
    name: "Product",
    component: Product,
  },
  {
    path: "/users/:id",
    name: "User",
    component: User,
    // children: [
    //   {
    //     path: "profile",
    //     component: UserProfile,
    //   },
    // ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("before each route");
  let isAuthenticated = true;
  if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

router.afterEach(() => {
  console.log("After route loads");
});

export default router;
