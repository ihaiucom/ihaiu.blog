---
layout: post
title: Unity Shader 学习笔记（003）语言结构
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 语言结构
shareexcerpt: Unity Shader  语言结构
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
<p> <a href="https://docs.unity3d.com/Manual/SL-Shader.html" target="_blank"> Unity用户手册（2018.3）/ 图像图形参考 / 着色器参考ShaderLab语法 </a> </p>


<br>
<h2 class="nav1">Unity Sahder语言结构</h2>


<pre class="brush: csharp; ">

// 着色器名称
Shader "ShaderName" ｛
    // 属性 
    Properties ｛
        Name ("display name", PrpertyType) = DefaultValue
    ｝
    // 子着色器
    SubShader ｛
        // 可选的，标签（告诉Unity如何、何时渲染对象）k
        [Tags]
        // 可选的，状态设置（开关混合、深度测试，剔除模式，设置深度测试使用函数）
        [RenderSetup]
        // 完整渲染流程
        Pass ｛
            [Name]
            [Tags]
            [RanderSetup]
        ｝
    ｝
    //SubShader不能运行时执行（同时渲染阴影）
    Fallback "VertexLit"  
｝

</pre>

<pre>

Shader
|__Properties : 属性
|__SubShader : 子着色器，最少要有一个
|__SubShader
|__SubShader
	|__[Tag] : 标签，可选。
	|__[RenderSetup] : 状态设置，可选。 
	|__Pass : 一次完整的渲染流程。可以在里面声明标签和状态。
	|__Pass
	|__Pass
		|__[Name]: Pass名称
		|__[Tags]: 不同与Subshader的标签。
		|__[RenderSetup]: 同SubShader，还可以使用固定管线的着色器命令。
		|__嵌套Shader代码
|__Fallback : SubShader不能运行时执行

</pre>
