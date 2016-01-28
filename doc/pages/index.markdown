---
layout: post

title: Coding Pages 介绍
---

### Coding Pages 

Coding Pages 是一个免费的静态网页托管和演示服务。您可以使用 Coding Pages 托管博客、项目官网等静态网页，还可以绑定自定义域名。

Coding Pages 支持用户 Pages 演示和项目 Pages 演示。用户 Pages 可以通过 `{user_name}.coding.me` 形式的 URL 直接访问，适合用作个人或组织的演示网站；项目 Pages 需通过 `{user_name}.coding.me/{project_name}` 形式的 URL 访问，适合用作项目的演示网站。

#### 创建用户 Pages

1.在 Coding 上创建一个**与您的用户名（Global Key）相同**的项目。

2.在本地创建一个项目，你可以添加一个 index.html 文件用做测试。

```
<html>
   <head>
     <title>My Coding Pages</title>
   </head>

   <body>
      <h1>Hello Coding!</h1>
   </body>
</html>
```

3.将项目文件夹初始化为 Git 版本库，提交 index.html 到版本库，并为项目添加远程仓库地址。

```
git init

git add index.html

git commit -m 'init'

git remote add origin  git@git.coding.net:{user_name}/{project_name}
```

> 请别忘记将上面代码中的远程仓库地址的 {user_name} 和 {project _name} 替换成您自己的个性后缀（Global Key）和项目地址。对于用户 Pages ，其远程仓库地址的 {project_name} 其实就是你的 {user_name} .

4.在本地创建一个 coding-pages 分支，切换到该分支

```
git checkout -b coding-pages
```

5.将 coding-pages 分支推送到 Coding.net

```
git push origin coding-pages
```

> 如果您需要创建非 jekyll 的静态页面演示，可以在 coding-pages 分支里加入一个 .nojekyll 文件。

#### 开启 Pages 演示

进入项目页面，点击左侧栏的 `代码` 面板 ，选择 `Pages 服务` 一项可以看到部署 Pages 的设置。

填写您欲部署的分支（默认为 `coding-pages` ），点击 `立即开启` ，稍等片刻即可完成部署并得到可访问的地址：

> 如果您的部署未成功（页面显示 `404 page not found`），建议您先在本地或 [WebIDE](https://ide.coding.net) 测试部署。

#### 绑定自定义域名

Coding Pages 支持绑定自定义域名。**在您开启 Pages 演示后**，在部署页面输入您欲绑定的域名，点击「添加域名绑定」；之后按照页面提示，在您的域名管理面板中添加 CNAME 记录指向到 `{user_name}.coding.me` 即可；如果您使用的域名服务提供商不支持添加 CNAME 记录，建议更换到其他支持该功能的域名提供商。


#### 创建项目 Pages

您也可以为自己的项目生成一个官网或博客。

1.首先在项目里创建一个  coding-pages 的 orphan 分支
```
git checkout --orphan coding-pages
```
>上面命令中的参数 --orphan 会创建一个空的分支，可以简单的将 orphan 分支理解为独立的、没有历史记录的、与其他分支和文件没有关联的分支。

2.清空 orphan 分支里的现有文件。方便我们加入要推送到 Pages 的静态资源文件。
```
git rm -rf .
```
> 注意上条命令最后的 「 . 」，代表当前目录

3.将静态资源文件放到 coding-pages 分支里，Push 到 Coding.net。
```
git push -u origin coding-pages
```
之后即可通过 {user_name}.coding.me/project_name 的地址来访问您的项目演示页面。

> Coding Pages 服务默认使用 coding.me 域名（寓意为 “Coding 迷”），Pages 页面的地址规则一般是 {user_name}.coding.me/{project_name} 的形式。