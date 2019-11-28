module.exports = {
  title: 'Longer\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
	// 你的GitHub仓库，请正确填写
    repo: 'https://github.com/longer008/blog',
	// 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav:[ // 导航栏配置
	  {text:'Home',link:'/'},
	  {text:'工具箱',link:'/blog/tools/FirstBlog.md'},
      {text: '前端', link: '/blog/fontend/fontend1.md' },
      {text: '后端', link: '/blog/backend/backend1.md'},
      {text: '百度', link: 'https://baidu.com'}      
    ],
	// 侧边栏配置
    sidebar: [
		['/','首页'],
		['/blog/tools/VuePress.md','我的第一篇博客']
	], 
    sidebarDepth: 2, // 侧边栏显示2级
	
  }
}