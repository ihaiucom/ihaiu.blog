---
layout: post
title: Unity Shader 学习笔记（009）RenderSteup渲染设置
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 学习笔记（009）RenderSteup渲染设置
shareexcerpt: Unity Shader 学习笔记（009）RenderSteup渲染设置
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
<p> <a href="https://docs.unity3d.com/Manual/SL-Pass.html" target="_blank"> ShaderLab: Pass</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-CullAndDepth.html" target="_blank"> ShaderLab：剔除和深度测试</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-Blend.html" target="_blank"> ShaderLab：混合</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-Blend.html" target="_blank"> ShaderLab：混合</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-Other.html" target="_blank"> ShaderLab: other commands</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/Glossary.html#depthbuffer" target="_blank"> 词汇表</a> </p>


<br>
<h2 class="nav1"> RenderSteup渲染设置 </h2>
<p>设置图形硬件的各种状</p>


<p><img src="/assets/docpic/unity_shader_note_009_01.png" style="border: solid 1px #666;" /></p>


<h4 >官方文档给出以下8个， 其他的还有固定着色器命令</h4>

* Cull (设置剔除模式)
* ZTest (深度测试)
* ZWrite (设置深度缓冲区写入模式开关)
* Offset (设置Z缓冲深度偏移)
* Blend (混合模式)
* BlendOp (混合操作)
* AlphaToMask On：打开alpha-to-coverage。
* ColorMask (设置颜色通道写入掩码)


<br>
<h2 class="nav2"> Cull (设置剔除模式) </h2>




<pre class="brush: csharp; ">
    Pass {
        Cull Back
    }
</pre>


<h4 >可选值</h4>

| 值                             | 功能        | 
| ----------------------------- | -----       |
| Cull Back                     | 只显示正面    |
| Cull Front                    | 只显示背面    |
| Cull Off                      | 双面显示      |






<br>
<h2 class="nav2"> ZTest (深度测试) </h2>
<p>设置 深度缓冲区 测试模式。</p>

<p>深度缓冲区: 保存每个像素的z值深度的存储器存储器中的图像，其中z值是投影平面中每个渲染像素的深度。</p>



<pre class="brush: csharp; ">
    Pass {
        ZTest Always
    }
</pre>


<pre class="brush: csharp; ">
    Pass {
        ZTest LEqual
    }
</pre>


<pre class="brush: csharp; ">
    Pass {
        ZTest LEqual
    }
</pre>


<pre class="brush: csharp; ">
    SubShader {
        ZTest [unity_GUIZTestMode]
    }
</pre>

<pre class="brush: csharp; ">
// Unity built-in shader source. Copyright (c) 2016 Unity Technologies. MIT license (see license.txt)

// Simple "just colors" shader that's used for built-in debug visualizations,
// in the editor etc. Just outputs _Color * vertex color; and blend/Z/cull/bias
// controlled by material parameters.

Shader "Hidden/Internal-Colored"
{ 
    Properties
    {
        _Color ("Color", Color) = (1,1,1,1)
        _SrcBlend ("SrcBlend", Int) = 5.0 // SrcAlpha
        _DstBlend ("DstBlend", Int) = 10.0 // OneMinusSrcAlpha
        _ZWrite ("ZWrite", Int) = 1.0 // On
        _ZTest ("ZTest", Int) = 4.0 // LEqual
        _Cull ("Cull", Int) = 0.0 // Off
        _ZBias ("ZBias", Float) = 0.0
    }

    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" }
        Pass
        {
            Blend [_SrcBlend] [_DstBlend]
            ZWrite [_ZWrite]
            ZTest [_ZTest]
            Cull [_Cull]
            Offset [_ZBias], [_ZBias]

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0
            #pragma multi_compile _ UNITY_SINGLE_PASS_STEREO STEREO_INSTANCING_ON STEREO_MULTIVIEW_ON
            #include "UnityCG.cginc"
            
            struct appdata_t {
                float4 vertex : POSITION;
                float4 color : COLOR;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };
            struct v2f {
                fixed4 color : COLOR;
                float4 vertex : SV_POSITION;
                UNITY_VERTEX_OUTPUT_STEREO
            };
            float4 _Color;
            v2f vert (appdata_t v)
            {
                v2f o;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.color = v.color * _Color;
                return o;
            }
            fixed4 frag (v2f i) : SV_Target
            {
                return i.color;
            }
            ENDCG  
        }  
    }
}

</pre>


<h4 >可选值</h4>


| 值                             | 功能        | 
| ----------------------------- | -----       |
| ZTest Less                     | 小于    |
| ZTest Greater                     | 大于    |
| ZTest LEqual                     | 小于等于    |
| ZTest GEqual                     | 大于等于    |
| ZTest Equal                     | 等于    |
| ZTest NotEqual                     | 不等于    |
| ZTest Always                     | 总是    |







