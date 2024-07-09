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



[TOC]


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

[MaterialPropertyDrawer - Unity 脚本 API](https://docs.unity.cn/cn/current/ScriptReference/MaterialPropertyDrawer.html)

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
            
            
        [KeywordEnum(None, Add, Multiply)] _Overlay("Overlay mode", Float) = 0
        [Toggle] _Invert("Invert color?", Float) = 0
        
    }
    
    ....
        
}
```

![image-20240703195309506](2024-07-03-URPShader.assets/image-20240703195309506.png)



### Fallback 分配回退

[ShaderLab：分配回退 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/SL-Fallback.html)



### CustomEditor 和 CustomEditorForRenderPipeline 指定编辑器

[ShaderLab：指定自定义编辑器 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/SL-CustomEditor.html)





## SubShader

[ShaderLab：定义子着色器 - Unity 手册](https://docs.unity.cn/cn/2023.2/Manual/SL-SubShader.html)



### LOD

以下代码执行结果

- LOD < 100 : 执行 200的SubShader，因为没有100 以下的LOD，所以执行第一个
- 100 <= LOD < 200 ： 执行100的SubShader
- 200 <= LOD : 执行200的SubShader

```glsl
Shader "Examples/ExampleLOD"
{
    SubShader
    {
        LOD 200

        Pass
        {                
              // 此处是定义通道的代码的其余部分。
        }
    }

    SubShader
    {
        LOD 100

        Pass
        {                
              // 此处是定义通道的代码的其余部分。
        }
    }
}
```

```c#
using UnityEngine;

[ExecuteInEditMode]
public class ShaderLod : MonoBehaviour
{
    [Range(0, 1000)]
    public  int lod = 0;

    void Update()
    {
        Shader.globalMaximumLOD = lod;
    }
}

```



### SubShader Tags

[ShaderLab：向子着色器分配标签 - Unity 手册](https://docs.unity.cn/cn/2023.2/Manual/SL-SubShaderTags.html)

渲染管线兼容性

| **功能名称**                                     | **内置渲染管线** | **通用渲染管线 (URP)** | **高清渲染管线 (HDRP)**                    | **自定义 SRP**                                               |
| :----------------------------------------------- | :--------------- | :--------------------- | :----------------------------------------- | :----------------------------------------------------------- |
| **ShaderLab：子着色器标签代码块**                | 是               | 是                     | 是                                         | 是                                                           |
| **ShaderLab：RenderPipeline 子着色器标签**       | 否               | 是                     | 是                                         | 否                                                           |
| **ShaderLab：Queue 子着色器标签**                | 否               | 是                     | 是                                         | 是  **注意：**在自定义 SRP 中，可以定义自己的渲染顺序并选择是否要使用渲染队列。有关更多信息，请参阅 DrawingSettings 和 SortingCriteria。 |
| **ShaderLab：RenderType 子着色器标签**           | 是               | 是                     | 是                                         | 是                                                           |
| **ShaderLab：DisableBatching 子着色器标签**      | 是               | 是                     | 是                                         | 是                                                           |
| **ShaderLab：ForceNoShadowCasting 子着色器标签** | 是               | 是                     | 是  这会禁用常规阴影，但是不影响接触阴影。 | 是                                                           |
| **ShaderLab：CanUseSpriteAtlas 子着色器标签**    | 是               | 是                     | 是                                         | 是                                                           |
| **ShaderLab：PreviewType 子着色器标签**          | 是               | 是                     | 是                                         | 是                                                           |

```glsl

    SubShader
    {
        Tags { 
            
            // 渲染管线标签， [UniversalRenderPipeline, HighDefinitionRenderPipeline, 自定义管线]
            "RenderPipeline" = "UniversalRenderPipeline"
            
            // 队列标签， [Background, Geometry, AlphaTest, Transparent, Overlay, 正数]
            "Queue" = "Transparent"
            
            // 渲染类型标签， [Opaque, Transparent, Cutout, Fade, Overlay,TreeOpaque, TreeTransparentCutout, TreeBillboard, Grass, GrassBillboard]
            "RenderType"="Opaque" 
            
            // 是否阻止接受阴影标签， [True, False]
            "ForceNoShadowCasting" = "False"
            
            // 是否禁用批处理标签， [True, False, LODFading] // LODFading:对于属于 Fade Mode 值不为 None 的 LODGroup 一部分的所有几何体，Unity 会阻止动态批处理。否则，Unity 不会阻止动态批处理。
            "DisableBatching" = "True"
            
            // 是否忽略投影标签， [True, False]， 只在内置渲染管线中有效
            "IgnoreProjector" = "True"
            
            // 预览类型标签， [ Sphere, Plane,Skybox]
            "PreviewType" = "Sphere"
            
            // 是否可以使用精灵图集标签， [True, False]， 默认值是True
            "CanUseSpriteAtlas" = "False"  
            
        }
        ...
    }
```



#### RenderPipeline 标签

`RenderPipeline` 标签向 Unity 告知子着色器是否与通用渲染管线 (URP) 或高清渲染管线 (HDRP) 兼容。

**语法和有效值**

| **签名**                    | **功能**                                         |
| :-------------------------- | :----------------------------------------------- |
| “RenderPipeline” = “[name]” | 向 Unity 告知此子着色器是否与 URP 或 HDRP 兼容。 |

| **参数** | **值**                       | **功能**                          |
| :------- | :--------------------------- | :-------------------------------- |
| [name]   | UniversalRenderPipeline      | 此子着色器仅与 URP 兼容。         |
|          | HighDefinitionRenderPipeline | 此子着色器仅与 HDRP 兼容。        |
|          | （任何其他值，或未声明）     | 此子着色器与 URP 和 HDRP 不兼容。 |

```glsl
Shader "ExampleShader" {
    SubShader {
        Tags { "RenderPipeline" = "UniversalRenderPipeline" }
        Pass {
            …
        }
    }
}
```



#### Queue 标签

[Material-GetTag - Unity 脚本 API](https://docs.unity.cn/cn/2023.2/ScriptReference/Material.GetTag.html)



`Queue` 标签向 Unity 告知要用于它渲染的几何体的渲染队列。渲染队列是确定 Unity 渲染几何体的顺序的因素之一。

**语法和有效值**

可以通过两种方式使用 `Queue` 标签：可以告知 Unity 使用命名渲染队列，或是它在命名渲染队列之后渲染的未命名渲染队列。

| **签名**                            | **功能**                                                     |
| :---------------------------------- | :----------------------------------------------------------- |
| “Queue” = “[queue name]”            | 使用命名渲染队列。                                           |
| “Queue” = “[queue name] + [offset]” | 在相对于命名队列的给定偏移处使用未命名队列。  这种用法十分有用的一种示例情况是透明的水，它应该在不透明对象之后绘制，但是在透明对象之前绘制。 |

| **签名**     | **值**      | **功能**                                              |
| :----------- | :---------- | :---------------------------------------------------- |
| [queue name] | Background  | 指定背景渲染队列。                                    |
|              | Geometry    | 指定几何体渲染队列。                                  |
|              | AlphaTest   | 指定 AlphaTest 渲染队列。                             |
|              | Transparent | 指定透明渲染队列。                                    |
|              | Overlay     | 指定覆盖渲染队列。                                    |
| [offset]     | 整数        | 指定 Unity 渲染未命名队列处的索引（相对于命名队列）。 |



```glsl
Shader "ExampleShader" {
    SubShader {
        Tags { "Queue" = "Transparent" }
        Pass {
            …
        }
    }
}
```



#### RenderType 标签

在内置渲染管线中，可以使用一种称为[着色器替换](https://docs.unity.cn/cn/2023.2/Manual/SL-ShaderReplacement.html)的技术在运行时交换子着色器。

[在运行时替换着色器 - Unity 手册](https://docs.unity.cn/cn/2023.2/Manual/SL-ShaderReplacement.html)

所有内置着色器都设置了一个“**RenderType**”标签，可以在使用替换着色器进行渲染时使用此标签。标签值如下：

- __Opaque__：大部分着色器（[法线](https://docs.unity.cn/cn/2023.2/Manual/shader-NormalFamily.html)、[自发光](https://docs.unity.cn/cn/2023.2/Manual/shader-SelfIllumFamily.html)、[反射](https://docs.unity.cn/cn/2023.2/Manual/shader-ReflectiveFamily.html)和地形着色器）。
- __Transparent__：大部分半透明着色器（[透明](https://docs.unity.cn/cn/2023.2/Manual/shader-TransparentFamily.html)、粒子、字体和地形附加通道着色器）。
- __TransparentCutout__：遮罩透明度着色器（[透明镂空](https://docs.unity.cn/cn/2023.2/Manual/shader-TransparentCutoutFamily.html)、两个通道植被着色器）。
- __Background__：天空盒着色器。
- __Overlay__：光环、光晕着色器。
- __TreeOpaque__：地形引擎树皮。
- __TreeTransparentCutout__：地形引擎树叶。
- __TreeBillboard__：地形引擎公告牌树。
- __Grass__：地形引擎草。
- __GrassBillboard__：地形引擎公告牌草。



**代码示例**

Start() 函数指定替换着色器：

```
void Start() {
    camera.SetReplacementShader (EffectShader, "RenderType");
}
解释
```

此函数请求 EffectShader 使用 RenderType 键。对于所需的每个 RenderType，EffectShader 都有一个键/值标签。Shader 应如下所示：

```
Shader "EffectShader" {
     SubShader {
         Tags { "RenderType"="Opaque" }
         Pass {
             ...
         }
     }
     SubShader {
         Tags { "RenderType"="SomethingElse" }
         Pass {
             ...
         }
     }
 ...
 }
