---
layout: post
title: [转]Unity 之 C#效率篇
date: 2017-03-29 00:01:01
categories: unity
tags: unity
excerpt: Unity 之 C#效率篇
thread: 20160610
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---



```
o.zenithAngle.xyz = max(6e-2, t + 6e-2) + (max(0.0, -t) * _GroundColor.xyz);
o.zenithAngle.w = max(0, t);
```

- zenith：天顶

- - 天顶就是你所在的半天球的中心,也就是你天空视野最中心的位置

- 天顶区域的偏振特性受整个大气层的影响，而且受环境光以及周围建筑地表的影响均较小，非大气散射光线相对较少

- zenith angle： 天顶距

- - 在 [天体方位圈](https://baike.baidu.com/item/天体方位圈/188982) 上，天体与 [天顶](https://baike.baidu.com/item/天顶/8818690) 之间的角距离，称之为天顶距。计算：它由测站点 [铅垂线](https://baike.baidu.com/item/铅垂线/4973838) 的天顶起算，由0°量到180°。某一天体的天顶距等于该天体的地平高度之 [余角](https://baike.baidu.com/item/余角/10910657) （即90°-该天体的地平高度）。

 

```
float cosTheta = dot( pos, _ROCLightDir1); // need precision float in iOS
half cosine = cosTheta;

// optical depth
half3 sR = 8.0 / i.zenithAngle.xyz;
half3 sM = 1.2 / i.zenithAngle.xyz;
```

 

- optical depth： 光学深度

- - In physics, optical depth or optical thickness is the natural logarithm of the ratio of incident to transmitted radiant power through a material

入射辐射和透射辐射之比值的自然对数。

- - 均匀介质中光学厚度等于消光系数（extinction coefficient）乘以路径长度（distance）。

 

```
// sky color
half3 extinction = exp(-( _BetaR * sR + _BetaM * sM ));

half3 rayleigh = lerp( extinction * gr, 1 - extinction, _SkyMultiplier.x);
```

 

 

- 消光 Extinction

- - 吸收与外散射损失的光线就是消光 Extinction

- - 消光系数 Extinction coefficient βex = βab + βsc

- - 消光产生的总衰减L(s) = L0e-βex*s --> Fex(s) = e-βex*s

- 瑞利散射 Rayleigh Scattering

- - 瑞利散射是米氏散射的一种。

- - 当光线穿过大气层,大气中气体蓝色部分瑞利散射强烈，但是红色或黄色等波长长的瑞利散射很弱。

- - 由于天空产生的蓝色的光的散射，阳光到地面的颜色发黄。在日出日落中, 由于空气密度的增加和地球表面附近的粒子，瑞利散射效应更明显。

- - 相比之下,水滴组成云与可见光的波长大小类似，更倾向于米氏散射而非瑞利散射。假设所有可见光的波长分布大致相同,因此云看起来是是白色或灰色的。

 

```
#ifdef SKY_HQ

   half3 mie = rayleigh * sM / rayleigh.r * _MieC;

   // scattering phase
   half miePhase = _MieG.x * pow(_MieG.y - _MieG.z * cosine, -1.5 );

   half3 inScatter = ( rayleigh * 0.75 + mie * miePhase ) * (( 1.0 + cosine * cosine ) * _SkyMultiplier.y);

   half sun = min(1e3, pow((1 - cosine) * _LightParams.x, -1.5));

   half nocloud = 1 - step(1e-3, _CloudParams.z);

   sun *= nocloud;

   inScatter += sun * min(mie, i.zenithAngle.w) * extinction;
```

 

- 米氏散射  Mie Scattering

- - 烟雾和云散射牛奶、生物组织和乳胶漆之类大粒子

- - 在多云天气主要是米氏散射（水滴）

- - 发生米氏散射的介质中粒子大，为球形粒子

- - Phase function approximation: – Henyey-Greenstein 

- 内散射 In-scattering

- - 所有方向的光在视角方向的散射，来自太阳，天空，大地，我们只需要处理来自太阳的内散射即可

 

 

References:

1 https://developer.nvidia.com/gpugems/GPUGems2/gpugems2_chapter16.html

2 https://blog.csdn.net/wolf96/article/details/47144003

3 http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.192.1514&rep=rep1&type=pdf

4 https://gameinstitute.qq.com/community/detail/107336