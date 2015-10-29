---
layout: post

title: Git代码托管使用手册
---

1.Git代码托管使用手册 
-----

本手册主要描述 Coding.net 旗下 Git代码托管产品的相关功能说明。

相关参考资料： 
[git教程中文版v2][2]
[廖雪峰的Git教程][1]


CopyRight by Coding.net  更新时间 2015-09-01


2.关于Git代码托管
--------

### 2.1 Git代码托管 ###

Git代码托管是 Coding.net 基于 Java 自主研发的一款 Git 在线代码托管平台。
开发者可以将源代码通过 Git 命令托管到 Coding.net, 并且享受 Coding.net 提供的各种延伸工具，如 合并请求( Merge Request/Pull Request)，Line Notes，保护分支，代码阅读，Webhook 等。


### 2.2 Git代码托管的优势 ###

传统的代码都是管理到本机或者内网。 一旦本机或者内网机器出问题，代码可能会丢失，使用远端代码仓库将永远存在一个备份。同时也免去了搭建本地代码版本控制服务的繁琐。
云计算时代 Git 以其强大的分支和克隆功能，更加方便了开发者远程协作。


### 2.3 Git代码托管主要功能 ###

 - 分支合并 ( MergeRequest/Pull Request )
 - 保护分支
 - 代码阅读 CodeInsight
 - Line Notes
 - WebHook

3.功能介绍
--------

### 3.1 Git管理代码###

#### 3.1.1 安装Git

##### 3.1.1.1 Windows 下安装

