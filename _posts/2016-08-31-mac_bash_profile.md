---
layout: post
title: 【笔记】Mac设置PATH
date: 2016-08-31 12:58:00
categories: mac
tags: mac path .bash_profile
excerpt: 方法一：修改 /etc/paths; 方法二：修改 ~/.bash_profile
thread: 201608311258000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---

<h2 class="nav1">方法一：修改 /etc/paths</h2>


<pre>
/usr/local/bin
/usr/bin
/bin
/usr/sbin
/sbin
</pre>

<br>


<h2 class="nav1">方法二：修改 ~/.bash_profile</h2>

<pre>
alias ls="ls -G"
export PATH=/usr/local/apache-maven-3.3.9/bin:$PATH  
</pre>