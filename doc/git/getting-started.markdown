---
layout: post

title: 开始使用Git
---

本章节介绍如安装 Git 并在 Coding 上管理代码

## Git管理代码 ###

### 安装Git

#### Windows下安装

1. 先从 **[git 官网](http://git-scm.com/downloads)** 上下载 git 并安装到 C 盘。
2. 将 git 目录下的 bin（如 C:\Program Files (x86)\Git\bin ）添加到 PATH 环境变量。
3. 增加路径，打开**环境变量**设置：

>   ThisPC > properties > Adavanced system settings > Environment Variables 

 ![''](https://dn-coding-net-production-pp.qbox.me/f117c387-5655-47d0-9d57-6205a3adf54b.jpg) 

选择 PATH, 点击 Edit（如红框所示）。将 bin 的路径（ C:\Program Files (x86)\Git\bin ）添加到变量值后面

 ![''](https://dn-coding-net-production-pp.qbox.me/7f1b2ce6-2fa0-4995-850a-7a15bf31c584.jpg) 

大功告成，以后你就可以在 cmd 和 Git Bash 中使用 git 命令了， 习惯 bash 的推荐使用 Git Bash

#### Linux下安装

如果要在 Linux 上安装预编译好的 Git 二进制安装包，可以直接用系统提供的包管理工具。

- 在 Fedora 上用 yum 安装：
 
     $ yum install git-core

- 在 Ubuntu 这类 Debian 体系的系统上，可以用 apt-get 安装：

     $ apt-get install git

#### Mac下安装

在 Mac 上安装 Git 有两种方式。最容易的当属使用图形化的 Git 安装工具，界面如图所示，

![Mac](https://dn-coding-net-production-pp.qbox.me/66fc93ff-4e42-4b19-a4a0-89caa21e6722.png)

下载地址：http://sourceforge.net/projects/git-osx-installer/


另一种是通过 [MacPorts](http://www.macports.org) 安装。如果已经装好了 [MacPorts](http://www.macports.org) ，用下面的命令安装 Git：

         $ sudo port install git-core +svn +doc +bash_completion +gitweb

这种方式就不需要再自己安装依赖库了，Macports 会帮你搞定这些麻烦事。一般上面列出的安装选项已经够用，要是你想用 Git 连接 Subversion 的代码仓库，还可以加上 +svn 选项。


以上安装好了 Git 的客户端就可以使用 Git 来管理代码啦。

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/index.html">上一篇：Git 代码托管介绍</a></div>
  <div class="right-nav"><a href="/help/doc/git/repository.html">下一篇：Git 代码仓库</a><i class="fa fa-angle-right"></i></div>
  </div>
