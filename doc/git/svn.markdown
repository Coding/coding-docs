---
layout: post

title: SVN 支持
--- 
### SVN 支持
Coding.net 上的 git 仓库也支持通过标准的 [subversion](https://subversion.apache.org) (以下简称 svn)客户端来访问，我们在服务器端实现了 svn 协议到 git 的透明转换，svn 客户端通过 svn+ssh 协议连接到我们的服务器，数据传输全程走 ssh 加密通道。

#### 开启 SVN 支持

必须有项目管理员在 “项目设置 - 仓库设置” 页面点击 “开启 SVN 服务” 按钮开启 SVN 服务后，服务器端才会允许 svn 客户端连接到 git 仓库，svn 客户端版本要求在 `1.8` 以上。

#### SVN 客户端使用

这里以命令行为例简单演示下 svn 客户端的使用：

- 首次检出代码

```
$ svn checkout --depth empty svn+ssh://svn.coding.net/username/reponame
Checked out revision 1.
```

- 获取 `trunk` 分支代码（对应 git 的 master 分支）

```
$ svn update trunk
Updating 'trunk':
A    trunk
A    trunk/README.md
Updated to revision 1.
```

- 切换分支

要想切换本地工作空间到另一个分支可以使用 svn switch 命令：

```
$ svn checkout --depth empty svn+ssh://svn.coding.net/username/reponame/trunk
$ svn switch svn+ssh://svn.coding.net/username/reponame/branches/my_branch
```

#### git 分支标签映射规则

git 仓库的分支和标签按照如下规则映射到 svn 路径：

- master -> /trunk，即：svn checkout <仓库地址>/trunk 可以检出 master 分支
- 分支 -> /branches/分支，例如：svn checkout <仓库地址>/branches/test 可以检出 test 分支
- 标签 -> /tags/标签，例如：svn checkout <仓库地址>/tags/v1.0 可以检出 v1.0 标签
- 暂不支持分支标签的创建删除和合并，git submodule 检出为空目录

> **如何查看某个 svn 版本对应的 git commit？**

> 执行 svn propget git-commit --revprop -r HEAD svn+ssh://svn.coding.net/user/repo，HEAD 替换为版本号数字可以查看该版本号对应的 git commit。

**提示：**本功能目前处于测试阶段，尚未实现完整 SVN 功能，如您在使用中遇到问题请向我们 [提交错误报告](https://coding.net/feedback)。

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/webhook.html">上一篇：WebHook</a></div>
  </div>