1. 先从 **[git 官网](http://git-scm.com/downloads)** 上下载 git 并安装到 C 盘。
2. 将 git 目录下的 bin（如 C:\Program Files (x86)\Git\bin ）添加到 PATH 环境变量。
3. 增加路径，打开**环境变量**设置：

>   ThisPC > properties > Adavanced system settings > Environment Variables 

 ![''](https://dn-coding-net-production-pp.qbox.me/f117c387-5655-47d0-9d57-6205a3adf54b.jpg) 

选择 PATH, 点击 Edit（如红框所示）。将 bin 的路径（ C:\Program Files (x86)\Git\bin ）添加到变量值后面

 ![''](https://dn-coding-net-production-pp.qbox.me/7f1b2ce6-2fa0-4995-850a-7a15bf31c584.jpg) 

大功告成，以后你就可以在 cmd 和 Git Bash 中使用 git 命令了， 习惯 bash 的推荐使用 Git Bash


##### 3.1.1.2 Linux 下安装

如果要在 Linux 上安装预编译好的 Git 二进制安装包，可以直接用系统提供的包管理工具。

- 在 Fedora 上用 yum 安装：
 
                     $ yum install git-core

- 在 Ubuntu 这类 Debian 体系的系统上，可以用 apt-get 安装：

                     $ apt-get install git

##### 3.1.1.3 Mac 下安装

在 Mac 上安装 Git 有两种方式。最容易的当属使用图形化的 Git 安装工具，界面如图所示，

![Mac](https://dn-coding-net-production-pp.qbox.me/66fc93ff-4e42-4b19-a4a0-89caa21e6722.png)

下载地址：http://sourceforge.net/projects/git-osx-installer/


另一种是通过 [MacPorts](http://www.macports.org) 安装。如果已经装好了 [MacPorts](http://www.macports.org) ，用下面的命令安装 Git：

         $ sudo port install git-core +svn +doc +bash_completion +gitweb

这种方式就不需要再自己安装依赖库了，Macports 会帮你搞定这些麻烦事。一般上面列出的安装选项已经够用，要是你想用 Git 连接 Subversion 的代码仓库，还可以加上 +svn 选项。

#### 3.1.1 前提条件

 -  已经是某个项目的成员
 -  对项目代码有写权限
 -  项目仓库大小低于项目配额[项目版本说明][3]
 -  安装 Git 客户端，推荐高于 1.9 的版本
 
#### 3.1.2 创建代码仓库

代码仓库可以理解为在 Coding.net 服务器上创建的一个专供放置代码等文件的一个文件目录。 每当创建一个项目的时候便会默认创建一个 Git 代码仓库与之相关联。

##### 3.1.2.1 创建私有项目

私有项目的代码仓库如图所示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/c261f410-09bd-4bb4-bb27-eef4bcf6965d.png) 

##### 3.1.2.2 创建公开项目

公开项目的代码仓库如图所示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/bfbd0905-bf7f-4ce7-98c4-bcb13451a938.png) 

##### 3.1.2.3 导入代码仓库

 ![图片](https://dn-coding-net-production-pp.qbox.me/4035d6c0-83a6-43eb-b274-1ac0d601a6f0.png) 

在新建项目页面，填写你要导入的项目的名称和描述后，选择导入仓库选项卡，根据你要导入的仓库类型选择版本控制类型，填写导入公开项目的 Clone 地址，
如：https://github.com/twbs/bootstrap.git （svn 仓库导入格式如 http://code.taobao.org/svn/dev_codes/trunk） 

Coding 暂不支持导入外站的私有项目，另外受制于网络条件，Coding不能一定保证导入成功。结果会通过站内通知和邮件告知您。

### 3.2 Git 仓库

有两种取得 Git 项目仓库的方法。第一种是在现存的目录下，通过导入所有文件来创建新的 Git 仓库。第二种是从已有的 Git 仓库克隆出一个新的镜像仓库来。

#### 3.2.1 初始化新仓库

要对现有的某个文件夹开始用 Git 管理，只需到所在的目录，执行：
         
          $ git init

命令行中会出现以下提示

          Initialized empty Git repository in X:/XXX/.git/

在当前文件夹中会出现一个 .git 文件夹。所有 Git 需要的数据和资源都存放在这个目录中。


#### 3.2.2 添加远程仓库

目前 Coding 支持以下三种协议对 git 仓库进行访问：

1) HTTPS：读写仓库加密通道，有单次上传限制。
2) SSH：读写仓库加密通道，无单次上传限制，需先在个人设置页面上传 SSH-RSA 公钥，完成配对验证。
3) Git：只读，并且只对公开项目有效。

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

#### 3.2.3 克隆远程仓库

除了 3.2.2 所述的方法，也可以直接通过 git clone 命令来直接复制远程仓库到本地目录：

    https://git.coding.net/Kyle_lyk/learn-git.git

运行该命令之后，你会发现在当前目录下出现了一个名为 learn-git 的文件夹，其中包含一个 .git 文件夹，用于保存下载下来的所有版本记录，然后从中取出最新版本的文件拷贝。打开 learn-git 文件夹，你会看到项目中的所有文件已经在里边了，准备好后续的开发和使用。如果希望在克隆的时候，自己定义新建文件夹的名称，可以在上面的命令末尾指定新的名字：

    $ git clone https://git.coding.net/Kyle_lyk/learn-git.git study-git

上述命令将在当前位置新建一个名为 "study-git" 的文件夹，内容和之前的 learn-git 文件夹一样。

### 3.3 提交更新到远程仓库

接下来我们会介绍如何记录更新，并提交更新到远程仓库。

#### 3.3.1 文件的状态

工作目录下面的所有文件都不外乎这两种状态：已跟踪或未跟踪。

**已跟踪的文件 ———— tracked**

指本来就被纳入版本控制管理的文件，在上次快照中有它们的记录，工作一段时间后，它们的状态可能是未修改，已修改或者已放入暂存区。

**未跟踪文件 ———— untracked**

它们既没有上次更新时的快照，也不在当前的暂存区域。

初次克隆某个仓库时，工作目录中的所有文件都属于已跟踪文件，且状态为未修改。
在编辑过某些文件之后，Git 将这些文件标为已修改。我们逐步把这些修改过的文件放到暂存区域，直到最后一次性提交所有这些暂存起来的文件，如此重复。所以使用 Git 时的文件状态变化周期如图所示。

![xx](https://dn-coding-net-production-pp.qbox.me/cfe7389a-6d56-4c01-95e2-87ec1fa4da7a.jpg)

#### 3.3.2 新建跟踪文件

回到我们在 3.2 中创建的本地目录 study-git(详见 3.2.3)。我们可以使用 ^git status^ 命令来查看当前工作目录下的文件状态。因为我们在将远程仓库克隆到本地后并未进行任何操作，所以我们会得到以下输出：

    $ git status
    On branch master
    Your branch is up-to-date with 'origin/master'
    nothing to commit, working directory clean

这说明你现在的工作目录相当干净。换句话说，所有已跟踪文件在上次提交后都未被更改过。此外，上面的信息还表明，当前目录下没有出现任何处于未跟踪的新文件，否则 Git 会在这里列出来。最后，该命令还显示了当前所在的分支是 master，这是默认的分支名称。
接下来我们新建一个文本文件,运行 git status 会看到该文件出现在未跟踪文件列表中：

    $ touch test.txt
    $ echo something > test.txt
    $ git status 
    On branch master
    Your branch is up-to-date with 'origin/master'

    Untracked files:
      (use "git add <file>..." to include in what will be committed)

        test.txt

    nothing added to commit but untracked files present (use "git add" to track)

在状态报告中可以看到新建的 test.txt 文件出现在“Untracked files”下面。未跟踪的文件意味着 Git 在之前的快照（提交）中没有这些文件；Git 不会自动将之纳入跟踪范围，除非你明明白白地告诉它“我需要跟踪该文件”，因而不用担心把临时文件什么的也归入版本管理。

**跟踪新文件**

使用命令 git add 我们就可以跟踪一个文件。所以，要跟踪 test.txt 文件，只需运行：

    $ git add test.txt 

接下来我们再次用 git status 查看文件状态：

    $ git status 
    On branch master
    Your branch is up-to-date with 'origin/master'

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

          new file:  test.txt

只要在 “Changes to be committed” 这行下面的，就说明是已暂存状态。如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。在 git add 后面可以指明要跟踪的文件或目录路径。如果是目录的话，就说明要递归跟踪该目录下的所有文件。

#### 3.3.3 暂存修改的已跟踪文件

接下来我们把已跟踪的文件 `README.md` 做一些修改。打开 `README.md`，并在第二行加上了一句 "I am learning to use git"，现在 `README.md`  中有以下内容：

     #learn-git
     I am learning to use git

这时我们再次使用 `git status` 命令查看文件状态：

    $ git status 
    On branch master
    Your branch is up-to-date with 'origin/master'

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

            new file:  test.txt

    Changes not staged for commit:
       (use "git add <file>..." to update what will be committed)
       (use "git checkout -- <file>..." to discard changes in working directory)

             modified:   README.md

文件 README.md 出现在 "Changes not staged for commit" 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区。要暂存这次更新，需要运行 git add 命令。
实际上 `git add` 命令是多功能命令，对不同状态的文件，它起到的作用也会不同：

1. 操作对象是未跟踪文件时，将其加入到跟踪文件中
2. 操作对象是已跟踪文件时，将其放入暂存区
3. 合并时把有冲突的文件标记为已解决状态（将在下一章详细描述）

现在让我们运行 git add 将 README.md 放到暂存区，然后再看看 git status 的输出：

     $ git add README.md
     $ git status
     On branch master
     Your branch is up-to-date with 'origin/master'

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

            modified:   README.md
            new file:   test.txt

#### 3.3.4 查看更改的内容

在工作中，我们经常会需要查看修改后的文件相比之前的文件有哪些不同，那么这时候 `git status` 命令就不够了，我们需要使用 `git diff` 命令来查看更改的内容。我们再对 `README.md` 做一些修改，先不要使用 `git add` 命令将其暂存，此时运行 `git diff` 命令：

     $ git diff
     diff --git a/README.md b/README.md
     index a21c979..cf2f0cc 100644
     --- a/README.md
     +++ b/README.md
     @@ -1,2 +1,3 @@ 
      #learn-git
	  I am learning to use git
     +new line
     \ No newline at end of file

此命令比较的是工作目录中当前文件和暂存区域快照之间的差异，也就是修改之后还没有暂存起来的变化内容。

若要看已经暂存起来的文件和上次提交时的快照之间的差异，可以用 `git diff --cached` 命令。（Git 1.6.1 及更高版本还允许使用 git diff --staged，效果是相同的，但更好记些。）

#### 3.3.5 提交更新到本地仓库

现在的暂存区域已经准备妥当可以提交了。在此之前，请一定要确认还有什么修改过的或新建的文件还没有 `git add` 过，否则提交的时候不会记录这些还没暂存起来的变化。所以，每次准备提交前，最好先用 git status 看下，是不是都已暂存起来了，然后再运行提交命令 `git commit` 来完成提交。

你可以直接输入 `git commit` 命令进行提交，这种方式会启动文本编辑器以便输入本次提交的说明:

     # Please enter the commit message for your changes. Lines starting
     # with '#' will be ignored, and an empty message aborts the commit.
     # On branch master
     # Your branch is up-to-date with 'origin/master'
     #
     # Changes to be committed:
     #       modified:   README.md
     #       new file:   test.txt
     #

默认会启用 shell 的环境变量 $EDITOR 所指定的编辑器，一般都是 vim 或 emacs，也可以通过 git config 命令来修改默认的编辑器。
以 '#' 开头的行都被视为注释，在提交时将被丢弃。如果没有输入提交信息就推出编辑器，将放弃这次提交。

同时，你也可以直接使用 

     `git commit -m [提交说明]` 

的方式来进行提交:

     $ git commit -m "My first commit"
     [master ca62ea0] My first commit
      2 files changed, 3 insertions(+)
      create mode 100644 test.txt

好，现在已经创建了第一个提交！可以看到，提交后它会告诉你，当前是在哪个分支（master）提交的，本次提交的完整 SHA-1 校验和是什么（ca62ea0），以及在本次提交中，有多少文件修订过，多少行添改和删改过。

记住，提交时记录的是放在暂存区域的快照，任何还未暂存的仍然保持已修改状态，可以在下次提交时纳入版本管理。每一次运行提交操作，都是对你项目作一次快照，以后可以回到这个状态，或者进行比较。
          
#### 3.3.6 推送到远程仓库

当你想要同别人分享目前的成果时，可以将本地仓库中的数据推送到远程仓库。实现这个任务的命令很简单： 

     git push [远程仓库名] [分支名]

如果要把本地的 master 分支推送到 origin 服务器上，可以运行下面的命令：

     $ git push origin master
     Username for 'https://git.coding.net': [输入 ID/注册邮箱]
     Password for 'https://[ID/注册邮箱]@git.coding.net':
     Counting objects: 6,done
     Delta compression using up to 2 threads.
     Compressing objects: 100% (2/2),done.
     Writing objects: 100% (4/4),336 bytes | 0 bytes/s, done.
     Total 4 (delta 0), reused 0 (delta 0)
     To https://git.coding.net/Kyle_lyk/learn-git.git
        764ecea..ca62ea0 master -> master


现在已经第一次完成推送数据到远程仓库！但是要注意，只有在所克隆的服务器上有写权限，且同一时刻没有其他人在推数据，这条命令才会如期完成任务。如果在你推数据前，已经有其他人推送了若干更新，那你的推送操作就会被驳回。你必须先把他们的更新抓取到本地，合并到自己的项目中，然后才可以再次推送，相关详情请看下一章分支的描述。

## 4  分支管理

本章我们会介绍使 Git 与其它版本控制系统区别开来的最关键特点 ———— Git 的分支。它被称为 Git 的“必杀技”。

### 4.1 什么是分支

分支一方面类似科幻电影里面经常出现的平行宇宙，每个分支的代码版本都是独立演进的，分支之间的代码版本完全不会干扰另外一个代码版本的开发。但是，与平行宇宙不同的一点是，分支之间还能合并。

Git 的分支相比 SVN 要轻量很多，这是因为 Git 分支并不是复制一个新仓库，而是为一个分支存储一个指针，这个指针将指向某个提交对象。没错，这就和数据结构中常见的指针链表一样。所以 Git 的分支只是指针，并没有将仓库进行复制，每次提交都会让当前的分支向后移动，指向最后一次提交的对象。当你在切换分支时，Git 也只是改变指向当前所在分支的特殊指针 HEAD，所以可以快速地在各个分支之间进行切换。

### 4.2 分支的功能

分支在实际中可以方便的隔离开发。
假设你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。


### 4.3 创建一个分支

**在 Coding.net 上创建分支**

在 Coding.net 界面上可以进入到项目中，依次点击 [代码] -> [分支] -> [新建分支]：

 ![图片](https://dn-coding-net-production-pp.qbox.me/fbb3e1d4-bdbd-4fce-b60c-19b68ce5c9e1.png) 


 ![图片](https://dn-coding-net-production-pp.qbox.me/86b673e4-3576-47cc-9fcc-d1aafb46b3fe.png) 

**在命令行创建本地分支**

也可以在命令行用 `git branch`  新建一个分支，回到上一章中提到的 learn-git 项目，我们在本地运行以下命令：

     $ git branch learn-branch

这条命令将会在本地仓库创建一个名为 "learn-branch" 的分支，这条分支指向最近一次提交的数据。要注意的是，运行该命令后，当前工作分支仍然是在 "master" 分支上，需要使用 `git checkout` 命令来进行分支之间的切换。

### 4.4 切换分支

**本地分支切换**

之前我们已经在本地创建好了分支，接下来切换到 "learn-branch" 分支：

    $ git checkout learn-branch
    Switched to branch 'learn-branch'

`git checkout` 下面这句话告诉我们，我们已经成功地将工作分支切换到了 "learn-branch" 分支。

**远端分支切换**

Coding.net 提供在线的分支切换，在项目代码页，master 标签下拉菜单处可以选择其他分支。


 ![图片](https://dn-coding-net-production-pp.qbox.me/a3a8bb62-4157-4857-acfe-b02c4f29a334.png) 


也可以在分支页进行选择：

 ![图片](https://dn-coding-net-production-pp.qbox.me/0402da8a-22f4-40d4-87b2-ead3db740f97.png) 


### 4.5 合并分支

接下来我们将描述本地两种常见情形下的合并分支操作。本地的分支合并都是在命令行解决的。


#### 4.5.1 快进式合并

快进式合并分支，也叫Fast Foreword。 我们在 "learn-branch" 分支上进行一些操作，创建一个新的 txt 文件 "learn-branch.txt"，接着在其中输入一行 "I am studying git branch":

     $touch learn-branch.txt
     $echo I am studying git branch > learn-branch.txt

接下来我们将 "learn-branch.txt" 加入到跟踪文件，并提交到本地仓库：

     $git add learn-branch.txt
     $git commit -m "add learn-branch.txt"
     [learn-branch fce6c4e] add learn-branch.txt
      1 files changed, 1 insertions(+)
      create mode 100644 learn-branch.txt   

接下来我们回到 "master" 分支，并将 "learn-branch" 分支合并进来：

     $ git checkout master
     Switched to branch 'master'
     Your branch is up-to-date with 'origin/master'.

     $ git merge learn-branch
     Updating ca62ea0..fce6c4e
     Fast-forward
      learn-branch.txt | 1 +
      1 file changed, 1 insertion(+)  
      create mode 100644 learn-branch.txt

`git merge [分支名]` 命令将指定分支合并到当前工作分支中。请注意，合并时出现了 "Fast forward" 的提示。由于当前 "master" 分支所在的提交对象是要并入的 learn-branch 分支的直接上游，Git 只需把 master 分支指针直接右移。换句话说，如果顺着一个分支走下去可以到达另一个分支的话，那么 Git 在合并两者时，只会简单地把指针右移，因为这种单线的历史分支不存在任何需要解决的分歧，所以这种合并过程可以称为快进（Fast forward）。

合并之后，"master" 分支和 "learn-branch" 分支实际上是指向同一个位置。此时你可以通过 

     $git branch -d [分支名]

来删除某个分支。

#### 4.5.2 普通分支合并

分支合并之前，最好使用 git pull 将 "master" 分支的代码更新到最新：
    
如果我们在合并之前对 "master" 分支和 "learn-branch" 分支都做了一些修改，那合并时就不会像快进合并那么简单了。
     
我们首先在 "master" 分支中做一些修改，比如将 "lear-branch.txt" 的内容进行修改：

     $echo I am on master branch > lear-branch.txt
     $git commit -m "alpha"
     [master a72cad8] alpha
      1 files changed, 1 insertions(+), 1 deletion(-)
 

接下来，我们进入到 "learn-branch" 分支，也对 "learn-branch.txt" 进行一些修改：

     $git checkout learn-branch
     Swtiched to branch 'learn-branch'
     $echo I am on learn-branch branch > lear-branch.txt
     $git commit -m "beta"
     [learn-branch 27a4a6e] beta
      1 files changed, 1 insertions(+), 1 deletion(-)
     
我们回到 "master" 分支再尝试合并分支：

     $git checkout master
     Swtiched to branch 'master' 
     $git merge learn-branch
     Auto-merging learn-branch.txt
     CONFLICT (content): Merge conflict in learn-branch.txt
     Automatic merge failed; fix conflicts and then commit the result.

通常来说，当工作分支所指向的提交对象并不是需合并分支的直接祖先，Git 不得不进行一些额外处理。Git 会根据分支的内容自动创建了一个包含了合并结果的提交对象，这个新的提交对象会包涵两次提交的内容。但是我们在两个分支中操作了同一个文件的同一个部分，这就需要我们手动来解决冲突了。

现在运行 `git status` 命令，我们会看到在哪里出现了冲突：

     $ git status
     On branch master
     You have unmerged paths.
       (fix conflicts and run "git commit")

     Unmerged paths:
       (use "git add <file>..." to mark resolution)

             both modified:      learn-branch.txt

     no changes added to commit (use "git add" and/or "git commit -a")

现在我们打开 learn-branch.txt，会发现 Git 加入了冲突解决标记：

     <<<<<<< HEAD
     I am on master branch 
     =======
     I am on learn-branch branch 
     >>>>>>> learn-branch
     
可以看到 ======= 隔开的上半部分，是 HEAD（即 master 分支，在运行 merge 命令时的工作分支）中的内容，下半部分是在 learn-branch 分支中的内容。解决冲突的办法无非是二者选其一或者人工亲自整合到一起。把上述内容修改为这样：

     I am on master branch 

接下来运行 `git add` 来告诉 Git 冲突已经解决，并运行 `git commit` 来完成合并：

     $git add learn-branch.txt
     $git commit -m "conflict resolved"
     [master cadd265] conflict resloved

这样的合并冲突在快进合并中不可能发生。


#### 4.5.3 分支推送到仓库

当你想和其他人分享某个本地分支时，你需要把它推送到一个你拥有写权限的远程仓库。你创建的本地分支不会因为你的写入操作而被自动同步到你引入的远程服务器上，你需要明确地执行推送分支的操作。换句话说，对于无意分享的分支，你尽管保留为私人分支好了，而只推送那些协同工作要用到的特性分支。

我们可以使用 `git push [仓库名] [分支名]` 将之前在本地创建的 "learn-branch" 分支推送到 部署在 Coding.net 的 "learn-git" 项目中：


     $ git push origin serverfix
     Counting objects: 7, done.
     Delta compression using up to 2 threads.
     Compressing objects: 100% (2/2), done.
     Writing objects: 100% (3/3), 333 bytes | 0 bytes/s, done.
     Total 3 (delta 0), reused 0 (delta 0)
     To https:git.coding.net/Kyle_lyk/learn-git.git
      * [new branch]      learn-branch -> learn-branch

现在查看 "learn-git" 仓库，你就会发现除了 "master" 分支外，还增加了一个 "learn-branch" 分支。

#### 4.5.4 合并请求

Coding 推荐使用合并请求，在线将2个分支合并。合并请求分为
    
    -  MergeRequest  针对私有项目 
    -  PullRequest  针对公开项目

**私有项目**

 ![图片](https://dn-coding-net-production-pp.qbox.me/85a46436-5ca7-4f9e-8ee0-ba1e23513828.png) 

当你将分支推送到远端仓库后，通过新建&提交“合并请求”

 ![图片](https://dn-coding-net-production-pp.qbox.me/56f812ec-c423-44b7-832c-dd08805fa6ee.png) 

在创建新的合并请求时，可以填写代码评审，并引用项目内任务进行关联。 合并请求(MR) 发起人可以在该MR被合并前，随时对代码评审和引用任务进行编辑。点击提交，即可以创建一个合并请求( MR ) ，系统会自动判断出该 MR 的是否可以合并状态。

 ![图片](https://dn-coding-net-production-pp.qbox.me/980fded0-b1aa-47a7-b4ed-30085c98b9ba.png) 

在 MR 页面里面，MR 的提交者可以取消 MR ，MR 目标分支的管理者（对该分支有写权限的项目成员），可以选择合并或者拒绝。MR 支持 Markdown 语法评论。


**公开项目** 

 ![图片](https://dn-coding-net-production-pp.qbox.me/4703cf86-9268-4de5-a2de-c6072b446e3a.png) 

通过 Fork - Pull Request 的方式，提交合并请求。

首先，你需要将共有项目 fork 到你自己的仓库，如图。

 ![图片](https://dn-coding-net-production-pp.qbox.me/37acd26e-868f-4935-b479-d21fd1f1b1da.png) 

fork 后会在你的项目空间生成一个对应的项目，然后修改 fork 后项目的代码。


 ![图片](https://dn-coding-net-production-pp.qbox.me/2cf2205c-f22b-41a3-9938-d075fe1e3b2c.png) 


当准备同源项目合并时，创建合并请求( Pull Request )

 ![图片](https://dn-coding-net-production-pp.qbox.me/de9a67f9-bd8a-4f1e-b95c-a46a279358f7.png) 

点击提交，即可以创建一个合并请求( PR ) ，系统会自动判断出该 PR 的是否可以合并状态。 

#### 4.5.5 代码行级比对

代码行级比对( Line Notes ) 是 Coding 开发的可以针对代码的 diff 进行行级别的评论功能，支持 Markdown 语法，可以方便的用来进行 Code Review。
你可以在代码 commit 页面，和合并请求( MR /PR ) 页面使用该功能。如下图：


> 此处放上之前 Line Notes 上线推广时录制的 Gif。


### 4.6  保护分支

保护分支是 Coding 针对 Git 中有关代码权限开发的一个功能，阅读之前，我假设您已经知道分支的基本概念和用法。简而言之，保护分支就是将特定的分支保护起来，以防止被破坏。

在项目代码分支页面，我们可以设置保护分支，如下图所示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/25bb5b4e-ebcd-40ac-bdc1-4ed15ab63b3a.png) 

分支名称左边有一个 lock 标志，表示改分支是保护分支。我们可以点击右侧的绿色盾牌标志来设置开关保护分支和设置保护分支成员。如下图：

 ![图片](https://dn-coding-net-production-pp.qbox.me/f9f8b62d-ee87-4333-aec2-733c6699e53f.png) 
勾选某个项目成员，即代表改成员对该分支有 write 权限（可以push 至该分支，可以接受该分支的 MR）。

其他成员，则没有权限 push 至该分支，当push 至该分支的时候，会得到如下错误提示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/bf94efb5-a604-4bf5-9e8a-fd9837fbef64.png) 
所以，当你看到这个错误提示的时候，就知道是因为没有该保护分支权限而导致 push 失败了。

## 5. 代码阅读

代码阅读( CodeInsight )是 Coding 开发的用来在线阅读代码的一种功能，在 Coding 你不止可以在代码托管页面阅读代码，我们将提供 代码阅读（CodeInsight）功能，该功能提供了一系列语法分析，交叉引用分析等，最终可以实现在线精准的代码高亮显示，交叉引用查询，声明，定义，调用查询等等高级功能。

如果是付费项目，可以在代码页面的右上角，点击代码阅读，进行阅读，如下图：

 ![图片](https://dn-coding-net-production-pp.qbox.me/9b35714c-bfd2-422e-8896-32be3d5d4d11.png) 


6. SSH公钥
-----


有关什么是 SSH，可参考中文维基百科（http://zh.wikipedia.org/zh/Secure_Shell）。
这里要说明的是，Coding.net 支持使用 SSH 协议来访问 Git仓库，提供账户 SSH 公钥和项目部署 SSH 公钥设置。
用户可以在认证身份时选择在账户里面设置 SSH公钥，并获所有仓库的读写权限（注意！您的公钥对应的私钥必须要妥善保存，如果您的私钥被第三方获取，那么他将可以以您的身份来操作 Git 仓库，这跟密码被盗一样严重）]， 也可以在项目设置里面设置项目部署公钥，获取仓库的只读权限。

添加公钥后，您就可以在项目的代码页面点击 SSH 切换到 SSH 协议的 clone 地址，类似这样：（git@git.coding.net:wzw/leave-a-message.git），这样就可以使用 SSH 协议来访问 Git 仓库了，每次链接都不需要再输入账号和密码了。

> 注意：一个公钥只能认证一个用户，而一个用户却可以拥有多个公钥。


### 6.1 账户SSH公钥

账户 SSH 公钥是跟用户账户关联的公钥，一旦设置，就拥有账户下所有项目仓库的读写权限。

#### 6.1.1 生成公钥 

Mac/Linux 打开命令行终端, Windows 打开 Git Bash 。
输入ssh-keygen -t rsa -C "username@example.com",( 注册的邮箱)，接下来点击enter键即可（也可以输入密码）。

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    # Creates a new ssh key, using the provided email as a label
    # Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  // 推荐使用默认地址

成功之后

    Your identification has been saved in /Users/you/.ssh/id_rsa.
    # Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
    # The key fingerprint is:
    # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com

#### 6.1.2 添加公钥

1. 本地打开 id_rsa.pub 文件，复制其中全部内容，填写到SSH_RSA公钥key下的一栏，公钥名称可以随意起名字。
2. 完成后点击“添加”，然后输入密码或动态码即可添加完成。
 ![图片](https://dn-coding-net-production-pp.qbox.me/49eab64b-8d8a-4787-a0ed-ce347f753a69.png) 
3. 完成后在命令行测试，首次建立链接会要求信任主机。

          $ ssh -T git@git.coding.net
          The authenticity of host 'git.coding.net (61.146.73.68)' can not be established.
          RSA key fingerprint is 98:ab:2b:30:60:00:82:86:bb:85:db:87:22:c4:4f:b1.
          Are you sure you want to continue connecting (yes/no)? yes
          Warning: Permanently added 'git.coding.net,61.146.73.68' (RSA) to the list of kn
          own hosts.

          Enter passphrase for key '/c/Users/Yuankai/.ssh/id_rsa':
          Coding.net Tips : [ Hello Kyle_lyk! You have connected to Coding.net by SSH successfully! ]


### 6.2 部署SSH公钥

项目部署 SSH 公钥是跟项目关联的公钥，设置后有该项目的仓库的只读权限。

 ![图片](https://dn-coding-net-production-pp.qbox.me/862d0517-5b77-49c7-bfb2-398674e476dd.png) 
 
添加方式同 SSH 公钥一致。

### 6.3 关于HostKey

Coding.net 为了更好的通用性，以后计划默认使用 RSA Host Key 来提供 SSH 通信的加密服务，此 RSA key 的公钥内容如下：

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDHOWdwLpkos2CLli6DFvQ36yQE6Pe/PtFp3XwyirfZCIoGWnedaWI8zkJWVCs0wgOB9/urFepTDfV2wN49KGy1sl2/CCDEH2K/zeoEAZlTcBrhU17bwg1yMHCyJ7IM+zdLzItDEKYjgoWqVdUGK1dXQQlwt7GP4W7HqffelQQoVxOMoZ5N50MzD+nvV4y8iq0KwDQNy62iU4hui9ajCSVUDLu/06ucd5IojSI9keRIYAXvQf52TJ5EbvoBggp9RhjuWNEG8IhnPP6rzPS11Ocmwg/HsP8xOKL28AeDBAh6B6MEBDtlyp5Yfu9cwZJ9CFtU/x5fHFPtANmgIphAfwN1

fingerprint 是：
`98:ab:2b:30:60:00:82:86:bb:85:db:87:22:c4:4f:b1`

如果您之前有信任过 Coding.net 的 ECDSA 格式的 Host key，那么之后的 Push 和 Pull 可能会遇到如下错误：
`
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
98:ab:2b:30:60:00:82:86:bb:85:db:87:22:c4:4f:b1.
Please contact your system administrator.
`
如果您确认，输出的公钥指纹是上文描述的内容。那么可以信任这是 Coding.net 的服务器，不是第三方劫持。 您需要做如下操作
1.删除 ~/.ssh/known_hosts 中 coding.net 相关的行

2.重试 push 或者 pull 或者 ssh -T git@git.coding.net

3.遇到询问是否信任服务器公钥，输入 yes 即可

7. WebHook 
----

Webhook 允许第三方应用监听 Coding.net 上的特定事件，在这些事件发生时通过 HTTP POST 方式通知( 超时5秒) 到第三方应用指定的 Web URL。 例如项目有新的内容 Push，或是Merge Request 有更新等。 WebHook 可方便用户实现自动部署，自动测试，自动打包，监控项目变化等。 

### 7.1 设置触发事件

Coding.net 用户可以在自己的项目 －> 设置 －> Webhook 中创建、设置 Webhook 所需监听的事件，并配置第三方应用的 Web URL 。

目前我们支持如下的事件：

| Event |	说明 |
| :--- | :--- |
| Push |	任何时间项目内的 Push 操作 |
| MR/PR | 任何时间项目内的 Merge Request 和 Pull Request 操作|
| Topic |	任何时间项目内的讨论创建，评论 |
| Task |	任何时间项目内的任务操作 |
| Document |  任何时间项目内的文档操作 |
| Watch |	任何时间第三方用户关注你的项目(限公开项目) |
| Star | 任何时间对项目的收藏(限公开项目) |

> 注：为防止您填写的 URL 被第三方恶意调用，我们 WebHook 提供了一个预先填写的 Token ，这个 Token 将会随 Post 请求信息一起发送给您，您可验证此 Token 来确认此请求确实是 Coding.net 发出的。

### 7.2 Webhook请求说明

Webhook 的每个 POST 请求都有包含特殊的 Header, 默认超时时间为 2s 

**POST 请求 Header 说明**

| Header |	说明 |
| :--- | --- |
| X-Coding-Event	 | 事件名（例如: push, Merge Request, Task） |

首次绑定，系统会向您所填写的 url 地址，发送一个简单的请求，以验证该 WebHook 是有效的，请求如下：

    {
        "token": "123", 
        "zen": "Coding！ 让开发更简单"
    }

关于WebHook 更多例子，请参看 [Coding.net 开放平台] http://open.coding.io




  [1]: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
  [2]: https://git-scm.com/book/zh/v2
  [3]: coding.net/upgrade