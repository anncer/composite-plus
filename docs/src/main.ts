import { App, createApp as _createApp, createSSRApp } from "vue";
import { createRouter } from "./router/index";
import { createHead, HeadClient } from "@vueuse/head";

import IconExternalLink from "./components/IconExternalLink.vue";
import ProCode from "./components/ProCode.vue";
import Layout from "./App.vue";
import "./styles/index.css";
import type { Router } from "vue-router";

export function createApp(): {
  app: App<Element>;
  router: Router;
  head: HeadClient;
} {
  const app =
    import.meta.env.MODE === "production"
      ? createSSRApp(Layout)
      : _createApp(Layout);
  const router = createRouter();
  const head = createHead();

  app
    .use(router)
    .use(head)
    .component("IconExternalLink", IconExternalLink)
    .component("ProCode", ProCode);

  return { app, router, head };
}
