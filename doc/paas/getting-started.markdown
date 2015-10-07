---
layout: post

title: 开始使用演示平台
---



本章介绍如何开始使用演示平台。

### 开启演示 ###

#### 前提条件

  - Git 仓库不为空
  - 通过项目部署检测，代码仓库有相应的文件。
  - 拥有开启演示的权限( 目前只有项目拥有者 )

具体语言依赖以 Java 为例：

要求项目为 Maven 的 webapp 项目， 且项目根目录下必须存在 pom.xml 文件。
同时，项目还需要配置好 maven-war-plugin 插件， 以保证执行构建的时候可以生成 war 包。
详情可以参见 Java 语言支持：http://docs.coding.io/languages/java/

  - 项目演示功能仅作演示之用，不支持高并发访问。
  - 不作任何 SLA 保证，请不要在演示平台存储重要数据。

> **Demo**：

>登录到 Coding，打开公开项目 https://coding.net/u/demo/p/java-hello/git，点击右上角的 Fork 按钮将此项目 Fork 到你的账户里。
这样就 Fork 了一个 java-hello 的公开项目到你项目空间。

也可以创建你自己的私有项目。

### 开启演示

打开 Fork 后项目的 **演示** Tab，点击页面最下面检测应用下的 **开始检测** 按钮，系统会自动检测出此项目的语言：

![开启演示](https://dn-coding-net-production-pp.qbox.me/07d0da9f-0abe-408c-a16e-1d90a4526d22.png)

> 公开项目只能选择北京服务器，私有项目可以选择北京和香港 (需付费) 服务器，

然后勾选 “我已阅读并知道以上注意事项”，点击 **开启演示** 进入演示控制台。

![演示控制台](https://dn-coding-net-production-pp.qbox.me/3400d458-96a0-48eb-aca9-491b4fcbd3b7.png) 


### 部署应用

#### 一键部署


在控制台可以自定义应用的各种参数，包括部署的版本、访问域名、内存等，这里我们全部使用默认配置，直接点击 **一键部署** 按钮来部署应用。
部署过程中遇到了问题可以点击控制台页面上的 **常见问题解答** 链接查看一些常见问题的解决方法。控制台会后台自动更新应用当前的状态：

![应用状态](https://dn-coding-net-production-pp.qbox.me/d3869a80-4c55-4433-9e3c-751bb6ed9f27.png)

**查看日志**

演示平台中的应用日志包括该项目的演示部署及访问日志等，支持实时查看，主要是为了程序排错之用。
>注意：平台仅保留最近一千行应用日志。应用日志会进行不定期清理，如有重要日志，请及时保存


在部署的过程中可以通过 **查看日志** 功能看到应用当前的部署日志，通过日志可以检查部署过程中出现的各种问题。


这是此项目部署过程中的部分日志：

![应用日志](https://dn-coding-net-production-pp.qbox.me/670aa6f9-0b36-44fe-becb-3ef1c569ac5d.png) 


稍等一会待应用部署完成，回到控制台页面可以看到应用状态变为 **正在运行**，并且应用运行时的 CPU、内存、磁盘等状态数据也会显示出来：

![应用状态](https://dn-coding-net-production-pp.qbox.me/f2b9c351-e23c-4d87-a98b-106b294c2418.png) 


> 注意：演示平台不是开发平台，有新的代码提交和更新需要重新部署。


#### 访问应用

应用部署成功后，点击控制台页面上的 **马上访问** 按钮可以查看当前运行的应用：

![查看应用](https://dn-coding-net-production-pp.qbox.me/1308389d-6376-4e50-9727-f239a57fa87e.png) 


至此，java-hello 示例应用已经部署完成，可以把它的访问地址分享给其它人查看。

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/paas/index.html">上一篇：演示介绍</a></div>
  <div class="right-nav"><a href="/help/doc/paas/services.html">下一篇：服务管理</a><i class="fa fa-angle-right"></i></div>
  </div>


