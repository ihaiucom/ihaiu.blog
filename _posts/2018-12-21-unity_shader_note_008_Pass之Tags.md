---
layout: post
title: Unity Shader 学习笔记（008）Pass 之 Tags
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 学习笔记（008）Pass 之 Tags
shareexcerpt: Unity Shader 学习笔记（008）Pass 之 Tags
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

<p> <a href="https://blog.ihaiu.com/unity_shader_AmplifyShaderEditor/#content" target="_blank"> Unity Shader 之 Amplify Shader Editor </a> </p>
<p> <a href="http://gad.qq.com/article/detail/38320" target="_blank"> Unity Shader学习笔记（3）Unity Shader模板、结构、形式 </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-SubShaderTags.html" target="_blank"> ShaderLab: SubShader Tags</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-PassTags.html" target="_blank"> ShaderLab: Pass Tags </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-RenderPipeline.html" target="_blank"> LightMode: Unity’s Rendering Pipeline </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/RenderTech-ForwardRendering.html" target="_blank"> LightMode: Forward Rendering Path Details</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/RenderTech-DeferredShading.html" target="_blank"> LightMode: Deferred shading rendering path</a> </p>


<br>
<h2 class="nav1"> SubShader 之 Tags </h2>

### 介绍

* 标签基本上是键值对

* Pass内部标签用于控制此通道在照明管道中的角色（环境光，顶点照明，像素点亮等）和其他一些选项

* SubShader和Pass的Tags是不一样的


<br>

### 默认提供4种Tag 


<p><img src="/assets/docpic/unity_shader_note_008_01.png" style="border: solid 1px #666;" /></p>






<br>
<h2 class="nav2"> LightMode (渲染管道) </h2>
<p>控制渲染顺序，指定该物体属于哪个渲染队列。通过这种方式可以保证所有的透明物体可以在所有不透明物体后面被渲染 </p>



<pre class="brush: csharp; ">
    Pass {
        Tags {
            "LightMode"="ForwardBase"
        }
    }
</pre>


<h4 >可选值</h4>

| 值                       | 功能   | 
| ----------------------------- | -----  |
| Always                    | 始终呈现; 没有照明。   |
| ForwardBase               | 用于前向渲染 ，环境光，主方向光，顶点/ SH光和光照贴图   |
| ForwardAdd                | 用于前向渲染 ; 应用每像素添加的光，每个光通过一次。    |
| Deferred                  | 延迟：在延迟着色中 ; 渲染g-buffer。    |
| ShadowCaster              |  将对象深度渲染到阴影贴图或深度纹理中。 |
| MotionVectors             |      用于计算每个对象的运动矢量。   |
| PrepassBase               |  用于旧版延迟光照，渲染法线和镜面反射指数。  |
| PrepassFinal              |  用于传统延迟光照，通过组合纹理，光照和发射来渲染最终颜色。  |
| Vertex                    |  当对象未进行光照贴图时，用于传统的顶点渲染渲染 ; 应用所有顶点灯。   |
| VertexLMRGBM              | 在对象进行光照贴图时用于旧版Vertex Lit渲染 ; 在lightmap是RGBM编码的平台上（PC和控制台）。   |
| VertexLM           |  在对象光照贴图时用于旧版Vertex Lit渲染 ; 在光照贴图采用双LDR编码的平台上（移动平台）。   |






<br>
<h2 class="nav2"> RequireOptions (渲染条件) </h2>
<p>用于只有满足指定条件时才渲染此Pass，它的值是空格分隔的字符窜,目前Unity支持的选项是： </p>

* SoftVegetation：仅在“  Quality 质量”窗口中启用“软植被”时才渲染此过程。



<pre class="brush: csharp; ">
    Pass {
        Tags {
            "RequireOptions"="SoftVegetation"
        }
    }
</pre>



<br>
<h2 class="nav2"> PassFlags (改变渲染管道) </h2>
<p>传递可以指示改变渲染管道将数据传递给它的标志。这是通过使用PassFlags标记完成的，其值为空格分隔的标志名称。目前支持的标志是： </p>

* OnlyDirectional：在ForwardBase传递类型中使用时，此标志使得只有主方向光和ambient / lightprobe数据才会传递到着色器。这意味着非重要光源的数据不会传递到顶点光或球面谐波着色器变量中。见正向渲染的细节。



<pre class="brush: csharp; ">
    Pass {
        Tags {
            "PassFlags"="OnlyDirectional"
        }
    }
</pre>







