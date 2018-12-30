---
layout: post
title: Unity Shader 学习笔记（007）SubShader 之 Tags
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 学习笔记（007）SubShader 之 Tags
shareexcerpt: Unity Shader 学习笔记（007）SubShader 之 Tags
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
<p> <a href="https://docs.unity3d.com/ScriptReference/Material.GetTag.html" target="_blank"> Material.GetTag </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-ShaderReplacement.html" target="_blank"> RenderType: Rendering with Replaced Shaders </a> </p>

<p> <a href="https://docs.unity3d.com/Manual/DrawCallBatching.html" target="_blank"> DisableBatching: Draw call batching</a> </p>


<p> <a href="https://docs.unity3d.com/Manual/class-Projector.html" target="_blank"> IgnoreProjector: Projector</a> </p>


<br>
<h2 class="nav1"> SubShader 之 Tags </h2>

### 介绍

* 标签基本上是键值对

* 除了Unity识别的内置标记之外，您还可以使用自己的标记并使用Material.GetTag函数查询它们。

* SubShader和Pass的Tags是不一样的


<br>

### 默认提供7种Tag 

<p><img src="/assets/docpic/unity_shader_note_007_01.png" style="border: solid 1px #666;" /></p>






<br>
<h2 class="nav2"> Queue (渲染队列) </h2>
<p>控制渲染顺序，指定该物体属于哪个渲染队列。通过这种方式可以保证所有的透明物体可以在所有不透明物体后面被渲染 <p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "Queue" = "Geometry" }
    }
</pre>

我们也可以直接在预定义值后面加数值或者写数值

<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "Queue" = "Geometry+1" }
    }
</pre>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "Queue" = "3000" }
    }
</pre>

<p>高达2500（“Geometry + 500”）的队列被认为是“不透明的”并优化对象的绘制顺序以获得最佳性能。更高的渲染队列被认为是“透明对象”并按距离对对象进行排序，从最远的渲染开始渲染，以最接近的渲染结束。</p>

<p>Skybox在所有不透明和所有透明对象之间绘制</p>



#### 默认值


| 值                             | int值   |            介绍   | 
| -----------------------       | -----  | ----------------------------- |
| Background                    | 1000 | 此渲染队列在任何其他队列之前呈现。你通常会将它用于真正需要在后台运行的东西。   |
| Geometry                      | 2000 | （默认） - 这用于大多数对象。不透明几何体使用此队列。  |
| AlphaTest                     | 2450 | alpha测试几何使用此队列。它是一个独立的队列，Geometry因为在绘制完所有实体之后渲染经过alpha测试的对象会更有效。  |
| Transparent                      | 3000 | （此渲染队列在Geometry之后呈现，并AlphaTest按照从前到后的顺序呈现。任何alpha混合（即不写入深度缓冲区的着色器）都应该放在这里（玻璃，粒子效果）。  |
| Overlay                      | 4000 | 此渲染队列用于叠加效果。最后渲染的东西应该放在这里（例如镜头光晕）。  |



<br>
<p>可以在unity里查看shader属性查看值</p>
<p><img src="/assets/docpic/unity_shader_note_007_02.png" style="border: solid 1px #666;" /></p>









<br>
<br>
<h2 class="nav2"> RenderType (着色器分类) </h2>
<p>对着色器进行分类。 这由<a href="https://docs.unity3d.com/Manual/SL-ShaderReplacement.html" target="_blank"> 着色器替换使用 </a>  着色器替换使用，在某些情况下用于生成相机的深度纹理。</p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "RenderType" = "Opaque" }
    }
</pre>


#### 可选值


| 值                             |            介绍   | 
| -----------------------       | ----------------------------- |
| Opaque                    | 不透明：大多数着色器（法线，自发光，反射，地形着色器）。   |
| Transparent               | 透明：大多数半透明着色器（透明，粒子，字体，地形添加器通过着色器）。   |
| TransparentCutout         | 透明抠出: 蒙版透明度着色器（透明剪切，两个植被着色器）    |
| Background                | 背景：Skybox着色器。   |
| Overlay                   | 叠加：GUITexture，Halo，Flare着色器。   |
| TreeOpaque                |  terrain引擎树皮。  |
| TreeTransparentCutout     |  地形引擎透明树剪出。  |
| TreeBillboard             |  地形引擎广告牌树。   |
| Grass                     | 草：地形引擎草。   |
| GrassBillboard            |  地形引擎广告牌草。   |







<br>
<br>
<h2 class="nav2"> DisableBatching (禁用批处理) </h2>
<p> 一些SubShader在使用Unity的批处理时会出现问题，例如：使用模型空间下的坐标进行顶点动画。 </p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "DisableBatching" = "True" }
    }
</pre>


#### 可选值


| 值                             |            介绍   | 
| -----------------------       | ----------------------------- |
| False                     | 不禁用批处理;这是默认设置   |
| True                      | 始终禁用此着色器的批处理   |
| LODFading                 | 当LOD淡入激活时禁用批处理;主要用于树    |



<br>
<br>
<h2 class="nav2"> ForceNoShadowCasting (强制不投影) </h2>
<p> 控制使用该SubShader的物体是否会投射阴影 </p> <br>

<p> 如果ForceNoShadowCasting给定了tag并且值为“True”，那么使用此子着色器渲染的对象将永远不会投射阴影。当您在透明对象上使用着色器替换并且不会从其他子着色器继承阴影传递时，这非常有用。</p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "ForceNoShadowCasting" = "True" }
    }
</pre>




<br>
<br>
<h2 class="nav2"> IgnoreProjector (忽略投影) </h2>

<p> 如果IgnoreProjector给定了tag并且其值为“True”，那么使用此着色器的对象将不会受到<a href="https://docs.unity3d.com/Manual/class-Projector.html" target="_blank"> Projector</a>的影响。这对半透明对象非常有用，因为投影仪没有好办法影响它们。</p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{ "IgnoreProjector" = "True" }
    }
</pre>

<p><img src="/assets/docpic/unity_shader_note_007_03.png" style="border: solid 1px #666;" /></p>










<br>
<br>
<h2 class="nav2"> CanUseSpriteAtlas (忽略投影) </h2>

<p> CanUseSpriteAtlas如果着色器用于精灵， 则将标记设置为“False” ，当它们被打包到地图集时将无法工作</p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{  "CanUseSpriteAtlas"="True" }
    }
</pre>






<br>
<br>
<h2 class="nav2"> PreviewType (预览方式) </h2>

<p> PreviewType指示材料检查器预览应如何显示材料。默认情况下，材质显示为球体，但PreviewType也可以设置为“Plane”（将显示为2D）或“Skybox”（将显示为skybox）。 </p>


<pre class="brush: csharp; ">
    SubShader
    {
        Tags{  "PreviewType"="Plane" }
    }
</pre>


