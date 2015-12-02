---
layout: post

title: 环境管理
---




### 环境管理&分享 ###

#### 什么是环境 ###

环境（Environment）是WebIDE指将终端所操控的系统环境（包括代码，修改过的文件和通过 apt-get 安装的软件等）。每个Workspace可以配置多个环境，和终端关联的环境称为当前环境。环境本质是一个Docker的Container实例。从用户的视角，环境是一个云端的操作系统。

#### 如何管理环境 ###

点击右边的环境设置“Environment”图标，弹出环境设置tab，如下图所示：

![图片](https://dn-coding-net-production-pp.qbox.me/8b94439d-b591-46f1-9bcc-2b938289cfe6.png) 
 
点击 “ ？”可以查看，环境设置的帮助说明，用户可以将环境保存下来然后分享给其它的项目成员使用。

#### 如何保存环境 ###

如图鼠标浮动过去，点击“Save As” 可以将当前环境命名并保存起来, 这样同一项目的成员就可以在进入这个项目的时候使用相同的环境进行了。

 - “Reset” 就是将当前的环境重置到，初始环境，慎重使用。 
 - “Save As” 并命名后结果如下：

![图片](https://dn-coding-net-production-pp.qbox.me/15415d4d-0f86-4555-9333-41b74e328538.png) 

<a name="callback-url"/>

#### 如何切换和分享环境 

当存在多个环境后，点击“Use” 可以切换到不同的环境，切换时当前的 Terminal 会被终止， 然后 Terminal 重新连接到刚才选择的 Environment。

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/webide/workspace.html">上一篇：工作空间</a></div>
  <div class="right-nav"><a href="/help/doc/webide/terminal.html">下一篇：终端</a><i class="fa fa-angle-right"></i></div>
  </div>
