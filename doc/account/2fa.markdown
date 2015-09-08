---
layout: post

title: 两步认证
---

本章节主要介绍什么是两步认证，及如何使用两步认证来保障 Coding 账户的安全。

* TOC
{:toc}



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