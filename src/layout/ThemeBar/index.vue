<template>
  <div v-if="themeBar">
    <!-- <i class="el-icon-s-platform" @click=""></i> -->
    <div class="theme-bar-setting">
      <div @click="handleOpenThemeBar">
        <i class="i-icon el-icon-s-platform"></i>
        <p>主题配置</p>
      </div>
    </div>

    <el-drawer
      title="主题配置"
      v-model="drawerVisible"
      direction="rtl"
      append-to-body
      size="470px"
    >
      <el-scrollbar style="height: 94vh; overflow: hidden">
        <div class="el-drawer__body">
          <el-form :ref="themeForm" :model="theme" label-position="top">
            <el-form-item label="主题">
              <el-radio-group v-model="theme.name">
                <el-radio-button label="dark">暗黑之子</el-radio-button>
                <el-radio-button label="green">绿荫草场</el-radio-button>
                <el-radio-button label="ocean">海洋之心</el-radio-button>
                <el-radio-button label="glory">荣耀典藏</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="布局">
              <el-radio-group v-model="theme.layout">
                <el-radio-button label="vertical">纵向布局</el-radio-button>
                <el-radio-button label="horizontal">横向布局</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="头部">
              <el-radio-group v-model="theme.header">
                <el-radio-button label="fixed">固定头部</el-radio-button>
                <el-radio-button label="noFixed">不固定头部</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="多标签">
              <el-radio-group v-model="theme.tabsBar">
                <el-radio-button label="true">开启</el-radio-button>
                <el-radio-button label="false">不开启</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSaveTheme">
                保存
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  computed,
  onMounted,
} from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ThemeBar",
  setup() {
    const store = useStore();
    const themeForm = ref(null);

    const initState = () => ({
      drawerVisible: false,
      theme: {
        name: "ocean",
        layout: "",
        header: "fixed",
        tabsBar: "",
      },
    });

    let state = reactive(initState());

    const layout = computed(() => store.getters["settings/layout"]);
    const header = computed(() => store.getters["settings/header"]);
    const tabsBar = computed(() => store.getters["settings/tabsBar"]);
    const themeBar = computed(() => store.getters["settings/themeBar"]);

    onMounted(() => {
      const theme = localStorage.getItem("vue3-admin-theme");
      if (theme) {
        state.theme = Object.assign({}, JSON.parse(theme));
        handleSetTheme();
      } else {
        state.theme.layout = layout.value;
        state.theme.header = header.value;
        state.theme.tabsBar = tabsBar.value;
      }
    });

    const handleIsMobile = () => {
      return document.body.getBoundingClientRect().width - 1 < 992;
    };

    const handleOpenThemeBar = () => {
      state.drawerVisible = true;
    };

    const handleSaveTheme = () => {
      handleSetTheme();
    };

    const changeLayout = () => {
      store.dispatch("settings/changeLayout");
    };

    const changeHeader = () => {
      store.dispatch("settings/changeHeader");
    };

    const changeTabsBar = () => {
      store.dispatch("settings/changeTabsBar");
    };

    const handleSetTheme = () => {
      const { name, layout, header, tabsBar } = state.theme;

      localStorage.setItem(
        "vue3-admin-theme",
        `{
            "name":"${name}",
            "layout":"${layout}",
            "header":"${header}",
            "tabsBar":"${tabsBar}"
          }`
      );

      if (!handleIsMobile()) changeLayout(layout);
      changeHeader(header);
      changeTabsBar(tabsBar);
      document.getElementsByTagName(
        "body"
      )[0].className = `vue3-admin-theme-${name}`;
      state.drawerVisible = false;
    };

    return {
      themeForm,
      ...toRefs(state),
      themeBar,
      handleOpenThemeBar,
      handleSaveTheme,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin right-bar {
  position: fixed;
  right: 0;
  z-index: 99;
  width: 60px;
  min-height: 60px;
  text-align: center;
  cursor: pointer;
  background: #41b584;
  border-radius: 2px;

  > div {
    padding-top: 10px;
    border-bottom: 0 !important;

    .i-icon {
      font-size: 20px;
      color: #fff;
    }

    &:hover {
      opacity: 0.9;
    }

    & + div {
      border-top: 1px solid #fff;
    }

    p {
      padding: 0;
      margin: 0;
      font-size: 12px;
      line-height: 30px;
      color: #fff;
    }
  }
}

.theme-bar-setting {
  @include right-bar;
  top: calc((100vh - 110px) / 2);

  :deep(.svg-icon) {
    display: block;
    margin-right: auto;
    margin-left: auto;
    font-size: 20px;
    color: #fff;
    fill: #fff;
  }
}

.el-drawer__body {
  padding: 20px;
}
</style>

<style lang="scss">
.el-drawer__wrapper {
  outline: none !important;

  * {
    outline: none !important;
  }
}
</style>
