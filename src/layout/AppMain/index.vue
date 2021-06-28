<template>
  <div class="app-main-container">
    <router-view v-slot="{ Component }" class="app-main-height">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { defineComponent, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "AppMain",
  setup(props, context) {
    const route = useRoute();
    const store = useStore();
    const device = computed(() => store.getters["settings/device"]);
    const key = computed(() => route.path);
    const routes = computed(() => store.getters["routes/routes"]);
    const cachedRoutes = computed(() => {
      let cachedRoutesArr = [];
      routes.value.forEach((item) => {
        if (item.meta && !item.meta.noKeepAlive) {
          cachedRoutesArr.push(item.name);
        }
      });
      return cachedRoutesArr;
    });

    watch(
      () => route,
      (newVal) => {
        if (device === "mobile") {
          store.dispatch("settings/foldSideBar");
        }
      },
      {
        immediate: true,
      }
    );

    return {
      device,
      cachedRoutes,
      key,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-main-container {
  position: relative;
  width: 100%;
  overflow: hidden;

  .app-main-height {
    min-height: calc(100vh - 60px -40px - 55px - 55px);
  }
}
</style>
