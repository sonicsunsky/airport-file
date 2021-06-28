import { createApp } from "vue";

import { components, plugins } from "./plugins/element";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";
import "@/styles/index.scss"; // global css

const app = createApp(App);
// app.config.globalProperties.$ELEMENT = { locale };

app.use(router);
app.use(store);

components.forEach((component) => {
  app.component(component.name, component);
});

plugins.forEach((plugin) => {
  app.use(plugin);
});

app.mount("#app");
