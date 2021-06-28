<template>
  <el-submenu
    v-if="item && item.meta"
    ref="subMenu"
    :index="handlePath(item.path)"
    :popper-append-to-body="false"
  >
    <template #title>
      <i
        v-if="item.meta && item.meta.icon"
        :class="['i-icon', item.meta.icon]"
      ></i>
      <span>{{ item.meta.title }}</span>
    </template>

    <slot />
  </el-submenu>
</template>

<script>
import { isExternal } from "@/utils/validate";
import { defineComponent } from "vue";
import path from "path-browserify";

export default defineComponent({
  name: "Submenu",
  props: {
    routeChildren: {
      type: Object,
      default() {
        return null;
      },
    },
    item: {
      type: Object,
      default() {
        return null;
      },
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const handlePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      return path.resolve(props.basePath, routePath);
    };

    return {
      handlePath,
    };
  },
});
</script>
