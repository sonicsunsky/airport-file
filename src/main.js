import { createApp } from "vue";

import elementPlus from "./plugins/element";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";
import "@/styles/index.scss"; // global css

const app = createApp(App);

// app.config.globalProperties.$ELEMENT = { locale };
elementPlus(app);

app.use(router);
app.use(store);

app.mount("#app");
