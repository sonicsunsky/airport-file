<template>
  <component
    v-if="!item.hidden"
    :is="menuComponent"
    :item="item"
    :full-path="basePath"
    :route-children="routeChildren"
  >
    <template v-if="item.children && item.children.length">
      <side-bar-item
        v-for="route in item.children"
        :key="route.path"
        :base-path="handlePath(route.path)"
        :item="route"
      />
    </template>
  </component>
</template>

<script>
import { isExternal } from "@/utils/validate";
import { defineComponent, ref, reactive, computed } from "vue";
import MenuItem from "./MenuItem.vue";
import Submenu from "./Submenu.vue";
import { useRoute, useRouter } from "vue-router";
import path from "path-browserify";

export default defineComponent({
  name: "SideBarItem",
  components: {
    MenuItem,
    Submenu,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    // console.log("SideBarItem setup: ", path.resolve);
    const route = useRoute();
    const router = useRouter();

    let routeChildren = ref(null);

    const menuComponent = computed(() => {
      if (
        handleChildren(props.item.children, props.item) &&
        (!routeChildren.value.children ||
          routeChildren.value.notShowChildren) &&
        !props.item.alwaysShow
      ) {
        return "MenuItem";
      } else {
        return "Submenu";
      }
    });

    const handleChildren = (children = [], parent) => {
      if (children === null) children = [];
      const showChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          routeChildren.value = item;
          return true;
        }
      });

      if (showChildren.length === 1) {
        return true;
      }

      if (showChildren.length === 0) {
        routeChildren.value = {
          ...parent,
          path: "",
          notShowChildren: true,
        };
        return true;
      }

      return false;
    };

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
      menuComponent,
      routeChildren,
      handlePath,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.el-tag) {
  // float: right;
  // height: 16px;
  // padding-right: 4px;
  // padding-left: 4px;
  // margin-top: calc((50px - 16px) / 2);
  // line-height: 16px;
  // border: 0;
}
</style>
