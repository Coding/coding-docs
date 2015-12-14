---
layout: post

title: SSH公钥配置
---

本章节主要介绍如何配置 Coding 的SSH公钥，并通过 SSH 的方式访问代码仓库。

有关什么是 SSH，可参考中文维基百科（http://zh.wikipedia.org/zh/Secure_Shell）。
这里要说明的是，Coding.net 支持使用 SSH 协议来访问 Git仓库，提供账户 SSH 公钥和项目部署 SSH 公钥设置。
用户可以在认证身份时选择在账户里面设置 SSH公钥，并获所有仓库的读写权限（注意！您的公钥对应的私钥必须要妥善保存，如果您的私钥被第三方获取，那么他将可以以您的身份来操作 Git 仓库，这跟密码被盗一样严重）]， 也可以在项目设置里面设置项目部署公钥，获取仓库的只读权限。

添加公钥后，您就可以在项目的代码页面点击 SSH 切换到 SSH 协议的 clone 地址，类似这样：（git@git.coding.net:wzw/leave-a-message.git），这样就可以使用 SSH 协议来访问 Git 仓库了，每次链接都不需要再输入账号和密码了。

> 注意：一个公钥只能认证一个用户，而一个用户却可以拥有多个公钥。


## 账户 SSH 公钥

账户 SSH 公钥是跟用户账户关联的公钥，一旦设置，就拥有账户下所有项目仓库的读写权限。

### 生成公钥 

打开命令行终端输入ssh-keygen -t rsa -C "username@example.com",( 注册的邮箱)，接下来点击enter键即可（也可以输入密码）。

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    # Creates a new ssh key, using the provided email as a label
    # Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  // 推荐使用默认地址
    Enter passphrase (empty for no passphrase):

成功之后

    Your identification has been saved in /Users/you/.ssh/id_rsa.
    # Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
    # The key fingerprint is:
    # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com

### 添加公钥

1. 本地打开 id_rsa.pub 文件，复制其中全部内容，填写到SSH_RSA公钥key下的一栏，公钥名称可以随意起名字。
2. 完成后点击“添加”，然后输入密码或动态码即可添加完成。
 ![图片](https://dn-coding-net-production-pp.qbox.me/49eab64b-8d8a-4787-a0ed-ce347f753a69.png) 

3. 完成后在命令行测试，首次建立链接会要求信任主机。
 ![图片](https://dn-coding-net-production-pp.qbox.me/946e60e5-27e3-4ab0-93cf-ea045096dc85.png) 

> 注意： 同一个公钥只能绑定一个账户，Coding 暂时不支持同一公钥绑定多个账户。

如果需要使用多个账户建议生成多个公钥，可以在.ssh/config文件中加上下边一段
    
    Host git.coding.net
    User xxxx@email.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/coding_rsa  // 生成的非默认地址的公钥存放点

### 项目部署SSH公钥

项目部署 SSH 公钥是跟项目关联的公钥，设置后有该项目的仓库的只读权限。

 ![图片](https://dn-coding-net-production-pp.qbox.me/862d0517-5b77-49c7-bfb2-398674e476dd.png) 

添加方式同 SSH 公钥一致。

---


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/account/setting.html">上一篇：账户设置</a></div>
  <div class="right-nav"><a href="/help/doc/account/2fa.html">下一篇：两步认证</a><i class="fa fa-angle-right"></i></div>
  </div>
