export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/使用指南/","indexes":[0,1,2,3]},"指南":{"path":"/category/指南/","indexes":[4]},"MATH":{"path":"/category/math/","indexes":[5,6]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/禁用/","indexes":[2]},"布局":{"path":"/tag/布局/","indexes":[4]},"Markdown":{"path":"/tag/markdown/","indexes":[3]},"页面配置":{"path":"/tag/页面配置/","indexes":[0]},"使用指南":{"path":"/tag/使用指南/","indexes":[0]},"MATH":{"path":"/tag/math/","indexes":[5,6]},"Computer Graphics":{"path":"/tag/computer-graphics/","indexes":[5]},"Numerical Method":{"path":"/tag/numerical-method/","indexes":[6]},"Computational Mathematics":{"path":"/tag/computational-mathematics/","indexes":[6]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

