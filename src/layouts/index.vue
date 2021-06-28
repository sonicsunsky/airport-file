<template>
  <div class="layout">
    <el-container v-if="showMenu" class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <img
              src="https://s.weituibao.com/1582958061265/mlogo.png"
              alt="logo"
            />
            <span>{{ logoTitle }}</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-active="currentPath"
        >
          <el-submenu index="1">
            <template #title>
              <span><i class="el-icon-s-home" />首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/file"
                ><i class="el-icon-document" />文件管理</el-menu-item
              >
              <el-menu-item index="/form"
                ><i class="el-icon-document" />表单</el-menu-item
              >
              <el-menu-item index="/websocket"
                ><i class="el-icon-document" />WebSocket</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <!-- <Header /> -->
        <el-main class="main">
          <router-view />
        </el-main>
        <!-- <Footer /> -->
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onUnmounted,
} from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Layouts",
  //   components: {
  //     Header,
  //     Footer
  //   },
  setup() {
    const noMenu = ["/login"];
    const router = useRouter();
    const state = reactive({
      logoTitle: "河南郑州机场",
      showMenu: true,
      currentPath: "/file",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;

  .container {
    height: 100vh;

    .aside {
      width: 200px !important;
      background-color: #222832;
      overflow: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      .head {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;

        > div {
          display: flex;
          align-items: center;

          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }

          span {
            font-size: 20px;
            color: #ffffff;
          }
        }
      }

      .line {
        border-top: 1px solid hsla(0, 0%, 100%, 0.05);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }

    .content {
      max-height: 100vh;
      overflow: hidden;
    }

    .main {
      height: calc(100vh - 100px);
      padding: 10px;
      overflow: auto;
    }
  }
}
</style>

<style>
</style>