解释
```

SetReplacementShader 将检查场景中的所有对象，不使用它们的普通着色器，而是使用第一个具有指定键的匹配值的子着色器。在此示例中，任何对象的着色器若具有 Rendertype=“Opaque” 标签，都将被 EffectShader 中的第一个子着色器替换，任何对象若具有 RenderType=“SomethingElse” 着色器都将使用第二个替换子着色器，以此类推。如果任何对象的着色器不具有替换着色器中指定键的匹配标签值，则不会渲染这样的对象。



#### ForceNoShadowCasting 标签

`ForceNoShadowCasting` 标签阻止子着色器中的几何体投射（有时是接收）阴影。确切行为取决于渲染管线和渲染路径。

如果使用[着色器替换](https://docs.unity.cn/cn/2023.2/Manual/SL-ShaderReplacement.html)，但是不希望从其他子着色器继承阴影通道，这可能非常有用。



```glsl
Shader "ExampleShader" {
    SubShader {
        Tags { "ForceNoShadowCasting" = "True" }
        Pass {
            …
        }
    }
}
```



#### DisableBatching 标签

`DisableBatching` 子着色器标签阻止 Unity 将[动态批处理](https://docs.unity.cn/cn/2023.2/Manual/DrawCallBatching.html)应用于使用此子着色器的几何体。

这对于执行对象空间操作的着色器程序十分有用。动态批处理会将所有几何体都变换为世界空间，这意味着着色器程序无法再访问对象空间。因此，依赖于对象空间的着色器程序不会正确渲染。为避免此问题，请使用此子着色器标签阻止 Unity 应用动态批处理。

| **签名**                      | **功能**                                               |
| :---------------------------- | :----------------------------------------------------- |
| “DisableBatching” = “[state]” | Unity 是否对使用此子着色器的所有几何体阻止动态批处理。 |

| **签名** | **值**    | **功能**                                                     |
| :------- | :-------- | :----------------------------------------------------------- |
| [state]  | True      | Unity 对使用此子着色器的几何体阻止动态批处理。               |
|          | False     | Unity 不会对使用此子着色器的几何体阻止动态批处理。这是默认值。 |
|          | LODFading | 对于属于 Fade Mode 值不为 None 的 [LODGroup](https://docs.unity.cn/Manual/class-LODGroup.html) 一部分的所有几何体，Unity 会阻止动态批处理。否则，Unity 不会阻止动态批处理。 |

```glsl
Shader "ExampleShader" {
    SubShader {
        Tags { "DisableBatching" = "True" }
        Pass {
            …
        }
    }
}
```



#### IgnoreProjector 标签

在内置渲染管线中，`IgnoreProjector` 子着色器标签向 Unity 告知几何体是否受[投影器](https://docs.unity.cn/cn/2023.2/Manual/class-Projector.html)影响。这对于排除投影器不兼容的半透明几何体多半很有用。

此标签在其他渲染管线中无效。

| **签名**                      | **功能**                               |
| :---------------------------- | :------------------------------------- |
| “IgnoreProjector” = “[state]” | Unity 在渲染此几何体时是否忽略投影器。 |

| **签名** | **值** | **功能**                                           |
| :------- | :----- | :------------------------------------------------- |
| [state]  | True   | Unity 在渲染此几何体时忽略投影器。                 |
|          | False  | Unity 在渲染此几何体时不会忽略投影器。这是默认值。 |

```glsl
Shader "ExampleShader" {
    SubShader {
        Tags { "IgnoreProjector" = "True" }
        Pass {
            …
        }
    }
}
```



#### PreviewType 标签

`PreviewType` 子着色器 Tag 告知 Unity 编辑器如何在材质 Inspector 中显示使用此子着色器的材质。

| **签名**                  | **功能**                                             |
| :------------------------ | :--------------------------------------------------- |
| “PreviewType” = “[shape]” | Unity 编辑器用于显示使用此子着色器的材质预览的形状。 |

| **签名** | **值** | **功能**                       |
| :------- | :----- | :----------------------------- |
| [shape]  | Sphere | 在球体上显示材质。这是默认值。 |
|          | Plane  | 在平面上显示材质。             |
|          | Skybox | 在天空盒上显示材质。           |

```glsl
Shader "ExampleShader" {
    SubShader {
        Tags { "PreviewType" = "Plane" }
        Pass {
            …
        }
    }
}
```



#### CanUseSpriteAtlas 标签

在使用 [Legacy Sprite Packer](https://docs.unity.cn/cn/current/Manual/SpritePacker.html) 的项目中使用此子着色器标签可警告用户着色器依赖于原始纹理坐标，因此不应将其纹理打包到图集中。

| **签名**                        | **功能**                                               |
| :------------------------------ | :----------------------------------------------------- |
| “CanUseSpriteAtlas” = “[state]” | 使用此子着色器的精灵是否与 Legacy Sprite Packer 兼容。 |

| **签名** | **值** | **功能**                                                     |
| :------- | :----- | :----------------------------------------------------------- |
| [state]  | True   | 使用此子着色器的精灵与 Legacy Sprite Packer 兼容。这是默认值。 |
|          | False  | 使用此子着色器的精灵与 Legacy Sprite Packer 不兼容。  当 `CanUseSpriteAtlas` 值为 `False` 的子着色器与带有 Legacy Sprite Packer 打包标签的精灵一起使用时，Unity 会在 Inspector 中显示错误消息。 |

此示例代码创建一个 CanUseSpriteAtlas 值为 `False` 的子着色器：

```
Shader "ExampleShader" {
    SubShader {
        Tags { "CanUseSpriteAtlas" = "False" }
        Pass {
            …
        }
    }
}
```



## Pass

[ShaderLab：定义一个通道 - Unity 手册](https://docs.unity.cn/cn/2023.2/Manual/SL-Pass.html)


```glsl

        Pass
        {
            Name "ZfPass"
            
            Tags { 
                // 光照模型标签，
                //   URP [UniversalForward, UniversalGBuffer, UniversalForwardOnly, Universal2D, ShadowCaster, DepthOnly, Meta, SRPDefaultUnlit]
                //   内置渲染管线 [Always, ForwardBase, ForwardAdd, Deferred, ShadowCaster, MotionVectors, Vertex, VertexLMRGBM, VertexLM, DeptMeta]
                "LightMode" = "UniversalForward"
            }
            
            // 在此编写设置渲染状态的 ShaderLab 命令

            HLSLPROGRAM
            	// 在此编写 HLSL 着色器代码
            ENDHLSL
        }
```


### Pass Name 

[ShaderLab：为通道指定名称 - Unity 手册](https://docs.unity.cn/cn/2023.2/Manual/SL-Name.html)

```glsl
Shader "Examples/ContainsNamedPass"
{
    SubShader
    {
        Pass
        {    
              Name "ExampleNamedPass"
            
              // 此处是定义通道的代码的其余部分。
        }
    }
}
```

```c#
using UnityEngine;

public class GetPassName : MonoBehaviour
{
    // 将此脚本放置在具有 MeshRenderer 组件的游戏对象上
    
