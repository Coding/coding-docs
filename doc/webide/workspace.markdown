---
layout: post

title: 工作空间
---


## 什么是 WorkSpace

WorkSpace 是 WebIDE 在云端创建的一个独立项目代码根目录，每个用户对每个项目只能创建一个WorkSpace。
它包含了用户在云端的代码根目录和可选的环境配置。 

### 管理工作空间 

进入到 ide.coding.net ，登录后，点击右上角 “控制台”。 可以进入到控制台界面，如下：

 ![控制台](https://dn-coding-net-production-pp.qbox.me/51ce3c36-0cf7-4454-8f3d-cb7927154b46.png) 
 
 控制台将展示你创建的所有 WorkSpace ，每个账号，每个项目都可以创建一个 WorkSpace。
 
 
### 新建工作空间

在控制台，点击 “新建工作空间” 进入到界面如下：

 ![新建WorkSpace](https://dn-coding-net-production-pp.qbox.me/d2826433-7083-4fce-bc0f-ee7d3d030906.png) 

可以通过导入外部项目地址，创建工作空间。

> 注意： 导入外部项目地址，需要配置外部项目的 SSH Key， 比如导入 GitHub 代码，需要配置 GitHub 的 SSH Key

也可以选择导入 Coding 的项目，创建工作空间。

### 打开工作空间

点击打开可以进入到工作空间的代码编辑区。

 ![打开工作空间](https://dn-coding-net-production-pp.qbox.me/ce59f2fc-a80e-49ec-a91b-a8abe3133749.png) 

### 删除工作空间

删除工作空间，将会删除你所创建的独立的项目代码根目录， 因此未提交的代码更新将会丢失，同时环境配置也将会被删除。


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/webide/getting-started.html">上一篇：开启WebIDE</a></div>
  <div class="right-nav"><a href="/help/doc/webide/environment.html">下一篇：环境管理</a><i class="fa fa-angle-right"></i></div>
  </div>
