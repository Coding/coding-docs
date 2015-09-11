---
layout: post

title: Git 操作常见问题
---

---

## 如何提交代码到 Coding 上？

可以查看 Coding 的 [Git 代码托管文档](/help/doc/git/introduction.html)
可以参照网上的相关Git教程 如 [廖雪峰的 Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## 每次 Push 的时候如何不用输入密码？

可以有2个办法：
1. 配置 SSH 公钥，使用 SSH 协议操作，具体见 [SSH 公钥配置](/help/doc/git/ssh-key.html)
2. 配置本地的 HTTPS Remote URL 加上你的username@password ， 仓库目录下 .git/config
    
    https://{username}:{passwd}@git.coding.net

## 我的 Git 是1.7版本为什么无法提交代码？

git版本过低，最好升级到1.9 以上

## 如何设置分支的提交权限，让部分人可以提交？

你可以用保护分支功能来划分不同成员对不同分支的操作权限, 参见[分支管理](/help/doc/git/git-branch.html) 的保护分支章节

## Coding 的代码管理支持图形化工具吗？

支持，我们推荐使用 SourceTree， 具体参见[开始使用 Git](/help/doc/git/getting-started.html)的安装章节。

## 出现 'Coding.net Tips : [Internal server error]' 怎么会事？

出现[Internal Server error] 表示我们服务器端的仓库访问可能有问题。 
麻烦通过[反馈](https://coding.net/u/coding/p/Coding-Feedback/topic)，提交你的项目的url地址 供研发人员排错。


## PUSH一直提示Permission denied (publickey) ?

这个可能是由于你的没有目标仓库和分支的权限，导致无法更新数据。
 - 检查你的push 方式，通过 SSH 还是 HTTPS ，如果是 SSH 请检查你的 SSH公钥是否正确。 HTTPS 的方式请检查你的密码是否正确
 - 对目标分支是否有写权限。

## 代码 push 不了，报 SSL Abort，SSL protocol error，或者 Connection Timeout 怎么办？

由于Coding 将git 部署在CDN上了，可能你这边对应的 CDN 的节点有问题。 
麻烦在反馈区，提供以下信息供研发人员提交到 CDN 服务商排查。
1. 您的上网IP
2. 您的 ping git.coding.net 的截图
3. 您的DNS设置


## 如何在 Coding 上回退代码版本？

Coding 平台使用 git 来管理代码，Coding 没有提供版本回退的界面。需要使用 git 操作回退，然后更新到 Coding 服务器上
具体的操作可以使用 git revert 或者  git reset 

## 如何设 SSH Key？怎么设置了之后还是要输入密码？

设置 SSH Key 的方式参见[SSH公钥配置](/help/doc/git/ssh-key.html)

如果用户自己对 ssh 私钥加了密，仍然需要使用密码来访问私钥，因此需要输入密码
注意： 配置了SSH公钥后，需要使用SSH 地址操作仓库。

