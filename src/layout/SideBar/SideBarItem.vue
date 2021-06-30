<template>
  <div v-if="item.meta && !item.hidden">
    <div class="menu-wrapper">
      <!-- 一级菜单 -->
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :index="item.path"
        @click="handleRouteLink"
      >
        <i v-if="item.meta.icon" :class="item.meta.icon" class="elIcon" />
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>

      <el-submenu v-else :index="item.path">
        <!-- 二级菜单 -->
        <template #title>
          <i v-if="item.meta.icon" :class="item.meta.icon" class="elIcon" />
          <span>{{ item.meta.title }}</span>
        </template>

        <side-bar-item
          v-for="child in item.children"
          :key="child.path"
          :index="child.path"
          :item="child"
        />
      </el-submenu>
    </div>
  </div>
</template>

<script>
import { isExternal } from "@/utils/validate";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const handleRouteLink = () => {
      if (props.item) {
        const routePath = props.item.path;

        if (isExternal(routePath)) {
          window.open(routePath);
          return;
        }

        if (route.path !== routePath) {
          router.push(routePath);
        }
      }
    };

    return {
      handleRouteLink,
    };
  },
});
</script>
