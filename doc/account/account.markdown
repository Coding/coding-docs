---
layout: post

title: 用户账户使用手册
---

* TOC
{:toc}

1.用户账户使用手册 
-----

本手册主要描述 Coding.net 账户相关功能说明。

CopyRight by Coding.net  更新时间 2015-08-04


2.账号的注册&激活
--------

### 2.1 账户注册步骤

1）访问首页 Coding.net，点击屏幕右上角的「注册」，输入您的电子邮箱和个性域名后缀，点击「直接体验」。

2） 收取激活邮件，并点击其中的激活链接，按照提示完成密码设置即可顺利加入 Coding.net。
如果长时间收不到激活邮件，请检查一下你的垃圾邮件夹，或者重新尝试一下。如果连续尝试都无法收到激活邮件，则很可能您的邮件服务器拒收了来自 Coding.net 的邮件，您需要将 Coding.net 加入域白名单以确保收到来自 Coding.net 的邮件。申请重发激活邮件链接：

3）如果您点击了激活的链接确无法激活，您可以尝试复制邮件里的激活链接到您的浏览器的地址栏里去尝试，如果您依然无法激活您的账号，您可以发邮件至support@coding.net告知我们你注册的邮箱和使用的浏览器版本以及无法激活的URL我们帮您处理。

### 2.2 账户登录

1）注册账户后即可输入账号进行登录
2）可以通过Coding.net 目前支持通过第三方账号 Github 账号登陆，在登录页面右下角点击 Github 小图标即可登陆。
3）未登录时可以实现的功能
1.首页：观看网站介绍视频，进行全站搜索等。
2.广场: 查看最近更新的公开项目，最新的冒泡，最热门的公开项目等。
3.项目：查看特别策划项目，主题项目等。

### 2.3 重发激活邮件

1）如果注册后5分钟内未收到账号激活邮件，请回到登录界面重新发送激活邮件。
![在这里输入图片描述][1]

2）依照提示，输入电子邮箱和验证码，点击「确认」

![在这里输入图片描述][2]

3）如果长时间收不到激活邮件，请检查一下你的垃圾邮件夹，或者重新尝试一下。如果连续尝试都无法收到激活邮件，则很可能您的邮件服务器拒收了来自 Coding.net 的邮件，您需要将 Coding.net 加入域白名单以确保收到来自 Coding.net 的邮件。

4）如果您点击了激活的链接确无法激活，您可以尝试复制邮件里的激活链接到您的浏览器的地址栏里去尝试，如果您依然无法激活您的账号，您可以发邮件至support@coding.net告知我们你注册的邮箱和使用的浏览器版本我们帮您处理。

### 2.4 未登录可进行的操作

1）首页：观看网站介绍视频，进行全站搜索等。
2）广场: 查看最近更新的公开项目，最新的冒泡，最热门的公开项目等。
3）项目：查看特别策划项目，主题项目等。

### 2.5 第三方账户登录

Coding.net 目前支持 Github 账号登陆。
在登录页面右下角点击 Github 小图标即可登陆。


3. 账户信息修改
--------

### 3.1 修改个人资料###

方法一：
登录个人账户之后，将鼠标移至用户头像，点击下拉菜单中的「设置」，即可进入个人设置页面，进行个人资料的修改。

方法二：
登录个人账户之后，点击屏幕左下角的「设置」，即可进入个人设置页面，进行个人资料的修改。

### 3.2 修改注册邮箱###

注意，一个邮箱只能用来注册一个账号。如果 A 邮箱已被用于注册 a 账号，要将 A 邮箱关联到 b 账号，只能先修改 a 账号对应的邮箱地址为其他。

1）进入个人首页，点击左下角的「账户」，点击菜单栏里的「个人设置」，
![在这里输入图片描述][3]

2）点击个人信息中的「修改邮箱」
![在这里输入图片描述][4]

3）在弹出框内输入想要更改的邮箱
![在这里输入图片描述][5]

4）输入登录密码，点击确认
![在这里输入图片描述][6]




###  3.3 重置密码

1）忘记密码
在 Coding.net 登录框的右下角点击「忘记密码」的链接，就可以通过您的注册邮箱来重置密码了。
如果长时间收不到密码重置邮件，请检查一下你的垃圾邮件夹，或者重新尝试一下。如果连续尝试都无法收到密码重置邮件，则很可能您的邮件服务器拒收了来自 Coding.net 的邮件，您需要将 Coding.net 加入域名白名单以确保收到来自 Coding.net 的邮件。

2）登陆后修改密码
进入个人主页，点击账户，然后点击密码设置即可进行密码重置。
![在这里输入图片描述][7]

