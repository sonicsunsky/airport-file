<template>
  <div class="pdf-view">
    <div :style="{ width: pdfWidth, margin: `0 auto` }">
      <canvas
        v-for="page in totalPage"
        :id="'pdfCanvas' + page"
        :key="page"
      ></canvas>
    </div>
  </div>
</template>

<script>
import * as PDFJS from "pdfjs-dist/legacy/build/pdf.js";
console.log(PDFJS)
PDFJS.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.js`;
import { reactive, watch, computed, toRefs, nextTick } from "vue";

export default {
  name: "PDF",
  props: {
    // PDF 文件的实际链接
    url: {
      type: String,
      default: "",
    },
    watermark: {
      type: String,
      default: "测试水印内容",
    },
  },
  setup(props, context) {
    const state = reactive({
      currentPage: 1,
      totalPage: 1,
      width: 0,
      height: 0,
      pdfWidth: "",
      pdfDoc: null,
      // 是否位于队列中
      rendering: false,
    });

    const firstPage = computed(() => state.currentPage <= 1);
    const lastPage = computed(() => state.currentPage >= state.totalPage);

    watch(
      () => props.url,
      (nVal) => {
        if (!nVal) return;
        _initPdf();
      },
      {
        immediate: true,
      }
    );

    // 跳转到首页
    const firstPageHandler = () => {
      if (firstPage) {
        return;
      }
      state.currentPage = 1;
      _renderQueue();
    };

    // 跳转到尾页
    const lastPageHandler = () => {
      if (lastPage) {
        return;
      }
      state.currentPage = state.totalPage;
      _renderQueue();
    };

    // 上一页
    const previousPage = () => {
      if (firstPage) {
        return;
      }

      state.currentPage--;
      _renderQueue();
    };

    // 下一页
    const nextPage = () => {
      if (lastPage) {
        return;
      }

      state.currentPage++;
      _renderQueue();
    };

    const _getRatio = (ctx) => {
      let dpr = window.devicePixelRatio || 1;
      let bspr =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
      return dpr / bspr;
    };

    const _initPdf = () => {
      PDFJS.getDocument(props.url).promise.then((doc) => {
        // 文档对象
        state.pdfDoc = doc;
        // 总页数
        state.totalPage = doc.numPages;
        // 渲染页面
        nextTick(() => {
          _renderPage();
        });
      });
    };

    const _renderPage = () => {
      // 队列开始
      state.rendering = true;

      state.pdfDoc.getPage(state.currentPage).then((page) => {
        // let canvas = document.querySelector("#pdfCanvas");
        let canvas = document.getElementById(`pdfCanvas${state.currentPage}`);
        let ctx = canvas.getContext("2d");
        // 获取页面比率
        let ratio = _getRatio(ctx);
        // 根据页面宽度和视口宽度的比率就是内容区的放大比率
        //page.view 是一个数组，里面有四个值，分别是 x轴偏移量、y轴偏移量、宽度、高度
        // let dialogWidth =
        //   state.$refs["pdfDialog"].$el.querySelector(".el-dialog").clientWidth -
        //   40;
        // let pageWidth = page.view[2] * ratio;
        // let scale = dialogWidth / pageWidth;
        let viewport = page.getViewport({ scale: 1.0 });
        // 记录内容区宽高，后期添加水印时需要
        state.width = viewport.width * ratio;
        state.height = viewport.height * ratio;
        canvas.width = state.width;
        canvas.height = state.height;

        canvas.style.width = viewport.width + "px";
        canvas.style.height = viewport.height + "px";
        state.pdfWidth = viewport.width + "px";
        // 缩放比率
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        page
          .render({
            canvasContext: ctx,
            viewport,
          })
          .promise.then(() => {
            if (state.currentPage < state.totalPage) {
              state.rendering = false;
              _renderWatermark(); // 渲染水印
              state.currentPage += 1;
              _renderPage();
            }
          });
      });
    };

    const _renderQueue = () => {
      if (state.rendering) {
        return;
      }
      _renderPage();
    };

    const _initWatermark = () => {
      let canvas = document.createElement("canvas");
      canvas.width = 200;
      canvas.height = 200;

      let ctx = canvas.getContext("2d");
      ctx.rotate((-18 * Math.PI) / 180);
      ctx.font = "14px Vedana";
      ctx.fillStyle = "rgba(200, 200, 200, .3)";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(props.watermark, 50, 50);

      return canvas;
    };

    const _renderWatermark = () => {
      //   let canvas = document.querySelector("#pdfCanvas");
      let canvas = document.getElementById(`pdfCanvas${state.currentPage}`);
      let ctx = canvas.getContext("2d");

      // 平铺水印
      let pattern = ctx.createPattern(_initWatermark(), "repeat");
      ctx.rect(0, 0, state.width, state.height);
      ctx.fillStyle = pattern;
      ctx.fill();
    };

    return {
      ...toRefs(state),
      firstPage,
      lastPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pdf-view {
}
</style>
