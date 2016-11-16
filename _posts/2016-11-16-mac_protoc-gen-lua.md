---
layout: post
title: 【笔记】protoc-gen-lua protoc -v 2.5
date: 2016-11-16 20:59:00
categories: mac
tags: mac protoc lua
excerpt: 
thread: 20161116205900
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---

<p>

<h3 class="nav2">下载</h3>

* 源码 		<a href="https://github.com/google/protobuf/tree/v2.5.0" target="_blank">https://github.com/google/protobuf/tree/v2.5.0</a> <br>


* 编译好的Bin (不想编译源码的可以下载) 		<a href="https://github.com/google/protobuf/releases" target="_blank">https://github.com/google/protobuf/releases</a> <br>

* 我们这里安装的是protoc 2.5 <a href="https://github.com/google/protobuf/releases/tag/v2.5.0" target="_blank">https://github.com/google/protobuf/releases/tag/v2.5.0</a> <br>


* <a href="http://www.cnblogs.com/ghj1976/p/5435565.html" target="_blank">需要安装3.0的可以看看这里</a> <br>

<p>

<br>


<h2 class="nav2">步奏</h2>
* 安装 protoc
* 安装 protoc python
* 安装 protoc-gen-lua

<br>


<h2 class="nav1">1.安装 protoc</h2>
<p>
编译太麻烦了，你可以参考<a href="http://blog.csdn.net/zhangyuehuan/article/details/51226066" target="_blank">mac 上protobuf-2.6.0安装步骤</a> 。
</p>

<p>
在这里我直接提供编译好的 <a href="/assets/down/protobuf2.5.0.zip" target="_blank">protobuf2.5.0.zip</a>
</p>

<h3>将protoc创建一个链接到/usr/local/bin </h3>
<pre>
cd /usr/local/bin
sudo ln -s xxxxx/bin/protoc
</pre>


<br>
<br>

<h2 class="nav1">2.安装 protoc python</h2>
解压<a href="https://github.com/google/protobuf/releases/tag/v2.5.0" target="_blank">protobuf2.5.0</a>进入python目录

<pre>
cd ./python
python setup.py build
sudo python setup.py install
</pre>



<h2 class="nav1">3.安装 protoc-gen-lua</h2>
下载 <a href="https://github.com/sean-lin/protoc-gen-lua">https://github.com/sean-lin/protoc-gen-lua </a> 并解压

<br>
<h3>(1)将plugin/protoc-gen-lua创建一个链接到/usr/local/bin </h3>
<pre>
cd /usr/local/bin
sudo ln -s xxxxx/protoc-gen-lua-master/plugin/protoc-gen-lua
</pre>


<br>
<br>
<h3>(2)创建example/build_lua.sh </h3>
<pre>
protoc --lua_out=./ *.proto
# 把下面的注释去掉，可以拷贝到你的项目目录
# cp -fv * ../../Assets/Game/Lua/3rd/pblua/
</pre>

<br>
<h3>(3)测试 </h3>
<pre>
#先加上执行权限
chmod +x ./build_lua.sh  

./build_lua.sh 
#可以看到成功生存了一个person_pb.lua文件
</pre>