<br>
<h2 class="nav2"> ZWrite (设置深度缓冲区写入模式开关) </h2>




<pre class="brush: csharp; ">
    SubShader {
        ZWrite Off
    }
</pre>


<h4 >可选值</h4>

| 值                             | 功能        | 
| ----------------------------- | -----       |
| ZWrite Off                     | 关    |
| ZWrite On                    | 开    |





<br>
<h2 class="nav2"> Offset (设置Z缓冲深度偏移) </h2>

<p>允许您使用两个参数指定深度偏移。因素和单位。因子相对于多边形的X或Y缩放最大Z斜率，并且单位缩放最小可分辨深度缓冲值。这允许您强制将一个多边形绘制在另一个多边形上，尽管它们实际上位于相同位置。例如，Offset 0, -1将多边形拉近摄像机忽略多边形的斜率，而Offset -1, -1 在观察掠射角时，将拉近多边形。</p>

<pre>
Offset OffsetFactor, OffsetUnits
</pre>




<h4>显示在前面</h4>
<pre class="brush: csharp; ">
    SubShader {
        Offset  0 , -1
    }
</pre>


<p><img src="/assets/docpic/unity_shader_note_009_02.png" style="border: solid 1px #666;" /></p><br>


<h4>显示在后面</h4>
<pre class="brush: csharp; ">
    SubShader {
        Offset  0 , 1
    }
</pre>


<p><img src="/assets/docpic/unity_shader_note_009_03.png" style="border: solid 1px #666;" /></p><br>




<br>
<h2 class="nav2"> Blend (混合模式) </h2>




<pre >
Blend sourceBlendMode destBlendMode
Blend sourceBlendMode destBlendMode, alphaSourceBlendMode alphaDestBlendMode
BlendOp colorOp
BlendOp colorOp, alphaOp
AlphaToMask On | Off
</pre>


<h4 >AlphaToMask On</h4>
<pre>
AlphaToMask On：打开alpha-to-coverage。使用MSAA时，alpha-to-coverage会根据像素Shader结果alpha值修改多重采样覆盖率。这通常用于比常规alpha测试更少的别名轮廓; 对植被和其他经过alpha测试的着色器非常有用。
</pre>


<h4 >混合颜色RPGA</h4>
<pre class="brush: csharp; ">
    SubShader {
        Blend One One , SrcAlpha OneMinusSrcAlpha
        BlendOp Add , Max
    }
</pre>


<h4 >只混合颜色RPG</h4>
<pre class="brush: csharp; ">
    SubShader {
        Blend One One
        BlendOp Add
    }
</pre>


<pre class="brush: csharp; ">
    SubShader {
        Blend One One
    }
</pre>


<h4 >Blend 选项</h4>

| 值                             | 功能        | 
| ----------------------------- | -----       |
| Zero                     | 使用此值删除源值或目标值    |
| One                   |  源颜色 或者 目标颜色 |
| DstColor                   | 此阶段的值 * 帧缓冲区源颜色  |
| SrcColor                   | 此阶段的值 * 源颜色  |
| OneMinusDstColor                   | 此阶段的值 * (1 - 目标颜色)  |
| OneMinusSrcColor                   | 此阶段的值 * (1 - 源颜色)  |
| SrcAlpha                   | 此阶段的值 * 源alpha  |
| DstAlpha                   | 此阶段的值 * 帧缓冲源alpha值  |
| OneMinusDstAlpha                   | 此阶段的值 * (1 - 目标alpha)  |
| OneMinusSrcAlpha                   | 此阶段的值 * (1 - 源alpha)  |
| SrcAlphaSaturate                   |   |




<h4 >BlendOp 选项</h4>

| 值                             | 功能        | 
| ----------------------------- | -----       |
| Add                     |  sourceBlendMode + destBlendMode  |
| Sub                     |  sourceBlendMode - destBlendMode  |
| RevSub                  |  destBlendMode -  sourceBlendMode  |
| Min                  |  Min(sourceBlendMode, destBlendMode)  |
| Max                  |  Max(sourceBlendMode, destBlendMode)  |







<br>
<h2 class="nav2"> ColorMask (设置颜色通道写入掩码) </h2>

<p>
设置颜色通道写入掩码。编写ColorMask 0会关闭渲染到所有颜色通道。默认模式是写入所有通道（RGBA），但对于某些特殊效果，您可能希望不修改某些通道，或完全禁用颜色写入。
</p>

<p>
使用多个渲染目标（MRT）渲染时，可以通过在末尾添加索引（0-7）为每个渲染目标设置不同的颜色掩码。例如，ColorMask RGB 3将渲染目标＃3仅写入RGB通道。
</p>

<pre class="brush: csharp; ">
    SubShader {
        ColorMask RG
    }
</pre>

<p><img src="/assets/docpic/unity_shader_note_009_04.png" style="border: solid 1px #666;" /></p><br>




