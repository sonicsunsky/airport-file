import axios from "axios";
// import store from "@/store";
import router from "@/router";
import { ElLoading, ElMessage } from "element-ui";
import { getStorage, setStorage } from "@/utils/auth";
import qs from "qs";
let loadingInstance = null;

const service = axios.create({
  baseURL: "https://jc.cgoport.com", // process.env.VUE_APP_BASE_API, // url = base url + request url, VUE_APP_BASE_LOCAL_API
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // console.log("axios: ", config);
    loadingInstance = ElLoading.service({
      text: `加载中...`,
      background: `rgba(238, 245, 254, 0.8)`,
    });
    const token = getStorage("token") || "";
    if (token) {
      config.headers["authorization"] = token;
    }
    // do something before request is sent
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    this.$nextTick(() => {
      // 以服务的方式调用的 Loading 需要异步关闭
      loadingInstance && loadingInstance.close();
    });
    const res = response.data;
    return res;
  },
  (error) => {
    this.$nextTick(() => {
      // 以服务的方式调用的 Loading 需要异步关闭
      loadingInstance && loadingInstance.close();
    });
    console.log("err: ", error.response);
    const status = error.response.status;
    const code = error.response.data.code; //"rest_forbidden"
    console.log("router.currentRoute: ", router.currentRoute);
    // if (status === 401 && code === 401) {
    //   if (router.currentRoute.fullPath.indexOf("/login") === -1) {
    //     ElMessage.error("当前为未登录状态或登录态过期请重新登录");
    //     store.dispatch("user/logout");
    //     router
    //       .push(`/login?redirect=${router.currentRoute.fullPath}`)
    //       .catch(() => {});
    //   }
    // }
    return Promise.reject(error.response);
  }
);

export default service;
