      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,8,1,2,3,5,4,9,6,7,10]}},"star":{"/":{"path":"/star/","indexes":[0]}},"timeline":{"/":{"path":"/timeline/","indexes":[0]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      