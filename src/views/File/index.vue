<template>
  <div class="file">
    <el-dialog
      title="免责声明弹窗"
      v-model="showDisclaimer"
      width="50%"
      center
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <div class="disclaimer">
        <span>
          免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明
          免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明免责声明
        </span>
      </div>
      <template #footer>
        <div class="disclaimer-footer">
          <el-button type="primary" @click="showDisclaimer = false"
            >接受以上免责声明</el-button
          >
        </div>
      </template>
    </el-dialog>

    <el-dialog title="PDF预览" v-model="showPDFViewer" width="90%" center>
      <div class="pdf">
        <iframe :src="pdfSrc" width="400" height="400"></iframe>
        <!-- <pdf v-for="i in numPages" :key="i" :src="pdfSrc" :page="i"></pdf> -->
      </div>
    </el-dialog>

    <template v-if="device === 'mobile'">
      <div class="lay-mobile">
        <el-tree
          accordion
          default-expand-all
          :expand-on-click-node="false"
          :data="catalogData"
          :props="defaultProps"
          @node-click="handleTreeNodeClick"
        ></el-tree>

        <div class="search-input">
          <div class="title">文件搜索</div>
          <el-input
            v-model="keyword"
            placeholder="请输入查询文件的名称"
            @keyup.enter="onSearchFileList"
          >
            <template #append>
              <el-button
                icon="el-icon-search"
                @click="onSearchFileList"
              ></el-button>
            </template>
          </el-input>
        </div>

        <div class="file-table">
          <el-table
            v-loading="tableLoading"
            element-loading-text="文件加载中"
            element-loading-spinner="el-icon-loading"
            :data="fileList"
            stripe
            style="width: 100%"
            max-height="1000px"
          >
            <el-table-column prop="name" label="文件名称"></el-table-column>
            <el-table-column label="是否已读">
              <template #default="{ row }">
                <el-tag :type="row.status === 'read' ? 'success' : 'danger'">{{
                  row.status === "read" ? "已读" : "未读"
                }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column prop="date" label="上传时间"></el-table-column>

            <el-table-column label="操作">
              <template #default="{ row }">
                <el-button
                  type="text"
                  icon="el-icon-view"
                  @click="openFileDetail"
                >
                  查看详情
                </el-button>

                <el-button
                  v-if="row.role === 'admin'"
                  icon="el-icon-download"
                  type="text"
                  @click="handleDownloadFile(row)"
                  >下载</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>

        <el-pagination
          v-show="total > 0"
          background
          v-model:page-size="listQuery.limit"
          :page-sizes="[10, 20, 30, 50]"
          v-model:currentPage="listQuery.page"
          layout="prev, pager, next"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </template>

    <template v-else>
      <div class="lay-pc">
        <el-row type="flex" :gutter="10">
          <el-col :xs="8" :sm="8" :md="6" :lg="6" :xl="6">
            <el-tree
              accordion
              default-expand-all
              :expand-on-click-node="false"
              :data="catalogData"
              :props="defaultProps"
              @node-click="handleTreeNodeClick"
            ></el-tree>
          </el-col>

          <el-col :xs="16" :sm="16" :md="18" :lg="18" :xl="18">
            <div class="search-input">
              <div class="title">文件搜索</div>
              <el-input
                v-model="keyword"
                placeholder="请输入查询文件的名称"
                @keyup.enter="onSearchFileList"
              >
                <template #append>
                  <el-button
                    icon="el-icon-search"
                    @click="onSearchFileList"
                  ></el-button>
                </template>
              </el-input>
            </div>

            <div class="file-table">
              <el-table
                v-loading="tableLoading"
                element-loading-text="文件加载中"
                element-loading-spinner="el-icon-loading"
                :data="fileList"
                stripe
                style="width: 100%"
                max-height="1000px"
              >
                <el-table-column prop="name" label="文件名称"></el-table-column>
                <el-table-column label="是否已读">
                  <template #default="{ row }">
                    <el-tag
                      :type="row.status === 'read' ? 'success' : 'danger'"
                      >{{ row.status === "read" ? "已读" : "未读" }}</el-tag
                    >
                  </template>
                </el-table-column>

                <el-table-column prop="date" label="上传时间"></el-table-column>

                <el-table-column label="操作">
                  <template #default="{ row }">
                    <el-button
                      type="text"
                      icon="el-icon-view"
                      @click="openFileDetail(row)"
                      >查看详情</el-button
                    >

                    <el-button
                      v-if="row.role === 'admin'"
                      icon="el-icon-download"
                      type="text"
                      @click="handleDownloadFile(row)"
                      >下载</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <el-pagination
              v-show="total > 0"
              background
              v-model:page-size="listQuery.limit"
              :page-sizes="[10, 20, 30, 50]"
              v-model:currentPage="listQuery.page"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </el-col>
        </el-row>
      </div>
    </template>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  getCurrentInstance,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { treeData, createTableData } from "./data";
import { downloadFile } from "@/utils";
import Api from "@/api";

export default defineComponent({
  name: "File",
  // components: {
  //   pdf,
  // },
  setup() {
    console.log("getCurrentInstance: ", getCurrentInstance());
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const state = reactive({
      showDisclaimer: true,
      showPDFViewer: false,
      pdfSrc: "",
      numPages: 0,
      keyword: "",
      defaultProps: {
        children: "children",
        label: "label",
      },
      catalogData: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
      },
      tableLoading: false,
      fileList: [],
      //通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据
    });

    const device = computed(() => store.getters["settings/device"]);

    onMounted(() => {
      state.catalogData = [...treeData];
      state.total = 100;
      generateTableData();
    });

    const handleSizeChange = (val) => {
      state.listQuery.limit = val;
      fetchFileList();
    };

    const handleCurrentChange = (val) => {
      state.listQuery.page = val;
      fetchFileList();
    };

    const fetchFileList = () => {
      state.keyword = "";
      generateTableData();
      // getFileList();
    };

    const generateTableData = () => {
      state.tableLoading = true;
      const size = Math.floor(Math.random() * 10 + 1);
      console.log(size);
      setTimeout(() => {
        const list = createTableData(size);
        state.fileList = [...list];
        state.tableLoading = false;
      }, 500);
    };

    const handleTreeNodeClick = (e) => {
      console.log(e);
      generateTableData();
    };

    const onSearchFileList = () => {
      if (state.keyword.trim() === "") return;
      generateTableData();
      // getFileList();
    };

    const openFileDetail = ({ href }) => {
      router.push({ path: "/pdf", query: { href } });
    };

    const handleDownloadFile = ({
      download_url,
      name,
      mime = `application/pdf`,
    }) => {
      downloadFile(download_url, name);
      // Api.downloadFile(download_url, name, mime);
    };

    const loadNode = (node, resolve) => {
      if (node.level === 0) {
        return resolve([{ name: "region1" }, { name: "region2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              name: "zone" + state.count++,
            },
            {
              name: "zone" + state.count++,
            },
          ];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    };

    return {
      ...toRefs(state),
      device,
      openFileDetail,
      handleDownloadFile,
      onSearchFileList,
      fetchFileList,
      handleSizeChange,
      handleCurrentChange,
      handleTreeNodeClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
