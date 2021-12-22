import "./plugins/axios";
import { createApp } from "vue";
// 清除样式引入
import "normalize.css";
// MD文件样式引入
import 'github-markdown-css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
