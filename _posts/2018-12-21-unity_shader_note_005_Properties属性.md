---
layout: post
title: Unity Shader 学习笔记（005）Properties 属性
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader Properties 属性
shareexcerpt: Unity Shader Properties 属性
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
<p> <a href="https://docs.unity3d.com/Manual/SL-Properties.html" target="_blank"> Unity用户手册（2018.3）/ 图像图形教程 / 
ShaderLab：属性</a> </p>

<p> <a href="https://docs.unity3d.com/ScriptReference/MaterialPropertyDrawer.html" target="_blank"> MaterialPropertyDrawer </a> </p>



<br>
<h2 class="nav1">属性类型</h2>

* 数字 : Int、Float / Range
* 矢量 : Vector 可以定义矢量2--4
* 颜色 : Color
* 纹理 : 2D、 3D、Cube


<br>
<h2 class="nav2">数字和滑块</h2>
Float 类型换成Range(min, max)就可以在材质球上显示滑块

<pre class="brush: csharp; ">
Shader "Hello"
{
    Properties
    {
        // 整数
        _MyInitA("MyInitA", Int) = 1
        // 浮点数
        _MyFloatA("MyFloatA", Float) = 0
        // 浮点数--滑块方式显示
        _MyFloatB("MyFloatB滑块", Range( 0 , 100)) = 0
    }

    SubShader
    {

        CGPROGRAM
        #pragma target 3.0
        #pragma surface surf StandardSpecular keepalpha addshadow fullforwardshadows exclude_path:deferred 

        // 浮点数
        uniform float _MyFloatB;
        uniform float _MyFloatA;
        // 整数
        uniform int _MyInitA;


        void surf( Input i , inout SurfaceOutputStandardSpecular o )
        {
            o.Albedo = 1;
        }

        ENDCG
    }

}

</pre>



<br>
<h2 class="nav2">颜色和矢量</h2>

<pre class="brush: csharp; ">
Shader "Hello"
{
    Properties
    {
        // 颜色
        _MyColorA("MyColorA", Color) = (1,1,1,0)
        _MyColorB("MyColorB", Color) = (1,0,0.2275863,0)

        // 矢量
        _MyVector2("MyVector2", Vector) = (1,2,0,0)
        _MyVector3("MyVector3", Vector) = (1,2,3,0)
        _MyVector4("MyVector4", Vector) = (1,2,3,4)
    }

    SubShader
    {

        CGPROGRAM
        #pragma target 3.0
        #pragma surface surf StandardSpecular keepalpha addshadow fullforwardshadows exclude_path:deferred 

        // 颜色
        uniform float4 _MyColorA;
        uniform float4 _MyColorB;

        // 矢量
        uniform float2 _MyVector2;
        uniform float3 _MyVector3;
        uniform float4 _MyVector4;


        void surf( Input i , inout SurfaceOutputStandardSpecular o )
        {
            o.Albedo = 1;
        }

        ENDCG
    }

}

</pre>


<br>
<h2 class="nav2">纹理</h2>

<pre class="brush: csharp; ">
Shader "Hello"
{
    Properties
    {
        // 2D 纹理
        _MyTextureSample2DA("MyTextureSample2DA", 2D) = "white" {}
    }

    SubShader
    {

        CGPROGRAM
        #pragma target 3.0
        #pragma surface surf StandardSpecular keepalpha addshadow fullforwardshadows exclude_path:deferred 

        struct Input
        {
            float2 uv_texcoord;
        };
        
        // 纹理采样
        uniform sampler2D _MyTextureSample2DA;
        uniform float4 _MyTextureSample2DA_ST;


        void surf( Input i , inout SurfaceOutputStandardSpecular o )
        {

            float2 uv_MyTextureSample2DA = i.uv_texcoord * _MyTextureSample2DA_ST.xy + _MyTextureSample2DA_ST.zw;
            o.Albedo = tex2D( _MyTextureSample2DA, uv_MyTextureSample2DA );
        }

        ENDCG
    }

}

</pre>



<br>
<h2 class="nav1">float 和 half</h2>
这两个的精度不一样， 所有float的地方都可以换成 half

