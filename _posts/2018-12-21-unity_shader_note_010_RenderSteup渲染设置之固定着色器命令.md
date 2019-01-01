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
</pre>

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





<h2 class="nav1"> 固定着色器命令 纹理 </h2>


* 使用片段程序时，SetTexture命令无效; 就像在那种情况下像素操作在着色器中完整描述。建议最近使用可编程着色器而不是SetTexture命令。

* SetTexture命令必须放在Pass的末尾。

* 您可以在一个传递中包含多个SetTexture命令 - 所有纹理都按顺序应用，就像绘画程序中的图层一样。



<h2 class="nav2"> combine </h2>



| 命令                      | 介绍   | 
| ----------------------------- | -----  |
| combine src1 * src2                       | 结果将比任一输入更暗。   |
| combine src1 + src2                       | 结果将比任一输入更亮。   |
| combine src1 - src2                       |    |
| combine src1 lerp（src2）src3              | lerp(src3, src1, src2.a)    |
| combine src1 * src2 + src3                | src1.a * src2.a +  src3  |



<h2 class="nav2"> src的取值 </h2>



| 值                      | 介绍   | 
| ----------------------------- | -----  |
| Previous                     | 前一个SetTexture的结果   |
| Primary                       | 照明计算的颜色或绑定时的顶点颜色   |
| Texture                       | SetTexture中TextureName指定的纹理的颜色   |
| Constant             | ConstantColor指定的颜色    |


<h2 class="nav2"> 修饰符 </h2>

* Double 或 Quad: 上面指定的公式可以选择性地后跟关键字 Double 或 Quad ，以使得到的颜色2x或4x变亮。

* One - XXX:  除参数外，所有src属性都lerp可以选择以(One - XXX)以使结果颜色无效。

* constantColor :  常量是在指定的颜色。

<pre>
            SetTexture [_MainTex] {
                combine texture Double
            }
</pre>


<pre>
            SetTexture [_MainTex] {
                combine one -texture
            }
</pre>


<pre>
            SetTexture [_MainTex] {
                
                // 指定常量颜色
                constantColor (0, 0, 1, 1)

                // 混合
                combine constant lerp(texture) previous
            }
</pre>


<pre>
            SetTexture [_MainTex] {
                
                // 指定常量颜色, 使用属性里的变量
                constantColor [_ColorShape]

                // 混合
                combine constant lerp(texture) previous
            }
</pre>
                


<h4>放置一张存纹理没有光照</h4>

<pre class="brush: csharp; ">
Shader "Unlit/BaseTexture"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
    }
    SubShader
    {      
        Pass
        {
            SetTexture [_MainTex]
            {
                combine texture
            }
        }
    }
}

</pre>

<p><img src="/assets/docpic/unity_shader_note_010_06.png" style="border: solid 1px #666;" /></p><br>



<h4>Alpha混合两个纹理</h4>

<pre class="brush: csharp; ">
Shader "Unlit/2 Alpha Blended Textures"
{
    Properties {
        _MainTex ("Base (RGB)", 2D) = "white" {}
        _BlendTex ("Alpha Blended (RGBA) ", 2D) = "white" {}
    }
    SubShader {
        Pass {
            // 绘制基础纹理
            SetTexture [_MainTex] {
                combine texture
            }
            // 混合：
            // lerp(previous, texture, texture.a)
            // lerp(_MainTex.rgb, _BlendTex.rgb, _BlendTex.a)
            // _BlendTex.a = 0 显示 _MainTex
            // _BlendTex.a = 1 显示 _BlendTex
            SetTexture [_BlendTex] {
                combine texture lerp (texture) previous
            }
        }
    }
}

</pre>
<p><img src="/assets/docpic/unity_shader_note_010_07.png" style="border: solid 1px #666;" /></p><br>


<h4>Alpha混合两个颜色</h4>

<pre class="brush: csharp; ">
Shader "Unlit/Self-Illumination"
{
    Properties 
    {
        // 设置基础颜色
        _Color ("Color", Color) = (0,1,0,1)
        // 设置形状颜色
        _ColorShape ("Color Shape", Color) = (0,0,1,1)
        // 形状图片
        _MainTex ("Base (RGB) Self-Illumination (A)", 2D) = "white" {}
    }
    SubShader {
        Pass {

            // 设置基础颜色
            Color [_Color]

            SetTexture [_MainTex] {
                // 设置形状颜色
                // constantColor (0, 0, 1, 1);
                constantColor [_ColorShape]

                // 混合
                combine constant lerp(texture) previous
            }
        }
    }
}


</pre>
<p><img src="/assets/docpic/unity_shader_note_010_08.png" style="border: solid 1px #666;" /></p><br>



<h4>透明图片</h4>

