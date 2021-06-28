<template>
  <div class="top-bar-container">
    <div class="top-bar-main">
      <el-row>
        <el-col :xl="7" :lg="7" :md="7" :sm="7" :xs="7">
          <logo />
        </el-col>

        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <el-menu
            :background-color="colorVariables['menu-background']"
            :text-color="colorVariables['menu-color']"
            :active-text-color="colorVariables['menu-color-active']"
            :default-active="activeMenu"
            mode="horizontal"
            menu-trigger="hover"
          >
            <side-bar-item
              v-for="route in routes"
              :key="route.path"
              :item="route"
            />
          </el-menu>
        </el-col>

        <el-col :xl="5" :lg="5" :md="5" :sm="5" :xs="5">
          <div class="right-panel">
            <avatar />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import variables from "@/styles/variables.module.scss";
import { defineComponent, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import Logo from "../Logo/index.vue";
import SideBarItem from "../SideBar/SideBarItem.vue";
import Avatar from "../Avatar/index.vue";

export default defineComponent({
  name: "TopBar",
  components: {
    Logo,
    SideBarItem,
    Avatar,
  },
  setup(props, context) {
    const store = useStore();
    const route = useRoute();
    const state = reactive({});

    const routes = computed(() => store.getters["routes/routes"]);
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    const colorVariables = computed(() => variables);

    return {
      routes,
      activeMenu,
      colorVariables,
    };
  },
});
</script>
<style lang="scss" scoped>
.top-bar-container {
  height: 65px;
  background-color: #2f3447;

  .top-bar-main {
    background-color: #2f3447;

    :deep(.el-menu) {
      .i-icon {
        padding-right: 5px;
        font-size: 14px;
      }
    }

    :deep(.el-menu--horizontal) {
      display: flex;
      align-items: center;
      height: 65px;
      border-bottom: 0 solid transparent;

      .el-submenu,
      .el-menu-item {
        &.is-active {
          border-bottom: 0 solid transparent;

          .el-submenu__title {
            border-bottom: 0 solid transparent;
          }
        }
      }

      > .el-menu-item {
        height: 65px;
        line-height: 65px;
      }

      > .el-submenu {
        .el-submenu__title {
          height: 65px;
          line-height: 65px;
        }
      }
    }
  }

  .right-panel {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 65px;

    :deep(.user-name) {
      color: rgba(#fff, 0.9);

      > i {
        color: rgba(#fff, 0.9);
      }
    }

    :deep(svg) {
      width: 1em;
      height: 1em;
      margin-right: 15px;
      font-size: 16px;
      color: rgba(#fff, 0.9);
      cursor: pointer;
      fill: rgba(#fff, 0.9);
    }

    :deep(button) {
      svg {
        margin-right: 0;
        color: rgba(#fff, 0.9);
        cursor: pointer;
        fill: rgba(#fff, 0.9);
      }
    }

    :deep(.el-badge) {
      margin-right: 15px;
    }
  }
}
</style>
