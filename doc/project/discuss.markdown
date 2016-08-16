---
layout: post

title: 项目讨论
---

本篇介绍如何使用项目讨论。

## 关于项目讨论

 - 私有项目
项目讨论是只有项目成员可见的互动交流区域。该项目上的所有成员都可以在讨论区创建新的讨论帖，评论或者回复讨论。只有项目所有者和该讨论发起者可以编辑或删除已存在的讨论。
![在这里输入图片描述][29]

 - 公开项目
项目讨论完全是公开的，任何已登录用户都可以在讨论区创建新的讨论，评论或者回复讨论。但只有项目所有者和该讨论发起者可以编辑或删除已存在的讨论。
![在这里输入图片描述][30]

### 创建讨论

在项目主页的左侧一级菜单栏选择**讨论**，点击**添加**按钮，即可进入新讨论的创建页面。
讨论的内容编辑框支持 Markdown 语法以及全屏预览功能。
[Markdown语法](/help/doc/project/markdown.html)查看 Markdown 语法说明。

### 编辑&删除讨论

只有项目创建者和该讨论创建者可以编辑或删除已存在的讨论。
点击讨论标题下的**编辑**或**删除**图标，即可编辑和删除讨论。

### 添加&删除讨论标签

创建、编辑或者查看讨论时，点击**添加**标签按钮，出现标签下拉列表，选中标签即可添加或删除。
Tips：私有项目的讨论和任务的标签是通用的，并且添加标签时一次可以添加多个，还可以按标签查看讨论。
注意：已登录用户可以在任何公开项目内创建、编辑&删除讨论，但只有项目成员有权添加或删除标签。

### # 标志引用资源

每个讨论也有一个独特的引用 ID， 并通过 #ID 被引用到项目内其它地方。
项目内支持 Markdown 编辑器的地方都支持“#”自动提示(任务描述、讨论、合并请求描述等)，并引用相应资源。

- 讨论

 ![图片](https://dn-coding-net-production-pp.qbox.me/a878cf72-cef4-44a5-906c-653325062bdd.png) 

- Merge Request 

 ![图片](https://dn-coding-net-production-pp.qbox.me/80092778-981d-4edb-87e8-6a1cbecc5378.png)

###  关注讨论

在讨论详情页，每个项目成员都可以点击讨论标题下关注者旁（或者在讨论内容的结尾处）的**添加**按钮，在成员下拉框中添加或者取消某个或某几个项目成员对当前任务的关注。

### 最佳答案，回答和评论
- 最佳答案可以由讨论发起者和项目管理员来设置，最佳答案的评论默认展开。
 ![图片](https://dn-coding-net-production-pp.qbox.me/d6facbdd-1d97-48c2-bb51-97da4e1cc2d9.png) 

- 回答是对讨论的直接表态，评论是对回答的看法，评论默认收起。最佳答案外，其他回答的评论默认收起。没有评论时，文字为“添加评论”；有评论时，显示评论数“* 条评论”，点击评论数，展开评论，文字变为“收起评论” .
 ![图片](https://dn-coding-net-production-pp.qbox.me/1761b93e-f379-4503-b3b4-d69c753c7724.png) 

- 最佳答案默认评论展开，一个讨论可有多条最佳答案，可由讨论发起人和项目管理员设置。最佳答案可以取消，“设为最佳”后文字变为“取消最佳”
 ![图片](https://dn-coding-net-production-pp.qbox.me/4cb6133b-f40c-46f0-b25b-70b6856db1e3.png) 
 
 ![图片](https://dn-coding-net-production-pp.qbox.me/d499f158-e7fd-4ff1-aaef-1464bc4fa12c.png) 

- 当回答的评论超过5条时，其他的评论收起，点击“显示全部 * 条评论”可展开所有评论
 ![图片](https://dn-coding-net-production-pp.qbox.me/aeaf645e-2c9f-415e-9ad7-18b3cc832b41.png) 

- 讨论的回答支持“+1”操作，也就是点赞，这样讨论发起者可以一目了然的知道项目成员更支持哪个种看法，方便其做决策。Hover 投票按钮，出现提示文字“为该回答投票”。投票后，数字 +1 ，按钮变成蓝色 。投票可以取消，再次点击即可取消投票，数字 -1。
 ![图片](https://dn-coding-net-production-pp.qbox.me/f6eb8885-bfec-466a-aae1-05e586d5e517.png) 


- 默认按“投票数”排序，投票数相同时，按“最近回答”排序
 ![图片](https://dn-coding-net-production-pp.qbox.me/6de66c14-5c31-4d0b-b266-052f603a1aae.png) 

- 答案暂时不支持编辑修改。

### 讨论分享

- 讨论分享分为“分享讨论”和分享讨论答案。分享讨论答案时，默认不显示分享 icon，鼠标 hover 该条回答才出现。分享答案时链接到该讨论的相应答案处，并默认展开评论。
 ![图片](https://dn-coding-net-production-pp.qbox.me/e6fdf91f-693f-43ec-95dc-a9576ceb2d97.png) 

- 可以公开分享（任何人可以访问）和项目内分享（仅项目内成员可访问）
 ![图片](https://dn-coding-net-production-pp.qbox.me/16f8be58-a211-424a-bb47-c22ad31696da.png) 


---

  [28]: https://dn-coding-net-production-static.qbox.me/f09dbf3f-8a36-4cb3-9197-073e31e3951c.png?imageView2/2/w/800/h/800
  [29]: https://dn-coding-net-production-static.qbox.me/72516dfe-529a-4ed3-a20b-a8cdc2f249b9.png?imageView2/2/w/800/h/800
  [30]: https://dn-coding-net-production-static.qbox.me/a161eaef-b710-4151-bffb-2eea37c4093d.png?imageView2/2/w/800/h/800
  [31]: https://dn-coding-net-production-static.qbox.me/2d162819-3a56-4496-920f-6f5ad5ef2fc3.png?imageView2/2/w/800/h/800
  
  
  

  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/project/task.html">上一篇：任务管理</a></div>
  <div class="right-nav"><a href="/help/doc/project/task.html">下一篇：附 Markdown语法</a><i class="fa fa-angle-right"></i></div>
  </div>

