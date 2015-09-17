---
layout: post

title: 应用管理与开放API
---

本章节主要介绍如何使用应用管理来管理你的第三方应用和使用 Coding 的 OpenAPI：

### 第三方应用注册

在账户 -> 应用管理页面添加应用，注册要接入 Coding 的应用。

 ![图片](https://dn-coding-net-production-pp.qbox.me/44b91ec2-f6b4-4520-b9f4-206eaf6c5507.png) 

 ![图片](https://dn-coding-net-production-pp.qbox.me/8868a88a-e38d-48a6-93bb-edbd8d995194.png) 



其中"回调地址"是用户授权后，Coding 回调到应用，并且回传"授权码"的地址。
保存后，会返回到应用列表。

 ![图片](https://dn-coding-net-production-pp.qbox.me/400ebd43-f10f-4819-81b3-c890ff2562f4.png) 

此时再查看应用，会生成 `client id` 和 `client secret`。

 ![图片](https://dn-coding-net-production-pp.qbox.me/c6e5054f-01bb-489d-8f84-a9f0400ce8ee.png) 


保存 `client id`和 `client secret`，以便后续认证使用。



### 开放 API & OAuth 

#### Coding 开放 API

1.注册应用无需审核即可使用授权。
2.采用 OAuth 2.0 协议认证。

#### 认证流程图

 ![图片](https://dn-coding-net-production-pp.qbox.me/32fb9213-9ccb-4f70-8c58-8921f8c2d349.png) 



#### 认证流程简介

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

### Coding 开放平台

更多 API 和开放资源，可查看 [Coding 开放平台](http://open.coding.net/)

---


<div class="footer-nav">
<div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/account/2fa.html">上一篇：两步认证</a></div>
<div class="right-nav"><a href="/help/doc/account/shop.html">下一篇：码币&Shop</a><i class="fa fa-angle-right"></i></div>
</div>
