---
layout: post
title: URP Shader
date: 2024-07-03 18:51:00
categories: Unity URP Shader
tags: Unity URP Shader
excerpt: Unity URP Shader
shareexcerpt: Unity URP Shader
thread: 10001
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

---



# 模板

## Shader 模块

```glsl
Shader "Examples/ShaderSyntax"
{

    Properties
    {
        // 此处是材质属性声明
    }
    SubShader
    {
        // 此处是定义子着色器的其余代码

        Pass
        {
           // 此处是定义通道的代码
        }
    }

    // 回退
    Fallback "ExampleFallbackShader"
    
    // 自定义编辑器
    CustomEditor = "ExampleCustomEditor"
}
```


### Properties 代码块

[ShaderLab：定义材质属性 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/SL-Properties.html)



#### Properties 类型

| **类型**           | **示例语法**                                                 | **注释**                                                     |
| :----------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **整数**           | `_ExampleName ("Integer display name", Integer) = 1`         | This type is backed by a real integer (unlike the legacy `Int` type described below, which is backed by a float). Use this instead of Int when you want to use an integer. |
| **Int**（旧版）    | `_ExampleName ("Int display name", Int) = 1`                 | **Note:** This legacy type is backed by a float, rather than an integer. It is supported for backwards compatibility reasons only. Use the `Integer` type instead. |
| **Float**          | `_ExampleName ("Float display name", Float) = 0.5`  `_ExampleName ("Float with range", Range(0.0, 1.0)) = 0.5` | 范围滑动条的最大值和最小值包含在内。                         |
| **Texture2D**      | `_ExampleName ("Texture2D display name", 2D) = "" {}`  `_ExampleName ("Texture2D display name", 2D) = "red" {}` | 将以下值置于默认值字符串中可使用 Unity 的内置纹理之一：“white”（RGBA：1,1,1,1）、“black”（RGBA：0,0,0,1）、“gray”（RGBA：0.5,0.5,0.5,1）、“bump”（RGBA：0.5,0.5,1,0.5）或“red”（RGBA：1,0,0,1）。  如果将该字符串留空或输入无效值，则它默认为 “gray”。  **注意：**这些默认纹理在 Inspector 中不可见。 |
| **Texture2DArray** | `_ExampleName ("Texture2DArray display name", 2DArray) = "" {}` | 有关更多信息，请参阅[纹理数组](https://docs.unity.cn/cn/2022.3/Manual/class-Texture2DArray.html)。 |
| **Texture3D**      | `_ExampleName ("Texture3D", 3D) = "" {}`                     | 默认值为 “gray”（RGBA：0.5,0.5,0.5,1）纹理。                 |
| **Cubemap**        | `_ExampleName ("Cubemap", Cube) = "" {}`                     | 默认值为 “gray”（RGBA：0.5,0.5,0.5,1）纹理。                 |
| **CubemapArray**   | `_ExampleName ("CubemapArray", CubeArray) = "" {}`           | 请参阅[立方体贴图数组](https://docs.unity.cn/cn/2022.3/Manual/class-CubemapArray.html)。 |
| **Color**          | `_ExampleName("Example color", Color) = (.25, .5, .5, 1)`    | 这会在着色器代码中映射到 float4。  材质 Inspector 会显示一个拾色器。如果更愿意将值作为四个单独的浮点数进行编辑，请使用 Vector 类型。 |
| **Vector**         | `_ExampleName ("Example vector", Vector) = (.25, .5, .5, 1)` | 这会在着色器代码中映射到 float4。  材质 Inspector 会显示四个单独的浮点数字段。如果更愿意使用拾色器编辑值，请使用 Color 类型。 |



#### Properties 材质属性特性

| **属性**            | **功能**                                                     |
| :------------------ | :----------------------------------------------------------- |
| `[Gamma]`           | 指示浮点数或矢量属性使用 sRGB 值，这意味着如果项目中的颜色空间需要，则它必须与其他 sRGB 值一起转换。有关更多信息，请参阅[着色器程序中的属性](https://docs.unity.cn/cn/2022.3/Manual/SL-PropertiesInPrograms.html)。 |
| `[HDR]`             | 指示纹理或颜色属性使用[高动态范围 (HDR)](https://docs.unity.cn/cn/2022.3/Manual/HDR.html) 值。  对于纹理属性，如果分配了 LDR 纹理，则 Unity 编辑器会显示警告。对于颜色属性，Unity 编辑器会使用 HDR 拾色器编辑此值。 |
| `[HideInInspector]` | 告知 Unity 编辑器在 Inspector 中隐藏此属性。                 |
| `[MainTexture]`     | 为材质设置主纹理，可以使用 [Material.mainTexture](https://docs.unity.cn/cn/2022.3/ScriptReference/Material-mainTexture.html) 进行访问。  默认情况下，Unity 将具有属性名称 `_MainTex` 的纹理视为主纹理。如果纹理具有不同的属性名称，但希望 Unity 将它视为主纹理，请使用此特性。  如果多次使用此特性，则 Unity 会使用第一个属性并忽略后续属性。  **注意：**使用此特性设置主纹理时，如果使用纹理串流调试视图模式或自定义调试工具，则该纹理在游戏视图中不可见。 |
| `[MainColor]`       | 为材质设置主色，可以使用 [Material.color](https://docs.unity.cn/cn/2022.3/ScriptReference/Material-color.html) 进行访问。  默认情况下，Unity 将具有属性名称 `_Color` 的颜色视为主色。如果您的颜色具有其他属性 (property) 名称，但您希望 Unity 将这个颜色视为主色，请使用此属性 (attribute)。如果您多次使用此属性 (attribute)，则 Unity 会使用第一个属性 (property)，而忽略后续属性 (property)。 |
| `[NoScaleOffset]`   | 告知 Unity 编辑器隐藏此纹理属性的平铺和偏移字段。            |
| `[Normal]`          | 指示纹理属性需要法线贴图。  如果分配了不兼容的纹理，则 Unity 编辑器会显示警告。 |
| `[PerRendererData]` | 指示纹理属性将来自每渲染器数据，形式为 [MaterialPropertyBlock](https://docs.unity.cn/cn/2022.3/ScriptReference/MaterialPropertyBlock.html)。  材质 Inspector 会将这些属性显示为只读。 |



```glsl
Shader "Unlit/ZF_01_Shader"
{
    Properties
    {
        
        //============================
        // 类型
        //----------------------------
        
        // 整数
        _IntValue("IntValue", Integer) = 1
        
        // 旧版 Int
        _IntOldValue("IntOldValue", Int) = 1
        
        // 浮点数
        _FloatValue("FloatValue", Float) = 0.5
        
        // 浮点数范围    
        _FloatRangeValue("FloatRangeValue", Range(0.0, 1.0)) = 0.5
        
        // 纹理 2D
        _Texture2DValue("Texture2DValue", 2D) = "white" {}
        
        // 纹理 2D 数组
        _Texture2DArrayValue("Texture2DArrayValue", 2DArray) = "" {}
        
        // 纹理 3D
        _Texture3DValue("Texture3DValue", 3D) = "" {}
        
        // 立方体贴图
        _CubemapValue("CubemapValue", Cube) = "" {}
        
        // 立方体贴图数组
        _CubemapArrayValue("CubemapArrayValue", CubeArray) = "" {}
        
        // 颜色
        _ColorValue("ColorValue", Color) = (1, 1, 1, 1)
        
        // 向量
        _VectorValue("VectorValue", Vector) = (1, 1, 1, 1)
        
        
        //============================
        // 材质属性特性
        //----------------------------
        // [Gamma]颜色
        [Gamma]	_GammaColorValue("GammaColorValue", Color) = (1, 1, 1, 1)
        // [HDR]颜色
        [HDR] _HDRColorValue("HDRColorValue", Color) = (1, 1, 1, 1)
        // [MainColor]颜色
        [MainColor] _Color("Main Color", Color) = (1, 1, 1, 1)
        // [MainTexture]纹理
        [MainTexture] _MainTex ("Texture", 2D) = "white" {}
        // [Normal] [NoScaleOffset] 纹理
        [Normal] [NoScaleOffset] _NormalMap ("NormalMap", 2D) = "white" {}
        // [HideInInspector] 隐藏属性
        [HideInInspector] _HideValue("HideValue", Float) = 0.5
        // [PerRendererData] 材质属性块
        [PerRendererData] _PerRendererDataValue("PerRendererDataValue", 2D) = "white" {}
        [PerRendererData] _PerRendererDataFloatValue("PerRendererDataFloatValue", float) = 0.5
        
    }
    
    ....
        
}
```

![image-20240703195309506](2024-07-03-URPShader.assets/image-20240703195309506.png)



### Fallback 分配回退

[ShaderLab：分配回退 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/SL-Fallback.html)



### CustomEditor 和 CustomEditorForRenderPipeline 指定编辑器

[ShaderLab：指定自定义编辑器 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/SL-CustomEditor.html)






# 相关链接



[【Unity技术美术】URP Shader训练营_哔哩哔哩_bilibili](https://www.bilibili.com/cheese/play/ep298821?query_from=0&search_id=5818052338388514460&search_query=urp+shader&csource=common_hpsearch_null_null&spm_id_from=333.337.search-card.all.click)

[着色器 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/Shaders.html)



