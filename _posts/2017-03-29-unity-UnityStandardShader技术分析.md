layout: post
title: [转]Unity Standard Shader 技术分析
date: 2017-03-29 00:00:00
categories: unity
tags: unity
excerpt: Unity Standard Shader 技术分析
thread: 20160610
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true





转： https://zhuanlan.zhihu.com/p/96975561



## 前言

*《孙子兵法》有云，知己知彼者，百战不殆。*

如果我们想要写出比Unity Standard Shader更好的Shader，或者想要选择比Unity提供的标准渲染方案更好的渲染方案，那么摆在我们面前的第一个问题便是Unity Standard Shader到底做了什么？它使用了哪些技术？它又是如何应用这些技术的？

事实上这是一篇写给自己的总结，而不是写给新人看的教程。所以在这篇文章中并不会去介绍Unity所使用的算法原理,仅仅是讲解Unity Standard Shader使用了哪些技术，又是如何应用的。

## 正文

我阅读的Unity Standard Shader的版本是2018.2.12f1。我的结论均以该版本为基础。并且只描述Unity在forward模式中使用到的算法和技术。

为了看起来方便，我先描述我的结论，再给出我得出结论的过程。

## 结论

整个Unity Standard Shader在forward模式所使用的技术以及对技术的应用可以用下面一张图表示。

