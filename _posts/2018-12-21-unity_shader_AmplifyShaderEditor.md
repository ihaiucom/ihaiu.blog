---
layout: post
title: Unity Shader 之 Amplify Shader Editor
date: 2018-12-21 9:50:00
categories: game
tags: game
excerpt: Unity Shader 之 Amplify Shader Editor
shareexcerpt: Unity Shader 之 Amplify Shader Editor
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

<br>
<br>

<div>

	<h2 class="c16 c19" id="h.quh3d6w2lfof"><span class="c8"></span></h2>
  <h2 class="c16" id="h.quh3d6w2lfof-1"><span class="c12">相关文档</span></h2>
  <p class="c23"><span class="c14"><a class="c9" href="https://blog.csdn.net/m0_37283423/article/details/72136536&amp;sa=D&amp;ust=1545712388227000">Amplify Shader Editor入门教程</a></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c23"><span class="c14"><a class="c9" href="http://wiki.amplify.pt/index.php?title%3DUnity_Products:Amplify_Shader_Editor&amp;sa=D&amp;ust=1545712388227000">Unity Products:Amplify Shader Editor 官方文档</a></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c23"><span class="c14"><a class="c9" href="https://docs.unity3d.com/Manual/SL-Reference.html&amp;sa=D&amp;ust=1545712388227000">Unity: Shader Reference</a></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c23"><span class="c14"><a class="c9" href="https://unity3d.com/cn/get-unity/download/archive&amp;sa=D&amp;ust=1545712388228000">Unity: 去下载想要版本的内置Shader</a></span></p>
  <h2 class="c16 c19" id="h.zc3j1qyajn2e"><span class="c12"></span></h2>
  <h2 class="c16 c19" id="h.az05ahpf5k5d"><span class="c12"></span></h2>
  <h1 class="c11" id="h.4fo9ybhqkssv"><span class="c2">1.主属性（Main Properties）</span></h1>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 249.00px; height: 388.00px;"><img alt="" src="../images/amplifyshader_01/image27.png" style="width: 249.00px; height: 388.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <h2 class="c16" id="h.7qa76b8ic1ww"><span class="c12">光照模型</span></h2>
  <p class="c6"><span class="c22">定义表面如何反射光，通常称为所使用的着色器类型。 ASE目前提供标准（金属 Standard（Metallic））、标准镜面（Standard Specular）、Lambert和Blinn Phong。</span></p>
  <h2 class="c7" id="h.aeqrodfrjgob"><span class="c8">Lamber</span></h2>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 260.00px;"><img alt="" src="../images/amplifyshader_01/image52.png" style="width: 602.00px; height: 260.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <h2 class="c7" id="h.lkgxorsaa626"><span class="c8">标准镜面（Standard Specular）</span></h2>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 208.00px;"><img alt="" src="../images/amplifyshader_01/image43.png" style="width: 602.00px; height: 208.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <h2 class="c7" id="h.alr2tfnn7z0r"><span class="c8">Blinn Phong</span></h2>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 230.67px;"><img alt="" src="../images/amplifyshader_01/image19.png" style="width: 602.00px; height: 230.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <h2 class="c7" id="h.3qsr502gynpm"><span class="c8">Unlit (无光源)</span></h2>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 305.33px;"><img alt="" src="../images/amplifyshader_01/image6.png" style="width: 602.00px; height: 305.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <h2 class="c7" id="h.z42fufynjpm1"><span class="c8">自定义光照</span></h2>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 397.33px;"><img alt="" src="../images/amplifyshader_01/image22.png" style="width: 602.00px; height: 397.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <h2 class="c16 c19" id="h.hvcopliioe1f"><span class="c8"></span></h2>
  <h2 class="c16" id="h.3je57opqhywk"><span class="c21">查看Unity内置光照模型源码</span></h2>
  <ol class="c4 lst-kix_d53mlxx680aj-0 start" start="1">
   <li class="c5"><span>去官网下载 对应版本的 </span><span class="c17 c25">内置着色器</span></li>
   <li class="c5"><span class="c17">解压将怎个文件夹拖到Sublime Text</span></li>
   <li class="c5"><span class="c17">搜索文件 </span></li>
  </ol>
  <p class="c0"><span class="c17 c26"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 340.00px;"><img alt="" src="../images/amplifyshader_01/image28.png" style="width: 602.00px; height: 340.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <h2 class="c16 c19" id="h.b4yxzu8e90tx"><span class="c12"></span></h2>
  <h1 class="c11" id="h.fs903zeuo58s"><span class="c21">着色器模型（Shader Model）</span></h1>
  <h1 class="c11" id="h.eke219kzz90c"><span class="c22">当编写表面着色器或常规着色器程序时，HLSL源可以编译成不同的“着色器模型”。更高的着色器编译目标允许使用更多的现代GPU功能，但可能使得着色器不能在较旧的GPU或平台上工作。</span></h1>
  <h1 class="c11" id="h.tj5vshtb8rzm"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 198.67px;"><img alt="" src="../images/amplifyshader_01/image20.png" style="width: 602.00px; height: 198.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></h1>
  <p class="c0"><span class="c3"></span></p>
  <p class="c6"><span class="c21">精度（Precision）</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">定义内部计算的精度，使用较低类型提供了额外的性能提升以换取一些精度。默认设置为Float。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 49.33px;"><img alt="" src="../images/amplifyshader_01/image41.png" style="width: 602.00px; height: 49.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c21">剔除模式（Cull Mode）</span></p>
  <p class="c6"><span class="c1">Front – 剔除前向几何体，Back – 剔除后向几何体，关闭 - 禁用剔除（双面材料）。默认情况下设置为Back。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 168.00px;"><img alt="" src="../images/amplifyshader_01/image56.png" style="width: 602.00px; height: 168.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 117.33px;"><img alt="" src="../images/amplifyshader_01/image1.png" style="width: 602.00px; height: 117.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c0"><span class="c3"></span></p>
  <p class="c6"><span class="c21">渲染路径（Render Path）</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">允许您定义着色器支持哪种模式（提前Forward / 延时Deferred）。默认设置为全部。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c20">Forward Only:</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 93.33px;"><img alt="" src="../images/amplifyshader_01/image30.png" style="width: 602.00px; height: 93.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c20">Deferred Only:</span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 73.33px;"><img alt="" src="../images/amplifyshader_01/image36.png" style="width: 602.00px; height: 73.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c21">投射阴影（Cast Shadows）</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">定义使用着色器的对象是否投射阴影。</span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 50.67px;"><img alt="" src="../images/amplifyshader_01/image54.png" style="width: 602.00px; height: 50.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c21">接收阴影（Receive Shadows）</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">定义使用着色器的对象是否接收阴影，这包括自阴影（只有使用正向渲染）。</span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 48.00px;"><img alt="" src="../images/amplifyshader_01/image31.png" style="width: 602.00px; height: 48.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c21">队列索引（Queue Index）</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">渲染队列偏移值，接受正（较晚）和负（较早）整数。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 58.67px;"><img alt="" src="../images/amplifyshader_01/image48.png" style="width: 602.00px; height: 58.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c21">LOD</span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 168.00px;"><img alt="" src="../images/amplifyshader_01/image46.png" style="width: 602.00px; height: 168.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h1 class="c11" id="h.69cuwupucu8k"><span class="c2">2. 混合模式（Blend Mode）</span></h1>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 249.00px; height: 398.00px;"><img alt="" src="../images/amplifyshader_01/image9.png" style="width: 249.00px; height: 398.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.ruhszks3w5ox"><span class="c15">混合模式（Blend Mode）：</span></h3>
  <p class="c6"><span class="c1">所选模式自动调整可用参数;不透明（Opaque），遮罩（Masked），透明（Transparent），Alpha预乘（Alpha &nbsp;Transparent）或自定义（Custom）。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.9cjc0qpkaesw"><span class="c18">不透明（Opaque）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 321.33px;"><img alt="" src="../images/amplifyshader_01/image42.png" style="width: 602.00px; height: 321.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.frhaivzenmvg"><span class="c18">遮罩（Masked）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 340.00px;"><img alt="" src="../images/amplifyshader_01/image40.png" style="width: 602.00px; height: 340.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 169.33px;"><img alt="" src="../images/amplifyshader_01/image32.png" style="width: 602.00px; height: 169.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.ir6g9akof1tw"><span class="c18">透明（Transparent）</span></h4>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 313.33px;"><img alt="" src="../images/amplifyshader_01/image15.png" style="width: 602.00px; height: 313.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 178.67px;"><img alt="" src="../images/amplifyshader_01/image4.png" style="width: 602.00px; height: 178.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 342.67px;"><img alt="" src="../images/amplifyshader_01/image50.png" style="width: 602.00px; height: 342.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 169.33px;"><img alt="" src="../images/amplifyshader_01/image24.png" style="width: 602.00px; height: 169.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.uaeembwtkner"><span class="c18">Alpha预乘（Alpha &nbsp;Transparent）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 324.00px;"><img alt="" src="../images/amplifyshader_01/image51.png" style="width: 602.00px; height: 324.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 157.33px;"><img alt="" src="../images/amplifyshader_01/image33.png" style="width: 602.00px; height: 157.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.yco9d770ggv4"><span class="c15">渲染类型（Render Type）：</span></h3>
  <p class="c6"><span class="c1">该标记将着色器分为几个预定义组。可用标签：不透明（Opaque），透明（Transparent），透明抠出（Transparent Cutout），背景（Background），覆盖（Overlay），不透明树（Tree Opaque），透明树剪出（Tree Transparent Cutout），布告板树（Tree Billboard），草和布告板草皮（Grass and Grass Billboard）。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.qrh7u9739k60"><span class="c15">渲染队列（Render Queue）：</span></h3>
  <p class="c6"><span class="c1">为了获得最佳性能，通过几何体渲染队列排布，从而优化对象的绘制顺序。所有其他渲染队列按距离对对象进行排序，从最远的那些开始渲染，并以最接近的结束。可用选项有背景、几何、Alpha测试、透明和覆盖。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.lfrw3qxtk6vy"><span class="c15">掩码片段值（Mask Clip Value）：</span></h3>
  <p class="c6"><span class="c1">要与不透明度alpha比较的默认值。 0完全不透明，1完全掩蔽。默认设置为0，常用于透明抠出（Transparent Cutout）材质。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.o6xoleoxm3iq"><span class="c15">混合RGB和混合Alpha（Blend RGB and Blend Alpha）：</span></h3>
  <p class="c6"><span class="c1">当渲染图形时，在所有着色器执行并且所有纹理都应用后，像素被写入屏幕。它们如何与已经存在的内容组合由Blend命令控制。 ASE目前提供定制、Alpha混合（Alpha Blend）、预乘（Premultiplied）、加法（Additive）、软加法（Soft Additive）、乘法（Multiplicative）和2x乘法（2x Multiplicative）模式。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.hjop1yxmzex6"><span class="c18">Alpha混合（Alpha Blend）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 484.00px; height: 300.00px;"><img alt="" src="../images/amplifyshader_01/image34.png" style="width: 484.00px; height: 300.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 82.67px;"><img alt="" src="../images/amplifyshader_01/image47.png" style="width: 602.00px; height: 82.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.a3xxa9gy038e"><span class="c18">预乘（Premultiplied）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 492.00px; height: 334.00px;"><img alt="" src="../images/amplifyshader_01/image7.png" style="width: 492.00px; height: 334.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 77.33px;"><img alt="" src="../images/amplifyshader_01/image37.png" style="width: 602.00px; height: 77.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.rloeuk676gb1"><span class="c18">加法（Additive）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 496.00px; height: 546.00px;"><img alt="" src="../images/amplifyshader_01/image53.png" style="width: 496.00px; height: 546.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 76.00px;"><img alt="" src="../images/amplifyshader_01/image49.png" style="width: 602.00px; height: 76.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.s4xysu8gq24"><span class="c18">软加法（Soft Additive）</span></h4>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 244.00px;"><img alt="" src="../images/amplifyshader_01/image57.png" style="width: 602.00px; height: 244.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 600.00px; height: 74.00px;"><img alt="" src="../images/amplifyshader_01/image17.png" style="width: 600.00px; height: 74.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.l1kie1afm7xc"><span class="c18">乘法（Multiplicative）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 268.00px;"><img alt="" src="../images/amplifyshader_01/image39.png" style="width: 602.00px; height: 268.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 65.33px;"><img alt="" src="../images/amplifyshader_01/image14.png" style="width: 602.00px; height: 65.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.ujgpj9h5fhpd"><span class="c18">2x乘法（2x Multiplicative）</span></h4>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 260.00px;"><img alt="" src="../images/amplifyshader_01/image21.png" style="width: 602.00px; height: 260.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 48.00px;"><img alt="" src="../images/amplifyshader_01/image23.png" style="width: 602.00px; height: 48.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.oonlti3mamth"><span class="c18">粒子叠加 （Particle Additive）</span></h4>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 250.67px;"><img alt="" src="../images/amplifyshader_01/image35.png" style="width: 602.00px; height: 250.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 512.00px; height: 66.00px;"><img alt="" src="../images/amplifyshader_01/image5.png" style="width: 512.00px; height: 66.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h4 class="c13" id="h.wbee2lx5abwp"><span class="c18">混合因子（Blend Factor）（SrcFactor ＆ DstFactor）：</span></h4>
  <p class="c6"><span class="c1">以下所有属性都适用于混合命令中的SrcFactor＆DstFactor。源指的是计算的颜色，目标是已经在屏幕上的颜色。如果BlendOp使用逻辑运算，则忽略混合因子。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 600.00px; height: 304.00px;"><img alt="" src="../images/amplifyshader_01/image29.png" style="width: 600.00px; height: 304.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.v0xu9gjzgwl8"><span class="c15">混合操作RGB和混合操作Alpha（Blend Op RGB &amp; Blend Op Alpha）：</span></h3>
  <p class="c6"><span class="c1">添加（Add）、子（Sub）、修改子（Rev Sub）、最小（Min）和最大（Max）。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 260.00px;"><img alt="" src="../images/amplifyshader_01/image18.png" style="width: 602.00px; height: 260.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 58.67px;"><img alt="" src="../images/amplifyshader_01/image16.png" style="width: 602.00px; height: 58.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h3 class="c10" id="h.8ndyhgxc162"><span class="c15">颜色蒙版（Color Mask）：</span></h3>
  <p class="c6"><span class="c1">设置颜色通道写入蒙版，将其全部关闭使其不可见。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 444.00px; height: 70.00px;"><img alt="" src="../images/amplifyshader_01/image12.png" style="width: 444.00px; height: 70.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 372.00px; height: 48.00px;"><img alt="" src="../images/amplifyshader_01/image3.png" style="width: 372.00px; height: 48.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h1 class="c11" id="h.69s45ybbhq26"><span class="c2">3.模板缓冲（Stencil Buffer）</span></h1>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 249.00px; height: 320.00px;"><img alt="" src="../images/amplifyshader_01/image13.png" style="width: 249.00px; height: 320.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 488.00px; height: 310.00px;"><img alt="" src="../images/amplifyshader_01/image45.png" style="width: 488.00px; height: 310.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">模板缓冲器可以用作每像素掩模的通用目的，用于保存或丢弃像素。它通常是每个像素8位整数。该值可以写入、递增或递减。 后续绘制调用可以根据该值进行测试，以决定是否应该在运行像素着色器之前丢弃该像素。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">参考（Reference）：要比较的值和/或要写入缓冲区的值（如果Pass，Fail或ZFail设置为替换）。范围是0-255整数。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">读取掩码（Read Mask）：作为0-255整数的8位掩码，用于将参考值与缓冲区（referenceValue＆readMask），比较方法comparisonFunction（stencilBufferValue＆readMask）的内容进行比较。默认值是255。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">写掩码（Write Mask）：8位掩码，作为0-255整数，写入缓冲区时使用。默认值是255。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">比较（Comparison）：用于将参考值与缓冲区的当前内容进行比较的函数。默认值是always。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">通过（Pass）：如果模板测试（和深度测试）通过，对缓冲区的内容做什么。默认值是keep。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">失败（Fail）：如果模板测试失败，对缓冲区的内容做什么。默认值是keep。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">ZFail（ZFail）：如果模板测试通过，则缓冲区的内容如何处理，但深度测试失败。默认值是keep。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h1 class="c11" id="h.cm29mt2luaqm"><span class="c2">4. 曲面细分（Tessellation）</span></h1>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 249.00px; height: 282.00px;"><img alt="" src="../images/amplifyshader_01/image10.png" style="width: 249.00px; height: 282.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 450.00px; height: 244.00px;"><img alt="" src="../images/amplifyshader_01/image8.png" style="width: 450.00px; height: 244.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 374.67px;"><img alt="" src="../images/amplifyshader_01/image55.png" style="width: 602.00px; height: 374.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">冯氏曲面细分（Phong）：修改细分面的位置，使得生成的面稍微跟随网格法线，默认设置为OFF。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">类型（Type）：定义所使用的技术，基于距离、固定、边长和边长Cull。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">曲面细分因子（Tess）：范围是1-32。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">最小值（Min）：最小细分距离。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">最大值（Max）：最大细分距离。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h1 class="c11" id="h.sv0lpf5wcy8y"><span class="c2">5. 深度（Depth）</span></h1>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 486.00px; height: 310.00px;"><img alt="" src="../images/amplifyshader_01/image26.png" style="width: 486.00px; height: 310.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 202.67px;"><img alt="" src="../images/amplifyshader_01/image2.png" style="width: 602.00px; height: 202.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">ZWrite模式（ZWrite Mode）：控制来自此对象的像素是否写入深度缓冲区（默认为开）。如果你画的是实体对象，请保持此状态。如果您绘制半透明效果，请切换到ZWrite Off。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">ZTest模式（ZTest Mode）：如何进行深度测试。默认值为LEqual（将对象从现有对象或远距离绘制为现有对象;隐藏其后面的对象）。 ASE提供ZTest 小于（Less）、大于（Greater）、小于等于（LEqual）、大于等于（GEqual）、等于（Equal）、不等于（NotEqual）和通常（Always）。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">偏移（Offset）：允许您使用两个参数指定深度偏移 — 因子和单位。因子相对于多边形的X或Y缩放最大Z斜率，单位缩放最小可分辨深度缓冲区值。这允许您强制一个多边形绘制在另一个顶部，虽然它们实际上在相同的位置。例如，偏移（0，-1）拉动多边形更接近相机忽略多边形的斜率，而偏移（-1，-1）将拉近多边形，看看掠角。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">因子（Factor）：相对于多边形的X或Y，缩放最大Z斜率。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">单位（Units）：单位缩放最小可分辨深度缓冲区值。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h1 class="c11" id="h.adhkeliftpgz"><span class="c2">渲染选项</span></h1>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 492.00px; height: 632.00px;"><img alt="" src="../images/amplifyshader_01/image25.png" style="width: 492.00px; height: 632.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 73.33px;"><img alt="" src="../images/amplifyshader_01/image44.png" style="width: 602.00px; height: 73.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <h1 class="c11" id="h.sllmxy1xka3z"><span class="c2">6. 渲染平台（Rendering Platforms）</span></h1>
  <p class="c6"><span class="c1">定义支持哪些平台， 默认设置为全部。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 510.00px; height: 540.00px;"><img alt="" src="../images/amplifyshader_01/image38.png" style="width: 510.00px; height: 540.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c6"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 138.67px;"><img alt="" src="../images/amplifyshader_01/image11.png" style="width: 602.00px; height: 138.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" /></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">7. 可用属性（Available Properties）</span></p>
  <p class="c6"><span class="c1">设置为属性（Property）的变量将在此部分中列出，您可以通过拖动它们来调整它们的位置。</span></p>
  <p class="c0"><span class="c1"></span></p>
  <p class="c6"><span class="c1">&nbsp;</span></p>
</div>