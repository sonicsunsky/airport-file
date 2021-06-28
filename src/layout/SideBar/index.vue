<template>
  <el-scrollbar class="side-bar-container" :class="{ 'is-collapse': collapse }">
    <logo />

    <el-menu
      :background-color="colorVariables['menu-background']"
      :text-color="colorVariables['menu-color']"
      :active-text-color="colorVariables['menu-color-active']"
      :default-active="activeMenu"
      :collapse="collapse"
      :collapse-transition="false"
      :unique-opened="true"
      mode="vertical"
    >
      <side-bar-item
        v-for="route in routeList"
        :key="route.path"
        :index="route.path"
        :item="route"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import variables from "@/styles/variables.module.scss";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { constantRoutes } from "@/router";

import SideBarItem from "./SideBarItem.vue";
import Logo from "../Logo/index.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    SideBarItem,
    Logo,
  },
  setup(props, context) {
    //default-active:当前激活菜单的 index
    //default-openeds:当前打开的 sub-menu 的 index 的数组
    const routeList = ref([]);
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const collapse = computed(() => store.getters["settings/collapse"]);
    console.log("SideBar setup: ", route.matched);
    routeList.value = [...constantRoutes];

    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    const colorVariables = computed(() => variables);
    // console.log("variables:", variables);

    return {
      collapse,
      routeList,
      activeMenu,
      colorVariables,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin active {
  &:hover {
    color: #fff;
    background-color: #41b584 !important;
  }

  &.is-active {
    color: #fff;
    background-color: #41b584 !important;
  }
}

.side-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 256px;
  height: 100vh;
  overflow: hidden;
  background-color: $base-menu-background;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width 0.3s;

  &.is-collapse {
    width: 65px;
    // border-right: 0;

    :deep(.el-menu) {
      transition: width 0.3s;
    }

    :deep(.el-menu--collapse) {
      border-right: 0;
    }

    :deep(.el-submenu__icon-arrow) {
      right: 15px;
      margin-top: -3px;
    }
  }

  :deep(.el-scrollbar__wrap) {
    overflow-x: hidden;
  }

  :deep(.el-menu) {
    border: 0;

    .i-icon,
    .elIcon {
      font-size: 14px;
      color: #fff;
      padding-right: 5px;
    }
  }

  :deep(.el-menu-item),
  :deep(.el-submenu__title) {
    height: 50px;
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
  }

  :deep(.el-menu-item) {
    @include active;
  }
}
</style>
