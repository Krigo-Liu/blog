import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Note",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      "MATH/SLDG/1d_SLDG.md",
      "MATH/Graph Theory/Chapter_1/Chapter_1.md"
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
