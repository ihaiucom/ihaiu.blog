---
layout: post
title: Flatbuffers 使用
date: 2017-03-10 13:51:00
categories: Flatbuffers
tags: Flatbuffers
excerpt: Flatbuffers使用
shareexcerpt: Flatbuffers使用
thread: 20170320005200
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_java: true
---


<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="https://github.com/google/flatbuffers">https://github.com/google/flatbuffers</a></p>
<p><a target="_blank" href="http://google.github.io/flatbuffers/flatbuffers_guide_building.html">http://google.github.io/flatbuffers/flatbuffers_guide_building.html</a></p><p><a target="_blank" href="http://blog.csdn.net/ninian_liu/article/details/50554812">http://blog.csdn.net/ninian_liu/article/details/50554812</a></p>

<br>
<br>


<h2 class="nav1">安装cmake (已经安装的跳过)</h2>
<p>1. 先到官网下载<a target="_blank" href="https://cmake.org/">https://cmake.org/</a>,我用的是mac版的 <a target="_blank" href="https://cmake.org/files/v3.8/cmake-3.8.0-rc2-Darwin-x86_64.dmg">cmake-3.8.0-rc2-Darwin-x86_64.dmg</a>

<p>2. 直接安装，我直接拖到Applications</p>
<p>3. 配置cmake命令可以访问, 在“/etc/paths”文件里加一样"/Applications/CMake.app/Contents/bin"</p>


<h2 class="nav1">编译flatc工具</h2>
<p>懒得编译的可以直接下载 <a target="_blank" href="/assets/down/flatc.zip">flatc.zip</a><p><br>
<p>1. 先到<a target="_blank" href="https://github.com/google/flatbuffers">flatbuffers github</a>上下载项目</p>
<p>2. 解压</p>
<p>3. 用终端进入到目录</p>
<p>4. 输入 cmake -G "Xcode" </p>
<p>5. 会在目录里生成 Xcode项目， 用xcode打开FlatBuffers.xcodeproj，点击Xcode的菜单 Prudoct/Build 就可以。</p>
<p>6. Build完，会在目录下有一个Debug文件夹里面就有 flatc等执行文件了</p>