<pre class="brush: csharp; ">
Shader "Hello"
{
    Properties
    {
        // 浮点
        _MyFloatA("MyFloatA", Float) = 0
        _MyFloatB("MyFloatB滑块", Range( 0 , 100)) = 0

        // 颜色
        _MyColorA("MyColorA", Color) = (1,1,1,0)


        // 矢量
        _MyVector2("MyVector2", Vector) = (1,2,0,0)
        _MyVector3("MyVector3", Vector) = (1,2,3,0)
        _MyVector4("MyVector4", Vector) = (1,2,3,4)
    }

    SubShader
    {

        CGPROGRAM
        #pragma target 3.0
        #pragma surface surf StandardSpecular keepalpha addshadow fullforwardshadows exclude_path:deferred 

        // 浮点
        uniform half _MyFloatB;
        uniform half _MyFloatA;

        // 颜色
        uniform half4 _MyColorA;


        // 矢量
        uniform half2 _MyVector2;
        uniform half3 _MyVector3;
        uniform half4 _MyVector4;


        void surf( Input i , inout SurfaceOutputStandardSpecular o )
        {
            o.Albedo = 1;
        }

        ENDCG
    }

}

</pre>


<br>
<h2 class="nav1">Property attributes and drawers</h2>

| Attributes                       | 功能   | 
| ----------------------------- | -----  |
| [HideInInspector]             | 材质球调试器,不显示该属性   |
| [NoScaleOffset]               | 材质球调试器,不显示纹理的Tiling和Offset (不显示纹理缩放和偏移) |
| [Normal]                      | 表示纹理属性需要法线贴图。 |
| [HDR]                         | 表示纹理属性需要高动态范围（HDR）纹理。 |
| [Gamma]                       | 表示在UI中将float/vector属性指定为sRGB值（就像颜色一样），并且可能需要根据使用的颜色空间进行转换。请参阅着色器程序中的属性。 |
| [PerRendererData]             | 表示纹理属性将以MaterialPropertyBlock形式来自每个渲染器数据。材质检查器更改这些属性的纹理槽UI。  |
| [Toggle]                      | 材质球调试器, 使用勾选的方式显示  |
| [IntRange]                    | 材质球调试器, 滑块拖动时将以整数方式变化 |
| [Enum(UnityEngine.Rendering.CullMode)]                      | 材质球调试器, 显示下拉选择, 内置枚举 |
| [Enum(MyEnum_0,0,MyEnum_1,1)]                      | 材质球调试器, 显示下拉选择, 自定义枚举 |



<br>

<pre class="brush: csharp; ">

    Properties
    {
        _color1("color1", Color) = (0,0,0,0)

        // 材质球调试器,不显示该属性 
        [HideInInspector]_color2("color2", Color) = (0,0,0,0)

        // 材质球调试器,不显示纹理的Tiling和Offset (不显示纹理缩放和偏移)
        [NoScaleOffset] _Texture0("Texture 0", 2D) = "white" {}

        // 表示纹理属性需要法线贴图。
        [Normal]_Texture1("Texture 1", 2D) = "white" {}

        // 表示纹理属性需要高动态范围（HDR）纹理。
        [HDR][Normal]_Texture2("Texture 2", 2D) = "white" {}

        // 表示在UI中将float / vector属性指定为sRGB值（就像颜色一样），并且可能需要根据使用的颜色空间进行转换。
        [Gamma] _Exposure ("Exposure", Range(0, 8)) = 1.0

        // 表示纹理属性将以MaterialPropertyBlock形式来自每个渲染器数据。材质检查器更改这些属性的纹理槽UI。
        [PerRendererData]_Texture3("Texture 3", 2D) = "white" {}

        // 材质球调试器, 使用勾选的方式显示
        [Toggle]_Float1("Float 1", Range( 0 , 10)) = 0

        // 材质球调试器, 滑块拖动时将以整数方式变化
        [IntRange]_Float2("Float 2", Range( 0 , 10)) = 0

        // 材质球调试器, 显示下拉选择, 内置枚举
        [Enum(UnityEngine.Rendering.CullMode)]_Int0("Int 0", Int) = 0

        // 材质球调试器, 显示下拉选择, 自定义枚举
        [Enum(MyEnum_0,0,MyEnum_1,1)]_Float3("Float 3", Float) = 0
    }



</pre>



### [NoScaleOffset]

<p><img src="/assets/docpic/unity_shader_note_005_01.png" style="border: solid 1px #666;" /></p>
加了[NoScaleOffset]之后
<p><img src="/assets/docpic/unity_shader_note_005_02.png" style="border: solid 1px #666;" /></p>





### [Normal]

<p><img src="/assets/docpic/unity_shader_note_005_03.png" style="border: solid 1px #666;" /></p>



### [Toggle]

<p><img src="/assets/docpic/unity_shader_note_005_04.png" style="border: solid 1px #666;" /></p>


### [Enum]

<p><img src="/assets/docpic/unity_shader_note_005_05.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_shader_note_005_06.png" style="border: solid 1px #666;" /></p>