如果长时间收不到密码重置邮件，请检查一下你的垃圾邮件夹，或者重新尝试一下。如果连续尝试都无法收到密码重置邮件，则很可能您的邮件服务器拒收了来自 Coding.net 的邮件，您需要将 Coding.net 加入域名白名单以确保收到来自 Coding.net 的邮件。



4. SSH 公钥
-----


有关什么是 SSH，可参考中文维基百科（http://zh.wikipedia.org/zh/Secure_Shell）。
这里要说明的是，Coding.net 支持使用 SSH 协议来访问 Git仓库，提供账户 SSH 公钥和项目部署 SSH 公钥设置。
用户可以在认证身份时选择在账户里面设置 SSH公钥，并获所有仓库的读写权限（注意！您的公钥对应的私钥必须要妥善保存，如果您的私钥被第三方获取，那么他将可以以您的身份来操作 Git 仓库，这跟密码被盗一样严重）]， 也可以在项目设置里面设置项目部署公钥，获取仓库的只读权限。

添加公钥后，您就可以在项目的代码页面点击 SSH 切换到 SSH 协议的 clone 地址，类似这样：（git@coding.net:wzw/leave-a-message.git），这样就可以使用 SSH 协议来访问 Git 仓库了，每次链接都不需要再输入账号和密码了。

> 注意：一个公钥只能认证一个用户，而一个用户却可以拥有多个公钥。


### 4.1 账户 SSH 公钥

账户 SSH 公钥是跟用户账户关联的公钥，一旦设置，就拥有账户下所有项目仓库的读写权限。

#### 4.1.1 生成公钥 

打开命令行终端输入ssh-keygen -t rsa -C "username@example.com",( 注册的邮箱)，接下来点击enter键即可（也可以输入密码）。

    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    # Creates a new ssh key, using the provided email as a label
    # Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  // 推荐使用默认地址

成功之后

    Your identification has been saved in /Users/you/.ssh/id_rsa.
    # Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
    # The key fingerprint is:
    # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com

#### 4.1.2 添加公钥

