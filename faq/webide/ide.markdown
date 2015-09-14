---
layout: post

title: WebIDE 常见问题
---

## WebIDE 能实现什么基础操作？

WebIDE 可以编辑代码，实时自动保存编辑， 支持提交代码，Push/Pull 代码，将代码在终端运行起来。
同时还有项目文件，上传下载和预览功能，可以预览 markdown, html。

## 什么是 WorkSpace ，如何管理？ 

WorkSpace 是 WebIDE 在云端创建的一个工作空间，每个用户对每个项目只能创建一个WorkSpace。
它包含了用户在云端的代码根目录和可选的环境配置。 详细参加 [工作空间](/help/doc/webide/workspace.html)

## 如何分享环境，可以分享给任何人吗？

环境分享，目前只能分享给项目成员，具体操作详见 [环境管理](/help/doc/webide/environment.html)

## 如何运行程序？

目前 WebIDE 运行程序需要在终端运行，详细参见, [运行程序](/help/doc/webide/execution.html)

## 运行程序后，生成的 Access URL 报502，404 是怎么回事？

 - 404 错误是程序返回的问题，说明你的程序可能有问题。
 - 502 错误一般是路由的问题，需要你的程序监听 0.0.0.0 地址，同时端口需要匹配。 
    详细参见，[运行程序](/help/doc/webide/execution.html)
 
## WebIDE 可以安装数据库吗？

你可以在终端里用 apt-get 自行安装任何想要的软件，包括数据库
