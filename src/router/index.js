import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
// import Layouts from "@/layouts/index.vue";

export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    hidden: true,
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/file",
    meta: { name: "Home", title: "首页", icon: "el-icon-document" },
    children: [
      {
        path: "/file",
        component: () => import("@/views/File/index.vue"),
        name: "File",
        meta: { title: "培训手册", icon: "el-icon-document" },
      },
      {
        path: "/form",
        component: () => import("@/views/Form/index.vue"),
        name: "Form",
        meta: { title: "表单", icon: "el-icon-document" },
      }
    ],
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401.vue"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    hidden: true,
  },
];

export const asyncRoutes = [];

const router = createRouter({
  history: createWebHashHistory(), 
  // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: constantRoutes,
  scrollBehavior: () => ({
    top: 0,
  }),
});

export function resetRouter() {
  router.matcher = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({
      top: 0,
    }),
  }).matcher;
}

export default router;
