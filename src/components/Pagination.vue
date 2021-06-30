<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { ref, reactive, computed, toRefs } from "vue";
export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      },
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    background: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:page", "update:limit", "pagination"],
  setup(props, context) {
    const { emit } = context;
    const currentPage = computed({
      get() {
        return props.page;
      },
      set(val) {
        emit("update:page", val);
      },
    });
    const pageSize = computed({
      get() {
        return props.limit;
      },
      set(val) {
        emit("update:limit", val);
      },
    });

    const handleCurrentChange = (val) => {
      this.$emit("pagination", { page: val, limit: props.pageSize });
    };

    const handleSizeChange = (val) => {
      this.$emit("pagination", { page: props.currentPage, limit: val });
    };

    return {
      currentPage,
      pageSize,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style scoped>
.pagination-container {
  background-color: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
