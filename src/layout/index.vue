<template>
  <div class="layout-wrapper" :class="classObj">
    <div
      v-if="'horizontal' === layout"
      class="layout-container-horizontal"
      :class="{
        fixed: header === 'fixed',
        'no-tabs-bar': tabsBar === 'false' || tabsBar === false,
      }"
    >
      <div :class="header === 'fixed' ? 'fixed-header' : ''">
        <top-bar />
        <!-- <div
          v-if="tabsBar === 'true' || tabsBar === true"
          :class="{ 'tag-view-show': tabsBar }"
        >
          <div class="main">
            <tabs-bar />
          </div>
        </div> -->
      </div>

      <div class="main main-padding">
        <app-main />
      </div>
    </div>

    <div
      v-else
      class="layout-container-vertical"
      :class="{
        fixed: header === 'fixed',
        'no-tabs-bar': tabsBar === 'false' || tabsBar === false,
      }"
    >
      <div
        v-if="device === 'mobile' && collapse === false"
        class="mask"
        @click="handleFoldSideBar"
      />
      <side-bar />
      <div class="main" :class="collapse ? 'is-collapse-main' : ''">
        <div :class="header === 'fixed' ? 'fixed-header' : ''">
          <nav-bar />
          <!-- <tabs-bar v-if="tabsBar === 'true' || tabsBar === true" /> -->
        </div>
        <app-main />
      </div>
    </div>

    <el-backtop />
  </div>
</template>

<script>
import "@/styles/themes/dark.scss";
import "@/styles/themes/glory.scss";
import "@/styles/themes/green.scss";
import "@/styles/themes/ocean.scss";

import {
  defineComponent,
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import AppMain from "./AppMain/index.vue";
import NavBar from "./NavBar/index.vue";
import SideBar from "./SideBar/index.vue";
import TopBar from "./TopBar/index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    AppMain,
    NavBar,
    SideBar,
    TopBar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const oldLayout = ref("");
    const layout = computed(() => store.getters["settings/layout"]);
    const tabsBar = computed(() => store.getters["settings/tabsBar"]);
    const collapse = computed(() => store.getters["settings/collapse"]);
    const header = computed(() => store.getters["settings/header"]);
    const device = computed(() => store.getters["settings/device"]);

    // console.log("layout device: ", device.value);

    const classObj = computed(() => ({
      mobile: device.value === "mobile",
    }));

    onBeforeMount(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    onMounted(() => {
      oldLayout.value = layout.value;
      const userAgent = navigator.userAgent;
      const isMobile = handleIsMobile();
      if (isMobile) {
        //横向布局时如果是手机端访问那么改成纵向版
        store.dispatch("settings/changeLayout", "vertical");
        store.dispatch("settings/toggleDevice", "mobile");
        store.dispatch("settings/foldSideBar");
      } else {
        store.dispatch("settings/changeLayout", oldLayout.value);
        store.dispatch("settings/openSideBar");
      }

      // nextTick(() => {
      //   window.addEventListener(
      //     "storage",
      //     (e) => {
      //       if (e.key === "token" || e.key === null) window.location.reload();
      //       if (e.key === "token" && e.value === null) window.location.reload();
      //     },
      //     false
      //   );
      // });
    });

    watch(
      () => route,
      (nVal) => {
        if (device.value === "mobile" && !collapse.value) {
          store.dispatch("settings/foldSideBar");
        }
      }
    );

    const handleFoldSideBar = () => {
      store.dispatch("settings/foldSideBar");
    };

    const handleIsMobile = () => {
      return document.body.getBoundingClientRect().width - 1 < 992;
    };

    const handleResize = () => {
      if (!document.hidden) {
        const isMobile = handleIsMobile();
        if (isMobile) {
          //横向布局时如果是手机端访问那么改成纵向版
          store.dispatch("settings/changeLayout", "vertical");
          handleFoldSideBar();
        } else {
          store.dispatch("settings/changeLayout", oldLayout.value);
          handleFoldSideBar();
        }
        store.dispatch(
          "settings/toggleDevice",
          isMobile ? "mobile" : "desktop"
        );
      }
    };

    return {
      oldLayout,
      layout,
      tabsBar,
      collapse,
      header,
      device,
      classObj,
      handleFoldSideBar,
      handleResize,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin fix-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 97;
  width: 100%;
}

.layout-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .layout-container-horizontal {
    position: relative;

    &.fixed {
      padding-top: calc(65px + 55px);
    }

    &.fixed.no-tabs-bar {
      padding-top: 65px;
    }

    .main {
      width: 88%;
      margin: auto;
    }

    .fixed-header {
      @include fix-header;
    }

    .tag-view-show {
      background: #fff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }

    :deep(.nav-bar-container) {
      .fold-unfold {
        display: none;
      }
    }

    .main-padding {
      :deep(.app-main-container) {
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #fff;
      }
    }
  }

  .layout-container-vertical {
    position: relative;

    .mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 98;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: #000;
      opacity: 0.5;
    }

    &.fixed {
      padding-top: calc(60px + 55px);
    }

    &.fixed.no-tabs-bar {
      padding-top: 60px;
    }

    .main {
      position: relative;
      min-height: 100%;
      margin-left: 256px;
      background: #f6f8f9;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
        background 0s, color 0s, font-size 0s;

      .fixed-header {
        @include fix-header;

        left: 256px;
        width: calc(100% - 256px);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
          background 0s, color 0s, font-size 0s;
      }

      &.is-collapse-main {
        margin-left: 65px;

        .fixed-header {
          left: 65px;
          width: calc(100% - 65px);
        }
      }

      :deep(.nav-bar-container) {
        position: relative;
        box-sizing: border-box;
      }

      :deep(.tabs-bar-container) {
        box-sizing: border-box;
      }

      :deep(.app-main-container) {
        width: 100%;
        margin: 20px auto;
        background-color: #fff;
        border-radius: 2px;
      }
    }
  }

  /* 手机端开始 */
  &.mobile {
    .layout-container-vertical {
      :deep(.side-bar-container.is-collapse) {
        width: 0;
      }

      .main {
        width: 100%;
        margin-left: 0;

        .fixed-header {
          left: 0 !important;
          width: 100% !important;
        }
      }
    }
  }
  /* 手机端结束 */
}
</style>
