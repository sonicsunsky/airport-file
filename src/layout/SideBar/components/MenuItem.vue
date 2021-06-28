<template>
  <el-menu-item
    v-if="routeChildren"
    :index="handlePath(routeChildren.path)"
    @click="handleLink"
  >
    <i
      v-if="routeChildren.meta && routeChildren.meta.icon"
      :class="['i-icon', routeChildren.meta.icon]"
    ></i>
    <span>{{ routeChildren.meta.title }}</span>
    <el-tag
      v-if="routeChildren.meta && routeChildren.meta.badge"
      type="danger"
      effect="dark"
    >
      {{ routeChildren.meta.badge }}
    </el-tag>
  </el-menu-item>
</template>

<script>
import { isExternal } from "@/utils/validate";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import path from "path-browserify";
console.log("path modules:", path);

export default defineComponent({
  name: "MenuItem",
  props: {
    routeChildren: {
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
    const route = useRoute();
    const router = useRouter();

    const handlePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      return path.resolve(props.basePath, routePath);
    };

    const handleLink = () => {
      if (props.routeChildren) {
        const routePath = props.routeChildren.path;
        const target = props.routeChildren.meta.target;
        const fullPath = path.resolve(props.basePath, routePath);

        if (target === "_blank") {
          if (isExternal(routePath)) {
            window.open(routePath);
          } else if (isExternal(props.basePath)) {
            window.open(props.basePath);
          } else if (route.path !== fullPath) {
            let routeData = router.resolve(fullPath);
            window.open(routeData.href);
          }
        } else {
          if (isExternal(routePath)) {
            window.location.href = routePath;
          } else if (isExternal(props.basePath)) {
            window.location.href = props.basePath;
          } else if (route.path !== fullPath) {
            router.push(fullPath);
          }
        }
      }
    };

    return {
      handlePath,
      handleLink,
    };
  },
});
</script>
