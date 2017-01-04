---
layout: post
title: unity GUID查看项目资源使用情况工具
date: 2017-01-03 20:50:00
categories: Unity
tags: Unity
excerpt: GUID查看项目资源使用情况
shareexcerpt: GUID查看项目资源使用情况
thread: 20170103205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/unity_guidref_1.png

sh: true
sh_csharp: true
---
<div>
来先看<a href="/assets/demos/GUIDRef/index.html" target="_blank">Demo</a> <br>
网页css使用了uwa的
</div>

<br>

<h2 class="nav1">工具的作用 </h2>

<p>1. 查看文件数量 </p>
<p>2. 查看依赖情况 </p>
<p>3. 查看引用情况（Unity提供了“选择某个文件->右键Select Dependencies” 来查看依赖。但是他没有查看某个资源被哪些引用了。）</p>
<p>4. 缓存数据，提供给其他工具使用 (有时候我们要写工具来替换资源等。如果项目里的文件很多，运行速度回非常慢。所以想到的是先缓存一份数据。然后根据这份缓存去查找就会非常快。) </p>

<br>


<h2 class="nav1">使用 </h2>
<p>【菜单】Assets/生成GUID引用缓存</p>
<br>

<h2 class="nav1">截图 </h2>
<p><img src="/assets/docpic/unity_guidref_1.png" style="border: solid 1px #666;" /></p>

<br>
<p><img src="/assets/docpic/unity_guidref_2.png" style="border: solid 1px #666;" /></p>

<h2 class="nav1">搜索 </h2>
<p>1.可以输入GUID查找</p>
<p>2.可以输入文件名或路径匹配 (支持正则匹配)</p>
<p></p>
<p><img src="/assets/docpic/unity_guidref_3.png" style="border: solid 1px #666;" /></p>



<br>
<h2 class="nav1">工具下载 </h2>
<p><a href="/assets/down/ihaiu.GUIDRef.unitypackage" target="_blank" >本地下载</a></p>
<p><a href="https://github.com/ihaiucom/ihaiu.GUIDRef" target="_blank" >Github</a></p>


<br>
<br>
<br>


