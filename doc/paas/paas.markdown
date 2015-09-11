---
layout: post

title: 演示平台使用手册
---


1. 演示平台手册 
-----

本手册主要描述 Coding.net 旗下 演示平台的相关功能说明。

相关参考资料： 
[演示平台部署文档](http://docs.coding.io)

CopyRight by Coding.net  更新时间 2015-09-01


2. 关于演示平台
--------

### 2.1 演示平台 ###

演示平台是 Coding.net 基于 Cloud Foundry 研发的一款应用部署 PaaS 平台，可以将程序部署运行在上面。
支持主流的语言和框架，具体语言和框架支持请查询：http://docs.coding.io/




### 2.2 演示平台用处 ###

演示平台可以将托管在 Coding 的项目代码进行部署运行，方便程序在公网测试和在线演示展示。

Coding 演示平台提供在线的公网运行环境和相关基础服务，如数据库服务，缓存服务，文件系统服务等。

用户可以在演示平台方便运行展示你的项目demo，包括 Web 网站，移动 H5 页面， 移动 App 后台等等。


### 2.3 演示平台主要功能###

 - 一键部署
 - 在线运行演示，免费版本24小时无访问挂起
 - 支持 coding.io 二级域名访问和独立域名(需选择香港服务器)
 - 提供第三方基础服务( DB, Redis, FileSystem )

3. 功能介绍
--------

### 3.1 开启演示 ###

#### 3.1.1 前提条件

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

### 3.1.2 开启演示

打开 Fork 后项目的 **演示** Tab，点击页面最下面检测应用下的 **开始检测** 按钮，系统会自动检测出此项目的语言：

![开启演示](https://dn-coding-net-production-pp.qbox.me/07d0da9f-0abe-408c-a16e-1d90a4526d22.png)

> 公开项目只能选择北京服务器，私有项目可以选择北京和香港 (需付费) 服务器，

然后勾选 “我已阅读并知道以上注意事项”，点击 **开启演示** 进入演示控制台。

![演示控制台](https://dn-coding-net-production-pp.qbox.me/3400d458-96a0-48eb-aca9-491b4fcbd3b7.png) 


### 3.2 部署应用

#### 3.2.1 一键部署


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


#### 3.2.2 访问应用

应用部署成功后，点击控制台页面上的 **马上访问** 按钮可以查看当前运行的应用：

![查看应用](https://dn-coding-net-production-pp.qbox.me/1308389d-6376-4e50-9727-f239a57fa87e.png) 


至此，java-hello 示例应用已经部署完成，可以把它的访问地址分享给其它人查看。

### 3.3 进阶使用

演示功能包含以下几个子模块，所有演示相关操作都是在此完成，完全通过图形界面操作（我们不提供命令行工具）。

- 控制台
- 查看日志
- 文件系统
- 环境变量
- 服务管理

控制台和日志功能上面已经介绍，这里不再重复，只介绍下面几个功能：

###  3.3.1 文件系统

Coding 对每个演示应用都提供一个 WebUI 的方式可以查看到应用实时的文件系统，这对于调试时查找问题来说有时候会很有用（只读，不支持在线编辑）

![文件系统](https://dn-coding-net-production-pp.qbox.me/70a0905c-e50f-4349-b477-0e8bf9e3ec67.png) 

同时文件系统的文件是无法在 WebUI 上传或下载的，但是文件系统服务的数据是可以导入导出的，进入文件系统服务的控制台，有备份和恢复按钮，可以导出和导入 zip 压缩文件。

演示应用程序可以读写文件系统的文件，也可以通过 Web 导入导出。 使用方法是应用直接读写连接信息里 host_path 里的路径。

文件系统部署详细说明参见 [文件系统](http://docs.coding.io/services/filesystem/)

### 3.3.2 环境变量

环境变量功能可以以图形界面的方式编辑应用运行时的环境变量（环境变量的改动，需要 **重启应用** 才能生效）。

![环境变量](https://dn-coding-net-production-pp.qbox.me/0f04744d-cfa1-4927-b2d8-1934e07a770b.png) 

关于在应用中如何使用环境变量参加 [环境变量](http://docs.coding.io/references/env/)

### 3.3.3 服务管理

大部分应用都会依赖数据库、缓存之类组件，这些在演示平台上都是以服务的方式提供的，演示平台目前支持以下第三方服务：

- [MySQL](http://docs.coding.io/services/mysql)
- [PostgreSQL](http://docs.coding.io/services/postgresql)
- [Redis](http://docs.coding.io/services/redis)
- [MongoDB](http://docs.coding.io/services/mysql/mongodb)
- [Filesystem](http://docs.coding.io/services/mysql/filesystem)

下面以 MySQL 为例来介绍如何添加并使用第三方服务。

#### 3.3.3.1 添加服务

点击服务管理页面右上角的 **添加服务** 按钮，在弹出窗口里选择 MySQL，输入服务名称并勾选 "绑定创建后的服务到此项目(可选)"：

![添加服务](https://dn-coding-net-production-pp.qbox.me/6bab0ff6-46ca-4931-8759-301829ae51d6.png) 

点击 **确定** 按钮创建服务，可以看到新创建的服务 mysql-test 已经出现在 “已绑定服务” 列表里了:

![服务列表](https://dn-coding-net-production-pp.qbox.me/ca0e4e37-f2af-49d5-871c-f9e1b2b7db4e.png) 


#### 3.3.3.2 绑定服务

服务必须绑定到应用上才可以使用，只有和服务绑定的应用才能使用该服务。在服务管理的 “可用服务” 的每个服务都有 **绑定** 按钮，
点击此按钮就可以把选定的服务绑定到当前应用了。由于上一步在创建服务的同时勾选了绑定到当前应用，这一步不需要做了。

> **提示：** 同一个服务可以绑定到多个应用，反过来一个应用也是可以绑定多个服务的。

#### 3.3.3.3 连接信息

在网页上可以查看已绑定服务的连接信息（连接信息也可以在应用运行时通过环境变量获取，[参考文档](http://docs.coding.io/services/)），应用通过此连接信息来使用服务：

![连接信息](https://dn-coding-net-production-pp.qbox.me/d35a086d-d6f6-4f72-b6db-74ccad3139ca.png) 


#### 3.3.3.4 服务控制台

服务控制台提供一个简单的网页界面来管理服务，可以在此执行服务数据的备份恢复，或者查询修改数据库数据等。

![服务控制台](https://dn-coding-net-production-pp.qbox.me/fe27ca53-d7cd-445f-817c-2a3a56a61e87.png)

4. 附录
---

语言支持

以下是演示平台目前支持的语言和示例项目，点击语言名称 可查看该语言文档，更多示例应用 »

语言|	示例
---| :----: 
[Java](http://docs.coding.io/languages/java/)	 | [Servlet](https://coding.net/u/demo/p/java-hello) [Spring](https://coding.net/u/demo/p/spring-hello)
[Ruby](http://docs.coding.io/languages/ruby/) | [Sinatra](https://coding.net/u/demo/p/ruby-hello) [Rails](https://coding.net/u/demo/p/rails-hello)
[Node.js](http://docs.coding.io/languages/nodejs/) | [Node](https://coding.net/u/demo/p/node-hello) [Express](https://coding.net/u/demo/p/express-hello) [2048 Static](https://coding.net/u/demo/p/node-2048)
[Go](http://docs.coding.io/languages/go/) |	[Go](https://coding.net/u/demo/p/go-hello) [Revel](https://coding.net/u/demo/p/revel-chat) 
[PHP](http://docs.coding.io/languages/php/) |	[PHP](https://coding.net/u/demo/p/php-hello) [WordPress](https://coding.net/u/demo/p/php-wordpress)
[Python](http://docs.coding.io/languages/python/) | [Flask](https://coding.net/u/demo/p/python-hello) [Tornado](https://coding.net/u/demo/p/python-tornado)
[Scala](http://docs.coding.io/languages/scala/) | [Scalatra](https://coding.net/u/demo/p/scala-hello) [Play! 1.x](https://coding.net/u/demo/p/play-hello) [Play! 2.x](https://coding.net/u/demo/p/play2-hello)
[HTML](http://docs.coding.io/languages/html/) | [Static](https://coding.net/u/demo/p/static-site) [Jekyll](https://coding.net/u/bluishoul/p/static-web)

服务支持

以下是演示平台目前提供的第三方服务，点击服务名称 可查看该服务文档：

服务|	使用场景
----|---|---
[MySQL](http://docs.coding.io/services/mysql/) |	关系型数据库 (RDBMS)  
[PostgreSQL](http://docs.coding.io/services/postgresql/)	| 关系型数据库 (RDBMS)   
[Redis](http://docs.coding.io/services/redis/) | 键值对缓存和存储 (key-value cache and store)  
[MongoDB](http://docs.coding.io/services/mongodb/) | 文档数据库 (document database)  
[Filesystem](http://docs.coding.io/services/filesystem/) | 文件持久化 (persistent filesystem)  

示例： https://coding.net/u/demo/p/node-2048