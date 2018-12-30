---
layout: post
title: Unity Shader 学习笔记（001）语言
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 学习笔记（001）语言
shareexcerpt: Unity Shader 学习笔记（001）语言
thread: 20181018160000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---




<br>
<br>
<h2 class="nav1">相关文档</h2>

<p> <a href="http://gad.qq.com/article/detail/38319" target="_blank"> Unity Shader学习笔记（2）Shader、ShaderLab、Cg/HLSL/GLSL </a> </p>


<br>
<h2 class="nav1">介绍</h2>


#### Unity Shader可以嵌套2种语言：


* Cg（C for Graphic）/ HLSL（High Level Shading Language） ： Microsoft和NVIDIA合作，所以Cg/HLSL实际上是同一种语言

* GLSL（OnpenGL Shading Language） ： 目标平台只有Masc OS X、OpenGL ES 2.0、Linux


<br>
<h2 class="nav2">Cg/HLSL</h2>

嵌套在命令CGPROGRAM和ENDCG之间


```python
Pass ｛
    // Pass 的标签和状态设置
    CGPROGRAM
    // 编译指令
    #pargma vertex vert
    #pargma fragment frag
    // CG代码
    ENDCG
    // 其他设置
｝
```


<br>
<h2 class="nav2">GLSL</h2>

嵌套在命令GLSLPROGRAM和ENDGLSL之间

