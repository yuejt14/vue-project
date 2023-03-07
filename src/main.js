import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { vfmPlugin } from 'vue-final-modal'

const app = createApp(App);

app.use(router)
  .use(vfmPlugin())
  .mount("#app");
