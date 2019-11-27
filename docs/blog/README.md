# 使用 VuePress 搭建个人博客

## 一、为什么你需要一个博客？
优秀的程序员都在写博客，写博客有很多好处：
- 帮助自己梳理、总结、理解知识点（个人提升）
- 帮助别人理解知识点（好人一生平安）
- 简历更好看，更多面试机会（升职加薪）
## 二、什么是 VuePress，为什么要使用 VuePress ？
VuePress 是尤雨溪（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 [VuePress中文网](https://vuepress.docschina.org/)

其实类似的建站工具有很多，比如 WordPress、Jekyll、Hexo 等，其中 WordPress 需要自己购买虚拟主机，不考虑；Jekyll 是 Github-Page 默认支持的，听说操作比较复杂，没有用过不做过多评价了；Hexo 听人说主题不好看，风格不够简洁优雅。自从遇见 VuePress，嗯，就是它了~

VuePress 有很多优点：
- 界面简洁优雅（个人感觉比 HEXO 好看）
- 容易上手（半小时能搭好整个项目）
- 更好的兼容、扩展 Markdown 语法
- 响应式布局，PC端、手机端
- Google Analytics 集成
- 支持 PWA

## 三、开始搭建
1. 创建项目文件夹  
可以右键手动新建，也可以使用 mkdir 命令新建：
> mkdir vuepressDemo

2. **全局安装 VuePress**
> npm install -g vuepress

进入 vuepressDemo 文件夹，初始化项目
使用 npm init 或 npm init -y（默认yes）
> npm init -y

3. 创建文件夹和文件  
在 vuepressBlogDemo 文件夹中创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹和 config.js 文件，最终项目结构如下所示：
vuepressDemo
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json

4. 在 config.js 文件中配置网站标题、描述、主题等信息
```js
module.exports = {
  title: 'Longer\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
```

5. 在 package.json 文件里添加两个启动命令
```json
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
}
```
6. 一切就绪 :tada: 跑起来看看吧
> npm run dev

## 四、一些小亮点
完成了基础搭建后，就可以在docs目录下新建 .md 文件写文章了（.md 是 Markdown 语法文件，你需要知道 Markdown 的一些基本写法，很简单，这里有一份 [Markdown 语法整理大集合](https://www.jianshu.com/p/b03a8d7b1719)）

一些实用的方法如下：

**代码块高亮**
在 .md 文件中书写代码时，可在3个`后增加 js、html、json等格式类型，代码块即可按照指定类型高亮
```js
export default{
	data(){
		return{
			msg:'Highlighted!'
		}
	}
}
```

**自定义容器**
代码：

::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

**支持Emoji**
代码：

:tada: :100: :bamboo: :gift_heart: :fire:
这里有一份 [Emoji 大全](https://www.webfx.com/tools/emoji-cheat-sheet/)

**支持 PWA**
VuePress 默认支持 [PWA](https://segmentfault.com/a/1190000012353473)，配置方法如下：

config.js 文件中增加
```
head: [ // 注入到当前页面的 HTML <head> 中的标签
  ['link', { rel: 'manifest', href: '/photo.jpg' }],
  ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
],
serviceWorker: true // 是否开启 PWA
```

public 文件夹下新建 manifest.json 文件，添加
```json
{
  "name": "Longer",
  "short_name": "Longer",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#2196f3",
  "description": "Longer的个人主页",
  "theme_color": "blue",
  "icons": [
    {
      "src": "./photo.jpg",
      "sizes": "144x144",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}

```
最后在 iPhone 的 safrai 浏览器中打开本网站，点击 +添加到主屏幕 就能在桌面看到一个像原生 App 一样的图标（感觉自己写了一个 App 有木有/smile）

## 部署上线
说了这么多都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。

一般来说，有两种方案可供选择：
	1. 自己买一个服务器，阿里云、腾讯云等，这种方式的好处是速度有保证、可以被搜索引擎收录，坏处是要花钱啊 moneybag 土豪同学可以考虑。
	2. 使用 [Github Pages](https://pages.github.com/) 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。
	
下面使用 Github Pages 服务。

**登陆 Github**
打开 github 网站，登陆自己的 github 账号（没有账号的快去注册并面壁思过作为一个优秀的程序员为啥连一个github账号都没有）

接着我们新建两个仓库，
