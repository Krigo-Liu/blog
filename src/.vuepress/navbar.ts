import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "SLDG",
    icon: "pen-to-square",
    prefix: "/posts/MATH/SLDG",
    children: [
      "1d_SLDG.md",
    ],
  },

  {
    text: "HPC",
    icon: "pen-to-square",
    prefix: "/posts/HPC/OpenMP",
    children:[
      
      "OpenMP_upwind",
    ]
  },

  //{
  //  text: "Graph Theory",
  //  icon: "pen-to-square",
  //  prefix: "/posts/MATH/Graph Theory/",
  //  children: [
  //    "Chapter_1/Chapter_1.md",
  //    "Basic_concept.md",
  //    "InClass/",
  //  ],
  //},
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
