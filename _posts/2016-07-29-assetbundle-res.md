---
layout: post
title: AssetBundle学习资源汇总
date: 2016-07-29 16:35:30
categories: Unity
tags: AssetBundle
excerpt: Unity3D 5.3 新版AssetBundle使用方案及策略<br>Unity5Assetbundle简单使用及打包Material文件超大的问题<br>Unity3D AssetBundle Manager
thread: 20160728163530
author: 大海明月
authorlink: 593705098
thumbnail: /assets/docpic/assetbundle.png
---

<br><br>

* [Unity3D 5.3 新版AssetBundle使用方案及策略](http://www.cnblogs.com/murongxiaopifu/p/5629415.html)
* [Unity5Assetbundle简单使用及打包Material文件超大的问题](http://www.it165.net/pro/html/201506/43896.html) 
* [Unity3D AssetBundle Manager](https://www.assetstore.unity3d.com/en/#!/content/45836)
* [加载模块深度解析（一）Texture](http://blog.uwa4d.com/archives/LoadingPerformance_Texture.html)
* [加载模块深度解析（二）Mesh](http://blog.uwa4d.com/archives/LoadingPerformance_Mesh.html)
* [加载模块深度解析（三）Shader](http://blog.uwa4d.com/archives/LoadingPerformance_Shader.html)
* [Unity3D asset bundle 格式简析](http://blog.codingnow.com/2014/08/unity3d_asset_bundle.html)
* [YAML Class ID Reference](http://docs.unity3d.com/Manual/ClassIDReference.html)
* [AssetBundlePatch 对 Unity3d 的 AssetBundle进行差异更新](https://github.com/dpull/AssetBundlePatch)
* [disunity](https://github.com/ata4/disunity)



<br><br> 


## <b>问题：</b>Unity3D 5 打包AssetBundle加载发现C#脚本丢失

> <b>原因：</b>是多个Prefab用了同一个C#组件，然后打包的时候没有忽略C#。 这样就设置成了 prefabA.assetbunld、 prefabB.assetbunld、 code.assetbunld。 但是Unity对代码是不会生成AssetBunld的，所以code.assetbundle不会生成出来。 但是prefabA.assetbunld和prefabB.assetbunld中用到的code序列化以为它单独打包了。所以实例化后就会发现Prefab的C#组件丢失 <br>
> <br>
> <b>解决：</b>打包AssetBundle时忽略掉依赖的C#文件 <br>

<br><br> <br><br>