    void Start() {
        // 获取材质
        var material = GetComponent<MeshRenderer>().material;

        // 获取为该材质分配的 Shader 对象的
        // 活动子着色器中第一个通道的名称
        var passName = material.GetPassName(0);

        // 将名称打印到控制台
        Debug.Log(passName);
    }
}
```



### Pass Tags

[ShaderLab：为通道分配标签。 - Unity 手册](https://docs.unity.cn/cn/current/Manual/SL-PassTags.html)




#### LightMode 标签

[ShaderLab：内置渲染管线中的预定义通道标签 - Unity 手册](https://docs.unity.cn/cn/current/Manual/shader-predefined-pass-tags-built-in.html)

[URP ShaderLab Pass tags | Universal RP | 11.0.0 (unity.cn)](https://docs.unity.cn/Packages/com.unity.render-pipelines.universal@11.0/manual/urp-shaders/urp-shaderlab-pass-tags.html#urp-pass-tags-lightmode)

##### 内置渲染管线中

这些是内置渲染管线中 `LightMode` 通道标签的有效值。有关 LightMode 标签的更多信息，请参阅 [ShaderLab：使用通道标签](https://docs.unity.cn/cn/current/Manual/SL-PassTags.html)。

| **值**          | **功能**                                                     |
| :-------------- | :----------------------------------------------------------- |
| `Always`        | 始终渲染；不应用任何光照。这是默认值。                       |
| `ForwardBase`   | 在前向渲染中使用；应用环境光、主方向光、顶点/SH 光源和光照贴图。 |
| `ForwardAdd`    | 在前向渲染中使用；应用附加的每像素光源（每个光源有一个通道）。 |
| `Deferred`      | 在延迟渲染中使用；渲染 G 缓冲区。                            |
| `ShadowCaster`  | 将对象深度渲染到阴影贴图或深度纹理中。                       |
| `MotionVectors` | 用于计算每个对象的运动矢量。                                 |
| `Vertex`        | 用于旧版顶点光照渲染（当对象不进行光照贴图时）；应用所有顶点光源。 |
| `VertexLMRGBM`  | 用于旧版顶点光照渲染（当对象不进行光照贴图时），以及光照贴图为 RGBM 编码的平台（PC 和游戏主机）。 |
| `VertexLM`      | 用于旧版顶点光照渲染（当对象不进行光照贴图时），以及光照贴图为双 LDR 编码的平台上（移动平台）。 |
| `Meta`          | 此过程在常规渲染过程中不使用，仅用于光照贴图烘焙或Enlighten实时全局照明。有关详细信息，请参见灯光贴图和着色器。 |



##### URP

通过此标记的值，管道可以确定在执行渲染管道的不同部分时要使用的过程。
如果未在通行证中设置“LightMode”标记，URP将使用该通行证的“SRPDefaultUnlet”标记值。
在URP中，“LightMode”标记可以具有以下值。

| **Property**             | **Description**                                              |
| :----------------------- | :----------------------------------------------------------- |
| **UniversalForward**     | 渲染对象几何体并评估所有灯光贡献。URP在“正向渲染路径Forward Rendering”中使用此标记值。 |
| **UniversalGBuffer**     | 渲染对象几何体，而不评估任何灯光贡献。URP在“延迟渲染路径Deferred Rendering”中使用此标记值。 |
| **UniversalForwardOnly** | **“过程”渲染对象几何体并评估所有灯光贡献，类似于当**LightMode**具有**UniversalForward**值时。与**UniversalForward**的不同之处在于，URP可以将“过程”用于“正向”和“延迟渲染路径”。如果URP使用“延迟渲染路径”时某个过程必须使用“正向渲染路径”渲染对象，请使用此值。例如，如果URP使用延迟渲染路径渲染场景，并且场景包含的着色器数据不适合GBuffer的对象（如透明涂层法线），请使用此标记。如果着色器必须同时在“正向渲染路径”和“延迟渲染路径”中进行渲染，请使用“UniversalForward”和“UniversalGBuffer”标记值声明两个过程。如果着色器必须使用“正向渲染路径”（Forward Rendering Path）进行渲染，而不管URP渲染器使用的渲染路径是什么，请仅声明“LightMode”标记设置为“UniversalForwardOnly”的过程。 |
| **Universal2D**          | 渲染对象并评估2D灯光贡献。URP在二维渲染器中使用此标记值。    |
| **ShadowCaster**         | 将对象深度从灯光的透视渲染到“阴影”贴图或深度纹理中。         |
| **DepthOnly**            | 仅将“摄影机”透视图中的深度信息渲染到深度纹理中。             |
| **Meta**                 | 仅在Unity编辑器中烘焙光照贴图时执行此过程。Unity在构建播放器时从着色器中删除此Pass。 |
| **SRPDefaultUnlit**      | 使用此“LightMode”标记值可以在渲染对象时绘制额外的Pass。应用示例：绘制对象轮廓。此标记值对“正向渲染路径”和“延迟渲染路径”都有效。当Pass没有“LightMode”标记时，URP使用此标记值作为默认值。 |

> **注**：URP不支持以下LightMode标记： `Always`, `ForwardAdd`, `PrepassBase`, `PrepassFinal`, `Vertex`, `VertexLMRGBM`, `VertexLM`.





#### PassFlags 标签 (仅内置渲染管线有效)

在内置渲染管线中，使用 `PassFlags` 通道标签来指定 Unity 提供给通道的数据。

| **值**          | **功能**                                                     |
| :-------------- | :----------------------------------------------------------- |
| OnlyDirectional | 仅在内置渲染管线中且渲染路径设置为 Forward，`LightMode` 标签值为 `ForwardBase` 的通道中有效。  Unity 只为该通道提供主方向光和环境光/光照探针数据。这意味着非重要光源的数据将不会传递到顶点光源或球谐函数着色器变量。请参阅[前向渲染路径](https://docs.unity.cn/cn/current/Manual/RenderTech-ForwardRendering.html)以了解详细信息。 |

```glsl
Shader "Examples/ExamplePassFlag"
{
    SubShader
    {
        Pass
        {
              Tags { "LightMode" = "ForwardBase" "PassFlags" = "OnlyDirectional" }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```



#### RequireOptions 标签 (仅内置渲染管线有效)

在内置渲染管线中，`RequireOptions` 通道标签根据项目设置启用或禁用一个通道。



| **值**           | **功能**                                                     |
| :--------------- | :----------------------------------------------------------- |
| `SoftVegetation` | Render this Pass only if [QualitySettings-softVegetation](https://docs.unity.cn/cn/current/ScriptReference/QualitySettings-softVegetation.html) is enabled. |

```glsl
Shader "Examples/ExampleRequireOptions"
{
    SubShader
    {
        Pass
        {
              Tags { "RequireOptions" = "SoftVegetation" }

              // The rest of the code that defines the Pass goes here.
        }
    }
}
```

> [QualitySettings](https://docs.unity.cn/cn/current/ScriptReference/QualitySettings.html).softVegetation
>
> public static bool **softVegetation** ;
>
> 对地形引擎中的植被使用双通道着色器。
>
> 如果启用，植被将具有平滑的边缘； 如果禁用，所有植被将具有生硬的边缘，但渲染速度可提高一倍左右。





## 命令

[ShaderLab：命令 - Unity 手册](https://docs.unity.cn/cn/2023.2/Manual/shader-shaderlab-commands.html)



 [Category 代码块](https://docs.unity.cn/cn/2023.2/Manual/SL-Other.html)将 ShaderLab 命令组合起来。



在 Pass 代码块中使用这些命令可为该 Pass 设置渲染状态，或者在 SubShader 代码块中使用这些命令可为该 SubShader 以及其中的所有 Pass 设置渲染状态。

- [AlphaToMask](https://docs.unity.cn/cn/2023.2/Manual/SL-AlphaToMask.html)：设置 alpha-to-coverage 模式。
- [Blend](https://docs.unity.cn/cn/2023.2/Manual/SL-Blend.html)：启用和配置 alpha 混合。
- [BlendOp](https://docs.unity.cn/cn/2023.2/Manual/SL-BlendOp.html)：设置 Blend 命令使用的操作。
- [ColorMask](https://docs.unity.cn/cn/2023.2/Manual/SL-ColorMask.html)：设置颜色通道写入掩码。
- [Conservative](https://docs.unity.cn/cn/2023.2/Manual/SL-Conservative.html)：启用和禁用保守光栅化。
- [Cull](https://docs.unity.cn/cn/2023.2/Manual/SL-Cull.html)：设置多边形剔除模式。
- [Offset](https://docs.unity.cn/cn/2023.2/Manual/SL-Offset.html)：设置多边形深度偏移。
- [Stencil](https://docs.unity.cn/cn/2023.2/Manual/SL-Stencil.html)：配置模板测试，以及向模板缓冲区写入的内容。
- [ZClip](https://docs.unity.cn/cn/2023.2/Manual/SL-ZClip.html)：设置深度剪辑模式。
- [ZTest](https://docs.unity.cn/cn/2023.2/Manual/SL-ZTest.html)：设置深度测试模式。
- [ZWrite](https://docs.unity.cn/cn/2023.2/Manual/SL-ZWrite.html)：设置深度缓冲区写入模式。



在 SubShader 中使用这些命令可定义具有特定用途的通道。

- [UsePass](https://docs.unity.cn/cn/2023.2/Manual/SL-UsePass.html) 定义一个通道，它从另一个 Shader 对象导入指定的通道的内容。
- [GrabPass](https://docs.unity.cn/cn/2023.2/Manual/SL-GrabPass.html) 创建一个通道，将屏幕内容抓取到纹理中，以便在之后的通道中使用。



## PackageRequirements 指定包要求

[ShaderLab: specifying package requirements - Unity 手册](https://docs.unity.cn/cn/current/Manual/SL-PackageRequirements.html)



- 在SubShader和Pass中都能定义, 每个语句块内只能定义1个，并且要在语句块前面
- Pass中定义的版本号要在SubShader的版本范围内

##### 语法规

```glsl
Shader "Examples/ExampleShader"
{
    SubShader
    {
        PackageRequirements
        {
            // 指定包版本
            // 包名:版本号规则
            "com.my.package": "2.2"
                
            // 指定unity版本
            // unity:unity版本号
            "unity" : "2021.2"  
        }
        
        ...
     
    }
}
```



##### 版本语法规则



```glsl
Shader "Examples/ExampleShader"
{
    SubShader
    {
        PackageRequirements
        {
            // 要求版本, 大于等于指定版本号， ver >= 2.2
            "com.my.package": "2.2"
        }
        Pass
        {
            PackageRequirements
            {
                
                // 要求版本, 在两个版本号之间, 10.2.1 <= ver <= 11.0
                "com.unity.render-pipelines.universal": "[10.2.1, 11.0]"
                "com.unity.textmeshpro": "3.2"
            }
        }
        Pass
        {
            PackageRequirements
            {
                "com.unity.render-pipelines.high-definition": "[8.0,8.5]"
            }
        }
    }
}
```



## 色器程序 HLSLPROGRAM 和 HLSLINCLUDE

[ShaderLab：添加着色器程序 - Unity 手册](https://docs.unity.cn/cn/current/Manual/shader-shaderlab-code-blocks.html)

渲染管线兼容性

| 功能        | 内置渲染管线 | 通用渲染管线 (URP) | 高清渲染管线 (HDRP) | 自定义可编程渲染管线                                         |
| :---------- | :----------- | :----------------- | :------------------ | :----------------------------------------------------------- |
| HLSLPROGRAM | 是           | 是                 | 是                  | 是                                                           |
| HLSLINCLUDE | 是           | 是                 | 是                  | 是                                                           |
| CGPROGRAM   | 是           | 否                 | 否                  | 是  与使用 [SRP Core](https://docs.unity.cn/Packages/com.unity.render-pipelines.core@latest) 包的自定义渲染管线不兼容。 |
| CGINCLUDE   | 是           | 否                 | 否                  | 是  与使用 [SRP Core](https://docs.unity.cn/Packages/com.unity.render-pipelines.core@latest) 包的自定义渲染管线不兼容。 |

使用着色器程序块

| **签名**                                               | **功能**                                                     |
| :----------------------------------------------------- | :----------------------------------------------------------- |
| `HLSLPROGRAM`   `[着色器程序的 HLSL 源代码]` `ENDHLSL` | 将 HLSL 着色器程序添加到包含此着色器程序块的 Pass。不包含 Unity 的内置着色器 include 文件。 |
| `CGPROGRAM`   `[着色器程序的 HLSL 源代码]` `ENDCG`     | Adds the HLSL shader program to the Pass that includes this shader program block. Includes several of Unity’s [built-in shader include files](https://docs.unity.cn/cn/current/Manual/SL-BuiltinIncludes.html) by default, enabling you to use built-in variables and functions. |

```glsl
Shader "Examples/ExampleShader"
{
    SubShader
    {
        Pass
        {   

              HLSLPROGRAM
                // 在此编写 HLSL 着色器代码
              ENDHLSL
        }
    }
}
```

使用着色器 include 块

| **签名**                                           | **功能**                                                     |
| :------------------------------------------------- | :----------------------------------------------------------- |
| `HLSLINCLUDE`   `[您要共享的 HLSL 代码]` `ENDHLSL` | Unity 将此代码包含在 `HLSLPROGRAM` 块中定义的所有着色器程序中，可位于此源文件的任何位置。 |
| `CGINCLUDE`   `[您要共享的 HLSL 代码]` `ENDCG`     |                                                              |

```glsl
Shader "Examples/ExampleShader"
{
    SubShader
    {

        HLSLINCLUDE
            // 在此编写要共享的 HLSL 代码
        ENDHLSL

        Pass
        {                
              Name "ExampleFirstPassName"
              Tags { "LightMode" = "ExampleLightModeTagValue" }

              // 在此编写设置渲染状态的 ShaderLab 命令

              HLSLPROGRAM
                // 此 HLSL 着色器程序自动包含上面的 HLSLINCLUDE 块的内容
                // 在此编写 HLSL 着色器代码
              ENDHLSL
        }

        Pass
        {                
              Name "ExampleSecondPassName"
              Tags { "LightMode" = "ExampleLightModeTagValue" }

              // 在此编写设置渲染状态的 ShaderLab 命令

              HLSLPROGRAM
                // 此 HLSL 着色器程序自动包含上面的 HLSLINCLUDE 块的内容
                // 在此编写 HLSL 着色器代码
              ENDHLSL
        }

    }
}
```

```glsl
Shader "Unlit/ZF_02_SubShader"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
    }
    
    HLSLINCLUDE
        // 在此编写要共享的 HLSL 代码
        float3 GetColorR()
        {
            return float3(1, 0, 0);
        }
    ENDHLSL
    
    SubShader
    {
        
        HLSLINCLUDE
            // 在此编写要共享的 HLSL 代码
            
            float3 GetColorG()
            {
                return float3(0, 1, 0);
            }
        ENDHLSL

        Pass
        {
           
            HLSLPROGRAM
           
            ....
            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv);
                // 在此使用上面共享的代码
                col.rgb = GetColorR() + GetColorG();
                return col;
            }
            ENDHLSL
        }

    }


}

