import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Home = () =>
  import(/*webpackChunkName: 'Home'*/ "@/views/Home/HomePage.vue");
import Map from "@/views/Map/Map.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
