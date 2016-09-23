---
layout: post
title: 【笔记】Mac Shell xargs 再命令行前加命令文本
date: 2016-09-23 10:46:30
categories: shell
tags: mac shell
excerpt: svn status|grep ? |awk '{print $2}'|xargs svn add
thread: 20160923104630
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---

<p> </p>
<h2 class="nav1">实例</h2>
<pre>
hello|xargs mkdir 
</pre>
<h3>得到的命令就是</h3>
<pre>
mkdir hello
</pre>

<p> </p>
<h2 class="nav1">实例--svn批量删除文件</h2>
<pre>
svn status|grep ! |awk '{print $2}'|xargs svn del
</pre>


<p> </p>
<h2 class="nav1">实例--杀死查找的所有进程</h2>
<pre>
ps -ef|grep java|awk '{print$2}'|xargs kill -9 
</pre>
