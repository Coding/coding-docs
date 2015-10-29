---
layout: post

title: 演示平台进阶功能
---

### 进阶使用

演示功能包含以下几个子模块，所有演示相关操作都是在此完成，完全通过图形界面操作（我们不提供命令行工具）。

- 控制台
- 查看日志
- 文件系统
- 环境变量
- 服务管理

控制台和日志功能上面已经介绍，这里不再重复，只介绍下面几个功能：

### 文件系统

Coding 对每个演示应用都提供一个 WebUI 的方式可以查看到应用实时的文件系统，这对于调试时查找问题来说有时候会很有用（只读，不支持在线编辑）

![文件系统](https://dn-coding-net-production-pp.qbox.me/70a0905c-e50f-4349-b477-0e8bf9e3ec67.png) 

同时文件系统的文件是无法在 WebUI 上传或下载的，但是文件系统服务的数据是可以导入导出的，进入文件系统服务的控制台，有备份和恢复按钮，可以导出和导入 zip 压缩文件。

演示应用程序可以读写文件系统的文件，也可以通过 Web 导入导出。 使用方法是应用直接读写连接信息里 host_path 里的路径。

文件系统部署详细说明参见 [文件系统](http://docs.coding.io/services/filesystem/)

### 环境变量

环境变量功能可以以图形界面的方式编辑应用运行时的环境变量（环境变量的改动，需要 **重启应用** 才能生效）。

![环境变量](https://dn-coding-net-production-pp.qbox.me/0f04744d-cfa1-4927-b2d8-1934e07a770b.png) 

关于在应用中如何使用环境变量参加 [环境变量](http://docs.coding.io/references/env/)

### 服务管理

大部分应用都会依赖数据库、缓存之类组件，这些在演示平台上都是以服务的方式提供的，演示平台目前支持以下第三方服务：

- [MySQL](http://docs.coding.io/services/mysql)
- [PostgreSQL](http://docs.coding.io/services/postgresql)
- [Redis](http://docs.coding.io/services/redis)
- [MongoDB](http://docs.coding.io/services/mysql/mongodb)
- [Filesystem](http://docs.coding.io/services/mysql/filesystem)

下面以 MySQL 为例来介绍如何添加并使用第三方服务。

#### 添加服务

点击服务管理页面右上角的 **添加服务** 按钮，在弹出窗口里选择 MySQL，输入服务名称并勾选 "绑定创建后的服务到此项目(可选)"：

![添加服务](https://dn-coding-net-production-pp.qbox.me/6bab0ff6-46ca-4931-8759-301829ae51d6.png) 

点击 **确定** 按钮创建服务，可以看到新创建的服务 mysql-test 已经出现在 “已绑定服务” 列表里了:

![服务列表](https://dn-coding-net-production-pp.qbox.me/ca0e4e37-f2af-49d5-871c-f9e1b2b7db4e.png) 


#### 绑定服务

服务必须绑定到应用上才可以使用，只有和服务绑定的应用才能使用该服务。在服务管理的 “可用服务” 的每个服务都有 **绑定** 按钮，
点击此按钮就可以把选定的服务绑定到当前应用了。由于上一步在创建服务的同时勾选了绑定到当前应用，这一步不需要做了。

> **提示：** 同一个服务可以绑定到多个应用，反过来一个应用也是可以绑定多个服务的。

#### 连接信息

在网页上可以查看已绑定服务的连接信息（连接信息也可以在应用运行时通过环境变量获取，[参考文档](http://docs.coding.io/services/)），应用通过此连接信息来使用服务：

![连接信息](https://dn-coding-net-production-pp.qbox.me/d35a086d-d6f6-4f72-b6db-74ccad3139ca.png) 


#### 服务控制台

服务控制台提供一个简单的网页界面来管理服务，可以在此执行服务数据的备份恢复，或者查询修改数据库数据等。

![服务控制台](https://dn-coding-net-production-pp.qbox.me/fe27ca53-d7cd-445f-817c-2a3a56a61e87.png)

#### 数据库管理

对于数据库服务管理，如果不习惯使用控制台操作还可以通过如下两种方式

- [Coding Plus](https://coding.net/u/bluishoul/p/coding-plus/git) 插件
- WebUI 管理工具 [Adminer](http://db-admin.coding.io) 支持演示平台的数据库类型
- 自己搭建 Web 管理工具，如 phpmyadmin


---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/paas/getting-started.html">上一篇：开始使用演示</a></div>
  </div>