```





# HLSL



## 预编译指令

### \#include

导入文件，和原生hlsl功能一致



ZF_hlsl_test_include.hlsl

```glsl
#ifndef ZF_hlsl_test_include
#define ZF_hlsl_test_include

#include "UnityCG.cginc"

struct appdata
{
    float4 vertex : POSITION;
    float2 uv : TEXCOORD0;
};

struct v2f
{
    float2 uv : TEXCOORD0;
    float4 vertex : SV_POSITION;
};

sampler2D _MainTex;
float4 _MainTex_ST;

v2f zf_vert (appdata v)
{
    v2f o;
    o.vertex = UnityObjectToClipPos(v.vertex);
    o.uv = TRANSFORM_TEX(v.uv, _MainTex);
    return o;
}


fixed4 zf_frag (v2f i) : SV_Target
{
    // sample the texture
    fixed4 col = tex2D(_MainTex, i.uv);
    col.rgb = fixed3(0.5, 0.5, 1);
    return col;
}

#endif
```

ZF_hlsl_test_include_with_pragma.hlsl

```glsl
#ifndef ZF_hlsl_test_include_with_pragma
#define ZF_hlsl_test_include_with_pragma


#pragma multi_compile_fog

#endif
```



```glsl
Shader "LearnURPShader/ZF_03_HLSL"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
    }
  
    SubShader
    {
       
        Pass
        {
        
            Name "ZfPass"
           
            HLSLPROGRAM
            
            #include "ZF_hlsl_test_include.hlsl"
            #include_with_pragmas "ZF_hlsl_test_include_with_pragma.hlsl"
            #pragma target 4.0
            #pragma vertex zf_vert
            #pragma fragment zf_frag

            ENDHLSL
        }

    }


}

```







###  #include_with_pragmas

[include and include_with_pragmas directives in HLSL - Unity 手册](https://docs.unity.cn/cn/current/Manual/shader-include-directives.html)

导入预编译指令文件，该文件可以共享给多个shader使用

```glsl
// Comment out the following line to disable shader debugging
#pragma enable_d3d11_debug_symbols
```

```glsl
// Example pragma directives
#pragma target 4.0
#pragma vertex vert
#pragma fragment frag

// Replace path-to-include-file with the path to the include file 
#include_with_pragmas "path-to-include-file"

```



### #pragma

[pragma directives in HLSL - Unity 手册](https://docs.unity.cn/cn/current/Manual/SL-PragmaDirectives.html)

[pragma Directive - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-pragma)

[着色器编译：pragma 指令 - Unity 手册](https://docs.unity.cn/cn/2021.1/Manual/SL-PragmaDirectives.html)

#### \#pragma surface <surface function> <lighting model> <optional parameters>

仅内置渲染管线支持 [编写表面着色器 - Unity 手册](https://docs.unity.cn/cn/current/Manual/SL-SurfaceShaders.html)



#### 着色器阶段

| **语句**                  | **功能**                                                     |
| :------------------------ | :----------------------------------------------------------- |
| `#pragma vertex <name>`   | 顶点着色器                                                   |
| `#pragma fragment <name>` | 像素着色器                                                   |
| `#pragma geometry <name>` | 编译具有给定名称的函数作为几何体着色器。将＜name＞替换为函数名称。此选项自动启用“#pragma require geometry”；有关详细信息，请参见[瞄准HLSL中的着色器模型和GPU功能](https://docs.unity.cn/cn/current/Manual/SL-ShaderCompileTargets.html).  **注意**：Metal不支持几何体着色器。 [Geometry Shader学习笔记_#pragma geometry-CSDN博客](https://blog.csdn.net/qq_37925032/article/details/82936769) |
| `#pragma hull <name>`     | 编译具有给定名称的函数作为DirectX 11外壳着色器。将＜name＞替换为函数名称。这会自动添加“#pragma require teshellation”；有关详细信息，请参见[瞄准HLSL中的着色器模型和GPU功能](https://docs.unity.cn/cn/current/Manual/SL-ShaderCompileTargets.html). |
| `#pragma domain <name>`   | 编译具有给定名称的函数作为DirectX 11域着色器。将＜name＞替换为函数名称。此选项会自动启用“#pragma require tessellation”；有关详细信息，请参见[瞄准HLSL中的着色器模型和GPU功能](https://docs.unity.cn/cn/current/Manual/SL-ShaderCompileTargets.html). [Unity Shader：细分着色器(Tessellation Shader)在Unity顶点着色器中的写法以及各参数变量解释_unity tessellation-CSDN博客](https://blog.csdn.net/liu_if_else/article/details/75039895) |



#### 着色器变体和关键字

