import { defineConfig } from 'vitepress'
import { defaultSidebar } from './defaultSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "Discovery and Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // 
      ...defaultSidebar.slice(1,4)
    ],

    sidebar: 
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
      defaultSidebar
    ,
    footer:{
      copyright:"Copyright © 2023-present hykids"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hykids' }
    ]
  }
})
