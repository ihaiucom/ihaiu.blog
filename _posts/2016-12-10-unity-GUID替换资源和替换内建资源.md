---
layout: post
title: unity GUID替换资源和替换内建资源工具
date: 2016-12-10 1:45:00
categories: Unity
tags: Unity
excerpt: GUID替换资源和替换内建资源工具
shareexcerpt: GUID替换资源和替换内建资源工具
thread: 201612100144
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/unity_guid_replace_material.png

sh: true
sh_csharp: true
---
<p>在用Unity 5.4版本打包AssetBundle时候，发现如果用到Unity的内建资源(Resources/unity_builtin_extra)打包的AssetBundle里的资源信息一切都很正常。但是加载到内存中用Profiler工具查看发现会纯在多个相同内建资源的名称。</p>
<p><img src="/assets/docpic/unity_guid_demo_user_before.jpg" /></p>

<p></p>
<p>这是因为内建资源我们不能设置独立的AssetBundleName，所以就会有很多冗余的资源打包到包里。所以我的思路是把内建资源替换成我们自己的资源。</p>
<p><img src="/assets/docpic/unity_guid_demo_user_after.jpg" /></p>

<p></p>
<p>为了方便查找替换，我参看了 <a href="http://blog.csdn.net/u010019717/article/details/52763318" target="_blank" >Unity GUID替换Editor</a> 改写了下面这个工具。</p>
<p><a href="/assets/down/builtin_unity_5.4.unitypackage" target="_blank" >GUID替换资源和替换内建资源工具</a></p>
<p><a href="https://pan.baidu.com/s/1o7IfwZS" target="_blank" >builtin_unity_5.4.unitypackage （百度云下载 https://pan.baidu.com/s/1o7IfwZS）</a></p>


<p>里面的Shader是5.4.0版本的，你可以到官网下载自己需要的版本替换</p>


<p></p>
<p></p>
<h2 class="nav1">内建资源截图 </h2>
<p><img src="/assets/docpic/unity_builtin_images.jpg" /></p>
<p></p>
<p><img src="/assets/docpic/unity_builtin_material.jpg" /></p>
<p></p>


<h2 class="nav1">工具截图  Window/GUIDRefReplaceWindow </h2>
<p><img src="/assets/docpic/unity_guid_replace_guid.png" /></p>
<p></p>
<p><img src="/assets/docpic/unity_guid_replace_material.png" /></p>
<p></p>
<p><img src="/assets/docpic/unity_guid_replace_sprite.png" /></p>
<p></p>
<p><img src="/assets/docpic/unity_guid_replace_texture.png" /></p>
<p></p>
<p><img src="/assets/docpic/unity_guid_replace_shader.png" /></p>


<p></p>
<p></p>
<h2 class="nav1">相关文档 </h2>
<p><a href="http://blog.csdn.net/u010019717/article/details/52763318" target="_blank">Unity GUID替换Editor </a></p>
<p><a href="http://blog.uwa4d.com/archives/957.html" target="_blank">资源管理 Q3 </a></p>
<p><a href="http://blog.uwa4d.com/archives/QA_ResourceManagement.html" target="_blank">关于Unity中的资源管理，你可能遇到这些问题 </a></p>
<p><a href="http://blog.uwa4d.com/archives/QA_Memory-1.html" target="_blank">关于Unity内存优化，你可能遇到这些问题 </a></p>


<p></p>
<p></p>
<h2 class="nav1">工具下载 </h2>
<p><a href="/assets/down/builtin_unity_5.4.unitypackage" target="_blank" >GUID替换资源和替换内建资源工具</a></p>
<p><a href="https://pan.baidu.com/s/1o7IfwZS" target="_blank" >builtin_unity_5.4.unitypackage （百度云下载 https://pan.baidu.com/s/1o7IfwZS）</a></p>


<br>
<br>
<br>