![img](https://pic3.zhimg.com/80/v2-7800fe5b201c575492b4f3a56017c422_720w.jpg)Unity Standard Shader 技术大纲

对于Unity Standard Shader使用的渲染技术按照路径积分的形式来划分成自发光，直接光照，间接光照，以及全局雾效。下面我会逐一介绍上图的东西。

### 1.自发光

Unity Standard Shader的自发光主要由EmissionMap和EmissionColor构造。

![img](https://pic3.zhimg.com/80/v2-df860596fc9d605dab0fb62fa5dceb8e_720w.jpg)自发光

其自发光大小为![[公式]](https://www.zhihu.com/equation?tex=EmissionMap.rgb%C3%97EmissionColor.rgb+) ，其中EmissionMap和EmissionColor由外部输入。最后再**线性叠加**到最后颜色输出中。

Unity Standard Shader的自发光实现是非常标准的，完全符合路径积分的描述。

![[公式]](https://www.zhihu.com/equation?tex=L_o+%3DL+_e%2BL_%7Bdirect%7D++%2BL+_%7Bindirect%7D++%E2%80%8B%09+++)

### 2.直接光照

主要从BRDF的角度去考察Unity Standard Shader的直接光照。

**BRDF 模型**

![img](https://pic3.zhimg.com/80/v2-de8ec11ac04b34955ac503e3ad0a072a_720w.png)Unity Standard Shader BRDF

根据Unity Standard Shader的代码可以判断出Unity直接光照部分实现的BRDF是

![[公式]](https://www.zhihu.com/equation?tex=diffColor%C3%97%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_l%29+%5E5+%29%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_v+%29%5E5%29%2B+%CF%80%5Ctimes%7BDVF%7D++)

而标准Disney BRDF是

![[公式]](https://www.zhihu.com/equation?tex=%5Cfrac%7BdiffColor%7D%7B%5Cpi%7D%C3%97%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_l%29+%5E5+%29%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_v+%29%5E5%29%2B+DVF)

可以看出Unity BRDF整体比Disney BRDF多乘一个π，所以Unity的BRDF会比Disney BRDF更亮一些。Unity在注释中解释了为什么要多乘这一个π，目的是为了和Legacy的Shader保持亮度一致。

![img](https://pic2.zhimg.com/80/v2-8a85ee6aa998e84c7df64a2c83507e2d_720w.jpg)Unity Standard Shader BRDF中的参数

至于其他的部分，Unity的实现与Disney BRDF完全一致。

![[公式]](https://www.zhihu.com/equation?tex=F_%7BD90%7D%3D0.5%2B2%C3%97perceptualRoughness%C3%97cos%5E+2%CE%B8_l+%E2%80%8B)

D项使用的标准各向同性GGX分布函数。

![[公式]](https://www.zhihu.com/equation?tex=D%3D+%5Cfrac%7B%CE%B1%5E2%7D%7B%CF%80cos%5E4%CE%B8_+m%28%CE%B1%5E2%2Btan%5E+2%CE%B8_++m+%E2%80%8B%09++%29++++%E2%80%8B%09+++%7D+)

![img](https://pic3.zhimg.com/80/v2-f97b9b212eba43fd96206e2a79ef33fe_720w.png)V项

![[公式]](https://www.zhihu.com/equation?tex=+V%3D%5Cfrac%7B+G%7D%7B4cos+%CE%B8+_lcos+%CE%B8+_v%7D)其中G使用的是Height-Correlated Masking and Shadowing形式，

![[公式]](https://www.zhihu.com/equation?tex=G%3D+%5Cfrac%7B1%7D%7B1%2B%CE%9B%28l%29%2B%CE%9B%28v%29%7D+%E2%80%8B%09++)

![[公式]](https://www.zhihu.com/equation?tex=%CE%9B%28%CF%89_o%29%3D+%5Cfrac%7B%E2%88%921%2B+%5Csqrt%7B1%2B%CE%B1%5E2tan%5E+2%CE%B8_+o%7D%7D%7B2%7D++)

然而事实上Unity在默认情况并没有使用这个，而是使用了一个近似值。根据Unity Standard Shader的代码，我们可以反推出Unity使用的这个近似值是

![[公式]](https://www.zhihu.com/equation?tex=%CE%9B%28%CF%89_o%29%3D+%5Cfrac%7B1%E2%88%92cos%CE%B8_o%7D%7B2cos%CE%B8+_o%7D%CE%B1++)

![img](https://pic3.zhimg.com/80/v2-c414b220bac112633b8b1ce7d9c83736_720w.png)Fresnell近似

对于菲涅尔函数，Unity使用的也是 Schlick 近似。

![[公式]](https://www.zhihu.com/equation?tex=F%3DF_0%2B%281%E2%88%92F_0%29%281%E2%88%92cos%CE%B8+_l%29%5E++5++)

最后总结一下，Unity的BRDF与Disney BRDF基本一致，仅仅有2处差异

1. Unity BRDF整体比Disney BRDF多乘一个π，在相同光照情况下会更亮
2. Unity BRDF使用的![[公式]](https://www.zhihu.com/equation?tex=%CE%9B%28%CF%89_o%29++)是近似值而非精确值。

**BRDF 参数构造**

上面分析了Unity使用的BRDF模型，现在分析一下Unity 的BRDF模型都有哪些输入，这些输入是如何构造的。Unity BRDF总共有4个输入参数：

![img](https://pic1.zhimg.com/80/v2-968ab9a98b80926a10a77800551e3240_720w.jpg)Unity BRDF 输入

1. diffColor
2. ![[公式]](https://www.zhihu.com/equation?tex=F_%7BD90%7D) 中的perceptualRoughness
3. GGX中的α
4. Fresnel中的 ![[公式]](https://www.zhihu.com/equation?tex=F_0)

**金属工作流**

![img](https://pic3.zhimg.com/80/v2-aa4644a2984e878234d3c5233195a65a_720w.jpg)Metallic工作流

Metallic工作流中对UnityBRDF的4个输入参数的构造流程如上图所示。Metallic和*unity*_*ColorSpaceDielectricSpec.a被用来构造reflectivity，之后reflectivity和Albedo共同构造diffColor.而*Metallic，*Albedo,unity*_*ColorSpaceDielectricSpec被共同用来构造* ![[公式]](https://www.zhihu.com/equation?tex=F_0) 。smothness被用来构造perceptualRoughness和α。具体构造公式和流程如上图所示。

![img](https://pic3.zhimg.com/80/v2-25e42751f5d81de9b63ae8d8d9cf66ce_720w.jpg)Specular工作流

Specular工作流的参数构造流程如上图所示。Specular工作流的构造方法比Metallic工作流的构造方法由简单。其中Albedo贴图和Specular贴图会被用来共同构造diffColor。而Specular贴图会被当做![[公式]](https://www.zhihu.com/equation?tex=F_0)直接传Unity的BRDF中去。同样的，Smoth贴图被用来构造perceptualRoughness和α。具体构造公式和流程如上图所示。



![img](https://pic4.zhimg.com/80/v2-6adaa90ba363fce934e7d21b1c3db927_720w.png)diffColor的构造

Unity中diffColor的构造流程如上图。

![[公式]](https://www.zhihu.com/equation?tex=diffColor%3Dalbedo%C3%97%281%E2%88%92reflectivity%29)

其中Albedo由Albedo贴图输入。而reflectivity会根据不同的工作流进行确定。金属工作流中

![[公式]](https://www.zhihu.com/equation?tex=+reflectivity%3D%281-metallic%29%C3%97dielectricSpec%2Bmetallic+%C3%97+1)

其中metallic由Metallic贴图输入。而dielectricSpec的值由外部输入的unity_ColorSpaceDielectricSpec.a提供。unity_ColorSpaceDielectricSpec.a存储的是 ![[公式]](https://www.zhihu.com/equation?tex=unity_ColorSpaceDielectricSpec.a%3D1-dielectricSpec) 。

高光工作流中 ![[公式]](https://www.zhihu.com/equation?tex=reflectivity%3Dmax%28specColor.r%2CspecColor.g%2CspecColor.b%29) 其中specColor由高光贴图输入。

![img](https://pic3.zhimg.com/80/v2-564a654636dd7956c144561c4a8060f6_720w.jpg)perceptualRoughness的构造

perceptualRoughness由Smothness确定。 ![[公式]](https://www.zhihu.com/equation?tex=perceptualRoughness%3D1%E2%88%92smothness) 。Smothness由外部贴图输入。具体的几种输入方式如上图所示。

![img](https://pic3.zhimg.com/80/v2-9f8912d3a96576c03b3a4c8e951aeb3e_720w.jpg)α的构造

α由perceptualRoughness确定。 ![[公式]](https://www.zhihu.com/equation?tex=%CE%B1%3DperceptualRoughness%5E2++) 。也非常的简单。

![img](https://pic4.zhimg.com/80/v2-d27ac30c073645610e6669168270e057_720w.png)F0的构造

F0由specColor确定。 ![[公式]](https://www.zhihu.com/equation?tex=F_0%09++%3DspecColor) 。specColor会根据不同的工作流确定。高光工作流中直接由高光贴图输入。金属工作流会通过金属度去构造。

![[公式]](https://www.zhihu.com/equation?tex=specColor%3D%281%E2%88%92metallic%29%C3%97unity%5C_ColorSpaceDielectricSpec%2Bmetallic%C3%97albedo)

针对BRDF的输入我们做一个总结，其实Unity的所谓高光工作流或者金属工作流使用的都是相同的BRDF，只是不同的工作流对上述的4个参数的构造方式不同。



**Unity Standard Shader 输入**

最后我们再完整总结一下Unity Standard Shader 都有哪些输入，这些输入参数都分别被用来做什么了。

![img](https://pic2.zhimg.com/80/v2-5b49ecd3f4689cd740781a01c51bca19_720w.jpg)Unity Standard Shader 输入

从上面的分析我们可以看出，Unity BRDF的输入由以下几个参数去构造

1. Metallic
2. SpecColor
3. Albedo
4. Smothness

这几个参数都是直接从外部贴图输入的，非常直接。

另外，Unity Standard Shader 还有 高度图和遮挡贴图的输入。这个高度图主要是用来做视差映射，但是并没有做视差遮蔽。遮挡贴图用来表达着色点的被遮挡程度，在计算间接光照和AO的时候被应用。

## 3 间接光照

![img](https://pic3.zhimg.com/80/v2-9c45131910220f03ddafaaef11376c1a_720w.jpg)间接光照

Unity主要提供了6类间接光照

1. 实时阴影
2. Light Map
3. Directional Light Map
4. Shadow Mask
5. 光照探针系列技术
6. 环境光照

## **3.1 实时阴影**

Unity的阴影系统算是比较完备的。它的主要构成由下图所展示。

![img](https://pic1.zhimg.com/80/v2-483faa4da142074ea1754dada7585164_720w.jpg)Unity 实时阴影系统

unity的实时阴影系统主要分为以下3个步骤：

1. 根据CSM算法生成 Shadow Map Atlas。在Shadow Map Atlas的生成中使用了Normal Offset Bias 和Linear Bias两种Bias方案。Unity实现的Normal Offset Bias与标准的Normal Offset Bias 稍微有一点差异。标准方案是接收阴影者在采样Shadow Map时向着表面法线方向偏移，而Unity的做法是在生成ShadowMap时，投射阴影者向着背离表面法线的方向偏移。
2. 在屏幕空间对Shadow Map Atlas进行PCF滤波，并将滤波结果生成一张贴图。Unity将这种做法称为Screen Space Shadow Map，Unity生成的这张贴图也被Unity称作Screen Space Shadow Map。Unity的PCF采样策略十分晦涩。我并没有看懂它是怎么样一个采样策略。**如果有了解的，麻烦告知一下**。Unity在进行PCf滤波的时候实现了receiver plane depth bias这个Bias方案，不过在默认情况下是关闭的。
3. 最后Unity会在屏幕空间采样Screen Space Shadow Map。采样到阴影值以后会与Shadow Mask中烘焙的遮挡进行线性插值，以完成GI与实时阴影的混合。线性插值因子的计算策略不详，**如果有了解的麻烦告知一下。**

Unity 的阴影系统在Forward模式下的实现其实有点奇怪。事实上可以直接不在屏幕空间做PCF滤波，然后避免生成中间的Screen Space Shadow Map，不是很确定Unity多出一步屏幕空间变换的原因是什么。**如果有了解的，麻烦告知一下**。

我猜测原因是这样的：Unity认为直接渲染中会出现OverDraw，比如整个屏幕像素共有n个像素，但是OverDraw了以后，会绘制m个像素。m>n。如果做5x5PCF，那么直接渲染就会访问Shadow Map Atlas 25m次，而在屏幕空间做5x5PCF，则只会访问Shadow Map Atlas 25n次，当OverDraw很严重的时候，在屏幕空间做PCF的纹理采样次数会远小于直接渲染的情况，会减少GPU纹理采样的耗时。

## **3.2Lightmap & directional lightmap**

其中Light Map提供了Static Light Map，Dynamic Light Map。静态Light Map就是传统的烘焙Irradiance，Dynamic Light Map提供实时GI。Unity也提供了Directional Light Map，它会把入射光烘焙成一束主入射光，这样就带有方向了。然后在计算时使用Half Lambert BRDF。最后会再除以一个再平衡系数。Shadow Mask这个技术没有看到源码，也没有看到过文档，不清楚是怎么烘焙的。**如果有了解的，麻烦告知一下**。

## **3.3Shadow Mask**

Unity除了实时阴影以外，还实现了一种被Unity称之为Shadow Mask的技术。这种技术能实现的效果就是动态的在实时阴影和烘焙阴影之间做切换。运行时的原理也非常简单，可以通过如下的表达式所表示。

![[公式]](https://www.zhihu.com/equation?tex=%E2%80%8Bshadow%3Dlerp%28realtimeShadowAttenuation%2C+bakedShadowAttenuation%2C+fade%29)

简单来说就是最终的阴影是通过在实时阴影和烘焙遮挡之间做线性插值得到的。不过没有Unity的源码，看不出来插值系数Fade的计算原理是怎么样的。

虽然说Shadow Mask技术在运行时的实现非常简单，但是还有一个非常关键的问题，就是Shadow Mask 这张遮挡贴图应该如何生成。这里我也不太清楚，**如果有了解的，麻烦告知一下**。

## **3.4光照探针**

Unity的光照探针系列技术算是Unity具有原创性的做的比较好的技术之一。Light Probe会采样空间中一点的Irradiance，然后保存到3阶球谐函数中。再在运行时从球谐函数中复原光照信号，并生成新的正确的Irradiance。

Light Probe Proxy Volume主要给较大的物体使用，原理上与Light Probe相同，但是仍有一些技术差异，**不过这一部分我并没有看懂，如果有了解的，麻烦告知一下**。

## **3.5环境光照**

![img](https://pic2.zhimg.com/80/v2-c855f38ac57bb6f33e02470e69bb1a39_720w.jpg)Unity的环境光照

Unity实现了3种光源类型的环境光照。

1. 恒定环境光源 Ambient
2. 渐变环境光源Gradient
3. 天空盒

Ambient属于常量环境光源，即入射radiance大小为常数，不随着方向变化。而渐变环境光源Gradient入射radiance的大小会随着入射角的变化而变化。把天空盒当做环境光源也就是通常所说的IBL。

![img](https://pic3.zhimg.com/80/v2-085f83a5e20265a3c9505cf16a5ec7ce_720w.jpg)环境光照计算

**Diffuse部分**

三种环境光源都会进行Diffuse部分的计算。当物体接受LightMap的时候，环境光照会被合并到LightMap中去，而当物体不接受LightMap的时候，会使用一种在RTR4中被称为Sphere Harmonic Irradiance的技术，也就是使用球谐函数来解析的表示Irradiance Environment Map，其技术来源于Ravi Ramamoorthi，等人的文章"An Efficient Representation for Irradiance Environment Maps"。

另外Unity在进行Sphere Harmonic Irradiance的计算会根据是否使用了光照探针而有所不同。在没有使用光照探针时，会在顶点着色阶段进行Sphere Harmonic Irradiance计算，而在使用光照探针时，环境光照的Irradiance Map会被合并进光照探针中。

**Specular部分**

只有当使用天空盒作为环境光照的时候，才会进行Specular部分的光照计算。Unity使用的是基于经验的模糊算法。模糊的方法是通过Mipmap来进行降采样，而降采样的层级则通过着色表面的粗糙程度来确定

## 4 雾效

![img](https://pic2.zhimg.com/80/v2-a5389edeaf8346a31f64420025088555_720w.jpg)Unity的雾效

Unity主要实现了3种雾效，线性雾，指数雾，指数平方雾。3中方案的计算方法大同小异。都是物体颜色与雾的颜色做一个线性插值，只是插值因子的计算不同。其中线性雾的插值因子由 ![[公式]](https://www.zhihu.com/equation?tex=%E2%80%8B+factor%3D%5Cfrac%7Bend+-z%7D%7Bend-start%7D++) 计算得到，指数雾由 ![[公式]](https://www.zhihu.com/equation?tex=factor%3D+e%5E%7B-density%2Az%7D) 计算得到，指数平方雾由 ![[公式]](https://www.zhihu.com/equation?tex=%E2%80%8B+factor%3De%5E%7B-%28density%2Az%29%5E2%7D) 计算得到。



## 代码分析

上面分析了Unity Standard Shader都应用了哪些技术是如何应用的。下面来读一下代码，从代码层面来验证上面的判断。我主要阅读Unity Standard Shader版本的是2018.2.12f1，主要阅读的是Forward模式的代码。

首先，我们看一下代码主体结构。Unity Standard Shader的入口在 Standard.shader 文件中。

![img](https://pic2.zhimg.com/80/v2-9544dcd0dd1c2367f4d374c156e4a28d_720w.jpg)Unity Standard Shader

可以看到顶点和片元函数的定义在UnityStandardCoreForward.cginc文件中。UnityStandardCoreForward.cginc文件的主要内容如下，可以看到顶点Shade和片元Shader的函数调用，并且调用的函数实现均在UnityStandardCore.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-f33e56e1c850bdc5c27f20ef74631fa0_720w.jpg)UnityStandardCoreForward.cginc

打开UnityStandardCore.cginc文件，可以看到对应函数的实现

![img](https://pic4.zhimg.com/80/v2-28850c83c0256467dea26e567066b3ab_720w.jpg)vertForwardBase

![img](https://pic4.zhimg.com/80/v2-bb229e5e63b6b2cc0713717a3cca59d3_720w.jpg)fragForwardBase

![img](https://pic4.zhimg.com/80/v2-9c72e226860bb4d5225e6634d111b1d7_720w.jpg)fragForwardBaseInternal

顶点和片元Shader的代码轮廓基本就是这样。后面我就不一行行的分析代码。而是按照前面的分析流程进行分析。

## 1.自发光

自发光的相关代码如下

![img](https://pic2.zhimg.com/80/v2-57058e3c48d6ee0aca7f1e718f2c4091_720w.jpg)自发光

Emission的实现在UnityStandardInput.cginc文件中

![img](https://pic1.zhimg.com/80/v2-cc9b0130a66cc3a920d716cb87a97398_720w.jpg)Emission

可以看出Unity对自发光的实现非常标准。自发光的大小 ![[公式]](https://www.zhihu.com/equation?tex=%E2%80%8B+Emission%3DEmissionMap.rgb+%C3%97+EmissionColor.rgb)

自发光对片元的影响也是线性的，符合路径积分的描述。

![[公式]](https://www.zhihu.com/equation?tex=+L_o%3DL_e%2BL_%7Bdirect%7D%2BL_%7Bindirect%7D)

## 2.直接光照

直接光照的宏UNITY_BRDF_PBS定义在UnityPBSLighting.cginc文件中。

![img](https://pic2.zhimg.com/80/v2-628fe475170cf0a37fbc38c009eaca69_720w.jpg)

UNITY_BRDF_PBS分为3档，我们直接看第三档BRDF1_Unity_PBS，也就是最高档。BRDF1_Unity_PBS的实现在UnityStandardBRDF.cginc文件中。该函数实现比较长。我们从返回值往前看。

![img](https://pic2.zhimg.com/80/v2-bb30727e5d44a9c9b5e9ed337cb42f95_720w.jpg)

### Diffuse 项

在Aras Pranckevičius的PPT《Physically Based Shading in Unity》中提到，Unity使用的BRDF是Brent Burley等人在《Physically Based Shading at Disney》文章中提出的BRDF，其BRDF模型为

![[公式]](https://www.zhihu.com/equation?tex=f%28l%2Cv%29%3D%5Cfrac%7BdiffColor%7D%7B%5Cpi%7D%C3%97%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_l%29+%5E5+%29%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_v+%29%5E5%29%2B+DVF)

![[公式]](https://www.zhihu.com/equation?tex=F_%7BD90%7D%3D0.5%2B2%C3%97perceptualRoughness%C3%97cos%5E+2%CE%B8_l+%E2%80%8B)

我们对比一下Unity的实现和Disney BRDF模型。可以看出其中diffColor*gi.diffuse是间接光的diffuse项，surfaceReduction * gi.specular * FresnelLerp (specColor, grazingTerm, nv)是间接光的高光项。其中diffColor*light.color*diffuseTerm+specularTerm * light.color * FresnelTerm (specColor, lh)则是应用Disney BRDF的直接光照部分。所以在这个函数中我们重点关注这部分的计算。

追溯代码可以发现，light.color是渲染方程中入射radiance的大小。然后我们观察一下diffuseTerm的计算。

![img](https://pic4.zhimg.com/80/v2-c579faf0fe23a08b6b471839265513df_720w.jpg)

![img](https://pic1.zhimg.com/80/v2-68f7b4db9710bd8793b2b19f60ea4850_720w.jpg)

很明显，nl就是渲染方程中的cos项。然后我们在看看DisneyDiffuse的实现。

![img](https://pic1.zhimg.com/80/v2-a4e4bf702931a6148259b54feb42c220_720w.jpg)

代码计算非常直接，与Disney BRDF的表达式非常一致。可以看出DisneyDiffuse实际上就是在计算DisneyBRDF中的

![[公式]](https://www.zhihu.com/equation?tex=%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_l%29+%5E5+%29%281%2B%28F_%7BD90%7D%E2%88%921%29%281%E2%88%92cos%CE%B8_v+%29%5E5%29)

到这里可以看出Unity对diffuse的实现比标准DisneyBRDF少乘了1/Pi。

### Torrance-Sparrow模型

接下来我们再对比下Torrance-Sparrow项的实现。

![img](https://pic2.zhimg.com/80/v2-7ed34f74137d70b7ff5fe82f1f15cc59_720w.jpg)

![img](https://pic1.zhimg.com/80/v2-ad9df5b3e29e71cdfcd51e0f4269d5d4_720w.jpg)

![img](https://pic3.zhimg.com/80/v2-c67c848ac0089b466448761d2edf9db2_720w.png)

对比标准DisneyBRDF可以发现，Unity的实现是DFV*Pi，比起标准DisneyBRDF多乘以了Pi。

**Fresnel** **项**

我们先看下最简单Fresnel项，标准 DisneyBRDF中的Fresnel 使用Schlick近似。

![[公式]](https://www.zhihu.com/equation?tex=+F_%7B%E2%80%8B+Schlick%7D%3DF_0%2B%281%E2%88%92F_0%29%281%E2%88%92cos%CE%B8_l%29%5E5)

![img](https://pic4.zhimg.com/80/v2-30c3f590c3594c77f840bf2c4c1bd9eb_720w.jpg)

对比Unity的实现代码，发现Unity 实现的就是Schlick近似。

**法线分布函数**

接下来我们对比一下D项，Unity使用的分布函数是GGX。我们首先看一下标准的GGX函数，图片截取自Microfacet Models for Refraction through Rough Surfaces。这篇文章首次提出了GGX分布，并且，**2作是个中国人。**

![img](https://pic4.zhimg.com/80/v2-ac228beb43035a9534fe3ed6d56dcd1b_720w.jpg)

接下来我们再看看Unity的实现。Unity的实现在函数为GGXTerm，定义在UnityStandardBRDF.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-ce96c311327ba0cd9b451db62c0f05a8_720w.jpg)

Unity的实现具有一定的技巧性，并不是很直观。这么做主要是为了避免计算正切函数，减少计算量。在Unity的实现中 ![[公式]](https://www.zhihu.com/equation?tex=d%3D%28cos%5Ctheta_m%5Calpha%5E2-cos%5Ctheta_m%29cos%5Ctheta_m%2B1) ，我们做一点变换。

![[公式]](https://www.zhihu.com/equation?tex=d%3Dcos%5E2%5Ctheta_m%5Calpha%5E2-cos%5E2%5Ctheta_m%2B1)

![[公式]](https://www.zhihu.com/equation?tex=d%3Dcos%5E2%5Ctheta_m%5Calpha%5E2%2Bsin%5E2%5Ctheta_m)

![[公式]](https://www.zhihu.com/equation?tex=d%3Dcos%5E2%5Ctheta_m%28%5Calpha%5E2%2Btan%5E2%5Ctheta_m%29)

到这里已经可以看出Unity的实现基本就是标准GGX函数，只是在分母中多加了一个epsilon，防止除0异常。

**几何遮蔽函数**

在Unity中Standard Shader中，将几何遮蔽函数和![[公式]](https://www.zhihu.com/equation?tex=4cos%5Ctheta_vcos%5Ctheta_l)合并成了一个可见性项V。

![[公式]](https://www.zhihu.com/equation?tex=V%3D%5Cfrac%7BG%7D%7B4cos%5Ctheta_vcos%5Ctheta_l%7D)

而对于G项，Unity选择的是Height-Correlated Masking and Shadowing形式，

![img](https://pic2.zhimg.com/80/v2-cc0ffc839defbf4f229f08d294472ac5_720w.jpg)

而对于标准GGx分布，有

![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28%5Comega_o%29%3D%5Cfrac%7B-1%2B%5Csqrt%7B1%2B%5Calpha%5E2tan%5E2%5Ctheta_o%7D%7D%7B2%7D)

Unity的实现代码在UnityStandardBRDF.cginc文件SmithJointGGXVisibilityTerm函数中。

![img](https://pic3.zhimg.com/80/v2-d75b17ddee213a9003074e02d78567f6_720w.jpg)

可以看到，Unity的实现并不直观，看上去和前面描述的公式并不一样。这是因为Unity在实现中为了避免三角函数的计算，在运算中使用了三角恒等变换去变形，我们对这些变换做一些推导。

因为这个函数返回的是可见性项，所以我们先推导一下可见性项G。其实就是将![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28%5Comega_o%29)和G代入到V中。可得

![[公式]](https://www.zhihu.com/equation?tex=V%3D%5Cfrac%7B1%7D%7B2cos%5Ctheta_vcos%5Ctheta_l%28%5Csqrt%7B1%2B%5Calpha%5E2tan%5E2%5Ctheta_v%7D%2B%5Csqrt%7B1%2B%5Calpha%5E2tan%5E2%5Ctheta_l%7D%29%7D)

接下来我们推导一下Unity的实现代码

![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28v%29%3Dcos%5Ctheta_l%5Csqrt%7B%28-%5Calpha%5E2cos%5Ctheta_v%2Bcos%5Ctheta_v%29cos%5Ctheta_v%2B%5Calpha%5E2%7D)

![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28v%29%3Dcos%5Ctheta_l%5Csqrt%7B-%5Calpha%5E2cos%5E2%5Ctheta_v%2Bcos%5E2%5Ctheta_v%2B%5Calpha%5E2%7D)

![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28v%29%3Dcos%5Ctheta_l%5Csqrt%7B%5Calpha%5E2sin%5E2%5Ctheta_v%2Bcos%5E2%5Ctheta_v%7D)

![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28v%29%3Dcos%5Ctheta_l%7Ccos%5Ctheta_v%7C%5Csqrt%7B%5Calpha%5E2tan%5E2%5Ctheta_v%2B1%7D)

由于 ![[公式]](https://www.zhihu.com/equation?tex=%5Ctheta_v%3C%5Cfrac%7B%5Cpi%7D%7B2%7D) ，上式可以化简为 ![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28v%29%3Dcos%5Ctheta_lcos%5Ctheta_v%5Csqrt%7B%5Calpha%5E2tan%5E2%5Ctheta_v%2B1%7D) 。同样的方法可以用来推导 ![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28l%29%3Dcos%5Ctheta_v%7Ccos%5Ctheta_l%7C%5Csqrt%7B%5Calpha%5E2tan%5E2%5Ctheta_l%2B1%7D)

最后将上式的推导结果代入到SmithJointGGXVisibilityTerm函数的返回值中

![[公式]](https://www.zhihu.com/equation?tex=V%3D%5Cfrac%7B1%7D%7B2%28%5CLambda%28v%29%2B%5CLambda%28v%29%29%7D)

化简可得

![[公式]](https://www.zhihu.com/equation?tex=V%3D%5Cfrac%7B1%7D%7B2cos%5Ctheta_vcos%5Ctheta_l%28%5Csqrt%7B1%2B%5Calpha%5E2tan%5E2%5Ctheta_v%7D%2B%5Csqrt%7B1%2B%5Calpha%5E2tan%5E2%5Ctheta_l%7D%29%7D)

可以看到Unity的实现与前述的推导完全一样。也就是说Unity实现的是标准的Height-Correlated Masking and Shadowing函数。

不过Unity在运行时并没有使用这个标准形式。由于开方函数GPU消耗较高，所以Unity使用了一个近似。反推过去可以发现，Unity事实上使用的近似是

![[公式]](https://www.zhihu.com/equation?tex=%5CLambda%28%5Comega_o%29%3D%5Cfrac%7B1-cos%5Ctheta_o%7D%7B2cos%5Ctheta_o%7D%5Calpha)

根据Unity在注释中的描述是，这个数值虽然在计算上不正确，但是与精确值足够接近。

### BRDF输入

从上面的分析可以看出来Unity Standard BRDF有几个输入，diffColor，perceptualRoughness，roughness，F0,Normal,Normalm。

![img](https://pic1.zhimg.com/80/v2-c3140a3d852b6a5ba853c661b6595bbc_720w.jpg)

从上面的图中可以分析出，perceptualRoughness，roughness的构造是比较简单的，直接通过Smothness构造。而Smothness则可以直接从纹理中输入。金属工作流中，F0可以通过玻璃塑料的F0和Albedo插值获得。diffColor会根据metallic构造，金属度越低，diffColor越接近Albedo，金属度越高，diffColor越接近0.Normalm使用半角向量。而Normal则通过法线贴图获得。

**法线贴图**

读取法线贴图的代码在UnityStandardCore.cginc文件FragmentSetup函数中。

![img](https://pic3.zhimg.com/80/v2-334c3c26a550f716927579b8f710f2e2_720w.jpg)

读取法线贴图主要由PerPixelWorldNormal函数实现，该函数在UnityStandardCore.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-72c1e4a1e8c17646ac4e4f9378638424_720w.jpg)

在PerPixelWorldNormal函数的实现非常常规，首先会去读取法线贴图，然后再将法线从切线空间转换到世界空间，最后再归一化。需要注意的是NormalInTangentSpace函数在读取法线时会根据_BumpScale对法线在tb方向进行缩放。

![img](https://pic1.zhimg.com/80/v2-c0544f331264c76a7727d6e5a0f2a64c_720w.jpg)

![img](https://pic1.zhimg.com/80/v2-6a31bccf9cf59d9bee99ff64bde95f78_720w.jpg)

![img](https://pic1.zhimg.com/80/v2-43dadaae60f12b291280f13a0d9b64c0_720w.jpg)

**视差映射**

视差映射的实现在UnityStandardInput.cginc文件中。根据视差贴图对UV进行偏移。并没有做**视差遮蔽映射**。

## 3.间接光照

## **3.1实时阴影**

**vertShadowCaster过程**

Unity CSM的代码可以在UnityStandardShadow.cginc文件中看到。

![img](https://pic3.zhimg.com/80/v2-1532e980d9a611c4ce9529f001a81df6_720w.jpg)vertShadowCaster

可以看到主要的坐标变换由TRANSFER_SHADOW_CASTER_NOPOS宏实现。TRANSFER_SHADOW_CASTER_NOPOS宏的实现在UnityCG.cginc文件中。我们看一下方向光的实现。

![img](https://pic3.zhimg.com/80/v2-363b00e39f2038f91a17fb3e8a7b927a_720w.jpg)TRANSFER_SHADOW_CASTER_NOPOS

UnityClipSpaceShadowCasterPos函数的实现也在UnityCG.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-2f59618bb27c2c009b368839e35ca9b4_720w.jpg)UnityClipSpaceShadowCasterPos

可以看出Unity使用的是标准的Normal Offset Bias方案。片元朝着背离表面法线的方向偏移，偏移量正比于表面法线于光线夹角的正弦值，比例系数由外部指定。

UnityApplyLinearShadowBias函数的实现在UnityCG.cginc文件中。

![img](https://pic4.zhimg.com/80/v2-cbe337d32684868e35c60ae1bc903b47_720w.jpg)UnityApplyLinearShadowBias

Unity在投影空间实现了一个线性的Bias。

**CollectShadow过程**

Unity把它自己实现的这套阴影叫做Screen Space Shadow Map。而在屏幕空间进行的一系列操作Unity把它称为CollectShadows。在FrameDebug中可以看到。

![img](https://pic3.zhimg.com/80/v2-8ca1d5327330cf6d01bd5642ebf81be6_720w.jpg)CollectShadows



![img](https://pic3.zhimg.com/80/v2-50150747c7b6e79985e9db77464362ba_720w.jpg)


可以看出CollectShadows过程主要执行的是Hidden/Internal-ScreenSpaceShadows Subshader #2 Pass #0。其实现如下

![img](https://pic2.zhimg.com/80/v2-e064eaccab132e0f60c57029f95e7b75_720w.jpg)Hidden/Internal-ScreenSpaceShadows Subshader #2 Pass #0

片元Shader的入口在frag_pcfSoft函数中。

![img](https://pic3.zhimg.com/80/v2-24fd3f341659dc30f2c35b7a3afbd5ce_720w.jpg)frag_pcfSoft

浏览一遍可以看出这个函数主要在做两件事

1. 调用UnitySampleShadowmap_PCF5x5函数进行PCF滤波
2. 级联混合

我们先看级联混合

![img](https://pic3.zhimg.com/80/v2-77e60d918dd72e801b0f301ce56c13e6_720w.jpg)级联混合

级联混合的策略也非常直接，就是先生成当前级联的阴影，再生成下一级联的阴影，然后再这两级级联中线性插值。

然后我们再看一下UnitySampleShadowmap_PCF5x5的实现。

![img](https://pic1.zhimg.com/80/v2-30cacdc0125430071eb4de7e6b76e674_720w.png)UnitySampleShadowmap_PCF5x5

UnitySampleShadowmap_PCF5x5Tent函数的实现比较长，不方便截图，我就拷代码了。

```glsl
half UnitySampleShadowmap_PCF5x5Tent(float4 coord, float3 receiverPlaneDepthBias)
{
    half shadow = 1;

#ifdef SHADOWMAPSAMPLER_AND_TEXELSIZE_DEFINED

    #ifndef SHADOWS_NATIVE
        // when we don't have hardware PCF sampling, fallback to a simple 3x3 sampling with averaged results.
        return UnitySampleShadowmap_PCF3x3NoHardwareSupport(coord, receiverPlaneDepthBias);
    #endif

    // tent base is 5x5 base thus covering from 25 to 36 texels, thus we need 9 bilinear PCF fetches
    float2 tentCenterInTexelSpace = coord.xy * _ShadowMapTexture_TexelSize.zw;
    float2 centerOfFetchesInTexelSpace = floor(tentCenterInTexelSpace + 0.5);
    float2 offsetFromTentCenterToCenterOfFetches = tentCenterInTexelSpace - centerOfFetchesInTexelSpace;

    // find the weight of each texel based on the area of a 45 degree slop tent above each of them.
    float3 texelsWeightsU_A, texelsWeightsU_B;
    float3 texelsWeightsV_A, texelsWeightsV_B;
    _UnityInternalGetWeightPerTexel_5TexelsWideTriangleFilter(offsetFromTentCenterToCenterOfFetches.x, texelsWeightsU_A, texelsWeightsU_B);
    _UnityInternalGetWeightPerTexel_5TexelsWideTriangleFilter(offsetFromTentCenterToCenterOfFetches.y, texelsWeightsV_A, texelsWeightsV_B);

    // each fetch will cover a group of 2x2 texels, the weight of each group is the sum of the weights of the texels
    float3 fetchesWeightsU = float3(texelsWeightsU_A.xz, texelsWeightsU_B.y) + float3(texelsWeightsU_A.y, texelsWeightsU_B.xz);
    float3 fetchesWeightsV = float3(texelsWeightsV_A.xz, texelsWeightsV_B.y) + float3(texelsWeightsV_A.y, texelsWeightsV_B.xz);

    // move the PCF bilinear fetches to respect texels weights
    float3 fetchesOffsetsU = float3(texelsWeightsU_A.y, texelsWeightsU_B.xz) / fetchesWeightsU.xyz + float3(-2.5,-0.5,1.5);
    float3 fetchesOffsetsV = float3(texelsWeightsV_A.y, texelsWeightsV_B.xz) / fetchesWeightsV.xyz + float3(-2.5,-0.5,1.5);
    fetchesOffsetsU *= _ShadowMapTexture_TexelSize.xxx;
    fetchesOffsetsV *= _ShadowMapTexture_TexelSize.yyy;

    // fetch !
    float2 bilinearFetchOrigin = centerOfFetchesInTexelSpace * _ShadowMapTexture_TexelSize.xy;
    shadow  = fetchesWeightsU.x * fetchesWeightsV.x * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.x, fetchesOffsetsV.x), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.y * fetchesWeightsV.x * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.y, fetchesOffsetsV.x), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.z * fetchesWeightsV.x * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.z, fetchesOffsetsV.x), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.x * fetchesWeightsV.y * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.x, fetchesOffsetsV.y), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.y * fetchesWeightsV.y * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.y, fetchesOffsetsV.y), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.z * fetchesWeightsV.y * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.z, fetchesOffsetsV.y), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.x * fetchesWeightsV.z * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.x, fetchesOffsetsV.z), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.y * fetchesWeightsV.z * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.y, fetchesOffsetsV.z), coord.z, receiverPlaneDepthBias));
    shadow += fetchesWeightsU.z * fetchesWeightsV.z * UNITY_SAMPLE_SHADOW(_ShadowMapTexture, UnityCombineShadowcoordComponents(bilinearFetchOrigin, float2(fetchesOffsetsU.z, fetchesOffsetsV.z), coord.z, receiverPlaneDepthBias));
#endif

    return shadow;
}
```

这一部分关于PCF的采样策略的代码我没有看懂，有了解的麻烦告知一下。

在文件Internal-ScreenSpaceShadows.shader中可以看到对级联坐标的计算。

![img](https://pic4.zhimg.com/80/v2-92504e207b3859e727aa5a2807d1cdff_720w.jpg)

![img](https://pic3.zhimg.com/80/v2-ad1d0fdc0655ccfd0922636684a0e372_720w.jpg)

从中可以看出，Unity的CSM会根据物体的深度绘制在不同层级的ShadowMap中。

![img](https://pic4.zhimg.com/80/v2-40b1cb080d9db6104c85c11c8a8ce517_720w.jpg)

![img](https://pic3.zhimg.com/80/v2-3b2087b4d010ccd34832a93d09249d1e_720w.jpg)



但是在Unity的FrameDebug中可以看到，会出现同一个物体被绘制在多个层级问题。这是因为光锥有交叉。如下图所示。光锥为了包含视锥，会出现交叉。



![img](https://pic2.zhimg.com/80/v2-7beeb30f1f67956c897e196d78763b49_720w.jpg)



**Screen Space Shadow Map采样**

最后我们再来看一下

我们按照代码顺序来看，首先看光源衰减。UNITY_LIGHT_ATTENUATION宏主要做两件事，计算阴影和计算光照衰减。Unity按照光源类型去处理阴影和衰减。在这里我们只关注最简单的方向光。可以看到方向光的没有计算衰减只计算了阴影。方向光的光源衰减函数在AutoLight.cginc文件中。代码如下



![img](https://pic1.zhimg.com/80/v2-daf06745de47f961d97391d551f7d3e8_720w.jpg)





![img](https://pic2.zhimg.com/80/v2-1e7c247d2f85ec9cc89af440893da939_720w.jpg)

**Screen Space Shadow Map 纹理采样过程**

最后我们再看一下Screen Space Shadow Map 纹理采样过程。

![img](https://pic2.zhimg.com/80/v2-adf3b3b9e845bdac5451457fc06dbd99_720w.jpg)fragForwardBaseInternal

UNITY_LIGHT_ATTENUATION宏的实现在AutoLight.cginc文件中。我们只看方向光模式。

![img](https://pic2.zhimg.com/80/v2-e8defa1fb064ff5a5f3ad4b0bb38ed11_720w.png)UNITY_LIGHT_ATTENUATION

可以看出destName完全由UNITY_SHADOW_ATTENUATION宏计算得到。UNITY_SHADOW_ATTENUATION宏的定义也在AutoLight.cginc文件中。

![img](https://pic4.zhimg.com/80/v2-5ba3746b74c53d17322017a63b4e16bb_720w.png)UNITY_SHADOW_ATTENUATION

可以看出UNITY_SHADOW_ATTENUATION宏由SHADOW_ATTENUATION宏实现。SHADOW_ATTENUATION宏的实现也在AutoLight.cginc文件中。

![img](https://pic4.zhimg.com/80/v2-f6c81a8cb3ab4c325b02cd1dfd567e4b_720w.jpg)SHADOW_ATTENUATION

可以看出SHADOW_ATTENUATION的实现主要unitySampleShadow函数实现。unitySampleShadow函数的实现也在AutoLight.cginc文件中。

![img](https://pic2.zhimg.com/80/v2-bc4c311feac6bef678124b3fea961dc5_720w.jpg)unitySampleShadow

可以看出unitySampleShadow函数的实现非常简单。就是直接对Screen Space Shadow Map 纹理进行采样。其中UNITY_SAMPLE_SCREEN_SHADOW是一个阴影贴图采样的宏，用来统一平台差异的。

然后我们在返回去看看shadowCoord是如何计算的。反观上面的这些函数，这些函数并没有对shadowCoord做任何处理，完全是从顶点Shader传进来的。我们再转回去看看顶点Shader是如何计算shadowCoord。

![img](https://pic1.zhimg.com/80/v2-1f7d3be65741294d20130db41c70ee50_720w.jpg)vertForwardBase

在顶点Shader中shadowCoord的计算由UNITY_TRANSFER_LIGHTING宏完成。UNITY_TRANSFER_LIGHTING宏的实现也在AutoLight.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-c84a9d36dcb34f184157b3894f67be00_720w.png)UNITY_TRANSFER_LIGHTING

Shader中shadowCoord的计算主要由UNITY_TRANSFER_SHADOW宏完成。UNITY_TRANSFER_SHADOW宏的实现也在AutoLight.cginc文件中。

![img](https://pic4.zhimg.com/80/v2-e7e085e7f1e8b4238ca1733773171117_720w.png)UNITY_TRANSFER_SHADOW

可以看到UNITY_TRANSFER_SHADOW宏由TRANSFER_SHADOW宏实现。

![img](https://pic1.zhimg.com/80/v2-4177ba5006d6958b5fa1d15ce5cde63c_720w.jpg)TRANSFER_SHADOW

可以看到shadowCoord的计算主要由ComputeScreenPos函数完成，其中pos是着色点在Clip空间的坐标，也就是乘完MVP矩阵之后的坐标。ComputeScreenPos函数的实现在UnityCG.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-cb9324f260f2a0e217523debcf322bb0_720w.jpg)ComputeScreenPos

可以看到ComputeScreenPos函数主要由ComputeNonStereoScreenPos实现。ComputeNonStereoScreenPos的实现在UnityCG.cginc文件中。

![img](https://pic3.zhimg.com/80/v2-99aa1a84919ca966698b6955dad11142_720w.jpg)ComputeNonStereoScreenPos

这个函数需要解释一下，Pos是Clip Space的坐标，XY分量的坐标范围是[-w，w],这个函数实际上是作一个坐标变换，将XY分量变换到[0,w]区间。ZW分量保持不变。也就是说当这个值被传到片元着色器中后，XY分量就在[0,1]，就是屏幕空间坐标。**也就是说实际上是按照当前着色点的屏幕空间坐标去采样Screen Space Shadow Map的**。

**Screen Space Shadow Map 采样值的应用**

最后我们再看一下Unity Standard Shader是如何应用Screen Space Shadow Map 采样出来的Shadow值的。

![img](https://pic1.zhimg.com/80/v2-afe081a537b5993cb2501e9c017b3e58_720w.jpg)fragForwardBaseInternal

可以看到Screen Space Shadow Map 采样出来的Shadow值会在FragmentGI函数中被应用。

![img](https://pic2.zhimg.com/80/v2-325e9be19b760b2cbcf60344d1d3f389_720w.png)FragmentGI

## 3.2 GI相关

FragmentGI会直接调用另一个同名函数。

![img](https://pic2.zhimg.com/80/v2-73bdd3fcd40fef7b12e2e1588ecdd635_720w.jpg)FragmentGI

可以看到FragmentGI的实现基本就是先初始化UnityGIInput数据结构，然后再调用UnityGlobalIllumination函数。

![img](https://pic2.zhimg.com/80/v2-fe5c924cad126e327c8ca8a6e16b1a0d_720w.png)UnityGlobalIllumination

可以看到UnityGlobalIllumination函数会调用UnityGI_Base和UnityGI_IndirectSpecular两个函数。在Shadow Mask模式下，UnityGI_Base中与atten相关的实现如下。

![img](https://pic3.zhimg.com/80/v2-469876dcb1cd6712ed64b16fdfa5356e_720w.jpg)UnityGI_Base

可以看到UnityGI_Base会先做实时Shadow与GI的混合，然后再用来阻挡光源。我们再看一下Shadow与GI的混合。

![img](https://pic2.zhimg.com/80/v2-9cc765fe58fe22b0a0f5a97bf659da95_720w.png)阴影混合

![img](https://pic1.zhimg.com/80/v2-0180001a3e8db17daca3d1bf2eaa94d4_720w.png)UnityMixRealtimeAndBakedShadows

可以看出GI与阴影的混合实际上就是在烘焙的遮挡和实时阴影之间做线性插值。插值因子的计算策略不明。**如果有了解的，麻烦告知一下。**



间接光照FragmentGI的实现在UnityStandardCore.cginc文件中。

![img](https://pic2.zhimg.com/80/v2-c743a826228a4d7297d709ad4633f7ad_720w.jpg)FragmentGI

![img](https://pic3.zhimg.com/80/v2-80eab1340e2c80e35e9ccc4459498822_720w.jpg)FragmentGI

FragmentGI的实现非常直接，就是在做3件事，初始化UnityGIInput数据结构，初始化Unity_GlossyEnvironmentData数据结构，和调用UnityGlobalIllumination函数执行间接光照的计算。我们继续看UnityGlobalIllumination函数的实现。

UnityGlobalIllumination函数的实现在UnityGlobalIllumination.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-1e0404e593fcfedce481bd6b10cca290_720w.jpg)



UnityGlobalIllumination函数的实现也非常直接。函数分成两个部分，UnityGI_Base和UnityGI_IndirectSpecular。我们先看UnityGI_Base。

UnityGI_Base的实现在UnityGlobalIllumination.cginc文件中。由于UnityGI_Base的实现比较长，所以我将其中的宏折叠了起来。

![img](https://pic3.zhimg.com/80/v2-722f01e23d1d59fc4c6f1a8a9c788a86_720w.jpg)UnityGI_Base

可以看到UnityGI_Base首先初始化UnityGI数据结构。之后处理光源衰减，最后再计算间接光照。间接光照有3个来源，光照探针，LightMap和实时GI。

从光照探针中重构出着色点Irradiance的算法被全部包含在ShadeSHPerPixel函数中。光照探针中使用的Spherical Harmonics Irradiance算法来自于Ravi Ramamoorthi，等人的文章"An Efficient Representation for Irradiance Environment Maps"。

![img](https://pic1.zhimg.com/80/v2-33f63239dca1aff37a5d761e57a4020c_720w.jpg)ShadeSHPerPixel

ShadeSHPerPixel函数的实现在UnityStandardUtils.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-1c26e1d062bce9d923652dda026ee690_720w.jpg)ShadeSHPerPixel

根据"An Efficient Representation for Irradiance Environment Maps"文章推导，Irradiance Map可以用球谐函数近似表示为

![[公式]](https://www.zhihu.com/equation?tex=E%28%5Ctheta%2C%5Cphi%29%3D%5Csum_%7Bl%2Cm%7D%5E%7B%7D%7B%5Chat%7BA_l%7DL_%7Blm%7DY_%7Blm%7D%28%5Ctheta%2C%5Cphi%29%7D)

其中![[公式]](https://www.zhihu.com/equation?tex=Y_%7Blm%7D%28%5Ctheta%2C%5Cphi%29)是球谐基函数， ![[公式]](https://www.zhihu.com/equation?tex=%5Chat%7BA_l%7DL_%7Blm%7D) 是对应的球谐系数。而 ![[公式]](https://www.zhihu.com/equation?tex=L_%7Blm%7D) 是使用球谐基函数来表示将Environment Map的得到球谐系数。 ![[公式]](https://www.zhihu.com/equation?tex=%5Chat%7BA_l%7D) 是 将![[公式]](https://www.zhihu.com/equation?tex=cos%5Ctheta) 投影到球谐基函数上而得到的系数。

给定一个法线，便可以根据上述公式求得该着色表面的Irradiance。在Unity的实现中，Unity只使用了3阶球谐基函数来编码Irradiance Map。根据Sloan大神的文章“Stupid Spherical Harmonics (SH) Tricks”，对于3阶球谐函数的求和，直接采用线性相乘求和的方法要比矩阵阵法速度更快。而Unity也是采用了这样一种方案。

直接将3阶球谐函数代入上述方程并展开化解可得

![[公式]](https://www.zhihu.com/equation?tex=E%28x%2Cy%2Cz%29%3Dc_0%2Bc_1x%2Bc_2y%2Bc_3z%2Bc_4xy%2Bc_5yz%2Bc_6zx%2Bc_7z%5E2%2Bc_8%28x%5E2-y%5E2%29)

具体的实现被分成了两个函数，SHEvalLinearL0L1和SHEvalLinearL2。SHEvalLinearL0L1计算常数项和线性项，SHEvalLinearL2计算二次项。最后3阶球谐函数值就是常数项+线性项+二次项。

![img](https://pic1.zhimg.com/80/v2-6a6c1d55e58405f18c6a261c69987c24_720w.jpg)常数项+线性项

![img](https://pic1.zhimg.com/80/v2-45f87a0dc4f181ab9d89905a364db418_720w.jpg)二次项



接下来我们再看看LightMap的计算部分。

![img](https://pic3.zhimg.com/80/v2-73b810c64356fc03cbc40882e65f94e2_720w.jpg)

LightMap部分的代码非常直接，可以看到主要在处理3个东西,Lightmap，Directional Lightmap和Shadow Mask

![img](https://pic1.zhimg.com/80/v2-91a6ebe5545832e59ce85d098662f0e8_720w.jpg)DynamicGI

实时GI部分的计算也非常直接。同样也处理了带和不带方向两种情况。

另外从代码的实现来看，在Unity中实时GI与lightmap及光照探针是可以同时使用的。

**有向Lightmap**

![img](https://pic3.zhimg.com/80/v2-8129fdd0b41f9434ff025512a753a8fe_720w.jpg)

在Directional Lightmap模式中，Unity会把光照信息烘焙成一个domain light 的光照，相当于变成了一个单入射光源的照明情况，然后BRDF选择半兰伯特，最后除以一个平衡系数。

## Indirect Specular

现在我们再来看看UnityGI_IndirectSpecular函数的实现。

```text
inline half3 UnityGI_IndirectSpecular(UnityGIInput data, half occlusion, Unity_GlossyEnvironmentData glossIn)
{
    half3 specular;

    #ifdef UNITY_SPECCUBE_BOX_PROJECTION
        // we will tweak reflUVW in glossIn directly (as we pass it to Unity_GlossyEnvironment twice for probe0 and probe1), so keep original to pass into BoxProjectedCubemapDirection
        half3 originalReflUVW = glossIn.reflUVW;
        glossIn.reflUVW = BoxProjectedCubemapDirection (originalReflUVW, data.worldPos, data.probePosition[0], data.boxMin[0], data.boxMax[0]);
    #endif

    #ifdef _GLOSSYREFLECTIONS_OFF
        specular = unity_IndirectSpecColor.rgb;
    #else
        half3 env0 = Unity_GlossyEnvironment (UNITY_PASS_TEXCUBE(unity_SpecCube0), data.probeHDR[0], glossIn);
        #ifdef UNITY_SPECCUBE_BLENDING
            const float kBlendFactor = 0.99999;
            float blendLerp = data.boxMin[0].w;
            UNITY_BRANCH
            if (blendLerp < kBlendFactor)
            {
                #ifdef UNITY_SPECCUBE_BOX_PROJECTION
                    glossIn.reflUVW = BoxProjectedCubemapDirection (originalReflUVW, data.worldPos, data.probePosition[1], data.boxMin[1], data.boxMax[1]);
                #endif

                half3 env1 = Unity_GlossyEnvironment (UNITY_PASS_TEXCUBE_SAMPLER(unity_SpecCube1,unity_SpecCube0), data.probeHDR[1], glossIn);
                specular = lerp(env1, env0, blendLerp);
            }
            else
            {
                specular = env0;
            }
        #else
            specular = env0;
        #endif
    #endif

    return specular * occlusion;
}
```

可以看到Indirect Specular主要有env0和env1插值得到。而env0和env1均由Unity_GlossyEnvironment函数计算得到。Unity_GlossyEnvironment函数的实现在UnityImageBasedLighting.cginc文件中。其实现如下：

```text
half3 Unity_GlossyEnvironment (UNITY_ARGS_TEXCUBE(tex), half4 hdr, Unity_GlossyEnvironmentData glossIn)
{
    half perceptualRoughness = glossIn.roughness /* perceptualRoughness */ ;

// TODO: CAUTION: remap from Morten may work only with offline convolution, see impact with runtime convolution!
// For now disabled
#if 0
    float m = PerceptualRoughnessToRoughness(perceptualRoughness); // m is the real roughness parameter
    const float fEps = 1.192092896e-07F;        // smallest such that 1.0+FLT_EPSILON != 1.0  (+1e-4h is NOT good here. is visibly very wrong)
    float n =  (2.0/max(fEps, m*m))-2.0;        // remap to spec power. See eq. 21 in --> https://dl.dropboxusercontent.com/u/55891920/papers/mm_brdf.pdf

    n /= 4;                                     // remap from n_dot_h formulatino to n_dot_r. See section "Pre-convolved Cube Maps vs Path Tracers" --> https://s3.amazonaws.com/docs.knaldtech.com/knald/1.0.0/lys_power_drops.html

    perceptualRoughness = pow( 2/(n+2), 0.25);      // remap back to square root of real roughness (0.25 include both the sqrt root of the conversion and sqrt for going from roughness to perceptualRoughness)
#else
    // MM: came up with a surprisingly close approximation to what the #if 0'ed out code above does.
    perceptualRoughness = perceptualRoughness*(1.7 - 0.7*perceptualRoughness);
#endif


    half mip = perceptualRoughnessToMipmapLevel(perceptualRoughness);
    half3 R = glossIn.reflUVW;
    half4 rgbm = UNITY_SAMPLE_TEXCUBE_LOD(tex, R, mip);

    return DecodeHDR(rgbm, hdr);
}
```

可以看到Unity的Unity_GlossyEnvironment函数实际上计算的天空盒环境光照的Specular部分，而且是使用的基于经验的模糊方法。先通过粗糙度perceptualRoughness构建Mipmap层级，然后再进行采样得到。

## 4.雾效

最后我们来看一下雾效的实现。先看顶点Shader中与雾效相关的代码

![img](https://pic3.zhimg.com/80/v2-5319cb29498a13baf8fb5150a1358b3e_720w.png)顶点Shader中雾效相关的代码

UNITY_TRANSFER_FOG_COMBINED_WITH_EYE_VEC宏的实现在UnityCG.cginc文件中。

![img](https://pic2.zhimg.com/80/v2-1b02555f4826be3708cc8511b29691bd_720w.jpg)UNITY_TRANSFER_FOG_COMBINED_WITH_EYE_VEC宏的实现

这个宏的实现非常简单，就是将当前着色点的深度值保存在eyeVec.w中。

再来看看片元Shader中雾效相关的实现。

![img](https://pic2.zhimg.com/80/v2-1406ff586105c5b3368ace34d40312a1_720w.jpg)Unity 雾效实现

UNITY_EXTRACT_FOG_FROM_EYE_VEC宏的实现在UnityCG.cginc文件中。

![img](https://pic4.zhimg.com/80/v2-50d6312fdac5d8d624dffdfa29f8dcf3_720w.jpg)UNITY_EXTRACT_FOG_FROM_EYE_VEC的实现

这个宏非常直接，声明一个_unity_fogCoord变量，用于保存eyeVec.w中的深度值。

Unity的雾效主要由UNITY_APPLY_FOG宏实现。UNITY_APPLY_FOG宏的实现在UnityCG.cginc文件中。

![img](https://pic2.zhimg.com/80/v2-c4fb211e990d52fb1a0838d96f847e81_720w.jpg)

可以看出UNITY_APPLY_FOG主要由UNITY_APPLY_FOG_COLOR宏实现。UNITY_APPLY_FOG_COLOR宏的实现在UnityCG.cginc文件中。

![img](https://pic3.zhimg.com/80/v2-314e83bbd2c28315c5532c945115bd8e_720w.jpg)

在这里我们主要关注SM 3.0的实现模式。UNITY_APPLY_FOG_COLOR宏由UNITY_CALC_FOG_FACTOR和UNITY_FOG_LERP_COLOR两个宏实现。

UNITY_FOG_LERP_COLOR的实现在UnityCG.cginc文件中。

![img](https://pic4.zhimg.com/80/v2-d2f0b0446b9696bd7cd27a45459c3be7_720w.jpg)

可以看出UNITY_FOG_LERP_COLOR的实现非常直接，就是根据雾因子在雾的颜色和物体的颜色间做个线性插值。

UNITY_CALC_FOG_FACTOR宏的实现在UnityCG.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-8701227da0fc719c76127d90e91d51d0_720w.jpg)

UNITY_CALC_FOG_FACTOR_RAW宏的实现在UnityCG.cginc文件中。

![img](https://pic1.zhimg.com/80/v2-317c59faf575ee722db6b06e16426a44_720w.jpg)



