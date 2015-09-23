---
layout: post

title: Git代码仓库
---

本章节介绍如何创建和管理你的代码仓库。

### 前提条件

 -  已经是某个项目的成员
 -  对项目代码有写权限
 -  项目仓库大小低于项目配额[项目版本说明](https://coding.net/upgrade)
 -  安装 Git 客户端，推荐高于 1.9 的版本
 
### 创建远程代码仓库

远程代码仓库可以理解为在 Coding.net 服务器上创建的一个专供放置代码等文件的一个文件目录。 每当创建一个项目的时候便会默认创建一个 Git 代码仓库与之相关联。

#### 创建私有项目

私有项目的代码仓库如图所示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/c261f410-09bd-4bb4-bb27-eef4bcf6965d.png) 

#### 创建公开项目

公开项目的代码仓库如图所示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/bfbd0905-bf7f-4ce7-98c4-bcb13451a938.png) 

#### 导入代码仓库

 ![图片](https://dn-coding-net-production-pp.qbox.me/4035d6c0-83a6-43eb-b274-1ac0d601a6f0.png) 

在新建项目页面，填写你要导入的项目的名称和描述后，选择导入仓库选项卡，根据你要导入的仓库类型选择版本控制类型，填写导入公开项目的 Clone 地址，
如：https://github.com/twbs/bootstrap.git （svn 仓库导入格式如 http://code.taobao.org/svn/dev_codes/trunk） 

Coding 暂不支持导入外站的私有项目，另外受制于网络条件，Coding不能一定保证导入成功。结果会通过站内通知和邮件告知您。

### Git本地仓库

有两种取得 Git 项目仓库的方法。第一种是在现存的目录下，通过导入所有文件来创建新的 Git 仓库。第二种是从已有的 Git 仓库克隆出一个新的镜像仓库来。

#### 初始化新仓库

要对现有的某个文件夹开始用 Git 管理，只需到所在的目录，执行：
         
          $ git init

命令行中会出现以下提示

          Initialized empty Git repository in X:/XXX/.git/

在当前文件夹中会出现一个 .git 文件夹。所有 Git 需要的数据和资源都存放在这个目录中。


#### 添加远程仓库

目前 Coding 支持以下三种协议对 git 仓库进行访问：

- HTTPS：读写仓库加密通道，有单次上传限制。
- SSH：读写仓库加密通道，无单次上传限制，需先在个人设置页面上传 SSH-RSA 公钥，完成配对验证。
- Git：只读，并且只对公开项目有效。

注意：Git 用户名为 Coding 的账户邮箱或者个性后缀，密码为 Coding 的账户密码。

**私有项目地址**

 ![图片](https://dn-coding-net-production-pp.qbox.me/c0ad92a5-9bf5-4d35-b2f6-7bc4feabd5c7.png) 


**公开项目地址**


 ![图片](https://dn-coding-net-production-pp.qbox.me/e7babea4-4dff-4152-a2c4-ba684a97401a.png) 


要添加一个新的远程仓库，可以使用 git remote 命令，给远程仓库一个别名，以HTTPS 地址为例运行： 

git remote add [shortname] [url] 命令：
      
      $ git remote add codingios https://git.coding.net/Kyle_lyk/learn-git.git

此处以 coding.net 上的一个开源项目 learn-git 为例，添加其为远程仓库，并取别名为"learn-git"，接下来用 git remote 命令来查看当前添加的远程仓库：

      $ git remote -v 

得到以下结果：

     learn-git  https://git.coding.net/Kyle_lyk/learn-git.git<fetch>
     learn-git  https://git.coding.net/Kyle_lyk/learn-git.git<push>

现在可以用字符串 learn-git 指代对应的仓库地址了。比如说，要抓取所有 learn-git 有的，但本地仓库没有的信息，可以运行 

     $ git fetch learn-git

现在，learn-git 的主干（master）已经完全可以在本地访问了，对应的名字是 learn-git/master，你可以将它合并到自己的某个分支，或者切换到这个分支，看看有些什么有趣的更新。

####  克隆远程仓库

除了  所述的方法，也可以直接通过 git clone 命令来直接复制远程仓库到本地目录：

    https://git.coding.net/Kyle_lyk/learn-git.git

运行该命令之后，你会发现在当前目录下出现了一个名为 learn-git 的文件夹，其中包含一个 .git 文件夹，用于保存下载下来的所有版本记录，然后从中取出最新版本的文件拷贝。打开 learn-git 文件夹，你会看到项目中的所有文件已经在里边了，准备好后续的开发和使用。如果希望在克隆的时候，自己定义新建文件夹的名称，可以在上面的命令末尾指定新的名字：

    $ git clone https://git.coding.net/Kyle_lyk/learn-git.git study-git

> 注意： 上述 clone 使用的是 HTTPS 的方式，Coding 支持 SSH，HTTPS, Git 3种方式获取代码

上述命令将在当前位置新建一个名为 "study-git" 的文件夹，内容和之前的 learn-git 文件夹一样。

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/getting-started.html">上一篇：开始使用 Git</a></div>
  <div class="right-nav"><a href="/help/doc/git/push.html">下一篇：提交代码</a><i class="fa fa-angle-right"></i></div>
  </div>
