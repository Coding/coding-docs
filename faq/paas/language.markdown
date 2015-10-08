---
layout: post

title: 语言&框架支持常见问题
---

---

## 演示平台部署支持什么语言和框架？

演示平台支持主流的语言和框架，具体查看[演示部署文档](http://docs.coding.io/)

## Java 项目用到了非 Maven 中央库里的 jar 包？

如果你使用第三方的 maven 源，可以通过自定义 maven 配置文件来让系统使用你的自定义源，具体方法参考 Java 语言支持 的 自定义 章节。

## Java 项目打印出的日志乱码？

请在 pom.xml 配置文件里设置源文件的编码为 UTF-8，配置方法：

    <project>
        <properties>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        </properties>
    </project>

## Java Tomcat 是否支持设置 URIEncoding 选项？

不支持，URIEncoding 设置不能解决所有乱码问题，我们推荐用户自己通过编码解决编码问题，而不是依赖 Tomcat 的配置， 因为万一以后不使用 Tomcat 而换为其它没有这个配置选项的 Servlet 容器，还是会出现编码问题。解决方法可以参考 Tomcat 编码问题官方 FAQ，我们也给出了一个手工处理编码问题的 代码示例。

## 支持部署非 maven 的 Java 项目吗？

不支持，Java 语言目前只支持部署 maven 项目，我们不推荐把依赖的 jar 包放到版本控制里，请使用 maven 管理， maven 依赖会在部署时自动下载，详情参考 [Java 语言支持](http://docs.coding.io/languages/java/)。

## PHP 演示是否支持伪静态(url rewrite)?

支持，具体配置方法请参考 [PHP 语言支持](http://docs.coding.io/languages/php/) 的 Web 服务器 章节。

## PHP 的某个内置扩展无法使用？

部分 PHP 的内置扩展没有开启，需要用户手工配置 composer.json 来开启，详情参考 [PHP 语言支持](http://docs.coding.io/languages/php/) 的 扩展 章节。

## 低版本 PHP (5.5以下)支持？

我们只支持 5.5/5.6 版本的 PHP，如果需要使用更低的版本，可以通过自定义 buildpack 来实现，参考：

https://github.com/CHH/heroku-buildpack-php
https://github.com/iphoting/heroku-buildpack-php-tyler

## Node.js 如何执行 grunt/bower/npm 命令？

如果你需要在部署的时候执行一些额外的构建命令，可以在 package.json 中指定，具体方法参考 [Node.js 语言支持](http://docs.coding.io/languages/nodejs/)) 的 自定义构建 章节。

## ASP.NET 语言支持？

我们官方不提供 asp.net 的支持，但是用户可以通过自定义 [buildpack](http://docs.coding.io/references/buildpack/) 来实现支持（目前不是很完美）， 参考这两个社区 buildpack：[.net-buildpack](https://github.com/cloudfoundry-community/.net-buildpack) 和 [cloudfoundry-buildpack-clr](https://github.com/cloudfoundry-incubator/cloudfoundry-buildpack-clr)。

## 支持演示非 web 项目吗？

官方不提供非 web 项目支持，但可以通过自定义 buildpack 实现，有兴趣的用户可以自己参考 CF 和 heroku 的 buildpack 文档来研究。

---


<div class="footer-nav">
<div class="right-nav"><a href="/help/faq/paas/deploy.html">下一篇：演示部署问题</a><i class="fa fa-angle-right"></i></div>
</div>
