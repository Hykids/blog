import { defineConfig } from "islandjs";
import { defaultSideBar } from "./defaultSidebar";

export default defineConfig({
  title: "blog",
  base: "/blog/",
  themeConfig: {
    nav: defaultSideBar,
    socialLinks: [{ icon: "github", link: "https://github.com/Hykids" }],
    editLink: {
      pattern: "https://github.com/Hykids/blog",
      text: "Edit this page on Github",
    },
    footer: {
      copyright: "© 2023 Hykids. All rights reserved. Powered by Island",
    },
    sidebar: {
      "/": defaultSideBar,
    },
  },
});
