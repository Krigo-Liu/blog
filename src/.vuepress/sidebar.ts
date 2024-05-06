import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "HPC",
      icon: "book",
      prefix:"posts/HPC/OpenMP",
      children:[
        "intro",
        "OpenMP_upwind",
      ]
    },

    {
      text: "Computational Mathematics",
      icon: "book",
      prefix: "posts/MATH/Computational Mathematics",
      children: "structure",
    },
    
    {
      text: "SLDG",
      icon: "book",
      prefix: "posts/MATH/SLDG",
      children: [
        "1d_SLDG",
      ],
    },
    //{
    //  text: "幻灯片",
    //  icon: "person-chalkboard",
    //  link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    //},
  ],
});
