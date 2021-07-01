<template>
  <div class="pdf">
    <iframe width="100%" height="1000" scrolling="no" :src="pdfSrc"></iframe>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "PDF",
  components: {},
  setup() {
    const route = useRoute();
    const pdfSrc = ref("");
    const getPDFUrl = () => {
      const baseUrl = import.meta.env.PROD
        ? "/web/viewer.html?file="
        : "/web/viewer.html?file=";
      const href = route.query.href;
      pdfSrc.value = `${baseUrl}${encodeURIComponent(href)}`;
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
