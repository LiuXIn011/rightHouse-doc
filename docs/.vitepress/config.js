module.exports = {
  // 网站标题
  title: '房适',
  // 网站描述
  description: '房适',
  // 打包目录
  dest: './dist',
  lang: 'zh-CN',
  base: '/RH-doc-release/',
  // 头部head
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/RH-doc-release/favicon.ico' }]
  ],
  // 使用插件
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
  ],
  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    // ],
    // 启动页面丝滑滚动
    smoothScroll: true,
    outline: {
      label: '本页目录'
    },
    returnToTopLabel:'↑回到顶部',
    sidebarMenuLabel:' ',
    darkModeSwitchLabel:'主题',
    footer: {
      message: '豫ICP备<a target="_blank" href="https://beian.miit.gov.cn/">2023012476</a>号',
      copyright: 'Copyright © 2023-present <a target="_blank" href="https://github.com/LiuXIn011">LiuXin</a>'
    },
    editLink: {
      pattern: 'https://github.com/LiuXIn011/rightHouse-doc/blob/master/docs/:path'
    },
    search: {
      provider: 'local',
      // options: {
      //   appId: '8J64VVRP8K',
      //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      //   indexName: 'vitepress'
      // }
    },
    // 导航栏配置
    nav: [
      { text: '概览', link: '/overview/' },
      { text: '开发', link: '/develop/environment/' },
      { text: '部署', link: '/arrange/' },
      { text: '赞赏', link: '/appreciate/' },
      { text: 'Github', link: 'https://github.com/LiuXIn011/rightHouse' },
      { text: 'Gitee', link: 'https://gitee.com/liuxin0128/right-house' },
    ],
    sidebar: {
      '/': [
        {
          text: '概览',
          link: '/overview/',
          items: [
            {
              text: '技术栈',
              link: '/overview/technologyStack/',
              items: [
                { text: '前端', link: '/overview/technologyStack/front' },
                { text: '服务端', link: '/overview/technologyStack/service' },
              ],
            },
            {
              text: '文件目录',
              link: '/overview/files/',
            },
            {
              text: '系统演示',
              link: '/overview/operate/',
            },
            {
              text: '需要准备的',
              link: '/overview/needs/',
            },
            {
              text: '后续规划',
              link: '/overview/expectation/',
            }
          ],
        },
        {
          text: '开发',
          link: '/develop/',
          items: [
            {
              text: '开发环境',
              link: '/develop/environment/',
            },
            {
              text: '配置',
              link: '/develop/options/',
            },
            {
              text: '启动',
              link: '/develop/start/',
            }
          ]
        },
        {
          text: '手动部署',
          link: '/arrange/',
          items: [
            {
              text: '服务器环境',
              link: '/arrange/environment/',
            },
            {
              text: '部署与启动',
              link: '/arrange/build/',
            },
            {
              text: '数据库备份',
              link: '/arrange/databaseBackup/',
            }
          ]
        },
        {
          text: 'Docker部署',
          link: '/docker/',
          items:[
            {
              text:"Compose部署",
              link:'/docker/dockerCompose/'
            },
            {
              text:"Compose常见问题",
              link:'/docker/dockerCompose/problem'
            }
          ]
        },
        {
          text: '赞赏',
          link: '/appreciate/'
        }
      ]
    },
  }
}
