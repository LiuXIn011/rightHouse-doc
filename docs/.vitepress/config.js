module.exports = {
  // 网站标题
  title: '房适',
  // 网站描述
  description: '房适',
  // 打包目录
  dest: './dist',
  base: '/',
  // 头部head
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    // ],
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      { text: '概览', link: '/overview/' },
      { text: '开发', link: '/develop/environment/' },
      { text: '部署', link: '/arrange/' },
      { text: 'Github', link: 'https://github.com/vuejs/vitepress' },
      { text: 'Gitee', link: 'https://github.com/vuejs/vitepress' },
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
              text: '操作逻辑',
              link: '/overview/operate/',
            },
            {
              text: '需要准备的',
              link: '/overview/needs/',
            },
            {
              text: '二期规划',
              link: '/overview/expectation/',
            }
          ],
        },
        {
          text: '开发',
          // link: '/develop/environment/',
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
          text: '部署',
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
        }
      ]
    },
  }
}
