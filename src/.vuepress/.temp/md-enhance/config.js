import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "./mathjax.css";
import Tabs from "/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/krigo.github.io/Krigo_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
