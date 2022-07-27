---
title: Quick start
meta:
  - name: description
    content: Quick start with composite-plus component library
---

# Quick start

You can refer to the [template project](https://github.com/tolking/element-admin-template) to use, or build it yourself through the following content

## Ready

You may need the vue3 version of the scaffolding tool before you start

- [vite](https://vitejs.dev/)
- [vue-cli](https://cli.vuejs.org/)

## Install

[![Latest tag via npm](https://img.shields.io/npm/v/composite-plus.svg?style=flat-square&logo=npm)](https://npmjs.com/package/composite-plus)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/composite-plus?label=minzip&logo=npm&style=flat-square)](https://npmjs.com/package/composite-plus)
[![Npm Last Updated](https://img.shields.io/badge/dynamic/json.svg?style=flat-square&logo=npm&label=last%20release&url=http%3A%2F%2Fregistry.npmjs.org%2Fcomposite-plus&query=$.time.modified)](https://www.npmjs.com/package/composite-plus)

```
npm i composite-plus
# or
yarn add composite-plus
# or
pnpm add composite-plus
```

## Fully import

```js
import { createApp } from "vue";
import App from "./App.vue";
import ElementPro from "composite-plus";
import "composite-plus/lib/styles/index";

const app = createApp(App);

app.use(ElementPro);
app.mount("#app");
```

## On demand

::: tip Tip
Since `0.12.0`, it is recommended to use the js file in the style folder imported on demand instead of the css file to avoid repeated references of styles.

Since `1.0.0`, support CommonJS by import `.cjs`
:::

### Recommended unplugin-vue-components

Installation and use view [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

- Configuration information

```js
{
  resolvers: [
    (name) => {
      if (name.startsWith('Pro')) {
        const fileName = name.slice(3).replace(/\B([A-Z])/g, '-$1').toLocaleLowerCase()
        return {
          importName: name,
          path: 'composite-plus',
          sideEffects: `composite-plus/lib/styles/${fileName}`
        }
      }
    }
  ],
}
```

### Use vite-plugin-style-import in vite

Installation and use view [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import)

- change vite.config

```js
import styleImport from "vite-plugin-style-import";

export default {
  plugins: [
    styleImport({
      libs: [
        {
          importTest: /^Pro/,
          libraryName: "composite-plus",
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `composite-plus/lib/styles/${name.slice(4)}.css`;
          }
        }
      ]
    })
  ]
};
```

### Use babel-plugin-import in vue-cli

Installation and use view [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

- change babel.config

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "composite-plus",
        customStyleName: (name) => {
          return `composite-plus/lib/styles/${name.slice(4)}.css`;
        }
      }
    ]
  ]
};
```

### By hand

example:

```js
import { ProLayout } from "composite-plus";
import "composite-plus/lib/styles/layout";
```

::: tip Tip
Component list reference [components](https://github.com/anncer/composite-plus/blob/master/src/components.ts)

In addition to components, you can also use some internal [utils](https://github.com/anncer/composite-plus/blob/master/src/utils/) or [composables](https://github.com/anncer/composite-plus/blob/master/src/composables/)
:::

## ~~Global config~~

::: danger Danger
Since `1.0.0`, The global configuration has been removed, it is recommended to use related components to pass parameters or internationalization
:::

## Start using

::: tip Tip
Document example based on [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html), If you are not familiar with the syntax, please visit the official document

If you use VS Code to develop, cooperate with [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) to provide complete components, prop, and event completion. example: input `<pro-` will list all components

If you use VS Code with typescript to develop, It is recommended to use plug-in [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar). Just add the global component type definition to the `tsconfig.json` file

```diff
{
  "compilerOptions": {
+    "types": ["composite-plus/types/components"]
  }
}
```

or

```diff
{
  "include": [
+   "node_modules/composite-plus/types/components.d.ts"
  ]
}
```

You can also add to the global type definition file, eg: env.d.ts

```diff
+ /// <reference types="composite-plus/types/components" />
```

If you use webstorm to develop, complete components, prop, and event completions
:::

<<< @/docs/src/layout/Layout.vue
