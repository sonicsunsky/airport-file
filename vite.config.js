import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === "production" ? "/airport-file/" : "/",
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-color-default: #41b584;
        $base-color-gray:rgba(0, 0, 0, 0.65);
        $base-menu-background: #2f3447;
        $base-menu-color: hsla(0, 0%, 100%, 0.95);
        $base-menu-color-active: hsla(0, 0%, 100%, 0.95);
        $base-menu-background-active: $base-color-default;
        `,
      },
    },
  },
  //构建
  build: {
    sourcemap: true,
  },
});
