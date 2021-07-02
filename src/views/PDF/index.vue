<template>
  <div class="pdf">
    <pdf :url="pdfSrc" />
    <!-- <iframe width="100%" height="1000" scrolling="no" :src="pdfSrc"></iframe> -->
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import pdf from "@/components/PDF/index.vue";

export default {
  name: "PDF",
  components: {
    pdf,
  },
  setup() {
    const route = useRoute();
    const pdfSrc = ref("");
    const getPDFUrl = () => {
      const href = route.query.href;
      pdfSrc.value = href;
      console.log("pdfSrc:", pdfSrc.value);
    };

    onMounted(() => {
      getPDFUrl();
    });

    return {
      pdfSrc,
    };
  },
};
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
@import "./index.scss";
</style>
