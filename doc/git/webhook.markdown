---
layout: post

title: Webhook
---

本章节介绍如何通配置Webhook 

## WebHook 

Webhook 允许第三方应用监听 Coding.net 上的特定事件，在这些事件发生时通过 HTTP POST 方式通知( 超时5秒) 到第三方应用指定的 Web URL。 例如项目有新的内容 Push，或是 Merge Request 有更新等。 WebHook 可方便用户实现自动部署，自动测试，自动打包，监控项目变化等。 

### 设置触发事件

Coding.net 用户可以在自己的项目 －> 设置 －> Webhook 中创建、设置 Webhook 所需监听的事件，并配置第三方应用的 Web URL 。

目前我们支持如下的事件：

| Event |	说明 |
| :---: | :--- |
| Push |	任何时间项目内的 Push 操作 |
| MR/PR | 任何时间项目内的 Merge Request 和 Pull Request 操作|
| Topic |	任何时间项目内的讨论创建，评论 |
| Task |	任何时间项目内的任务操作 |
| Document |  任何时间项目内的文档操作 |
| Watch |	任何时间第三方用户关注你的项目(限公开项目) |
| Star | 任何时间对项目的收藏(限公开项目) |

> 注：为防止您填写的 URL 被第三方恶意调用，我们 WebHook 提供了一个预先填写的 Token ，这个 Token 将会随 Post 请求信息一起发送给您，您可验证此 Token 来确认此请求确实是 Coding.net 发出的。

### Webhook请求说明

Webhook 的每个 POST 请求都有包含特殊的 Header, 默认超时时间为 2s 

**POST 请求 Header 说明**

| Header |	说明 |
| :--- | --- |
| X-Coding-Event | 事件名（例如: push, Merge Request, Task） |

首次绑定，系统会向您所填写的 url 地址，发送一个简单的请求，以验证该 WebHook 是有效的，请求如下：

    {
        "token": "123", 
        "zen": "Coding！ 让开发更简单"
    }

关于WebHook 更多例子，请参看 [Coding 开放平台]( http://open.coding.net)

## hook 常见排错

填写完成 url 地址后 Coding 会发送一条测试 http 信息到，如果有 response 则 webhook 会变成勾。
也可以通过手动点击 “测试” 完成这个过程。

如果收不到测试信息或者其他正常的 hook 信息，请尝试到 http://requestb.in/ 上建立一个 url ，然后看看是否可以收到请求信息。
如果可以收到，证明 Coding 的 Webhook 服务正常。请检查你的 hook 程序。

注意： webhook 有5秒的超时设置，你的程序必在超时时间内返回。 

---


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/ssh-key.html">上一篇：配置 ssh 公钥 Git</a></div>
  <div class="right-nav"><a href="/help/doc/git/svn.html">下一篇：SVN 支持</a><i class="fa fa-angle-right"></i></div>
  </div>

