#Coding-manual 

## 使用 Jekyll 搭建的静态文档

所有文档使用 `markdown` 文件保存，由 `Jekyll` 编译成静态 `HTML` 后运行。`Coding` 文档主要分为两部分：1、常见问题；2、文档。

一. 常见问题 

位于根目录下的 faq 目录，按不同服务区分目录，目录下是常见问题对应的 `markdown` 文件，直接在此目录下建立对应服务的常见问题文档，使用 markdown 格式保存即可。

二. 文档

位于根目录下的 doc 目录，按不同服务区分目录，目录下是文档对应的 `markdown` 文件，直接在此目录下建立对应服务的说明文档，使用 markdown 格式保存即可。

三. 文档页面 Footer 导航

在 `markdown` 文件最下面嵌入一段 `HTML` 代码，以做 `Footer` 导航使用，只需要替换 `href` 后面的链接和 （上一篇：或者 下一篇：） 后面的文字即可。导航文章依据自己定义的文档阅读顺序。


```
  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/account/setting.html">上一篇：账户设置</a></div>
  <div class="right-nav"><a href="/help/doc/account/2fa.html">下一篇：两步认证</a><i class="fa fa-angle-right"></i></div>
  </div>
```


四. 侧边菜单栏维护

侧边栏菜单文件在 `_includes/sidebar.html` 文件中，如果熟悉或者了解 `HTML` 语法，请根据自己需要直接编辑该文件，如不熟悉 `HTML` 请不要修改此文件。


五. 构建和启动

- `Jekyll` 项目需要 `ruby` 环境，请自行安装 `ruby`
- 项目有使用到 `node` 构建 `js` 文件，需要 安装 `nodejs`
- 安装好 `nodejs` 之后 `npm install` 安装依赖，需要 `bower` 和 `gulp` 支持，使用命令 `npm install bower -g` 和 `npm install gulp -g` 安装 `bower` 和 `gulp`
- 准备 `cd coding-docs/react/configs/ && cp app.config.json.sample app.config.json` 
- 使用 `npm run init` 初始化
- 使用 `npm run start` 构建并启动，请注意在修改完样式后也需要重新执行该命令以生效

六. 版权

代码内容采用 [新 BSD 许可](LICENSE)

文档内容采用 [署名-禁止演绎 4.0 国际协议许可](https://creativecommons.org/licenses/by-nd/4.0/deed.zh)
