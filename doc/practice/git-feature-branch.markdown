---
layout: post

title: 使用 Feature Branch Workflow
--- 
### 什么是 Workflow？
工作流（Workflow），是对工作流程及其各操作步骤之间业务规则的抽象、概括描述 [1] 。合理选择并使用一套工作流可以让技术团队开发更高效，更简单！


### 如何选择一个 Workflow？

推荐阅读：[大话 Git 工作流](https://blog.coding.net/blog/git-workflow) 

Workflow 没有银弹 [2] ，如果你的：

- 生产环境有多个版本，需要持续支持旧版本的软件服务如操作系统，自定义应用程序等，可使用 [Gitflow](https://help.gitcafe.com/practices/workflow)
- 生产环境只有一个版本，如网站，网络服务等，可使用 Feature Branch Workflow
- 生产环境只有一个版本但软件很复杂，需要 CI/CD 后才能进入生产环境的如 Gmail，Twitter 等，可使用 [Gitlab-flow](https://about.gitlab.com/2014/09/29/gitlab-flow/) 


### Feature Branch Workflow 是什么？

Feature Branch Workflow 的核心理念是：master 分支用于部署，功能开发应该在专门的分支而非 master 分支上，任何推向 master 分支的 feature-branch 都应该经过代码审核。即，团队成员共用一个私有项目仓库进行管理协作，开发者在各自的 feature-branch 中进行开发，开发完成后通过提交 Merge Request 进行代码评审，通过代码评审后 merge 进入 master 分支（即可部署到生产环境）。

> Merge Request 是一个请其他项目成员对代码进行 review 并 merge 的 request。类似 GitHub 的 Pull Request, 两者都是实现对两个 repo 或 branch 的合并。Coding.net 提供了一个友好的 Merge Request 界面，在合并提交的变更到正式项目前可以对其代码进行评审。


### 如何进行 Feature Branch Workflow ？

我们通过一个简单的例子来看 Feature Branch Workflow 如何运行。

#### 洋葱猴开发一个新功能

在开发功能前，洋葱猴需要一个独立的分支去工作。他使用以下命令基于 master 分支新建了一个名为 `banana` 的分支：

```
git checkout -b banana master
```

在该新分支上，洋葱猴按常用办法来编辑、暂存和提交修改以实现了新功能：

```
git status
git add <some-banana>
git commit 
```

#### 洋葱猴要去吃香蕉

在吃饭前提交刚才的代码到远程中央仓库吧，这样可以方便地备份，也可以让其它小伙伴看到洋葱猴的提交。

```
git push -u origin banana
```

#### 洋葱猴完成了新功能的开发

洋葱猴完成了该功能的开发，并在 Coding.net 项目合并请求页面中发起了一个 Merge Request，请求合并 banana 分支到 master 分支，其团队成员会自动收到通知。 Coding.net 提供的 Merge Request 界面可以让团队成员在相关的代码旁边进行评论，更方便地对某个变更提问。

 ![图片](https://dn-coding-net-production-pp.qbox.me/79d860ea-56eb-4adf-810b-e8f83403be38.png) 


> git push origin banana:mr/master/banana 可以同时 push banana 分支并 [自动发起 Merge Ruquest](https://coding.net/help/doc/git/git-branch.html#mr)

#### 大圣收到 Merge Request

大圣收到了 Merge Request 后进行代码评审。他将决定在将其合并到 master 分支前是否要做修改，并且通过 Merge Request 和洋葱猴进行讨论。

 ![图片](https://dn-coding-net-production-pp.qbox.me/fdb49937-5e03-4290-ab88-4ea4d8bfb21c.png) 
 
#### 洋葱猴再次修改
和之前的操作一样，洋葱猴再次进行了一些编辑，暂存，提交。

```
git add <another-banana>
git commit 
git push -u origin banana
```

这些变化会自动更新到该 Merge Request，同时大圣也可以继续做代码评审，对其特定代码发起讨论。当然大圣也可以把 banana 分支拉到本地进行修改。他提交的任何变更也会一样显示在 Merge Request 中。

#### 发布新功能

一旦大圣同意（对此 +1），测试（如果有）也通过了，就可以进行 merge。洋葱猴（或大圣）可以直接在 Coding.net 网页端点击“合并”，或通过以下命令进行合并：

```
git checkout master
git pull
git pull origin banana
git push
```

这个过程常常会生成一个合并提交。有些开发者喜欢这个，因为它像一个新功能和原代码基线的连通符。 但如果你喜欢线性的提交历史，可以在执行合并时 rebase 功能分支到 master 分支的顶部，这样生成一个 [快进（fast-forward）的合并](https://coding.net/help/doc/git/git-branch.html#fastforward--mrpr)。
 
注：

- 当一个分支被合并后，这个分支就可以删除了。
- 为防止其他成员误操作，开发者还可以使用 Coding.net 的 [分支保护](https://coding.net/help/doc/git/git-branch.html#section-11) 功能来实现对代码分支的保护。
- 常用 rebase 可避免/解决冲突。


Happy Coding ; )

[1] [https://zh.wikipedia.org/wiki/工作流技术](http://dwz.cn/3mrIEk)

[2] http://stackoverflow.com/a/35915110

（完）

  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/practice/git-deploy.html">上一篇：如何部署软件</a></div>
