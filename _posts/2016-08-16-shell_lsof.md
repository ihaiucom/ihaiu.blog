---
layout: post
title: 【笔记】MAC查看端口占用情况
date: 2016-08-16 12:20:00
categories: shell
tags: mac shell
excerpt: 命令 lsof -i tcp:port  （port替换成端口号，比如6379）可以查看该端口被什么程序占用，并显示PID，方便KILL
thread: 20160816122000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
---


命令 lsof -i tcp:port  （port替换成端口号，比如6379）可以查看该端口被什么程序占用，并显示PID，方便KILL <br>


lsof -i :80  <br>
sudo lsof -n -P| grep :8087  <br>
nc -v -w 2 127.0.0.1 8087 <br>
lsof -i tcp:8087  <br>

<br><br>

## 相关文档

[mac os x 查看网络端口情况](http://my.oschina.net/foreverich/blog/402252)