import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import VueFinalModal from 'vue-final-modal';



const app = createApp(App);

app.use(router)
  .use(VueFinalModal())
  .mount("#app");
