---
layout: post
title: Html5学习之LayaAir发布微信2D报错
date: 2018-05-29 13:00:00
categories: Html5
tags: Html5 
excerpt: Html5学习
shareexcerpt: Html5学习
thread: 201805152000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---



<br>
<br>
<h2 class="nav1">发布微信2D报错</h2>
<p>
发布微信3D示例项目不会报错， 框架程序包占用了2.5M左右<br>
<p><img src="/assets/docpic/laya_weixin_01.png" style="border: solid 1px #666;" /></p>
</p>
<br>
<br>

<p>
<B>发布微信2D示例项目会报错， 显示ui没有定义</B><br>
<p><img src="/assets/docpic/laya_weixin_02.png" style="border: solid 1px #666;" /></p>
</p>
<br>

<p>报错原因是因为微信不能包含调式这2个文件: </p>
<pre>
bin/libs/laya.debugtool.js
bin/libs/min/laya.debugtool.min.js
</pre>

<p>
发布微信laya会把所有的js合并到 "release/wxgame/code.js" <br>
所以解决办法是在layaIDE里把2个debugtool给删掉，再发布微信就不会报改错。<br>
<p><img src="/assets/docpic/laya_weixin_03.png" style="border: solid 1px #666;" /></p>
</p>
<br>
<br>




<h2 class="nav1">但是此时的包还是很大, 有5.2M左右，已经超过了4M</h2>
<p><img src="/assets/docpic/laya_weixin_04.png" style="border: solid 1px #666;" /></p>


<p>
因为 "libs" 和 "js" 目录里的代码都合并到 "code.js" 里了，因此可以把 这两个目录 里的文件都删掉<br>
再次编译就正常了
<p><img src="/assets/docpic/laya_weixin_05.png" style="border: solid 1px #666;" /></p>
<B>此时的包大小, 有1.8M左右</B>
<p><img src="/assets/docpic/laya_weixin_06.png" style="border: solid 1px #666;" /></p>
</p>


<br>

