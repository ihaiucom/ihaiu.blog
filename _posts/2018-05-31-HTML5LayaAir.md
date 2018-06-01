---
layout: post
title: Html5学习之LayaAir
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
<h2 class="nav1">需要注意的问题</h2>


<h3>富文本HtmlDivElemen</h3>
<p>
【注意：目前不支持斜体、描边、span标签内嵌的方式】<br>
【注意：目前不支持文本的垂直居中对齐，开发者可以将(图片的高度-文本的高度)/2的值赋给文本的Y值，进行垂直居中对齐替代设置】<br>
<a href="https://ldc.layabox.com/doc/?nav=zh-ts-8-0-1" target="_blank">https://ldc.layabox.com/doc/?nav=zh-ts-8-0-1</a>
</p>
<br>


<h3>声音</h3>
<p>
<a href="https://ldc.layabox.com/doc/?nav=zh-ts-7-1-3" target="_blank">https://ldc.layabox.com/doc/?nav=zh-ts-7-1-3</a>
</p>
<br>



<h3>白名单功能</h3>
<p>
后续LayaBox会有白名单机制，如果开发者购买了授权或者和LayaBox联合运营产品，便可以去掉LayaBox的logo，如果没有则需要强制增加LayaBox的logo。引擎内部会有检测机制，随机检测，如果检测不通过则无法进入游戏。<br>
<a href="https://ldc.layabox.com/doc/?nav=zh-ts-7-1-4" target="_blank">https://ldc.layabox.com/doc/?nav=zh-ts-7-1-4</a>
</p>
<br>
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

<p>报错原因是因为微信不能包含调式这2个文件: bin/libs/laya.debugtool.js</p>
<pre>
bin/libs/laya.debugtool.js
bin/libs/min/laya.debugtool.min.js
</pre>

<p>
发布微信laya会把所有的js合并到release/wxgame/code.js<br>
所以解决办法是在layaIDE里把2个debugtool给删掉，再发布微信就不会报改错。<br>
<p><img src="/assets/docpic/laya_weixin_03.png" style="border: solid 1px #666;" /></p>
<B>但是此时的包还是很大, 有5.2M左右，已经超过了4M</B>
<p><img src="/assets/docpic/laya_weixin_04.png" style="border: solid 1px #666;" /></p>
</p>


<p>
因为 "libs"  目录里的代码都合并到 "code.js" 里了，因此可以把 "libs" 里的文件都删掉<br>
再次编译就正常了
<p><img src="/assets/docpic/laya_weixin_05.png" style="border: solid 1px #666;" /></p>
<B>但是此时的包还是很大, 有1.8M左右</B>
<p><img src="/assets/docpic/laya_weixin_06.png" style="border: solid 1px #666;" /></p>
</p>


<br>

