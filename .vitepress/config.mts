import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DMTR",
  description: "为移动端设备准备的新手文档",
  sitemap: {
    hostname: 'https://docs.lemwood.cn'
  },
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ], 
  
  themeConfig: {
    logo: '/icon.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: "取消"
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
      },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    editLink: {
      pattern: 'https://github.com/fcl-docs/fcl-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档首页', link: '/' },
      { text: '下载安装', link: '/docs/download' },
      { text: '渲染器插件', link: '/docs/plugins' },
      { text: '快速入门', link: '/docs/intro' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '下载与安装', link: '/docs/download' },
          { text: '快速入门（待移除）', link: '/docs/intro' }
        ]
      },
      {
        text: 'fcl启动器',
        items: [
          { text: '介绍', link: '/docs/fcl/intro' },
          { text: '不详细的功能介绍', link: '/docs/fcl/launcher/LATT' },
          { text: '禁忌的模组', link: '/docs/fcl/crash/mods' },
          { text: '崩溃处理方法', link: '/docs/fcl/crash/crash' },
          { text: '一部分崩溃的处理方式', link: '/docs/fcl/crash/crash-kx' },
          { text: '控件上传', link: '/docs/fcl/controler/cc' },
          { text: '创建新键位', link: '/docs/fcl/controler/nc' },
        ]
      },
      {
        text: '插件',
        items: [
          { text: '官方插件', link: '/docs/plugins/plugins' },
          { text: '衍生插件', link: '/docs/plugins/dplugins' },
        ]
      },
      {
        text: 'Vulkan mod',
        items: [
          { text: 'Vulkan mod', link: '/docs/vulkan/Vulkanmod' },
          { text: 'Android Lib', link: '/docs/vulkan/AndroidLib' },
          { text: 'VulkanAPI', link: '/docs/vulkan/VulkanAPI-Check' },
          { text: '成品VulkanMod', link: '/docs/vulkan/VulkanMod-Done' },
        ]
      },
      {
        text: '关于本站',
        items: [
          { text: 'README', link: '/README' },
          { text: '关于本站', link: '/docs/about' },
        ]
      },
    ],
  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FCL-Team/FoldCraftLauncher' }
    ],
    footer: {
      copyright: '© 2026 @DMTR教程编写 <p>此文档由玩家社区贡献，请忽与任何官方挂钩。</p>',
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-4</a>'
    }
  }
})
