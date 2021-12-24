import "./plugins/axios";
import { createApp } from "vue";
// 清除样式引入
import "normalize.css";
// MD文件样式引入
import "github-markdown-css";
// fullpage.js
import 'fullpage.js/vendors/scrolloverflow';
import VueFullpage from 'vue-fullpage.js'
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 引入组件
import movenEditer from "mavon-editor";
import "mavon-editor/dist/css/index.css";

app.use(store).use(router).use(VueFullpage).use(movenEditer).mount("#app");
