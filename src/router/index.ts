import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/HomePage.vue";
import Map from "@/views/Map.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
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
