---
layout: post

title: Git分支管理
---

本章我们会介绍使 Git 与其它版本控制系统区别开来的最关键特点 ———— Git 的分支。它被称为 Git 的“必杀技”。
以及如何使用和管理分支。

### 什么是分支

分支一方面类似科幻电影里面经常出现的平行宇宙，每个分支的代码版本都是独立演进的，分支之间的代码版本完全不会干扰另外一个代码版本的开发。但是，与平行宇宙不同的一点是，分支之间还能合并。

Git 的分支相比 SVN 要轻量很多，这是因为 Git 分支并不是复制一个新仓库，而是为一个分支存储一个指针，这个指针将指向某个提交对象。没错，这就和数据结构中常见的指针链表一样。所以 Git 的分支只是指针，并没有将仓库进行复制，每次提交都会让当前的分支向后移动，指向最后一次提交的对象。当你在切换分支时，Git 也只是改变指向当前所在分支的特殊指针 HEAD，所以可以快速地在各个分支之间进行切换。

### 分支的功能

分支在实际中可以方便的隔离开发。
假设你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。


### 创建一个分支

**在 Coding.net 上创建分支**

在 Coding.net 界面上可以进入到项目中，依次点击 [代码] -> [分支] -> [新建分支]：

 ![图片](https://dn-coding-net-production-pp.qbox.me/fbb3e1d4-bdbd-4fce-b60c-19b68ce5c9e1.png) 


 ![图片](https://dn-coding-net-production-pp.qbox.me/86b673e4-3576-47cc-9fcc-d1aafb46b3fe.png) 

**在命令行创建本地分支**

也可以在命令行用 `git branch`  新建一个分支，回到上一章中提到的 learn-git 项目，我们在本地运行以下命令：

     $ git branch learn-branch

这条命令将会在本地仓库创建一个名为 "learn-branch" 的分支，这条分支指向最近一次提交的数据。要注意的是，运行该命令后，当前工作分支仍然是在 "master" 分支上，需要使用 `git checkout` 命令来进行分支之间的切换。

### 切换分支

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


### 合并分支

接下来我们将描述本地两种常见情形下的合并分支操作。本地的分支合并都是在命令行解决的。


#### 快进式合并

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

#### FastForward 模式合并 MR/PR

MR 和 PR 在合并的时候默认会产生一个合并提交，但是如果在合并的时候勾选了“Fast-Forward 模式合并”，服务器会在合并的时候判断该 MR 或者 PR 是否符合“快进模式”合并，如果符合则会按照“快进模式”合并，不产生合并提交，如果是不符合“快进模式”合并的情况，则忽略该选项，依然以产生合并提交的方式合并。这个选项相当于 git merge 的 `--ff` 参数。

![](https://dn-coding-net-production-pp.qbox.me/8a4f7147-05a0-46be-a911-6383e155df08.png?imageView2/2/w/800/h/800&imageMogr2/format/png)

#### 普通分支合并

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


#### 分支推送到仓库

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

#### 合并请求

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

#### 通过命令行创建 MR

- push 到 mr/master/branch_name 分支即可自动创建远端分支并提交 MR（合并入 master），如 `$git push origin Feature-X:mr/master/Feature-X`  
- 自动创建的使用最后一个 commit message 作为标题和内容
- 自动解析 commit message 中 @ 的人，自动加成评审者，自动# 加为关联资源
- 自动创建出来的新的分支，只能有创建者再次 push 到这个分支，也允许 force push

### # 标志引用资源

每个任务，讨论，MR 也有一个独特的引用 ID， 并通过 #ID 被引用到项目内其它地方。
项目内支持 Markdown 编辑器的地方都支持“#”自动提示(任务描述、讨论、合并请求描述等)，并引用相应资源。

- 讨论

 ![图片](https://dn-coding-net-production-pp.qbox.me/a878cf72-cef4-44a5-906c-653325062bdd.png) 

- Merge Request 

 ![图片](https://dn-coding-net-production-pp.qbox.me/80092778-981d-4edb-87e8-6a1cbecc5378.png)

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

#### 代码行级比对

代码行级比对( Line Notes ) 是 Coding 开发的可以针对代码的 diff 进行行级别的评论功能，支持 Markdown 语法，可以方便的用来进行 Code Review。
你可以在代码 commit 页面，和合并请求( MR /PR ) 页面使用该功能。

### 保护分支

保护分支是 Coding 针对 Git 中有关代码权限开发的一个功能，阅读之前，我假设您已经知道分支的基本概念和用法。简而言之，保护分支就是将特定的分支保护起来，以防止被破坏。

在项目代码分支页面，我们可以设置保护分支，如下图所示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/25bb5b4e-ebcd-40ac-bdc1-4ed15ab63b3a.png) 

分支名称左边有一个 lock 标志，表示改分支是保护分支。我们可以点击右侧的绿色盾牌标志来设置开关保护分支和设置保护分支成员。如下图：

 ![图片](https://dn-coding-net-production-pp.qbox.me/f9f8b62d-ee87-4333-aec2-733c6699e53f.png) 
勾选某个项目成员，即代表改成员对该分支有 write 权限（可以push 至该分支，可以接受该分支的 MR）。

其他成员，则没有权限 push 至该分支，当push 至该分支的时候，会得到如下错误提示：

 ![图片](https://dn-coding-net-production-pp.qbox.me/bf94efb5-a604-4bf5-9e8a-fd9837fbef64.png) 
所以，当你看到这个错误提示的时候，就知道是因为没有该保护分支权限而导致 push 失败了。

当对 Git 仓库某分支开启禁止 Force Push 的选项后，服务器会对推送至这个分支的更新做 “快进模式检查”（FastForwarded Update Check），如果不是以 “快进模式”（FastForwarded）更新，则会被服务器拒绝更新，以防误操作导致丢失代码历史，会在命令行提示如下错误：

![](https://dn-coding-net-production-pp.qbox.me/29f7366d-a114-456c-84e7-b9b21b23dcc8.png)

---


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/push.html">上一篇：提交代码</a></div>
  <div class="right-nav"><a href="/help/doc/git/code-insight.html">下一篇：代码阅读</a><i class="fa fa-angle-right"></i></div>
  </div>
