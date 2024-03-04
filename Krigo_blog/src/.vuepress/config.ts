import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "Krigo's 博客",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
