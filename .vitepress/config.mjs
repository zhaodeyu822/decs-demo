import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/", // GitHub Pages 部署需要修改
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],

  title: "赵德玉的学习笔记",
  description: "A VitePress Site",
  themeConfig: {
    // 设置搜索框的样式
search: {
  provider: "local",
  options: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        noResultsText: "无法找到相关结果",
        resetButtonTitle: "清除查询条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
        },
      },
    },
  },
},

    outline: 'deep',
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家',items:[
        {text:'首页',link:'/'},
        {text:'markdown示例',link:'markdown-examples'}
      ]},
      { text: '示例', link: '/markdown-examples' },
      { text: '自动生成侧边栏', link: '/front-end/react/' },
      { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
    ],

     sidebar: [
      {text: 'Examples1',
        items: [
          { text: 'Markdown演示', link: '/markdown-examples' },
          { text: '运行API演示', link: '/api-examples' }
       ]
      },
      {text: 'Examples2',
        items: [
          { text: 'Markdown Examples2', link: '/markdown-examples' },
          { text: 'Runtime API Examples2', link: '/api-examples' }
       ]
      },
    ],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    sidebar: {
      "/front-end/react": set_sidebar("front-end/react"),
      "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhaodeyu822' }
    ],
    footer:{
      copyright:"Copyright @ 2025-present Zhaodeyu"
    }
        
    
  }
})
