---
layout: post
title: 【笔记】whereis和which查看程序放置路径
date: 2016-11-16 23:30:00
categories: mac
tags: mac whereis which
excerpt: whereis和which查看程序放置路径，感觉which更好用
thread: 20161116233000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---

<h2 class="nav1">whereis</h2>

<pre>
whereis svn
whereis protoc
</pre>

// 输出
<pre>
/usr/bin/svn
// protoc的没输出，所以我觉得which更好用
</pre>

<br><br>

<h2 class="nav1">which</h2>

<pre>
which protoc
</pre>

// 输出
<pre>
/usr/local/bin/protoc
</pre>