---
layout: post
title: 【笔记】Mac Shell awk '{print $column}' 打印第column列
date: 2016-09-23 10:46:00
categories: shell
tags: mac shell
excerpt: svn status|grep ? |awk '{print $2}'|xargs svn add
thread: 20160923104600
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---

<h2 class="nav1">实例--打印进程端口</h2>


<pre>
ps -ef|grep java|<b>awk '{print$2}'</b>
</pre>

<h4>输出</h4>
<pre>
1317
1319
1321
6890
</pre>


<p> </p>
<h2 class="nav1">实例--svn批量删除文件</h2>
<pre>
svn status|grep ! |awk '{print $2}'|xargs svn del
</pre>



<p> </p>
<h2 class="nav1">实例--svn批量恢复D  文件</h2>
<pre>
svn status|grep D |awk '{print $2}'|xargs svn revert 
</pre>


<p> </p>
<h2 class="nav1">实例--svn批量添加文件</h2>
<pre>
svn status|grep ? |awk '{print $2}'|xargs svn add
</pre>