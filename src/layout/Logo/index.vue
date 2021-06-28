<template>
  <div :class="'logo-container-' + layout">
    <router-link to="/">
      <!-- 这里是logo变更的位置 -->
      <i v-if="logo" class="logo" :class="[logo]"></i>
      <span
        class="title"
        :class="{ 'hidden-xs-only': layout === 'horizontal' }"
      >
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import Config from "@/config";

export default defineComponent({
  name: "Logo",
  setup(props, context) {
    const store = useStore();
    const title = ref("机场文件管理系统");
    const logo = computed(() => store.getters["settings/logo"]);
    const layout = computed(() => store.getters["settings/layout"]);

    return {
      title,
      logo,
      layout,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin container {
  position: relative;
  height: 65px;
  overflow: hidden;
  line-height: 65px;
  background-color: $base-menu-background;
}

@mixin logo {
  display: inline-block;
  width: 28px;
  height: 28px;
  color: #fff;
  margin-right: 3px;
  vertical-align: middle;
}

@mixin title {
  display: inline-block;
  font-size: 18px;
  line-height: 55px;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}

.logo-container-horizontal {
  @include container;

  .logo {
    @include logo;
  }

  .title {
    @include title;
  }
}

.logo-container-vertical {
  @include container;
  height: 75px;
  line-height: 75px;
  text-align: center;

  .logo {
    @include logo;
  }

  .title {
    @include title;
    // max-width: calc(256px - 60px);
  }
}
</style>
