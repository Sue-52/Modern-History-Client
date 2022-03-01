import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Home = () =>
  import(/*webpackChunkName: 'Home'*/ "@/views/Home/HomePage.vue");
import Map from "@/views/Map/Map.vue";
import Video from "@/views/Video/VideoPage.vue";

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
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/video" && !to.query.title) {
    next("/");
  } else {
    next();
  }
});

export default router;
