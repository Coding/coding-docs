---
layout: post

title: 终端 Terminal
---

## 终端 Terminal ###

### 什么是终端 Terminal 

WebIDE 的终端是一个完成的 Ubuntu Linux Shell 环境，用户可以在里面执行任何 Linux 命令。初始的终端设置如下：

 - 系统为标准Ubuntu 14.04
 - 用户名和密码都是 coding
 - coding 用户具备 sudo 权限（`$sudo su`可切换到root用户）

### 如何打开终端 Terminal
 
1. 点击“Terminal” 打开终端 Tab 
  ![图片](https://dn-coding-net-production-pp.qbox.me/874e33fa-ead9-4f30-8c6f-1a408a354fe9.png) 
  
2. 点击菜单栏 “Tools” -> “New Terminal”
 
  ![图片](https://dn-coding-net-production-pp.qbox.me/65e2b062-c972-4620-8dc0-d9280233294d.png) 


## 软件安装###

可以在终端运行 apt-get 来安装你想要的 Linux 软件，可以在/etc/apt/source.list 查看和修改apt的源。

    ➜  workspace git:(master) ✗ cat /etc/apt/sources.list  

对于想要的软件用 apt-get install 安装, 比如安装npm：

    ➜  workspace git:(master) ✗ sudo apt-get install npm    

---
 
   


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/webide/environment.html">上一篇：环境管理</a></div>
  <div class="right-nav"><a href="/help/doc/webide/execution.html">下一篇：运行程序</a><i class="fa fa-angle-right"></i></div>
  </div>
