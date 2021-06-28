<template>
  <el-breadcrumb class="breadcrumb-container" separator=">">
    <el-breadcrumb-item v-for="item in list" :key="item.path">
      <span v-if="item.meta.title">
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Breadcrumb",
  setup(props, context) {
    const route = useRoute();
    const getBreadcrumb = () => {
      return route.matched.filter((item) => item.meta.title);
    };
    const list = ref(getBreadcrumb());
    // console.log("Breadcrumb: ", list.value);
    watch(
      () => route,
      (nVal) => {
        list.value = getBreadcrumb();
      }
    );

    return {
      list,
    };
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  height: 60px;
  line-height: 60px;
  font-size: 14px;

  :deep(.el-breadcrumb__item) {
    .el-breadcrumb__inner {
      a {
        //   display: flex;
        //   float: left;
        font-weight: normal;
        color: #515a6e;

        i {
          margin-right: 3px;
        }
      }
    }

    &:last-child {
      .el-breadcrumb__inner {
        a {
          color: #999;
        }
      }
    }
  }
}
</style>