<pre class="brush: csharp; ">
Shader "Unlit/BaseTexture"
{
    Properties
    {
     // 漫反射颜色：这是对象的基色。
        _Color ("Main Color", Color) = (1,1,1,0)
        // 镜面反射颜色：物体镜面反射高光的颜色。
        _SpecColor ("Spec Color", Color) = (1,1,1,1)
        // 光泽度数：高光的锐度，介于0和1之间。在0处，你会得到一个巨大的亮点，看起来很像漫反射光，1点你会得到一个微小的斑点。
        _Shininess ("Shininess", Range (0.01, 1)) = 0.7
        // 自发光颜色：物体未被任何光线击中时的颜色。
        _Emission ("Emmisive Color", Color) = (0,0,0,0)

        _MainTex ("Texture", 2D) = "white" {}
    }
    SubShader
    { 
        Tags
        {
            "Queue" = "TransparentCutout"
            "RenderType" = "AlphaTest"
        } 

        // 透明抠图必须加这个 或者换成 Blend SrcAlpha OneMinusSrcAlpha
        AlphaToMask On

        // 双面显示
        Cull Off

        Pass
        {

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

            SetTexture [_MainTex]
            {
                combine Texture * Primary
            }
        }

  
    }
}


</pre>
<p><img src="/assets/docpic/unity_shader_note_010_09.png" style="border: solid 1px #666;" /></p><br>


<br><br>
<h2 class="nav1"> Fog 雾 </h2>
<pre class="brush: csharp; ">
Shader "Unlit/Fog"
{
    Properties
    {
     // 漫反射颜色：这是对象的基色。
        _Color ("Main Color", Color) = (1,1,1,0)
        // 镜面反射颜色：物体镜面反射高光的颜色。
        _SpecColor ("Spec Color", Color) = (1,1,1,1)
        // 光泽度数：高光的锐度，介于0和1之间。在0处，你会得到一个巨大的亮点，看起来很像漫反射光，1点你会得到一个微小的斑点。
        _Shininess ("Shininess", Range (0.01, 1)) = 0.7
        // 自发光颜色：物体未被任何光线击中时的颜色。
        _Emission ("Emmisive Color", Color) = (0,0,0,0)

        _MainTex ("Texture", 2D) = "white" {}


        _FogColor ("Fog Color", Color) = (1,1,1,0)
        _FogDensity ("Fog Density", Float) = 0.2
        _FogRangeMin ("Fog Range Min", Float) = 1
        _FogRangeMin ("Fog Range Min", Float) = 1
        _FogRangeMax ("Fog Range Max", Float) = 100
    }
    SubShader
    { 
        Tags
        {
            "Queue" = "TransparentCutout"
            "RenderType" = "AlphaTest"
        } 

        // 透明抠图必须加这个
        AlphaToMask On

        //Blend SrcAlpha OneMinusSrcAlpha

        // 双面显示
        Cull Off

        // 雾
        Fog 
        { 
            // 模式
            // Mode Off | Global | Linear | Exp | Exp2
            Mode Linear

            // 颜色
            Color [_FogColor]

            // 密度
            Density [_FogDensity]

            // 范围
            Range [_FogRangeMin], [_FogRangeMax]
        }


        Pass
        {

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

            SetTexture [_MainTex]
            {
                combine Texture * Primary
            }
        }

  
    }
}

</pre>
<p><img src="/assets/docpic/unity_shader_note_010_10.png" style="border: solid 1px #666;" /></p><br>




<br><br>
<h2 class="nav1"> AlphaTest 控制Alpha在哪个范围的值渲染 </h2>

<pre>
    // 渲染所有像素
    AlphaTest Off
</pre>


<pre>
    // 渲染Apha大于0.5的像素
    AlphaTest Greater 0.5
</pre>


| 值                             | 功能        | 
| ----------------------------- | -----       |
| Greater                     | 仅渲染alpha大于AlphaValue的像素。   |
| GEqual                     | 仅渲染alpha大于或等于AlphaValue的像素。    |
| Less                     | 仅渲染alpha值小于AlphaValue的像素。    |
| LEqual                     | 仅渲染Alpha值小于或等于AlphaValue的像素。    |
| Equal                     | 仅渲染alpha值等于AlphaValue的像素。    |
| NotEqual                     | 仅渲染Alpha值与AlphaValue不同的像素。    |
| Always                     | 渲染所有像素。这在功能上等同于AlphaTest Off。    |
| Never                     | 不要渲染任何像素。    |



<pre>
Shader "Unlit/AlphaTest"
{
    Properties {
        _Color ("Main Color", Color) = (.5, .5, .5, .5)
        _MainTex ("Base (RGB) Alpha (A)", 2D) = "white" {}
        _Cutoff ("Base Alpha cutoff", Range (0,.9)) = .5
    }
    SubShader 
    {
        Material {
            Diffuse [_Color]
            Ambient [_Color]
        }
        //Lighting On

        Cull Off

        Pass {
            AlphaTest Greater [_Cutoff]

            SetTexture [_MainTex] {
                combine texture * primary, texture
            }
        }

    }
}

</pre>

<p><img src="/assets/docpic/unity_shader_note_010_11.gif" style="border: solid 1px #666;" /></p><br>
