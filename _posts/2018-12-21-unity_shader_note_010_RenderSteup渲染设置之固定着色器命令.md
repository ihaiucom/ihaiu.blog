---
layout: post
title: Unity Shader 学习笔记（010）RenderSteup渲染设置之固定着色器命令
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 学习笔记（010）RenderSteup渲染设置之固定着色器命令
shareexcerpt: Unity Shader 学习笔记（010）RenderSteup渲染设置之固定着色器命令
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
<h2 class="nav1"> 固定着色器命令 </h2>


<h4 >官方文档给出以下8个</h4>

* Cull (设置剔除模式)
* ZTest (深度测试)
* ZWrite (设置深度缓冲区写入模式开关)
* Offset (设置Z缓冲深度偏移)
* Blend (混合模式)
* BlendOp (混合操作)
* AlphaToMask On：打开alpha-to-coverage。
* ColorMask (设置颜色通道写入掩码)



<h2 class="nav1"> 固定着色器命令 光照 </h2>
<p>
材质和光照参数用于控制内置顶点光照。顶点光照是为每个顶点计算的标准Direct3D / OpenGL光照模型。<b>Lighting on</b>。照明受<b>Material
</b>影响块，<b>ColorMaterial</b>和<b>SeparateSpecular</b>命令。
</p>

<p>
<b>注意：</b>使用顶点程序时，材质/光照命令无效; 在这种情况下，所有计算都在着色器中完整描述。现在建议使用可编程着色器而不是传统的顶点照明。对于这些，您不使用此处描述的任何命令，而是定义自己的顶点和片段程序，您自己进行所有照明，纹理和其他任何操作。
</p>

<pre>
Lighting On | Off
Material { Material Block }
SeparateSpecular On | Off
Color Color-value
ColorMaterial AmbientAndDiffuse | Emission
</pre>



<br>
<h2 class="nav2"> Color (颜色) </h2>


始终以纯红色渲染对象：
<pre class="brush: csharp; ">
Shader "Solid Red" {
    SubShader {
        Pass { Color (1,0,0,0) }
    }
}


传材质球的变量：
<pre class="brush: csharp; ">
Shader "Custom/Solid" {
    Properties {
        _Color ("Color", Color) = (1,1,1,1)
    }
    SubShader
     {
        Tags { "RenderType"="Opaque" }
        LOD 200

        
        Pass 
        { 
            // 注意：传材质球的变量要用方括号[]
            Color [_Color]
        }
    }
    FallBack "Diffuse"
}

</pre>

<p><img src="/assets/docpic/unity_shader_note_010_01.png" style="border: solid 1px #666;" /></p><br>



<br>
<h2 class="nav2"> Material (材质) </h2>

<pre>
// 最终颜色计算
Ambient * Lighting Window’s Ambient Intensity setting + (Light Color * Diffuse + Light Color * Specular) + Emission
</pre>

<pre class="brush: csharp; ">
Shader "Unlit/Material"
{
    Properties {
        // 漫反射颜色：这是对象的基色。
        _Color ("Main Color", Color) = (1,1,1,0)
        // 镜面反射颜色：物体镜面反射高光的颜色。
        _SpecColor ("Spec Color", Color) = (1,1,1,1)
        // 光泽度数：高光的锐度，介于0和1之间。在0处，你会得到一个巨大的亮点，看起来很像漫反射光，1点你会得到一个微小的斑点。
        _Shininess ("Shininess", Range (0.01, 1)) = 0.7
        // 自发光颜色：物体未被任何光线击中时的颜色。
        _Emission ("Emmisive Color", Color) = (0,0,0,0)
    }
    SubShader {
        Pass {
            Material {
                // 漫反射颜色：这是对象的基色。
                Diffuse [_Color]
                // 环境颜色：这是对象在照明窗口中设置的环境光照射时所具有的颜色。
                Ambient [_Color]
                // 镜面反射颜色：物体镜面反射高光的颜色。
                Specular [_SpecColor]
                // 光泽度数：高光的锐度，介于0和1之间。在0处，你会得到一个巨大的亮点，看起来很像漫反射光，1点你会得到一个微小的斑点。
                Shininess [_Shininess]
                // 自发光颜色：物体未被任何光线击中时的颜色。
                Emission [_Emission]
            }
            // 光照开关
            Lighting On
            // 高光开关
            SeparateSpecular On

        }
    }
}

</pre>


<p><img src="/assets/docpic/unity_shader_note_010_02.png" style="border: solid 1px #666;" /></p><br>
<p><img src="/assets/docpic/unity_shader_note_010_03.png" style="border: solid 1px #666;" /></p><br>



<br>
<h2 class="nav2"> Lighting On (光照开关) </h2>


Lighting Off
<p><img src="/assets/docpic/unity_shader_note_010_05.png" style="border: solid 1px #666;" /></p><br>


<br>
<h2 class="nav2"> SeparateSpecular On (高光开关) </h2>
<p>此命令使镜面光照添加到着色器光标的末尾，因此镜面光照不受纹理影响。仅在使用<b>Lighting On</b>时有效。</p>

SeparateSpecular Off
<p><img src="/assets/docpic/unity_shader_note_010_04.png" style="border: solid 1px #666;" /></p><br>


<br>
<h2 class="nav2"> ColorMaterial (使用顶点颜色替代 “漫反射、环境颜色”， “自发光颜色”) </h2>

<pre>
// 用顶点颜色设置 Material的Diffuse和Ambient
ColorMaterial AmbientAndDiffuse


// 用顶点颜色设置 Emission
ColorMaterial Emission
</pre>


<pre class="brush: csharp; ">
Shader "Unlit/Material"
{
    Properties {
        // 漫反射颜色：这是对象的基色。
        _Color ("Main Color", Color) = (1,1,1,0)
        // 镜面反射颜色：物体镜面反射高光的颜色。
        _SpecColor ("Spec Color", Color) = (1,1,1,1)
        // 光泽度数：高光的锐度，介于0和1之间。在0处，你会得到一个巨大的亮点，看起来很像漫反射光，1点你会得到一个微小的斑点。
        _Shininess ("Shininess", Range (0.01, 1)) = 0.7
        // 自发光颜色：物体未被任何光线击中时的颜色。
        _Emission ("Emmisive Color", Color) = (0,0,0,0)
    }
    SubShader {
        Pass {
            Material {
                // 漫反射颜色：这是对象的基色。
                //Diffuse [_Color]
                // 环境颜色：这是对象在照明窗口中设置的环境光照射时所具有的颜色。
                //Ambient [_Color]
                // 镜面反射颜色：物体镜面反射高光的颜色。
                Specular [_SpecColor]
                // 光泽度数：高光的锐度，介于0和1之间。在0处，你会得到一个巨大的亮点，看起来很像漫反射光，1点你会得到一个微小的斑点。
                Shininess [_Shininess]
                // 自发光颜色：物体未被任何光线击中时的颜色。
                Emission [_Emission]
            }


            // 用顶点颜色设置 Material的Diffuse和Ambient
            // 设置该选项后，Material里的Diffuse和Ambient将无效
            ColorMaterial AmbientAndDiffuse


            // 用顶点颜色设置 Emission
            // 设置该选项后，Material里的Emission将无效
            ColorMaterial Emission

            // 光照开关
            Lighting On
            // 高光开关
            SeparateSpecular On

        }
    }
}

</pre>


