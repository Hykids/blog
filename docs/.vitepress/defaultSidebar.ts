import { DefaultTheme } from "vitepress";
// import vueConfig from "./vue";
// import engineerConfig from "./engineer";
// import reactConfig from "./react";
// import hcConfig from "./hc";
export const defaultSidebar: DefaultTheme.Sidebar = [
  {
    text: "Introduction",
    collapsed: true,
    items: [
      {
        text: "Getting Started",
        link: "/getting-started",
      },
    ],
  },
  {
    text:"JavaSE",
    collapsed: true,
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
            text:"Java基础",
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
    
  },
  {
    text:"框架",
    collapsed: true,
    items:[
      {
        text:"Vue",
        link:"/frameworks/vue"
      },{
        text:"React Hook",
        link:"/frameworks/react-hook"
      }
    ]
  },
  {
    text:"其他",
    collapsed: true,
    items:[
      {
        text:"资源整理",
        link:"/others/资源整理"
      },{
        text:"Latex学习",
        link:"/others/Latex学习日志"
      },
      {
        text:"PEGA学习",
        link:"/others/PEGA"
      },
    ]
  },



  
];