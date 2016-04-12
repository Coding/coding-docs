---
layout: post

title: Markdown语法介绍
---

### 什么是Markdown语法？

Markdown 是一种轻量级标记语言，目标是实现「易读易写」。Coding.net的许多版块都采用了Markdown语法，比如冒泡，讨论，Pull Request等。


### 标题

在Markdown中，你只需要在文本前面加上# 即可，同理、你还可以增加二级标题、三级标题、四级标题、五级标题和六级标题，总共六级，只需要增加# 即可，标题字号相应降低。例如：

    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题

*点击预览可以看到效果：*

![在这里输入图片描述][1]

### 锚点

Coding 会针对每个标题，在解析时都会添加锚点id，如

```
# 锚点
```

会被解析成：

````
<h1 id="user-content-锚点">锚点</h1>
````

注意我们添加了一个user-content-的前缀所以如果要自己添加跳转链接要使用markdown的形式，且链接要加一个'user-content-'前缀，如：

```
[问内链接](#user-content-锚点);
```

###引用
Markdown 标记区块引用是使用类似 email 中用 > 的引用方式，只需要在整个段落的第一行最前面加上 > ：

    > Coding.net 为软件开发者提供基于云计算技术的软件开发平台，包括项目管理，代码托管，运行空间和质量控制等等。

*效果图如下：*

![在这里输入图片描述][2]

区块引用可以嵌套，只要根据层次加上不同数量的 > ：

    > 这是第一级引用。
    >
    > > 这是第二级引用。
    >
    > 现在回到第一级引用。

*效果图如下：*

![在这里输入图片描述][3]

引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：

    > ## 这是一个标题。
    >
    > 1. 这是第一行列表项。
    > 2. 这是第二行列表项。
    >
    > 给出一些例子代码：
    >
    > return shell_exec("echo $input | $markdown_script");

*效果图如下：*

![在这里输入图片描述][4]


###列表
列表项目标记通常放在最左边，项目标记后面要接一个字符的空格。
**无序列表**：使用星号、加号或是减号作为列表标记

    - Red
    - Green
    - Blue

*效果图如下：*

![在这里输入图片描述][5]


有序列表：使用数字接着一个英文句点

    1. Red
    2. Green
    3. Blue


*效果图如下：*

![在这里输入图片描述][6]

如果要在列表项目内放进引用，那 > 就需要缩进：

    *  Coding.net有以下主要功能:
        > 代码托管平台
        > 在线运行环境    
        > 代码质量监控    
        > 项目管理平台

*效果图如下：*

![在这里输入图片描述][7]

代办列表: 表示列表是否勾选状态

    - [ ] 不勾选
    - [x] 勾选

