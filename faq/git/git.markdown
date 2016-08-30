---
layout: post

title: Git 操作常见问题
---

---

## Git 是什么？如何使用 Git 提交代码到 Coding.net？
Git 是一种在全球范围都广受欢迎的版本控制系统。在开发过程中，为了跟踪代码，文档，项目等信息中的变化，版本控制变得前所未有的重要。但跟踪变化远远不能满足现代软件开发行业的协同需求，基于 Git 的 Workflow 满足了合作编程的需求，让开发从此变得更加高效和有趣。相比集中式版本控制系统如 SVN ，分布式版本控制系统 Git 拥有更强大的分支管理与合并能力，支持离线开发，并良好地保留了提交过程，让您和您的团队在开发过程中如虎添翼。

关于使用 Git 提交代码，请阅读 [Git 代码托管文档](/help/doc/git/index.html)，您也可以通过阅读 CODING 工程师参与翻译的 [《Pro Git》](https://git-scm.com/book/zh/v2) 进一步掌握 Git 这个强大的版本控制系统。

## CODING 是什么？为什么要使用 Coding.net ？

CODING 是国内专业的一站式云端软件服务平台，成立于 2014 年 2 月，总部位于深圳，并于北京、上海、成都、西雅图设立分部，已获得了 IDG 和光速的两轮投资共计 1500 万美元。旗下自主研发运营 Coding.net 云端开发协作平台，累积 25 万开发者，37 万个项目。在云计算时代，把代码托管、产品演示、WebIDE 等开发工具集成到浏览器中，免除繁杂的开发环境部署，节省成本，帮助软件开发者提高生产效率，并实现 “Coding Anytime Anywhere” 的愿景。2015 年 10 月，基于 Coding.net 的工具平台，CODING 推出云端软件众包服务平台 “码市”，旨在通过云端协作以及众包的方式提高软件交付的效率，帮助软件开发行业实现高效的资源匹配。

Coding.net 为开发者提供了免费的基础服务，包括但不限于 Git 代码托管，项目管理，Pages 服务，代码质量管理。您可以在 Coding.net 一站完成代码及代码质量，项目及项目人员的管理，Coding.net 让开发变得前所未有的敏捷和简单。

同时，Coding.net 采用整站 SSL 加密，数据实时备份，异地数据备份等措施保障用户数据安全及系统可用性，具体请阅读我们的 [安全策略](https://coding.net/security) 及 [Git 代码托管服务等级协议](https://coding.net/gitsla)。

## 怎样在每次 Push 时不用重复输入密码？

有两种方法：

- 使用 SSH 方式进行推送，您需要配置 SSH 公钥后进行操作，详情请阅读 [SSH 公钥配置文档](/help/doc/git/ssh-key.html)

- 对于 Https 协议: 首先在全局配置保存你的密码， ~/.git-credentials （没有就创建）内添加 https://{username}:{passwd}@git.coding.net   然后执行配置 Git 命令存储认证命令： 
```
$git config --global credential.helper store 
```
		
执行后在 ~/.gitconfig 文件会多出下面配置项:
```
credential.helper = store
```

详情请参考[凭证存储](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8#_credential_caching) 。


## 我的 Git 是 1.7 版本为什么无法提交代码？

该 Git 版本过低，请升级至 [最新版](https://git-scm.com/)。

## 如何设置分支的提交权限，让部分人可以提交？

你可以用保护分支功能来划分不同成员对不同分支的操作权限, 参见 [分支管理](/help/doc/git/git-branch.html) 的保护分支章节

## Coding 的代码管理支持图形化工具吗？

支持，我们推荐使用 SourceTree， 具体请阅读 [开始使用 Git](/help/doc/git/getting-started.html)的安装章节。

## 出现 "Coding.net Tips : [Internal server error]" 怎么办？

出现 [Internal Server error] 可能表示我们服务器端的仓库访问有问题，请通过 [反馈](https://coding.net/u/coding/p/Coding-Feedback/topic) 提交您的项目的 url 地址供研发人员排错。


## Push 一直提示 "Permission denied (publickey) " 怎么办?

这个可能是由于你的没有目标仓库和分支的权限，导致无法更新数据。

- 确认您的 push 方式，如果是 SSH 方式请检查你的 SSH 公钥是否正确（如果您有多个私钥，请使用 ssh-add 命令来指定默认使用的私钥）； HTTPS 方式请检查密码及用户名是否正确。
- 对目标分支是否有写权限。
- 善用 [搜索](https://coding.net/search?q=Permission%20denied&type=project&project=Coding-Feedback&user=coding) 

## Push 提示“Couldn't resolve host 'git.coding.net'”怎么办？

这是由于您的 DNS 设置造成的，请更换您的 DNS 为 8.8.8.8 或 114.114.114.114 后重启网络。

## Push 提示 “RPC failed; result=22, HTTP code = 413” 怎么办?

这是由于 https 推送方式的 http.postBuffer 对推送文件大小有限制造成的。  
可以执行 `git config http.postBuffer 524288000` 设置更大的限制值。  
或者更换使用 [SSH 方式](https://coding.net/help/doc/git/ssh-key.html) 进行推送。

## Clone 出错怎么办？

- 请确保安装并使用了最新版 [官方 Git 客户端](https://git-scm.com/downloads)
- 请确保 remote url (大小写敏感）是正确的

```
$ git remote -v 
# 查看目前使用的 remote url
origin	https://git.coding.net/username/repo-name.git (fetch)
origin	https://git.coding.net/username/repo-name.git (push) 

$ git remote set-url origin https://git.coding.net:username/right-name.git
# 修改为正确的 remote url
```

-  请确保自己在项目中的权限非 [受限](https://coding.net/help/doc/project/getting-started.html#section)；

-  如果使用 https 方式 clone，服务器端一直返回 403 并且客户端不提示输入密码，则有可能是 git 客户端缓存了错误的密码，请清除已保存的密码

```
# Mac 用户请依次输入

$ git credential-osxkeychain erase
host=git.coding.net
protocol=https
[按回车]
```

-  如果以上都无法解决，请尝试使用 [SSH 地址](https://coding.net/help/doc/git/ssh-key.html) 进行 clone
-  如果 SSH clone 出错，请检查你是否连接到正确的地址

```
$ ssh -vT git@git.coding.net
OpenSSH_6.9p1, LibreSSL 2.1.8
debug1: Reading configuration data /Users/.ssh/config
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 21: Applying options for *
debug1: Connecting to git.coding.net [111.202.69.69] port 22.
debug1: Connection established.
# 请注意 SSH 地址为 git.coding.net (而非 coding.net)
```

- 请使用 git 作为用户名

```
$ ssh -T username@git.coding.net
# 使用自己的用户名进行链接会出错，请使用 git 作为用户名

$ ssh -T git@git.coding.net
Hello usernanme! You've connected to Coding.net via SSH successfully!
```
- 确保 git 使用了密钥

```
$ ssh -vT git@git.coding.net
...
debug1: identity file /Users/you/.ssh/id_rsa type -1
debug1: identity file /Users/you/.ssh/id_rsa-cert type -1
debug1: identity file /Users/you/.ssh/id_dsa type -1
debug1: identity file /Users/you/.ssh/id_dsa-cert type -1
...
debug1: Authentications that can continue: publickey
debug1: Next authentication method: publickey
debug1: Trying private key: /Users/you/.ssh/id_rsa
debug1: Trying private key: /Users/you/.ssh/id_dsa
debug1: No more authentication methods to try.
Permission denied (publickey).
# -1 表示未找到密钥，请参考帮助文档重新生成 rsa 密钥并进行配置

$ ssh -vT git@git.coding.net
...
debug1: identity file /Users/you/.ssh/id_rsa type 1
...
debug1: Authentications that can continue: publickey
debug1: Next authentication method: publickey
debug1: Offering RSA public key: /Users/you/.ssh/id_rsa
# 1 表示找到了密钥
```
- 确保 [SSH 公钥上传到了 Coding.net](https://coding.net/help/doc/git/ssh-key.html#codingnet-)
- 如果以上方法都解决不了问题，请发送执行 `$ssh -vvT git@git.coding.net` 的结果到 [Feedback](https://coding.net/feedback)

## Push 提示其他错误怎么办？

请参考 [文档](https://coding.net/help/doc/git/index.html) 并确保您执行了正确的操作，如果仍然报错请在 [反馈区](https://coding.net/u/coding/p/Coding-Feedback/topic) 提供我们以下信息以便工程师为您解决问题：

- Git 报错信息
- 执行 `git --version` 的结果
- 其他有用的信息（如屏幕截图、`$ ssh -vvvT git@git.coding.net`（如果您目前使用了 SSH 方式推送的话）、`$ ping git.coding.net`、您目前的 [IP 地址](http://ip.cn)，及您目前使用的 DNS 等信息）


如果可以的话运行如下的脚本，并将生成的 git.log 贴给我们：

> 注意： Windows 用户需要在 git bash 下运行

```	
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
```

## 如何在 Coding 上回退代码版本？

Coding 平台使用 git 来管理代码，Coding 没有提供版本回退的界面。需要使用 git 操作回退，然后更新到 Coding 服务器上
具体的操作可以使用 git revert 或者  git reset 

## 如何设 SSH Key？怎么设置了之后还是要输入密码？

设置 SSH Key 的方式参见 [SSH 公钥配置](/help/doc/git/ssh-key.html)

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
