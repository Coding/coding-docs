---
layout: post

title: 两步认证
---

本章节主要介绍什么是两步认证，及如何使用两步认证来保障 Coding 账户的安全。

## 什么是两步验证

两步验证，是 coding.net 提供给用户的一种附加安全功能，以防账户被盗用。
1）用户开启两步验证后，在登录 coding.net 的时候，输入电子邮箱或个性后缀和登录密码之后，必须再输入用户手机 Coding 客户端（或 Google 身份验证器）生成的动态验证码进行两步验证，以保护账户安全；
2）用户开启两步验证后，在 coding.net 进行危险操作（如删除项目、转让项目、升级项目、关闭两步验证功能等）的时候，必须要输入用户手机 Coding 客户端（Google 身份验证器）生成的动态验证码，以保护账户安全。

### 两步验证的意义

用户开启了两步验证以后，即使登录密码被窃取，入侵者也会因无法获得手机 Coding 客户端（Google 身份验证器）生成的动态验证码而无法登录账户，进而实施一些危险操作。实施危险操作的时候，必须输入用户手机 Coding 客户端（Google 身份验证器）生成的动态验证码。两步验证通过结合密码和手机的使用，为账户增加了一道额外的安全保障。

### 开启步骤

1）用户登录 coding.net 后，进入个人账户页面，选择两步验证，如果手机号码没有被验证，则需要先在个人账户页面的个人设置里面验证手机号码后，才能开启两步验证。
手机号码验证完成后，进入个人账户页面，选择两步验证，出现如下图所示页面。

![开启2fa](https://dn-coding-net-production-pp.qbox.me/9ba3411a-6d56-437c-b15c-72d698ba54f6.png) 



2）安装 Coding 身份验证器
点击开启两步验证按钮，出现如下图所示页面，如果您的手机上没有安装 Coding 客户端，请点击 APP 下载或者在各大应用市场搜索 “Coding” 并下载，安装 Coding 身份验证器；如果您已经安装了 Coding 客户端，请更新至最新版本。
![图片](https://dn-coding-net-production-pp.qbox.me/1a94a7a0-fff6-4550-a3b4-43581d50cd0e.png) 

你也可以安装“Google 身份验证器”生成验证码。

3）配置生成验证码
点击下一步按钮，出现如下图所示页面；

![图片](https://dn-coding-net-production-pp.qbox.me/bb22bd9f-cd1d-4247-b484-f1caa2999e38.png) 

打开 Coding 客户端，点击“+”，选择“2FA”，扫描该页面的二维码；

![图片](https://dn-coding-net-production-pp.qbox.me/51a17537-bfab-4567-a1d9-4878fb450091.png) 


扫描后，手机 Coding 客户端身份验证器生成动态验证码，如下图所示；如果您上次开启两步验证时生成的身份验证器没有删除，那么当前生成验证器时会提醒您选择覆盖，请选择覆盖以保证身份验证器是最新版本。

![图片](https://dn-coding-net-production-pp.qbox.me/20376e89-787a-4d9c-af33-3960f259d7c0.png) 

或者，使用“Google 身份验证器”扫描该页面的二维码或者手动添加账户和密钥，生成动态验证码，如下图所示。

![图片](https://dn-coding-net-production-pp.qbox.me/85b873b3-98f3-475d-bfca-ecfbf656758c.png) 


4）验证并开启
请输入身份验证器自动生成的动态验证码和登录密码，确认开启两步验证。

![图片](https://dn-coding-net-production-pp.qbox.me/c90f4bbc-628b-443a-893c-70f94e9ae2e5.png) 

开启两步验证后，所有网页端和客户端的 session 都会过期，需要重新登录。其中，用户在登录 coding.net 时，输入电子邮箱或个性后缀和登录密码之后，需要再输入手机 Coding 客户端（或 Google 身份验证器）生成的动态验证码才能完成登录流程。

### 关闭两步验证

用户登录 coding.net 后，进入个人账户页面，选择两步验证，点击关闭两步验证按钮，输入手机 Coding 客户端（Google 身份验证器）生成的动态验证码，即可关闭两步验证。最后，请一定要删除手机上过期的身份验证器。

![图片](https://dn-coding-net-production-pp.qbox.me/bb8240bf-04a2-451a-8014-7bd377dbd8d9.png) 

### 手机丢失或刷机

请进入 [https://coding.net/twofa](https://coding.net/twofa) 页面点击“关闭两步验证”，根据提示输入手机号码及验证码关闭两步验证。

---

<div class="footer-nav">
<div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/account/ssh-key.html">上一篇：SSH公钥配置</a></div>
<div class="right-nav"><a href="/help/doc/account/oauth.html">下一篇：OAuth</a><i class="fa fa-angle-right"></i></div>
</div>



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
