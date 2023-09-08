import { defineConfig } from 'vitepress'
import { defaultSidebar } from './defaultSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/blog/",
  title: '✨Blog',
  logo: '/logo.svg',
  description: "Discovery and Documentation",
  themeConfig: {
    head:[
      ["link", {  rel: 'alternate icon',
      href: '/favicon.ico',
       }],
   ],
    nav: [
      { text: 'Home', link: '/' },
      // 
      ...defaultSidebar.slice(1,4)
    ],

    sidebar: defaultSidebar,
    footer:{
      copyright:"Copyright © 2023-present hykids"
    },
    editLink: {
      pattern: "https://github.com/Hykids/blog",
      text: "Edit this page on Gitlab",
    },
    lastUpdated: {
      text:"上次更新"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hykids' }
    ]
  }
})
