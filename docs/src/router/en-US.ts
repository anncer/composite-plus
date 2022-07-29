import { markRaw } from "vue";
import { House, TakeawayBox } from "@element-plus/icons-vue";
import Layout from "../layout/Layout.vue";
import type { RouteRecordRaw } from "vue-router";

const enUS: RouteRecordRaw[] = [
  {
    path: "/en-US/",
    redirect: "/en-US/guide/",
    component: Layout,
    meta: { title: "Guide", icon: markRaw(House) },
    children: [
      {
        path: "/en-US/guide/introduction",
        component: () => import("../../examples/en-US/guide/introduction.md"),
        meta: { title: "Introduction" }
      },
      {
        path: "/en-US/guide/",
        component: () => import("../../examples/en-US/guide/index.md"),
        meta: { title: "Quick Start" }
      },
      {
        path: "/en-US/guide/i18n",
        component: () => import("../../examples/en-US/guide/i18n.md"),
        meta: { title: "Internationalization" }
      },
      {
        path: "/en-US/guide/theme",
        component: () => import("../../examples/en-US/guide/theme.md"),
        meta: { title: "Custom Theme" }
      },
      {
        path: "/en-US/guide/router",
        component: () => import("../../examples/en-US/guide/router.md"),
        meta: { title: "Router and Menu" }
      },
      {
        path: "/en-US/guide/changelog",
        component: () => import("../../../CHANGELOG.md"),
        meta: { title: "Changelog" }
      }
    ]
  }
  // {
  //   path: "/en-US/components/",
  //   redirect: "/en-US/components/layout",
  //   component: Layout,
  //   meta: { title: "Components", icon: markRaw(TakeawayBox) },
  //   children: [
  //     {
  //       path: "/en-US/components/layout",
  //       component: () => import("../../examples/en-US/components/Layout.md"),
  //       meta: { title: "Layout" }
  //     },
  //     {
  //       path: "/en-US/components/card",
  //       component: () => import("../../examples/en-US/components/Card.md"),
  //       meta: { title: "Card" }
  //     },
  //     {
  //       path: "/en-US/components/menu",
  //       component: () => import("../../examples/en-US/components/Menu.md"),
  //       meta: { title: "Menu" }
  //     },
  //     {
  //       path: "/en-US/components/breadcrumb",
  //       component: () => import("../../examples/en-US/components/Breadcrumb.md"),
  //       meta: { title: "Breadcrumb" }
  //     },
  //     {
  //       path: "/en-US/components/tabs",
  //       component: () => import("../../examples/en-US/components/Tabs.md"),
  //       meta: { title: "Tabs" }
  //     },
  //     {
  //       path: "/en-US/components/link",
  //       component: () => import("../../examples/en-US/components/Link.md"),
  //       meta: { title: "Link" }
  //     },
  //     {
  //       path: "/en-US/components/form",
  //       component: () => import("../../examples/en-US/components/Form.md"),
  //       meta: { title: "Form" }
  //     },
  //     {
  //       path: "/en-US/components/radio",
  //       component: () => import("../../examples/en-US/components/Radio.md"),
  //       meta: { title: "Radio" }
  //     },
  //     {
  //       path: "/en-US/components/checkbox",
  //       component: () => import("../../examples/en-US/components/Checkbox.md"),
  //       meta: { title: "Checkbox" }
  //     },
  //     {
  //       path: "/en-US/components/select",
  //       component: () => import("../../examples/en-US/components/Select.md"),
  //       meta: { title: "Select" }
  //     },
  //     {
  //       path: "/en-US/components/tree-select",
  //       component: () => import("../../examples/en-US/components/TreeSelect.md"),
  //       meta: { title: "TreeSelect" }
  //     },
  //     {
  //       path: "/en-US/components/input-tag",
  //       component: () => import("../../examples/en-US/components/InputTag.md"),
  //       meta: { title: "InputTag" }
  //     },
  //     {
  //       path: "/en-US/components/table",
  //       component: () => import("../../examples/en-US/components/Table.md"),
  //       meta: { title: "Table" }
  //     },
  //     {
  //       path: "/en-US/components/crud",
  //       component: () => import("../../examples/en-US/components/Crud.md"),
  //       meta: { title: "Crud" }
  //     },
  //     {
  //       path: "/en-US/components/column-setting",
  //       component: () => import("../../examples/en-US/components/ColumnSetting.md"),
  //       meta: { title: "ColumnSetting" }
  //     },
  //     {
  //       path: "/en-US/components/descriptions",
  //       component: () => import("../../examples/en-US/components/Descriptions.md"),
  //       meta: { title: "Descriptions" }
  //     }
  //   ]
  // }
];

export default enUS;
