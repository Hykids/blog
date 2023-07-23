import { DefaultTheme } from "vitepress";
// import vueConfig from "./vue";
// import engineerConfig from "./engineer";
// import reactConfig from "./react";
// import hcConfig from "./hc";
export const defaultSidebar: DefaultTheme.Sidebar = [
  {
    text: "Introduction",
    collapsible: true,
    items: [
      {
        text: "Getting Started",
        link: "/getting-started",
      },
    ],
  },
  {
    text:"Java学习笔记",
    items:[
        {
            text:"Java OOP",
            link:"/java/java-oop"
        },
        {
            text:"Object类相关",
            link:"/java/==&equals"
        },
        {
            text:"代码块",
            link:"/java/代码块"
        },
        {
          text:"设计模式",
          link:"/java/设计模式"
      },
        {
            text:"MySQL学习",
            link:"/java/MySQL"
        }
    ]
    
    
  }


  
];