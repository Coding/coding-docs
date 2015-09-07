---
layout: post

title: Git管理代码
---

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

