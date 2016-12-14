---
layout: post
title:  git网页查看资源 git instaweb --httpd=webrick --port=8080
date: 2016-12-14 1:10:00
categories: git
tags: git
excerpt: git instaweb --httpd=webrick --port=8080
thread: 20161214011000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/gitweb_1.png

sh: false
sh_csharp: true
---

<h2 class="nav1">使用</h2>
<p>cd到git项目，不管是服务器的还是客户端的。输入以下命令就可以通过web服务求查看了。</p>
<pre>
git instaweb --httpd=webrick --port=8080
</pre>
<p></p>
<p style="border: 1px solid;"><img src="/assets/docpic/gitweb_1.png"/></p>
<p></p>

<p>默认hb的值是编码过的。我们可以直接用版本路径明文</p>
<p style="border: 1px solid;"><img src="/assets/docpic/gitweb_4.png"/></p>
<p></p>
<p>使用明码路径</p>
<p style="border: 1px solid;"><img src="/assets/docpic/gitweb_5.png"/></p>
<p></p>


<p>我们可以通过不同的tag访问不同的版本</p>
<p style="border: 1px solid;"><img src="/assets/docpic/gitweb_2.jpg"/></p>
<p style="border: 1px solid;"><img src="/assets/docpic/gitweb_3.jpg"/></p>
<p></p>

<h2 class="nav1">停止服务器</h2>
<pre>
git instaweb --httpd=webrick --stop
</pre>
<p>或者用ps 查找进程然后kill</p>
<pre>
ps -ef | grep git
kill -9 进程号
</pre>



<h2 class="nav1">其他作用</h2>
<p>游戏往往需要更新资源，用这个来管理最好不过。同过tag来控制版本号、发行商。</p>
<p>好处1:这样可以做到一份资源管理所有版本。省去了每个发行商或者版本都需要独立一个目录(特殊情况除外)。</p>
<p>好处2:可以完全有客户端控制git。不再需要通过ssh等去控制服务器</p>
<p>好处3:自动解决了，上传版本过程中影响更新上一版本的玩家</p>
<p></p>
<p></p>


<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="https://git-scm.com/book/zh/v1/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-GitWeb">4.6 服务器上的 Git - GitWeb</a></p>
<p><a target="_blank" href="https://git-scm.com/book/en/v2/Git-on-the-Server-GitWeb">https://git-scm.com/book/en/v2/Git-on-the-Server-GitWeb</a></p>
<p><a target="_blank" href="https://git-scm.com/docs/gitweb">https://git-scm.com/docs/gitweb</a></p>
<p></p>
<p></p>