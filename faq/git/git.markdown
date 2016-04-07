---
layout: post

title: Git 操作常见问题
---

---

## 如何提交代码到 Coding 上？

可以查看 Coding 的 [Git 代码托管文档](/help/doc/git/index.html)
可以参照网上的相关Git教程 如 [廖雪峰的 Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## 每次 Push 的时候如何不用输入密码？

可以有2个办法：

- 针对 SSH 协议的方式， 配置SSH 公钥，使用 SSH 协议操作，具体见 [SSH 公钥配置](/help/doc/git/ssh-key.html)

- 对于 Https 协议
 1. 首先在全局配置保存你的密码， ~/.git-credentials （没有就创建）内添加 https://{username}:{passwd}@git.coding.net 
 2. 然后配置 Git 命令存储认证， 

 		$git config --global credential.helper store 
		
		~/.gitconfig 文件多出下面配置项:
		credential.helper = store

## 我的 Git 是1.7版本为什么无法提交代码？

由于 git版本过低，最好升级到1.9 以上

## 如何设置分支的提交权限，让部分人可以提交？

你可以用保护分支功能来划分不同成员对不同分支的操作权限, 参见[分支管理](/help/doc/git/git-branch.html) 的保护分支章节

## Coding 的代码管理支持图形化工具吗？

支持，我们推荐使用 SourceTree， 具体参见[开始使用 Git](/help/doc/git/getting-started.html)的安装章节。

## 出现 'Coding.net Tips : [Internal server error]' 怎么会事？

出现[Internal Server error] 表示我们服务器端的仓库访问可能有问题。 

您可以通过[反馈](https://coding.net/u/coding/p/Coding-Feedback/topic)，提交你的项目的url地址 供研发人员排错。


## Push 一直提示Permission denied (publickey) ?

这个可能是由于你的没有目标仓库和分支的权限，导致无法更新数据。

- 检查你的push 方式，通过 SSH 还是 HTTPS ，如果是 SSH 请检查你的 SSH公钥是否正确。 HTTPS 的方式请检查你的密码是否正确
- 对目标分支是否有写权限。

## 代码 push 不了，报 SSL Abort，SSL protocol error，或者 Connection Timeout 怎么办？

我们需要更多的信息来排查问题，如果可以的话运行如下的脚本，并将生成的 git.log 贴给我们：
> 注意： Windows 用户需要在 git bash 下运行
	
	#!/bin/bash
	# this script will collect some logs for Coding.net 

	### how to use ###
	# first enter your git reposiztory 
	# then execute this bash, please make sure you have correct rights 

	echo "## git version  ##################" >> git.log
	git version  >> git.log
	echo "## ping ##########################" >> git.log
	ping -c 5 git.coding.net  >> git.log
	echo "## curl git.coding.net ###########" >> git.log
	curl -v https://git.coding.net >> git.log 2>&1
	echo "## curl git-upload-pack  ##############" >> git.log
	curl -v https://git.coding.net/wzw/test-for-1.git/info/refs?service=git-upload-pack  >> git.log 2>&1
	echo "## ssh -vT git.coding.net ##############" >> git.log
	ssh -vT git@git.coding.net >> git.log 2>&1
	echo "## ssh -vT git-upload-pack ##############" >> git.log
	ssh -v git@git.coding.net git-upload-pack wzw/test-for-1.git >> git.log 2>&1
	echo "## git pull  ##############" >> git.log
	GIT_CURL_VERBOSE=1 GIT_TRACE=1 GIT_TRACE_PACKET=1 git pull  >> git.log  2>&1


同时由于 Coding 将 git 部署在 CDN 上，出现这种原因可能是你这边网络访问对应的 CDN 的节点有问题。 
麻烦在反馈区，提供以下信息供研发人员提交到 CDN 服务商排查。

	1. 您的上网IP
	2. 您的 ping git.coding.net 的截图
	3. 您的DNS设置
	4. 修改您的 DNS 修改到 115.231.16.157 
	5. 再次 ping git.coding.net 的截图

## 如何在 Coding 上回退代码版本？

Coding 平台使用 git 来管理代码，Coding 没有提供版本回退的界面。需要使用 git 操作回退，然后更新到 Coding 服务器上
具体的操作可以使用 git revert 或者  git reset 

## 如何设 SSH Key？怎么设置了之后还是要输入密码？

设置 SSH Key 的方式参见[SSH公钥配置](/help/doc/git/ssh-key.html)

如果用户自己对 SSH 私钥加了密，仍然需要使用密码来访问私钥，因此需要输入密码
> 注意： 配置了 SSH 公钥后，需要使用 SSH 地址操作仓库。

## 无法使用 22 端口的 SSH 服务怎么办？

SSH 的默认端口是 22，有时您或您的公司的防火墙会完全屏蔽掉这个端口。如果此时您不方便通过 HTTPS 方式进行 Git 操作，您可以使用 Coding.net 提供的 443 端口的 SSH 服务，您需要确保 [SSH 已配置成功](https://coding.net/help/doc/account/ssh-key.html)，然后执行：

```
$ ssh -T -p 443 git@git-ssh.coding.net
The authenticity of host '[git-ssh.coding.net]:443 ([180.150.178.244]:443)' can't be established.
RSA key fingerprint is SHA256:jok3FH7q5LJ6qvE7iPNehBgXRw51ErE77S0Dn+Vg/Ik.
RSA key fingerprint is MD5:98:ab:2b:30:60:00:82:86:bb:85:db:87:22:c4:4f:b1.
Are you sure you want to continue connecting (yes/no)?
```

输入 yes 即可得到：

```
Hello username You've connected to Coding.net by SSH successfully!
```

此时您就可以通过 ssh://git@git-ssh.coding.net:443/{username}/{reponame}.git 的形式进行 Git 操作了。

另外，您还可以修改您的 SSH 配置文件默认使用该方式进行 Git 操作。

只需要修改您的 ~/.ssh/config 文件即可：

```
Host git.coding.net
  Hostname git-ssh.coding.net
  Port 443
```

最后您可以通过以下命令测试是否配置正确：

```
$ ssh -T git@git.coding.net
Hello username You've connected to Coding.net by SSH successfully!
```
