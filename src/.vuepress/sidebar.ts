import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "SLDG",
      icon: "book",
      prefix: "posts/MATH/SLDG",
      children: [
        "SLDG_Introduction",
      ],
    },
    //{
    //  text: "幻灯片",
    //  icon: "person-chalkboard",
    //  link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    //},
  ],
});
