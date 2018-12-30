---
layout: post
title: Unity Shader 学习笔记（002）标准着色器模板信息
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 标准着色器模板信息
shareexcerpt: Unity Shader  标准着色器模板信息
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

<p> <a href="http://gad.qq.com/article/detail/38320" target="_blank"> Unity Shader学习笔记（3）Unity Shader模板、结构、形式 </a> </p>


<br>
<h2 class="nav1">Unity Sahder的模板</h2>


<p><img src="/assets/docpic/unity_shader_note_002_01.png" style="border: solid 1px #666;" /></p>



| 模板名                      	| 功能   | 
| -----------------------------	| -----  |
| Standard Surface Shader     	| 包含标准光照模型的表面着色器模板。   |
| Unlit Shader   				| 产生一个不包含光照（但包含雾效）的基本的顶点/片元着色器。 |
| ImageEffect Shader  			| 实现各种屏幕后处理效果的基本模版。 |
| Compute Shader  				| 特殊的Shader，利用GPU的并行性来进行一些与常规渲染流水线无关的计算。 |






| 标签名                      	| 功能   | 
| -----------------------------	| -----  |
| Default Maps     				| 默认纹理。   |
| Surface shader   				| 点击‘Show generated code’，可以看到Unity在背后为表明着色器生成的顶点/片元着色器）。  |
| Fixed function  				| 固定函数着色器（用于旧设备）。如果使用了同样会有一个按钮，用来查看生成的顶点/片元着色器。 |
| Compiled code  				| 选择不同图像编程接口，编译成对应Shader代码。可以查看生成的底层汇编指令。 |
| Cast shadows  				| 是否捕获阴影。 |
| Render queue  				| 渲染队列优先级。 |
| LOD  							| Level of Detail，着色器的细节层次效果。 |
| Ignore projector  			| 是否忽视投影（常用于半透明物体）。 |
| Disable batching  			| 是否不使用批处理。 |
| Properties  					| 属性列表。 |


