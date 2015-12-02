---
layout: post

title: 运行程序
---  


## 运行程序###

### 在终端运行程序

编写好的代码可以在终端( Terminal ) 里面运行，对于需要创建外部访问链接的应用需要明确绑定到 0.0.0.0 地址, 

这里以 Ruby 语言为例子，另外系统默认是没有安装 Ruby 需要使用 apt-get install 安装：

    ➜  workspace git:(master) ✗ ruby app.rb -o 0.0.0.0 -p 8080
    == Sinatra (v1.4.6) has taken the stage on 8080 for development with backup from 
    Thin web server (v1.6.3 codename Protein Powder)
    Maximum connections set to 1024

    Listening on 0.0.0.0:8080, CTRL+C to stop 

也可以使用启动 Python 内置的 SimpHTTPServer 模块。

	➜  workspace git:(master) ✗ python -m SimpleHTTPServer 
	Serving HTTP on 0.0.0.0 port 8000 ...  

也可以安装 apache 或者 ngnix 等 web server，配置方式参见 Ubuntu 下配置

>需要强调一下，绑定在本地回环地址 127.0.0.1 是无效的。



### 创建外部访问链接( Generate Access Url )

WebIDE 支持为编写好的程序创建一个外部可以访问的链接，有效期 1 个小时，点击菜单的 Tools -> Generate Access Url 如下图。

![图片](https://dn-coding-net-production-pp.qbox.me/543dfde7-8bf0-49a8-95c8-80c33f18c106.png) 

设置你需要绑定的端口，需要跟程序运行监听的端口一致, 如上面的8080，点击链接访问如下：

![图片](https://dn-coding-net-production-pp.qbox.me/1bca4b34-acbd-423c-a393-4380978bbff8.png) 
                                        


  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/webide/terminal.html">上一篇：终端</a></div>
  </div>
