import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { name } from "../package.json";
import { camelize, toAbsolute } from "./utils";

export default defineConfig({
  build: {
    target: "es2015",
    outDir: toAbsolute("../lib"),
    lib: {
      entry: toAbsolute("../packages/components/index.ts"),
      name: camelize(name),
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      },
      external: (id: string) =>
        /^(vue|@vue|@vueuse|lodash)/.test(id)
    }
  },
  plugins: [vue()]
});
