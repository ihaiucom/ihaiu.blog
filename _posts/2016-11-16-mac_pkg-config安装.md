---
layout: post
title: 【笔记】Mac 安装 pak-config命令
date: 2016-11-16 20:25:00
categories: mac
tags: mac pak-config
excerpt: 
thread: 20161116202500
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---




<pre>
curl http://pkgconfig.freedesktop.org/releases/pkg-config-0.28.tar.gz -o pkg-config-0.28.tar.gz

tar -xf pkg-config-0.28.tar.gz
cd pkg-config-0.28

./configure  --with-internal-glib

sudo  make install
</pre>

我可能网络不好，用命令curl下载的压缩包有问题。我用浏览器手动下了。
