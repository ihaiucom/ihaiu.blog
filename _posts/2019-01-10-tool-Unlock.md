---
layout: post
title: Unlock 解锁文件占用
date: 2019-01-10 9:50:00
categories: 工具
tags: 工具
excerpt: Unlock 解锁文件占用
shareexcerpt: Unlock 解锁文件占用
thread: 20181018160000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_js: true
---



<br>
<br>
<h2 class="nav1">下载</h2>

<p>
IObit Unlocker: <a href="/assets/down/ihaiu.ExportXlsxTool.zip" target="_blank">https://iobit-unlocker.en.softonic.com/?ex=BB-765.1</a>
</p>

<br>
<br>
<h2 class="nav1">命令使用</h2>

### 1.将安装目录添加到环境变量path里

<pre>
D:\Program Files (x86)\IObit\IObit Unlocker
</pre>


### 2.查看命令

在cmd里打以下命令
<pre>
IObitUnlocker.exe --help
</pre>


<p><img src="/assets/docpic/tool-unlock-01.png" style="border: solid 1px #666;" /></p>


### 3.使用实例

unlock.bat
<pre>
IObitUnlocker.exe /None "%cd:~0,-11%Config\Client","%cd:~0,-11%Config\Common","%cd:~0,-11%Config\Server","%cd:~0,-11%Config"
</pre>
