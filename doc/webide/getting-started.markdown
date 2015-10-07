---
layout: post

title: 开启在线编程之旅
---

### 开启WebIDE

#### 前提条件：

 -  已经创建好至少一个项目
 -  已创建的 WorkSpace 少于当前账户的配额，具体配额查询项目升级 [项目版本说明][1]
 
#### 开启WebIDE：
 
可以通过独立的域名 https://ide.coding.net 进入到 WebIDE。

也可以通过代码，打开到IDE.

##### 私有项目：

1.进入到已创建好的项目界面, 选择 “代码”-> “WebIDE” 如下图所示：

   ![图片](https://dn-coding-net-production-pp.qbox.me/35c83b34-d146-47fb-8cfc-a99ed91574f1.png) 

2.点击“进入WebIDE” 进入到 WebIDE 主界面

##### 公有项目：

1.  进入到已创建好的项目界面, 选择“WebIDE” Tab 如下图所示：

    ![图片](https://dn-coding-net-production-pp.qbox.me/af2628fa-9093-42b1-9d3e-c5d9c1154e11.png) 

2. 点击“进入WebIDE” 进入到 WebIDE 主界面

<a name="aaa"/>

### 界面说明 ###

WebIDE 界面如下图：

 ![图片](https://dn-coding-net-production-pp.qbox.me/0213eb7c-31e8-4fed-bf44-b28b38400b31.png) 

1. 顶部菜单栏
2. 左边是文件树目录
3. 中间是文本编辑区和文件预览区
4. 下边是终端界面

 - 注：您也可以拖动 Tab 自定义界面。

### 文件管理
WebIDE 支持文件新建、删除、上传、下载、重命名。 右键点击文件树目录，出现如下菜单：

 ![图片](https://dn-coding-net-production-pp.qbox.me/a97d272a-f567-45c6-9205-b808c6747969.png) 

WebIDE 支持图片和pdf 的双击预览。

### 代码提交&更新 ###
    
#### Clone 代码

    首次进入 WebIDE 项目时候 WebIDE 会默认 Clone 项目的代码到IDE的 Workspace
    
#### Commit 提交本地仓库
 
当你完成代码编辑后可以点击菜单栏的 “Repository” - > “Commit” ， 选择要提交的文件，提交到本地的代码库。

![图片](https://dn-coding-net-production-pp.qbox.me/78fbf09c-b6e6-4020-a82f-daa1c55bc3fe.png) 

#### 分支修改

如果需要创建或者修改本地和远程分支，点击菜单栏的“Repository” - > “Branches”，或者点击右下角的分支图标，默认是“Master”。

右下角会弹出如下图的选项，对于本地和远端仓库的操作如Push，Pull ，默认都是操作本地和远端的仓库。

 ![图片](https://dn-coding-net-production-pp.qbox.me/656ca53b-83aa-411b-b051-39380965392c.png) 

<a name="faq"/>

#### Push 提交远端仓库

当你的代码需要提交到远端Git仓库时候，点击菜单栏的“Repository” - > “Push” ，确认本地和远端的分支。
 ![图片](https://dn-coding-net-production-pp.qbox.me/6e32e236-d9a4-468e-be9c-c16816f9a02d.png) 

#### Pull 从远端仓库拉取到本地

当你的远端代码仓库领先于IDE的本地代码仓库时，需要将远端仓库的代码拉取到本地，点击菜单栏的“Repository” - > “Pull” ，会将代码拉取到本地设置的分支。

 ![图片](https://dn-coding-net-production-pp.qbox.me/c389a9bc-aa96-40eb-b440-a776e6391ed3.png) 

---


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/webide/index.html">上一篇：WebIDE介绍</a></div>
  <div class="right-nav"><a href="/help/doc/webide/workspace.html">下一篇：工作空间</a><i class="fa fa-angle-right"></i></div>
  </div>
