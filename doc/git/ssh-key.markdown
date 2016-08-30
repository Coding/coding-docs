---
layout: post

title: 配置SSH公钥
---

本章节介绍如何通配置SSH公钥

## 配置SSH公钥

Coding.net 支持使用 SSH 协议来访问 Git仓库，提供账户 SSH 公钥和项目部署 SSH 公钥设置。
用户可以在认证身份时选择在账户里面设置 SSH公钥，并获所有仓库的读写权限（注意！您的公钥对应的私钥必须要妥善保存，如果您的私钥被第三方获取，那么他将可以以您的身份来操作 Git 仓库，这跟密码被盗一样严重）， 也可以在项目设置里面设置项目部署公钥，获取仓库的只读权限。

添加公钥后，您就可以在项目的代码页面点击 SSH 切换到 SSH 协议的 clone 地址，类似这样：（git@git.coding.net:wzw/leave-a-message.git），这样就可以使用 SSH 协议来访问 Git 仓库了，每次链接都不需要再输入账号和密码了。

> 注意：一个公钥只能认证一个用户，而一个用户却可以拥有多个公钥。


### Git 协议比较

#### HTTPS（推荐轻量级用户使用）

使用加密的网页访问通道读写仓库，使用用户名及密码进行鉴权。
避免重复输入密码，查看[怎样在每次 Push 时不用重复输入密码](/help/faq/git/git.html#push-)？

> 提示：Git 用户名为 Coding 的账户邮箱或者个性后缀，密码为 Coding 的账户密码。  
> 注意：HTTPS 方式 push 大文件可能引发错误，查看 [Push 出错怎么办](/help/faq/git/git.html)？

#### SSH（推荐资深用户或经常推送大型文件用户使用）

有关什么是 SSH，可参考中文维基百科（[http://zh.wikipedia.org/zh/Secure_Shell](http://zh.wikipedia.org/zh/Secure_Shell)）。  
使用加密通道读写仓库，无单次上传限制，需先设置[“账户 SSH 公钥”](#ssh-)，完成配对验证。

#### Git （只读）

Git 协议是 Git 使用的网络传输协议里最快的，但缺乏授权机制，仅适用于公开项目 clone 使用。

### 账户 SSH 公钥

账户 SSH 公钥是跟用户账户关联的公钥，一旦设置，SSH 就拥有账户下所有项目仓库的读写权限。
设置“账户 SSH 公钥”是开发者使用 SSH 方式访问/修改代码仓库的“前置工作”，分为“获取 SSH 协议地址”、“生成公钥”、“在 Coding.net 添加公钥”三个步骤。

#### 获取 SSH 协议地址
在项目的代码页面点击 SSH 切换到 SSH 协议， 获得 clone 地址，形如`git@git.coding.net:wzw/leave-a-message.git`。
**请使用这个地址来访问您的代码仓库。**

#### 生成公钥 

Mac/Linux 打开命令行终端, Windows 打开 Git Bash 。
输入ssh-keygen -t rsa -C "username@example.com",( 注册的邮箱)，接下来点击enter键即可（也可以输入密码）。
    
    $ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    # Creates a new ssh key, using the provided email as a label
    # Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  // 推荐使用默认地址,如果使用非默认地址可能需要配置 .ssh/config

成功之后

    Your identification has been saved in /Users/you/.ssh/id_rsa.
    # Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
    # The key fingerprint is:
    # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com

#### 在 Coding.net 添加公钥

1. 本地打开 id_rsa.pub 文件（或执行 $cat id_rsa.pub ），复制其中全部内容，添加到账户["SSH 公钥"页面](https://coding.net/user/account/setting/keys) 中，公钥名称可以随意起名字。
2. 完成后点击“添加”，然后输入密码或动态码即可添加完成。
 ![图片](https://dn-coding-net-production-pp.qbox.me/49eab64b-8d8a-4787-a0ed-ce347f753a69.png) 
3. 完成后在命令行测试，首次建立链接会要求信任主机。

`$ ssh -T git@git.coding.net    // 注意 git.coding.net 接入到 CDN 上所以会解析多个不同的 host ip
 The authenticity of host 'git.coding.net (61.146.73.68)' can not be established.
 RSA key fingerprint is 98:ab:2b:30:60:00:82:86:bb:85:db:87:22:c4:4f:b1.
 Are you sure you want to continue connecting (yes/no)? yes
 Warning: Permanently added 'git.coding.net,61.146.73.68' (RSA) to the list of kn
 own hosts.  

 Enter passphrase for key '/c/Users/Yuankai/.ssh/id_rsa':
 Coding.net Tips : [ Hello Kyle_lyk! You have connected to Coding.net by SSH successfully! ]
`

> 注意： 同一个公钥只能绑定一个账户，Coding 暂时不支持同一公钥绑定多个账户。

如果需要使用多个账户建议生成多个公钥，可以在.ssh/config文件中加上下边一段
    
    Host git.coding.net
    User xxxx@email.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/coding_rsa  // 生成的非默认地址的公钥存放点



### 项目部署 SSH 公钥

部署公钥是 SSH 公钥的一种，不同之处在于：个人设置的 SSH 公钥是用来认证用户身份并进行 Git 操作的，而部署公钥是用来授权项目的只读权限（用于部署）的。注意：部署公钥没有 push 权限（只有只读权限）；一个部署公钥可以同时应用于多个项目，而且一个项目也可以设置多个部署公钥。

 ![图片](https://dn-coding-net-production-pp.qbox.me/862d0517-5b77-49c7-bfb2-398674e476dd.png) 
 
添加方式同 SSH 公钥一致。

### 关于HostKey

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

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/qc.html">上一篇：代码质量管理</a></div>
  <div class="right-nav"><a href="/help/doc/git/webhook.html">下一篇：Webhook</a><i class="fa fa-angle-right"></i></div>
  </div>

