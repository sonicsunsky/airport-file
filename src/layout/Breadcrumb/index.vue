<template>
  <el-breadcrumb class="breadcrumb-container" separator=">">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="
          (item.redirect && item.redirect === 'noRedirect') ||
          index === levelList.length - 1
        "
        class="no-redirect"
      >
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
// import { compile } from "path-to-regexp";
import { defineComponent, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Breadcrumb",
  setup(props, context) {
    const levelList = ref([]);
    const route = useRoute();
    const router = useRouter();

    const getBreadcrumb = () => {
      let matched = route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];
      if (first.path !== "/") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      levelList.value = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    };

    // const pathCompile = (path) => {
    //   var toPath = compile(path);
    //   return toPath(route.params);
    // };

    const handleLink = (item) => {
      const { redirect, path } = item;
      if (redirect) {
        router.push(redirect);
        return;
      }
      router.push(path);
    };

    getBreadcrumb();

    watch(route, (nVal) => {
      getBreadcrumb();
    });

    return {
      levelList,
      handleLink,
    };
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  // height: 60px;
  // line-height: 60px;
  // font-size: 14px;

  &.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
</style>
