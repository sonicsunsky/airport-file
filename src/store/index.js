import { createStore } from "vuex";

const modulesFiles = import.meta.globEager("./modules/*.js");
let modules = {};

Object.keys(modulesFiles).forEach((key) => {
  modules[key.replace(/(\.\/modules\/|\.js)/g, "")] = modulesFiles[key].default;
});

Object.keys(modules).forEach((key) => {
  modules[key]["namespaced"] = true;
});

// console.log(modulesFiles, modules);

const store = createStore({
  modules,
  strict: import.meta.env.NODE_ENV !== "production",
});

export default store;