1. 本地打开 id_rsa.pub 文件，复制其中全部内容，填写到SSH_RSA公钥key下的一栏，公钥名称可以随意起名字。
2. 完成后点击“添加”，然后输入密码或动态码即可添加完成。
 ![图片](https://dn-coding-net-production-pp.qbox.me/49eab64b-8d8a-4787-a0ed-ce347f753a69.png) 

3. 完成后在命令行测试，首次建立链接会要求信任主机。
 ![图片](https://dn-coding-net-production-pp.qbox.me/946e60e5-27e3-4ab0-93cf-ea045096dc85.png) 


### 4.2 部署 SSH 公钥

项目部署 SSH 公钥是跟项目关联的公钥，设置后有该项目的仓库的只读权限。

 ![图片](https://dn-coding-net-production-pp.qbox.me/862d0517-5b77-49c7-bfb2-398674e476dd.png) 

添加方式同 SSH 公钥一致。


5.Coding账户两步验证
--------

### 5.1 什么是两步验证

两步验证，是 coding.net 提供给用户的一种附加安全功能，以防账户被盗用。
1）用户开启两步验证后，在登录 coding.net 的时候，输入电子邮箱或个性后缀和登录密码之后，必须再输入用户手机 Coding 客户端（或 Google 身份验证器）生成的动态验证码进行两步验证，以保护账户安全；
2）用户开启两步验证后，在 coding.net 进行危险操作（如删除项目、转让项目、升级项目、关闭两步验证功能等）的时候，必须要输入用户手机 Coding 客户端（Google 身份验证器）生成的动态验证码，以保护账户安全。

### 5.2 两步验证的意义

用户开启了两步验证以后，即使登录密码被窃取，入侵者也会因无法获得手机 Coding 客户端（Google 身份验证器）生成的动态验证码而无法登录账户，进而实施一些危险操作。实施危险操作的时候，必须输入用户手机 Coding 客户端（Google 身份验证器）生成的动态验证码。两步验证通过结合密码和手机的使用，为账户增加了一道额外的安全保障。

### 5.3 开启步骤

1）用户登录 coding.net 后，进入个人账户页面，选择两步验证，如果手机号码没有被验证，则需要先在个人账户页面的个人设置里面验证手机号码后，才能开启两步验证。
手机号码验证完成后，进入个人账户页面，选择两步验证，出现如下图所示页面。
![在这里输入图片描述][8]

2）安装 Coding 身份验证器
点击开启两步验证按钮，出现如下图所示页面，如果您的手机上没有安装 Coding 客户端，请点击 APP 下载或者在各大应用市场搜索 “Coding” 并下载，安装 Coding 身份验证器；如果您已经安装了 Coding 客户端，请更新至最新版本。
![在这里输入图片描述][9]
你也可以安装“Google 身份验证器”生成验证码。

3）配置生成验证码
点击下一步按钮，出现如下图所示页面；
![在这里输入图片描述][10]
打开 Coding 客户端，点击“+”，选择“2FA”，扫描该页面的二维码；
![在这里输入图片描述][11]
扫描后，手机 Coding 客户端身份验证器生成动态验证码，如下图所示；如果您上次开启两步验证时生成的身份验证器没有删除，那么当前生成验证器时会提醒您选择覆盖，请选择覆盖以保证身份验证器是最新版本。
![在这里输入图片描述][12]
或者，使用“Google 身份验证器”扫描该页面的二维码或者手动添加账户和密钥，生成动态验证码，如下图所示。
![在这里输入图片描述][13]

4）验证并开启
请输入身份验证器自动生成的动态验证码和登录密码，确认开启两步验证。
![在这里输入图片描述][14]
开启两步验证后，所有网页端和客户端的 session 都会过期，需要重新登录。其中，用户在登录 coding.net 时，输入电子邮箱或个性后缀和登录密码之后，需要再输入手机 Coding 客户端（或 Google 身份验证器）生成的动态验证码才能完成登录流程。

### 5.4 关闭两步验证

用户登录 coding.net 后，进入个人账户页面，选择两步验证，点击关闭两步验证按钮，输入手机 Coding 客户端（Google 身份验证器）生成的动态验证码，即可关闭两步验证。最后，请一定要删除手机上过期的身份验证器。
![在这里输入图片描述][15]

### 5.5 手机丢失或刷机

请用您的注册邮箱发送一封邮件到 support@coding.net，并附上您的电话联系方式，客服会在24小时以内联系您，帮助关闭两步验证。

6.提醒设置
--------

### 6.1 关于提醒设置

提醒设置是为 Coding 用户提供在coding平台上的相关信息提醒而设置的一个功能，你可以根据个人需求进行可以化的设置。

### 6.2 修改提醒设置

进入个人主页后，点击“账户”然后点击“提醒设置”即可在右边的选项中选择系统提醒或者邮件提醒完成设置。

 ![图片](https://dn-coding-net-production-pp.qbox.me/4802fe64-4fa1-46e6-a0d1-70d7aa8b5850.png) 




7.应用管理与开放 API
--------

### 7.1 第三方应用注册

在账户 -> 应用管理页面添加应用，注册要接入 Coding 的应用。

 ![图片](https://dn-coding-net-production-pp.qbox.me/44b91ec2-f6b4-4520-b9f4-206eaf6c5507.png) 

 ![图片](https://dn-coding-net-production-pp.qbox.me/8868a88a-e38d-48a6-93bb-edbd8d995194.png) 





其中"回调地址"是用户授权后，Coding 回调到应用，并且回传"授权码"的地址。
保存后，会返回到应用列表。

 ![图片](https://dn-coding-net-production-pp.qbox.me/400ebd43-f10f-4819-81b3-c890ff2562f4.png) 

此时再查看应用，会生成 `client id` 和 `client secret`。

 ![图片](https://dn-coding-net-production-pp.qbox.me/c6e5054f-01bb-489d-8f84-a9f0400ce8ee.png) 


保存 `client id`和 `client secret`，以便后续认证使用。



### 7.2  开放 API & OAuth 

#### 7.2.1 Coding 开放 API

1.注册应用无需审核即可使用授权。
2.采用 OAuth 2.0 协议认证。

#### 7.2.2 认证流程图

 ![图片](https://dn-coding-net-production-pp.qbox.me/32fb9213-9ccb-4f70-8c58-8921f8c2d349.png) 



#### 7.2.3 认证流程简介

1）将用户引导到 Coding 第三方登录页面上。`https://coding.net/oauth_authorize.html?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code[&scope={scope}]`

 如果用户未登录 Coding，跳转到登录页面。

 ![图片](https://dn-coding-net-production-pp.qbox.me/878b45df-fd69-4784-b68d-a85e6fce7c3c.png) 

2）用户登录，并对应用请求的 `scope` 进行授权。

 ![图片](https://dn-coding-net-production-pp.qbox.me/19347165-4d15-4d64-b601-d041b3e1e34d.png) 


3）授权通过，Coding 会将授权码回传给应用在 Coding 注册的回调地址（`http://xxx.com/callback?code=xxx`），应用直接获取授权码 `code`即可。

 ![图片](https://dn-coding-net-production-pp.qbox.me/91295ede-e0b6-42bd-9b75-8402d171c58e.png) 

4）应用向 Coding 的 Token Endpoint 发送请求。
 `https://coding.net/api/oauth/access_token?client_id={client_id}&client_secret={client_secret}&grant_type=authorization_code&code={code}` 返回值 `{ expires_in: "271645", refresh_token: "xxxxxx", access_token:"xxxxxx" }` 

 ![图片](https://dn-coding-net-production-pp.qbox.me/ab3a24b3-8358-46b8-b258-e8708e9da45b.png) 

5）使用 access_token 访问受保护的资源

     https://coding.net/api/current_user?access_token={access_token}

 ![图片](https://dn-coding-net-production-pp.qbox.me/2e33f408-ed45-49ee-86ac-a082565a288a.png) 

Response body 中的 `code` 为 0，表示正常接收请求。如果 `code`为 1，表示请求异常，请参照 msg中的返回信息进行处理。

 ![图片](https://dn-coding-net-production-pp.qbox.me/92b17830-1112-4086-a6ba-f46b51b8caa5.png) 

### 7.3 开放资源

更多 API 信息可查看 http://api-doc.coding.io/


8.码币和shop
--------

### 8.1什么是玛币

码币是 Coding 平台推出的线上虚拟货币，可通过在 Coding 上进行 push 代码、完善个人信息、冒泡等动作赚取，目前可用于购买 Coding 商店的礼品以及购买项目升级代金券。

### 8.2可以用码币做什么

1）你可以利用码币购买 Shop 页面所列 Coding 定制等商品：如洋葱猴抱枕、Coding 毛巾、T恤、短裤、Coding定制拖鞋等
2）购买Coding推出的项目升级业务，拥有更多资源，提供更多个性化的服务详情请点击https://coding.net/upgrade
(推代码是真的能挣钱！)

### 8.3 如何得到码币

![在这里输入图片描述][16]

### 8.4 Coding Shop 是什么

Coding Shop 是Coding平台推出的使用虚拟货币玛币来购买Shop中商品的一个板块。

### 8.5 Coding Shop 商品

Shop 中的商品现阶段有洋葱猴抱枕、Coding定制毛巾、Coding定制纯棉T恤、Coding代金券（50元、200元,500元）、Coding人字拖、Coding短裤、推荐图书等。
Coding不定时地会在Shop中推出新款的定制商品，请多多关注。

### 8.6 商品发货&物流

Shop中的商品会在每周五进行发货（周五当天订购商品需等到下周五发货），物流信息会在三天内更新。

### 8.7 开具发票

Coding会在每个月的月初与月中开具发票并寄出，如果您有开具发票的需求，您可以线上申请开具。

9.项目升级
--------

### 9.1 项目升级是什么

项目升级是Coding平台推出德尔为项目提供更多资源更高服务的一项收费业务模块，现阶段推出的付费种类有开发版和高级版这两个版本。

### 9.2 项目升级详情和收费

  区别  |免费版|开发版| 高级版
 :-----------: | :-----------: | :-----------: | :-----------: 
价格 ( 单个项目 ) |    免费  |      ￥49/月、￥245/半年、￥441/年  |  ￥199/月、￥995/半年、￥1791/年
项目成员 |     10人   |       20人 |  50人 
Git 仓库容量 |    1G   |       5G  |  10G
演示平台 |    512M 内存/用户,24 小时挂起1   |       1G 内存/项目,无挂起  |  2G 内存/项目,无挂起
 自定义域名 |     不支持  |       支持  |  支持
CodeInsight   |     不支持   |       支持 |  支持 
WebIDE |     3 Workspaces/用户  |     不占成员个人份额|  不占成员个人份额
SLA|  -   |       - | 99.9%
数据打包下载|  不支持   |       支持 |  支持
客服支持|  邮件   |      邮件、工单 |  邮件、工单、QQ、电话
详细信息可点击https://coding.net/upgrade 您也可以发送邮件至support@coding.net 咨询。

  [1]: https://coding.net/api/project/130548/files/261942/imagePreview
  [2]: https://coding.net/api/project/130548/files/261943/imagePreview
  [3]: https://coding.net/api/project/130548/files/261945/imagePreview
  [4]: https://coding.net/api/project/130548/files/261946/imagePreview
  [5]: https://coding.net/api/project/130548/files/261947/imagePreview
  [6]: https://coding.net/api/project/130548/files/261949/imagePreview
  [7]: https://coding.net/api/project/130548/files/261953/imagePreview
  [8]: https://coding.net/api/project/130548/files/261954/imagePreview
  [9]: https://coding.net/api/project/130548/files/261955/imagePreview
  [10]: https://coding.net/api/project/130548/files/261956/imagePreview
  [11]: https://coding.net/api/project/130548/files/261958/imagePreview
  [12]: https://coding.net/api/project/130548/files/261959/imagePreview
  [13]: https://coding.net/api/project/130548/files/261960/imagePreview
  [14]: https://coding.net/api/project/130548/files/261961/imagePreview
  [15]: https://coding.net/api/project/130548/files/261962/imagePreview
  [16]: https://coding.net/api/project/130548/files/262582/imagePreview