使用这些指令告诉着色器编译器如何处理[着色器变体和关键字](https://docs.unity.cn/cn/current/Manual/shader-variants-and-keywords.html). 有关详细信息，请参见[在HLSL中声明和使用着色器关键字](https://docs.unity.cn/cn/current/Manual/SL-MultipleProgramVariants.html).

| **Directive**                              | **描述**                                                     |
| :----------------------------------------- | :----------------------------------------------------------- |
| `#pragma multi_compile <keywords>`         | 声明关键字的集合。编译器包括生成中的所有关键字。您可以使用后缀（如“_local”）来设置其他选项。有关更多信息和支持的后缀列表，请参阅[在HLSL中声明和使用着色器关键字](https://docs.unity.cn/cn/current/Manual/SL-MultipleProgramVariants.html). |
| `#pragma shader_feature <keywords>`        | 声明关键字的集合。编译器从生成中排除未使用的关键字。您可以使用后缀（如“_local”）来设置其他选项。有关更多信息和支持的后缀列表，请参阅[在HLSL中声明和使用着色器关键字](https://docs.unity.cn/cn/current/Manual/SL-MultipleProgramVariants.html). |
| `#pragma hardware_tier_variants <values>`  | 仅内置渲染管道：为给定图形API编译时，为**图形层**添加关键字。有关更多信息，请参阅[图形层](https://docs.unity.cn/cn/current/Manual/graphics-tiers.html). |
| `#pragma skip_variants <list of keywords>` | 删除指定的关键字。                                           |



[unity shader变体之#pragma multi_compile 和 #pragma shader_feature_shader compiled code-CSDN博客](https://blog.csdn.net/qq_17347313/article/details/106872268)

[Unity - Manual: Declare shader keywords (unity3d.com)](https://docs.unity3d.com/Manual/SL-MultipleProgramVariants-declare.html)

[Unity - Manual: Make shader behavior conditional (unity3d.com)](https://docs.unity3d.com/Manual/SL-MultipleProgramVariants-make-conditionals.html)

[Unity - Manual: Use shortcuts to create keyword sets (unity3d.com)](https://docs.unity3d.com/Manual/SL-MultipleProgramVariants-shortcuts.html)

[着色器变体和关键字 - Unity 手册](https://docs.unity.cn/cn/2021.1/Manual/SL-MultipleProgramVariants.html)



##### multi_compile 的工作方式

指令示例：

```glsl
# pragma multi_compile FANCY_STUFF_OFF FANCY_STUFF_ON
```

此指令示例生成两个着色器变体：一个定义了 `FANCY_STUFF_OFF`，另一个定义了 `FANCY_STUFF_ON`。在运行时，Unity 根据材质或全局着色器关键字来激活其中一个变体。如果这两个关键字均未启用，则 Unity 使用第一个关键字（在此示例中为 `FANCY_STUFF_OFF`）。

可以在 multi_compile 行中添加两个以上的关键字。例如：

```glsl
# pragma multi_compile SIMPLE_SHADING BETTER_SHADING GOOD_SHADING BEST_SHADING
```

此指令示例生成四个着色器变体：`SIMPLE_SHADING`、`BETTER_SHADING`、`GOOD_SHADING` 和 `BEST_SHADING`。

为了生成未定义预处理器宏的着色器变体，请添加一个只有下划线 (`__`) 的名称。这是避免用完两个关键字的常用方法，因为在一个项目中可以使用的关键字数量有限（请参阅后面的[关键字限制](https://docs.unity.cn/cn/2021.1/Manual/SL-MultipleProgramVariants.html#KeywordLimits)部分）。例如：

```glsl
# pragma multi_compile __ FOO_ON
```

此指令生成两个着色器变体：一个未定义任何关键字 (`__`)，另一个定义了 `FOO_ON`。



##### #pragma multi_compile 与 #pragma shader_feature的区别：

​        shader_feature与multi_compile非常相似。唯一的区别是Unity在最终的版本中不包括shader_feature着色器的未使用的变体。出于这个原因，你应该使用shader_feature来处理从material中设置的关键字，而multi_compile更好地处理从全局代码中设置的关键字。



##### Local keywords:

shader_feature和multi_compile的主要缺点是，定义的所有关键字都限制了Unity的全局关键字数量(256个全局关键字，加上64个本地关键字)。为了避免这个问题，我们可以使用不同的着色器变体指令:shader_feature_local和multi_compile_local。

> shader_feature_local: 与 shader_feature类似, 但是仅限本shader使用
> multi_compile_local: 与multi_compile类似, 但是限本shader使用

使用更多的Local keywords和更少的globalkeywords，以减少每个着色器的关键字总数，这样可以减少变体的编译数量。因为变体的编译时根据关键字的数量相乘得到的，比方说：

```glsl
#pragma multi_compile A B C
#pragma multi_compile D E
```

那么就会生成 3 * 2 = 6种，

##### 限制：

- 不能在api中使用本地关键字来改变全局关键字(比如着色器)。EnableKeyword或CommandBuffer.EnableShaderKeyword)。
- 每个着色器有一个最大的64个唯一的本地关键字。
- 如果一个材质启用了一个local关键字，并且它的着色器没声明用哪一个，那么Unity会创建一个新的global关键字。

```c#
public Material mat;
Private void Start()
{
    mat.EnableKeyword("FOO_ON");
}
```

##### 查看变体：

我的变体定义如下：

```glsl
#pragma multi_compile_local _ PAINTSTYL_1 PAINTSTYL_2 PAINTSTYL_3 PAINTSTYL_4 PAINTSTYL_5 PAINTSTYL_6 PAINTSTYL_7 PAINTSTYL_8 PAINTSTYL_9
```


选中我们的shader，然后在Inspector中查看Compiled code 可以看到，下面显示80个变体，为什么多了10倍呢？

![img](2024-07-03-URPShader.assets/20200620154520208.png)

我们可以下点面板下的Show，查看代码，发现还有一些unity 自带的scene的变体（下图只是一部分），也会被包含，因此我们也不能任意增加变体的数量。会导致变体代码膨胀。

![img](2024-07-03-URPShader.assets/20200620154509921.png)

也可以直接在面板上查看，点开Keywords：

![img](2024-07-03-URPShader.assets/20200620155221564.png)

![img](2024-07-03-URPShader.assets/2020062015535980.png)

##### 使用特定于阶段的关键字指令

可用的后缀是 `_vertex`、`_fragment`、`_hull`、`_domain`、`_geometry` 和 `_raytracing`。您在关键字指令的末尾应用后缀，例如：`multi_compile_fragment` 或 `shader_feature_local_vertex`。要针对多个着色器阶段，您可以使用多个特定于阶段的关键字指令来声明同一个关键字。

**注意：**您应确保关键字仅用于指定的着色器阶段。



##### 内置 multi_compile 快捷方式

在内置渲染管线中，有几个“快捷方式”符号用于编译多个着色器变体。这些变体主要处理 Unity 中的不同光源、阴影和光照贴图类型。请参阅有关[渲染路径和着色器](https://docs.unity.cn/cn/2021.1/Manual/SL-RenderPipeline.html)的文档以了解详细信息。

- `multi_compile_fwdbase` 编译 [PassType.ForwardBase](https://docs.unity.cn/cn/2021.1/ScriptReference/Rendering.PassType.ForwardBase.html) 所需的所有变体。这些变体处理不同的光照贴图类型以及启用或禁用的方向光主要阴影。

- `multi_compile_fwdadd` 编译 [PassType.ForwardAdd](https://docs.unity.cn/cn/2021.1/ScriptReference/Rendering.PassType.ForwardAdd.html) 的变体。这将编译变体来处理方向光、聚光灯或点光源类型，以及它们带有剪影纹理的变体。

- `multi_compile_fwdadd_fullshadows` - 与 `multi_compile_fwdadd` 相同，但还能够让光源具有实时阴影。

- `multi_compile_fog` 扩展为多个变体以处理不同的雾效类型 (off/linear/exp/exp2)。

  

  - `multi_compile_particles` 添加了与内置粒子系统相关的关键字：SOFTPACParticles_ON。它还编译了没有此关键字的变体。有关详细信息，请参见[内置粒子系统](https://docs.unity.cn/cn/current/Manual/Built-inParticleSystem.html).

  - `multi_compile_fog` 添加与雾相关的这组关键字：fog_LINERAL、fog_EXP、fog_EXP2。它还编译没有这些关键字的变体。您可以在[图形设置]中控制此行为(https://docs.unity.cn/cn/current/Manual/class-GraphicsSettings.html窗

  - `multi_compile_instancing`添加与实例化相关的关键字。如果着色器使用过程实例化，则会添加以下一组关键字：instancing_ON procedural_ON。否则，会添加以下关键字：instancing_ON。它还编译不包含任何这些关键字的变体。您可以在[图形设置]中控制此行为(https://docs.unity.cn/cn/current/Manual/class-GraphicsSettings.html窗

    

大多数内置快捷方式会产生许多着色器变体。如果知道项目不需要这些变体，可以使用 `#pragma skip_variants` 来跳过对其中一些变体的编译。例如：

```
# pragma multi_compile_fwdadd
# pragma skip_variants POINT POINT_COOKIE
解释
```

该指令会跳过包含 `POINT` 或 `POINT_COOKIE` 的所有变体。





##### 启用和禁用着色器关键字

要启用和禁用着色器关键字，请使用以下 API：

- [Shader.EnableKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/Shader.EnableKeyword.html)：启用全局关键字
- [Shader.DisableKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/Shader.DisableKeyword.html)：禁用全局关键字
- [CommandBuffer.EnableShaderKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/Rendering.CommandBuffer.EnableShaderKeyword.html)：使用 `CommandBuffer` 来启用全局关键字
- [CommandBuffer.DisableShaderKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/Rendering.CommandBuffer.DisableShaderKeyword.html)：使用 `CommandBuffer` 来禁用全局关键字
- [Material.EnableKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/Material.EnableKeyword.html)：为常规着色器启用本地关键字
- [Material.DisableKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/Material.DisableKeyword.html)：为常规着色器禁用本地关键字
- [ComputeShader.EnableKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/ComputeShader.EnableKeyword.html)：为计算着色器启用本地关键字
- [ComputeShader.DisableKeyword](https://docs.unity.cn/cn/2021.1/ScriptReference/ComputeShader.DisableKeyword.html)：为计算着色器禁用本地关键字

启用或禁用关键字时，Unity 会使用相应变体。

[MaterialPropertyDrawer - Unity 脚本 API](https://docs.unity.cn/cn/current/ScriptReference/MaterialPropertyDrawer.html)



#### \# pragma target

[着色器编译：针对着色器模型和 GPU 功能 - Unity 手册](https://docs.unity.cn/cn/2021.1/Manual/SL-ShaderCompileTargets.html)

默认情况下，Unity 将着色器编译为几乎支持的最低目标（“2.5”）；处于 DirectX 着色器模型 2.0 和 3.0 之间。其他一些编译指令使着色器自动 编译成更高的目标：

- 使用几何着色器 (`#pragma geometry`) 将编译目标设置为 `4.0`。
- 使用曲面细分着色器（`#pragma hull` 或 `#pragma domain`）将编译目标设置为 `4.6`。

对于几何体、外壳或域着色器，未通过 `#pragma` 显式设置函数入口点的任何着色器都将降级内部着色器功能要求。这可使具有更广泛运行时和功能差异的非 DX11 目标与现有着色器内容更加兼容。

例如，Unity 在 Metal 图形上支持曲面细分着色器，但 Metal 不支持几何着色器。使用 `#pragma target 5.0` 仍有效，只要您不使用几何着色器。



#### \# pragma require

[着色器编译：针对着色器模型和 GPU 功能 - Unity 手册](https://docs.unity.cn/cn/2021.1/Manual/SL-ShaderCompileTargets.html)

`#pragma require` 指令支持的功能名称列表：

- `interpolators10`：至少有 10 个顶点到片元插值器（“变化”）可用。
- `interpolators15`：至少有 15 个顶点到片元插值器（“变化”）可用。
- `interpolators32`：至少有 32 个顶点到片元插值器（“变化”）可用。
- `mrt4`：多个渲染目标，至少 4 个。
- `mrt8`：多个渲染目标，至少 8 个。
- `derivatives`：像素着色器衍生指令 (ddx/ddy)。
- `samplelod`：显式纹理 LOD 采样 (tex2Dlod / SampleLevel)。
- `fragcoord`：像素着色器中的像素位置（屏幕上的 XY，裁剪空间中的 ZW 深度）输入。
- `integers`：整数是一种实际的数据类型，包括位/移位操作。
- `2darray`：2D 纹理数组 (Texture2DArray)。
- `cubearray`：立方体贴图数组 (CubemapArray)。
- `instancing`：SV_InstanceID 输入系统值。
- `geometry`：DX10 几何着色器。
- `compute`：计算着色器、结构化缓冲区、原子操作。
- `randomwrite`：“随机写入”(UAV) 纹理。
- `tesshw`：GPU 支持硬件曲面细分，但不一定是曲面细分着色器阶段（例如，Metal 支持曲面细分，但不是通过着色器阶段）。
- `tessellation`：曲面细分外壳/域着色器阶段。
- `msaatex`：能够访问多重采样的纹理（HLSL 中的 Texture2DMS）。
- `sparsetex`：包含驻留信息的稀疏纹理（D3D 术语中的“Tier2”支持；CheckAccessFullyMapped HLSL 函数）。请注意，目前仅在 DX11/12 上实现。
- `framebufferfetch`：帧缓冲提取 - 能够在像素着色器中读取输入像素颜色。



#### 其他 pragma 指令

| **语句**                                       | **功能**                                                     |
| :--------------------------------------------- | :----------------------------------------------------------- |
| `#pragma enable_d3d11_debug_symbols`           | 生成着色器调试符号和/或禁用优化。使用此指令在外部工具中调试着色器代码。  对于 Vulkan、DirectX 11 和 12 以及支持的游戏主机平台，Unity 会生成调试符号并禁用优化。  对于 Metal 和 OpenGL，默认情况下您已经可以调试着色器。当您使用此 pragma 指令时，Unity 会禁用优化。  **警告：**使用此指令会导致文件大小增加并降低着色器性能。当您完成对着色器的调试并准备好对应用程序进行最终构建时，请从着色器源代码中删除此行并重新编译着色器。 |
| `#pragma hardware_tier_variants renderer name` | 针对每个可运行所选渲染器的硬件层，生成每个由系统编译的着色器的[多个着色器硬件变体](https://docs.unity.cn/cn/2021.1/Manual/SL-MultipleProgramVariants.html)。 仅在[内置渲染管线](https://docs.unity.cn/cn/2021.1/Manual/built-in-render-pipeline.html)中支持此语句。 |
| `#pragma hlslcc_bytecode_disassembly`          | 将反汇编的 HLSLcc 字节码嵌入到转换的着色器中。               |
| `#pragma disable_fastmath`                     | 启用涉及 NaN 处理的精确 IEEE 754 规则。当前这仅影响 Metal 平台。 |
| `#pragma glsl_es2`                             | 在 GLSL 着色器中进行设置以生成 GLSL ES 1.0(OpenGL ES 2.0)，即使着色器目标为 OpenGL ES 3 也是如此。 |
| `#pragma editor_sync_compilation`              | 强制进行同步编译。这仅影响 Unity 编辑器。有关更多信息，请参阅[异步着色器编译](https://docs.unity.cn/cn/2021.1/Manual/AsynchronousShaderCompilation.html)。 |
| `#pragma enable_cbuffer`                       | 使用 HLSLSupport 的 `CBUFFER_START(name)` 和 `CBUFFER_END` 宏时，即使当前平台不支持常量缓冲区，也要发出 `cbuffer(name)`。 |



| **Statement**                          | **Function**                                                 |
| :------------------------------------- | :----------------------------------------------------------- |
| `#pragma instancing_options <options>` | 使用给定的选项在此着色器中启用GPU实例化。有关详细信息，请参见[GPU实例化](https://docs.unity3d.com/Manual/GPUInstancing.html) |
| `#pragma once`                         | 将此指令放入文件中，以确保编译器在着色器程序中只包含该文件一次**注意：**Unity仅在[Cacheching Shader Preprocessor](https://docs.unity3d.com/Manual/shader-compilation.html#preprocessor)已启用。 |
| `#pragma skip_optimizations <value>`   | 强制关闭给定图形API的优化。将＜values＞替换为以空格分隔的有效值列表。有关有效值的列表，请参阅[在HLSL中定位图形API和平台](https://docs.unity3d.com/Manual/SL-ShaderCompilationAPIs.html) |





#### 未使用的 pragma 指令

以下编译指令不执行任何操作，因此可以安全删除：

- `#pragma glsl`
- `#pragma glsl_no_auto_normalization`
- `#pragma profileoption`
- `#pragma fragmentoption`



#### \# pragma only_renderers

[着色器编译：针对图形 API - Unity 手册](https://docs.unity.cn/cn/2021.1/Manual/SL-ShaderCompilationAPIs.html)

默认情况下，Unity 为所有支持的图形 API 编译所有着色器程序。您可以让编译器排除或包含特定的 API。在使用并非所有平台都支持的着色器语言功能时，这很有用。

```glsl
# pragma only_renderers d3d11
```

支持的名称包括：

| **语句**   | **Renderer**                                    |
| :--------- | :---------------------------------------------- |
| `d3d11`    | Direct3D 11/12                                  |
| `glcore`   | OpenGL 3.x/4.x                                  |
| `gles`     | OpenGL ES 2.0                                   |
| `gles3`    | OpenGL ES 3.x                                   |
| `metal`    | iOS/Mac Metal                                   |
| `vulkan`   | Vulkan                                          |
| `d3d11_9x` | Direct3D 11 9.x 功能级别，通常在 WSA 平台上使用 |
| `xboxone`  | Xbox One                                        |
| `ps4`      | PlayStation 4                                   |
| `n3ds`     | Nintendo 3DS                                    |
| `wiiu`     | Nintendo Wii U                                  |



#### \#pragma exclude_renderers 

[Unity - Manual: Targeting graphics APIs and platforms in HLSL (unity3d.com)](https://docs.unity3d.com/Manual/SL-ShaderCompilationAPIs.html)

若要从给定编译器的编译中排除着色器代码，请使用#pragma exclude_renderers指令。您可以通过空格分隔的方式传递多个值。
此示例演示如何从Metal和Vulkan的编译中排除着色器：

```glsl
#pragma exclude_renderers metal vulkan
```



## 语义

[语义 - Win32 apps | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/win32/direct3dhlsl/dx-graphics-hlsl-semantics?redirectedfrom=MSDN)

[着色器语义 - Unity 手册](https://docs.unity.cn/cn/current/Manual/SL-ShaderSemantics.html)



### 顶点输入数据 appdata

[向顶点程序提供顶点数据 - Unity 手册](https://docs.unity.cn/cn/current/Manual/SL-VertexProgramInputs.html)



```glsl
struct appdata_base {
    float4 vertex : POSITION;
    float3 normal : NORMAL;
    float4 texcoord : TEXCOORD0;
    UNITY_VERTEX_INPUT_INSTANCE_ID
};

struct appdata_tan {
    float4 vertex : POSITION;
    float4 tangent : TANGENT;
    float3 normal : NORMAL;
    float4 texcoord : TEXCOORD0;
    UNITY_VERTEX_INPUT_INSTANCE_ID
};

struct appdata_full {
    float4 vertex : POSITION;
    float4 tangent : TANGENT;
    float3 normal : NORMAL;
    float4 texcoord : TEXCOORD0;
    float4 texcoord1 : TEXCOORD1;
    float4 texcoord2 : TEXCOORD2;
    float4 texcoord3 : TEXCOORD3;
    fixed4 color : COLOR;
    UNITY_VERTEX_INPUT_INSTANCE_ID
};
```

要访问不同的顶点数据，您需要自己声明 顶点结构，或者将输入参数添加到 顶点着色器。顶点数据由 Cg/HLSL [语义](https://docs.unity.cn/cn/current/Manual/SL-ShaderSemantics.html)标识，并且必须来自 以下列表：

- `POSITION` 是顶点位置，通常为 `float3` 或 `float4`。
- `NORMAL` 是顶点法线，通常为 `float3`。
- `TEXCOORD0` 是第一个 UV 坐标，通常为 `float2`、`float3` 或 `float4`。
- `TEXCOORD1`、`TEXCOORD2` 和 `TEXCOORD3` 分别是第 2、第 3 和第 4 个 UV 坐标。
- `TANGENT` 是切线矢量（用于法线贴图），通常为 `float4`。
- `COLOR` 是每顶点颜色，通常为 `float4`。

当网格数据包含的分量少于顶点着色器输入所需 的分量时，其余部分用零填充，但默认值为 1 的 `.w` 分量除外。例如，网格纹理坐标 通常是仅包含 x 和 y 分量的 2D 矢量。如果 顶点着色器使用 `TEXCOORD0` 语义声明一个 `float4` 输入，则 顶点着色器接收的值将包含 (x,y,0,1)。

有关使用这些技术在内置渲染管线中可视化顶点数据的示例，请参阅[可视化顶点数据](https://docs.unity.cn/cn/current/Manual/built-in-shader-examples-vertex-data.html)。



### 顶点着色器输入语义

主顶点着色器函数（由 `#pragma vertex` 指令表示）需要在所有输入参数上都有语义。 这些对应于各个[网格](https://docs.unity.cn/cn/current/Manual/class-Mesh.html)数据元素，如顶点位置、法线网格和纹理坐标。 有关更多详细信息，请参阅[顶点程序输入](https://docs.unity.cn/cn/current/Manual/SL-VertexProgramInputs.html)。

以下是一个简单的顶点着色器的示例，它采用顶点位置 和纹理坐标作为输入。像素着色器 将纹理坐标可视化为颜色。

```
Shader "Unlit/Show UVs"
{
    SubShader
    {
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            struct v2f {
                float2 uv : TEXCOORD0;
                float4 pos : SV_POSITION;
            };

            v2f vert (
                float4 vertex : POSITION, // 顶点位置输入
                float2 uv : TEXCOORD0 // 第一个纹理坐标输入
                )
            {
                v2f o;
                o.pos = UnityObjectToClipPos(vertex);
                o.uv = uv;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                return fixed4(i.uv, 0, 0);
            }
            ENDCG
        }
    }
}
解释
```

![img](2024-07-03-URPShader.assets/SemanticsShowUVs.png)

不必逐个拼写出所有的每个输入， 可以声明一个输入结构，并在该结构的每个 单独成员变量上指示语义。



### 片元着色器输出语义

通常，片元（像素）着色器会输出颜色，并具有 `SV_Target` 语义。上面示例中的片元着色器 完全就是这样的：

```
fixed4 frag (v2f i) : SV_Target
解释
```

函数 `frag` 的返回类型为 `fixed4`（低精度 RGBA 颜色）。因为它只返回一个值，所以语义 由函数自身指示`: SV_Target`。

也可以返回包含输出的结构。 上面的片元着色器也可以按如下所示重写， 功能完全相同：

```
struct fragOutput {
    fixed4 color : SV_Target;
};
fragOutput frag (v2f i)
{
    fragOutput o;
    o.color = fixed4(i.uv, 0, 0);
    return o;
}
解释
```

从片元着色器返回结构对于不止返回单个颜色的 着色器非常有用。片元着色器 输出支持的其他语义如下。

#### SV_TargetN：多个渲染目标

`SV_Target1`、`SV_Target2` 等等：这些是着色器写入的附加颜色。这在一次渲染到多个渲染目标（称为“多渲染目标”渲染技术，简称 MRT）时使用。`SV_Target0` 等同于 `SV_Target`。

#### SV_Depth：像素着色器深度输出

通常情况下， 片元着色器不会覆盖 Z 缓冲区值，并使用 常规三角形栅格化中的默认值。但是， 对于某些效果，输出每个像素的自定义 Z 缓冲区深度值很有用。

请注意，在许多 GPU 上，这会关闭一些深度缓冲区优化，因此如果没有充分的理由，请不要覆盖 Z 缓冲区值。`SV_Depth` 产生的成本取决于 GPU 架构，但总体上与 Alpha 测试（使用 HLSL 中的内置 `clip()` 函数）的成本非常相似。通过渲染着色器在所有常规不透明着色器之后修改深度（例如，使用 `AlphaTest` [渲染队列](https://docs.unity.cn/cn/current/Manual/SL-SubShaderTags.html)）。

深度输出值必须为单个 `float`。

### 顶点着色器输出和片元着色器输入

顶点着色器需要输出顶点的最终裁剪空间位置，以便 GPU 知道屏幕上的栅格化位置以及深度。此输出需要具有 `SV_POSITION` 语义，并为 `float4` 类型。

顶点着色器生成的所有其他输出（“插值器”或“变化”）都是您的特定着色器需要的。从顶点着色器输出的值将在渲染三角形的面上进行插值，并且每个像素的值将作为输入传递给片元着色器。

许多现代 GPU 并不真正关心这些变量的语义；然而，一些旧系统（最主要的是 Direct3D 9 上的着色器模型 2 GPU）存在关于语义的特殊规则：

- `TEXCOORD0`、`TEXCOORD1` 等语义用于指示任意高精度数据，如纹理坐标和位置。
- 顶点输出和片元输入的 `COLOR0` 和 `COLOR1` 语义用于低精度 0 到 1 范围的数据（如简单的颜色值）。

为了获得最佳的跨平台支持，应将顶点输出和 片元输入标记为 `TEXCOORDn` 语义。

#### 插值器数量限制

对于总共可以使用多少个插值器变量将信息 从顶点传递到片元着色器，存在一些限制。该限制 取决于平台和 GPU，一般准则如下：

- **最多 8 个插值器：**OpenGL ES 2.0 (Android)、Direct3D 11 9.x 级别 (Windows Phone) 和 Direct3D 9 着色器模型 2.0（老旧 PC）。由于插值器 数量受到限制，但每个插值器可以是一个 4 分量矢量， 所以一些着色器将内容打包在一起以便不会超过限制。例如，两个纹理 坐标可以在一个 `float4` 变量中传递（.xy 表示一个坐标，.zw 表示第二个坐标）。
- **最多 10 个插值器**：Direct3D 9 着色器模型 3.0 (`#pragma target 3.0`)。
- **最多 16 个插值器**：OpenGL ES 3.0 (Android) 和 Metal (iOS)。
- **最多 32 个插值器**：Direct3D 10 着色器模型 4.0 (`#pragma target 4.0`)。

无论特定目标硬件如何，出于性能原因，通常最好使用尽可能少的插值器。

### 其他特殊语义

#### 屏幕空间像素位置：VPOS

片元着色器可以接收渲染为特殊 `VPOS` 语义的像素的位置。 此功能仅从着色器模型 3.0 开始存在，因此着色器需要具有 `#pragma target 3.0` 编译指令。

在不同的平台上，屏幕空间位置输入的基础类型会有所不同，因此为了获得最大的可移植性，请对其使用 `UNITY_VPOS_TYPE` 类型（在大多数平台上将是 `float4`，在 Direct3D 9 上将是 float2）。

另外，使用像素位置语义将导致难以让裁剪空间位置 (SV_POSITION) 和 VPOS 处于相同的顶点到片元结构中。因此顶点着色器应将裁剪空间位置输出为单独的“out”变量。请参阅以下示例着色器：

```
Shader "Unlit/Screen Position"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
    }
    SubShader
    {
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 3.0

            // 注意：此结构中没有 SV_POSITION
            struct v2f {
                float2 uv : TEXCOORD0;
            };

            v2f vert (
                float4 vertex : POSITION, // 顶点位置输入
                float2 uv : TEXCOORD0, // 纹理坐标输入
                out float4 outpos : SV_POSITION // 裁剪空间位置输出
                )
            {
                v2f o;
                o.uv = uv;
                outpos = UnityObjectToClipPos(vertex);
                return o;
            }

            sampler2D _MainTex;

            fixed4 frag (v2f i, UNITY_VPOS_TYPE screenPos : VPOS) : SV_Target
            {
                // screenPos.xy 将包含像素整数坐标。
                // 使用它们来实现一个跳过渲染 4x4 像素块的
                // 棋盘图案

                // 棋盘图案中 4x4 像素块的 checker 值
                // 为负
                screenPos.xy = floor(screenPos.xy * 0.25) * 0.5;
                float checker = -frac(screenPos.r + screenPos.g);

                // 如果值为负，则 clip HLSL 指令停止渲染像素
                clip(checker);

                // 对于保留的像素，读取纹理并将其输出
                fixed4 c = tex2D (_MainTex, i.uv);
                return c;
            }
            ENDCG
        }
    }
}
解释
```

![img](2024-07-03-URPShader.assets/SemanticsScreenPosition.png)

#### 面对方向：VFACE

片元着色器可以接收一种指示渲染表面是面向摄像机还是背对摄像机的变量。这在渲染应从两侧可见的几何体时非常有用 - 通常用于树叶和类似的薄型物体。`VFACE` 语义输入变量将包含表示正面三角形的正值，以及表示背面三角形的负值。

此功能从着色器模型 3.0 开始才存在，因此着色器需要具有 `#pragma target 3.0` 编译指令。

```
Shader "Unlit/Face Orientation"
{
    Properties
    {
        _ColorFront ("Front Color", Color) = (1,0.7,0.7,1)
        _ColorBack ("Back Color", Color) = (0.7,1,0.7,1)
    }
    SubShader
    {
        Pass
        {
            Cull Off // 关闭背面剔除

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 3.0

            float4 vert (float4 vertex : POSITION) : SV_POSITION
            {
                return UnityObjectToClipPos(vertex);
            }

            fixed4 _ColorFront;
            fixed4 _ColorBack;

            fixed4 frag (fixed facing : VFACE) : SV_Target
            {
                // 正面的 VFACE 输入为正，
                // 背面的为负。根据这种情况
                // 输出两种颜色中的一种。
                return facing > 0 ?_ColorFront : _ColorBack;
            }
            ENDCG
        }
    }
}
解释
```

上面的着色器使用 [Cull](https://docs.unity.cn/cn/current/Manual/SL-Cull.html) 状态来关闭背面剔除（默认情况下，根本不会渲染背面三角形）。以下是应用于一组四边形网格（以不同的方向旋转）的着色器：

![img](2024-07-03-URPShader.assets/SemanticsFaceOrientation.png)

#### 顶点 ID：SV_VertexID

顶点着色器可以接收具有“顶点编号”（为无符号整数）的变量。当您想要从纹理或 [ComputeBuffers](https://docs.unity.cn/cn/current/Manual/class-ComputeShader.html) 中 获取额外的每顶点数据时，这非常有用。

此功能从 DX10（着色器模型 4.0）和 GLCore/OpenGL ES 3 开始才存在，因此着色器需要具有 `#pragma target 3.5` 编译指令。

```
Shader "Unlit/VertexID"
{
    SubShader
    {
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 3.5

            struct v2f {
    fixed4 color : TEXCOORD0;
                float4 pos : SV_POSITION;
            };

            v2f vert (
                float4 vertex : POSITION, // 顶点位置输入
                uint vid : SV_VertexID // 顶点 ID，必须为 uint
                )
            {
                v2f o;
                o.pos = UnityObjectToClipPos(vertex);
                // 基于顶点 ID 输出时髦颜色
                float f = (float)vid;
                o.color = half4(sin(f/10),sin(f/100),sin(f/1000),0) * 0.5 + 0.5;
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
解释
```

![img](2024-07-03-URPShader.assets/SemanticsVertexID.png)





# 访问着色器属性

着色器在 [Properties](https://docs.unity.cn/cn/2023.2/Manual/SL-Properties.html) 代码块中声明材质属性。如果要在[着色器程序](https://docs.unity.cn/cn/2023.2/Manual/SL-ShaderPrograms.html)中访问其中一些属性，则需要声明具有相同名称和匹配类型的 Cg/HLSL 变量。

例如，以下着色器属性：

```glsl
_MyColor ("Some Color", Color) = (1,1,1,1) 
_MyVector ("Some Vector", Vector) = (0,0,0,0) 
_MyFloat ("My float", Float) = 0.5 
_MyTexture ("Texture", 2D) = "white" {} 
_MyCubemap ("Cubemap", CUBE) = "" {}
```

可通过如下 Cg/HLSL 代码进行声明以供访问：

```glsl
fixed4 _MyColor; // 低精度类型对于颜色而言通常已经足够
float4 _MyVector;
float _MyFloat; 
sampler2D _MyTexture;
samplerCUBE _MyCubemap;
```

Cg/HLSL 还可以接受 **uniform** 关键字，但该关键字并不是必需的：

```glsl
uniform float4 _MyColor;
```

ShaderLab 中的属性类型以如下方式映射到 Cg/HLSL 变量类型：

- Color 和 Vector 属性映射到 **float4**、**half4** 或 **fixed4** 变量。
- Range 和 Float 属性映射到 **float**、**half** 或 **fixed** 变量。
- 对于普通 (2D) 纹理，Texture 属性映射到 **sampler2D** 变量；立方体贴图 (Cubemap) 映射到 **samplerCUBE__；3D 纹理映射到** sampler3D__。

## 如何向着色器提供属性值

在下列位置中查找着色器属性值并提供给着色器：

- [MaterialPropertyBlock](https://docs.unity.cn/cn/2023.2/ScriptReference/MaterialPropertyBlock.html) 中设置的每渲染器值。这通常是“每实例”数据（例如，全部共享相同材质的许多对象的自定义着色颜色）。
- 在渲染的对象上使用的[材质](https://docs.unity.cn/cn/2023.2/Manual/class-Material.html)中设置的值。
- 全局着色器属性，通过 Unity 渲染代码自身设置（请参阅[内置着色器变量](https://docs.unity.cn/cn/2023.2/Manual/SL-UnityShaderVariables.html)），或通过您自己的脚本来设置（例如 [Shader.SetGlobalTexture](https://docs.unity.cn/cn/2023.2/ScriptReference/Shader.SetGlobalTexture.html)）。

优先顺序如上所述：每实例数据覆盖所有内容；然后使用材质数据；最后，如果这两个地方不存在着色器属性，则使用全局属性值。最终，如果在任何地方都没有定义着色器属性值，则将提供“默认值”（浮点数的默认值为零，颜色的默认值为黑色，纹理的默认值为空的白色纹理）。

## 序列化和运行时材质属性

[材质](https://docs.unity.cn/cn/2023.2/Manual/class-Material.html)可以同时包含序列化的属性值和运行时设置的属性值。

序列化的数据是在着色器的 [Properties](https://docs.unity.cn/cn/2023.2/Manual/SL-Properties.html) 代码块中定义的所有属性。通常，这些是需要存储在材质中的值，并且可由用户在材质检视面板中进行调整。

材质也可以具有着色器使用的一些属性，但不在着色器的 [Properties](https://docs.unity.cn/cn/2023.2/Manual/SL-Properties.html) 代码块中声明。通常，这适用于在运行时从脚本代码（例如，通过 [Material.SetColor](https://docs.unity.cn/cn/2023.2/ScriptReference/Material.SetColor.html)）设置的属性。请注意，矩阵和数组只能作为非序列化的运行时属性存在（因为无法在 Properties 代码块中定义它们）。

## 特殊纹理属性

对于设置为着色器/材质属性的每个纹理，Unity 还会在其他矢量属性中设置一些额外信息。

#### 纹理平铺和偏移

[材质](https://docs.unity.cn/cn/2023.2/Manual/class-Material.html)通常具有其纹理属性的 Tiling 和 Offset 字段。此信息将传递到着色器中的 float4 *{TextureName}*`_ST` 属性：

- `x` 包含 X 平铺值
- `y` 包含 Y 平铺值
- `z` 包含 X 偏移值
- `w` 包含 Y 偏移值

例如，如果着色器包含名为 `_MainTex` 的纹理，则平铺信息将位于 `_MainTex_ST` 矢量中。

#### 纹理大小

*{TextureName}*`_TexelSize` - float4 属性包含纹理大小信息：

- `x` 包含 1.0/宽度
- `y` 包含 1.0/高度
- `z` 包含宽度
- `w` 包含高度

#### 纹理 HDR 参数

*{TextureName}*`_HDR` - 一个 float4 属性，其中包含有关如何根据所使用的[颜色空间](https://docs.unity.cn/cn/2023.2/Manual/LinearLighting.html)解码潜在 HDR（例如 RGBM 编码）纹理的信息。请参阅 [UnityCG.cginc](https://docs.unity.cn/cn/2023.2/Manual/SL-BuiltinIncludes.html) 着色器 include 文件中的 `DecodeHDR` 函数。

## 颜色空间和颜色/矢量着色器数据

使用[线性颜色空间](https://docs.unity.cn/cn/2023.2/Manual/LinearLighting.html)时，所有材质颜色属性均以 sRGB 颜色提供，但在传递到着色器时会转换为线性值。

例如，如果 [Properties](https://docs.unity.cn/cn/2023.2/Manual/SL-Properties.html) 着色器代码块包含名为“*MyColor“的 `Color` 属性，则相应的”*MyColor”HLSL 变量将获得线性颜色值。

对于标记为 `Float` 或 `Vector` 类型的属性，默认情况下不进行颜色空间转换；而是假设它们包含非颜色数据。可为浮点/矢量属性添加 `[Gamma]` 特性，以表示它们是以 sRGB 空间指定，就像颜色一样（请参阅[属性](https://docs.unity.cn/cn/2023.2/Manual/SL-Properties.html)）。



# 相关链接



[【Unity技术美术】URP Shader训练营_哔哩哔哩_bilibili](https://www.bilibili.com/cheese/play/ep298821?query_from=0&search_id=5818052338388514460&search_query=urp+shader&csource=common_hpsearch_null_null&spm_id_from=333.337.search-card.all.click)

[着色器 - Unity 手册](https://docs.unity.cn/cn/2022.3/Manual/Shaders.html)

[Unity3D 实用技巧 - Unity Shader 汇总式学习·初探篇 - 技术专栏 - Unity官方开发者社区](https://developer.unity.cn/projects/5fbcef81edbc2a1283e10d02)

[内部函数 - Win32 apps | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/win32/direct3dhlsl/dx-graphics-hlsl-intrinsic-functions)