*效果图如下：*
![图片](https://dn-coding-net-production-pp.qbox.me/6ff6802f-8105-4a6b-b8a4-2abc380c1107.png) 


### 代码

只要把你的代码块包裹在 ``` 之间，你就不需要通过无休止的缩进来标记代码块了。
在围栏式代码块中，你可以指定一个可选的语言标识符，然后我们就可以为它启用语法着色了。
举个例子，这样可以为一段 Ruby 代码着色：

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

*效果图如下：*

![在这里输入图片描述][8]


### 强调

在Markdown中，可以使用 * 和 _ 来表示斜体和加粗。

斜体：

    *Coding，让开发更简单*
    _Coding，让开发更简单_

*效果图如下：*

![在这里输入图片描述][9]

加粗：

    **Coding，让开发更简单**
    __Coding，让开发更简单__

*效果图如下：*

![在这里输入图片描述][10]



### 自动链接
方括号显示说明，圆括号内显示网址， Markdown 会自动把它转成链接，例如：

    [超强大的云开发平台Coding](http://coding.net)

*效果图如下：*

![在这里输入图片描述][11]

或者也可以直接用< >，将网址或者邮箱地址放在中间，也能将地址直接转成链接：

    <support@coding.net>

*效果图如下：*

![在这里输入图片描述][12]



### 表格
在 Markdown 中，可以制作表格，例如：

    ```
    
    First Header | Second Header | Third Header
    ------------ | ------------- | ------------
    Content Cell | Content Cell  | Content Cell
    Content Cell | Content Cell  | Content Cell
    
    ```
    
*效果图如下：*

![在这里输入图片描述][13]

或者也可以让表格两边内容对齐，中间内容居中，例如：

    ```
    
    First Header | Second Header | Third Header
    :----------- | :-----------: | -----------:
    Left         | Center        | Right
    Left         | Center        | Right
    
    ```

*效果图如下：*

![在这里输入图片描述][14]



  [1]: https://dn-coding-net-production-pp.qbox.me/d46c3a8f-b74a-4008-ad1d-a56be443d5fa.png
  [2]: https://dn-coding-net-production-pp.qbox.me/d735ad0c-2113-48dd-ae5d-2d3b3fca6977.png
  [3]: https://dn-coding-net-production-pp.qbox.me/db2ce6d5-5dc9-4c92-b226-50174d853eb9.png
  [4]: https://dn-coding-net-production-pp.qbox.me/58bc73bd-f1ba-4cc1-9d90-24758e099de7.png
  [5]: https://dn-coding-net-production-pp.qbox.me/d5772b14-8976-4e9f-945b-4b06d2a6e8f1.png
  [6]: https://dn-coding-net-production-pp.qbox.me/d0321f44-c344-43d4-817e-9040735cf5b3.png
  [7]: https://dn-coding-net-production-pp.qbox.me/21bfcf00-3a71-4b90-9f6e-e692dd3100a2.png
  [8]: https://dn-coding-net-production-pp.qbox.me/64a6b611-e0b9-443d-b7a2-c134613b63f9.png
  [9]: https://dn-coding-net-production-pp.qbox.me/0e72e420-fd75-4dc8-8093-66a57e38cd68.png
  [10]: https://dn-coding-net-production-pp.qbox.me/372a6abf-f801-4a70-9f20-49f9e7db632d.png
  [11]: https://dn-coding-net-production-pp.qbox.me/3aeea7b8-a675-4491-adbb-b64b1145ff1a.png
  [12]: https://dn-coding-net-production-pp.qbox.me/c028625a-182b-4f76-8805-245c0e27e389.png
  [13]: https://dn-coding-net-production-pp.qbox.me/9a77d37a-95d4-4ad6-ab09-0d41f766fe34.jpg
  [14]: https://dn-coding-net-production-pp.qbox.me/0d4014c0-3f54-462a-8a99-4706c62b9e5e.jpg
  
  
### 分割线

在 Markdown 中，可以制作分割线，例如：

```
---
```

*效果图如下：*

![在这里输入图片描述][15]

  [15]: https://dn-coding-net-production-pp.qbox.me/aeb88b18-688b-41e9-a4a3-0f970ab3af3e.png
  
  
### 上下标

\^表示上标, _表示下标。如果上下标的内容多于一个字符，要用{}把这些内容括起来当成一个整体。上下标是可以嵌套的，也可以同时使用。
例如：

```
x^{y^z}=(1+{\rm e}^x)^{-2xy^w}
```

*效果图如下：*

![在这里输入图片描述][16]

  [16]: https://dn-coding-net-production-pp.qbox.me/ce4167be-058d-4cfc-9848-49ef2aebee94.png

### 图片
Markdown 使用了类似链接的语法来插入图片, 包含两种形式: 内联 和 引用.

内联图片语法如下:

` ![Alt text](/path/to/img.jpg) `

或

`![Alt text](/path/to/img.jpg "Optional title") `

也就是:

一个感叹号:` ! `;
紧跟一对方括号, 包含了可选填的图片 alt 属性;
紧跟一对圆括号, 包含了图片的 URL 或者路径, 以及一个可选的用单引号或双引号包裹的 title 属性.

引用图片语法如下:

` ![Alt text][id] `

"id" 是图片引用的名称. 图片引用使用链接定义的相同语法:

` [id]: url/to/image  "Optional title attribute" `

<div class="footer-nav">
<div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/project/discuss.html">上一篇：项目讨论</a></div>
</div>
