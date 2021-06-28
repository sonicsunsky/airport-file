<template>
  <div class="nav-bar-container">
    <el-row :gutter="15">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>

          <breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>

      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="right-panel">
          <theme-bar class="hidden-xs-only" />
          <avatar />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Avatar from "../Avatar/index.vue";
import Breadcrumb from "../Breadcrumb/index.vue";
import ThemeBar from "../ThemeBar/index.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    Breadcrumb,
    Avatar,
    ThemeBar,
  },
  setup(props, context) {
    const store = useStore();
    const collapse = computed(() => store.getters["setting/collapse"]);
    const device = computed(() => store.getters["setting/device"]);
    const routes = computed(() => store.getters["routes/routes"]);
    const handleCollapse = () => {
      store.dispatch("settings/changeCollapse");
    };

    return {
      collapse,
      device,
      routes,
      handleCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav-bar-container {
  position: relative;
  height: 60px;
  padding: 0 20px;
  overflow: hidden;
  user-select: none;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 60px;

    .fold-unfold {
      color: rgba(0, 0, 0, 0.65);
      cursor: pointer;
    }

    :deep(.breadcrumb-container) {
      margin-left: 10px;
    }
  }

  .right-panel {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    height: 60px;

    :deep(svg) {
      width: 1em;
      height: 1em;
      margin-right: 15px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.65);
      cursor: pointer;
      fill: rgba(0, 0, 0, 0.65);
    }

    :deep(button) {
      svg {
        margin-right: 0;
        color: #fff;
        cursor: pointer;
        fill: #fff;
      }
    }

    :deep(.el-badge) {
      margin-right: 15px;
    }
  }
}
</style>
