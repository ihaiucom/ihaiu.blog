---
layout: post
title: Unity profiler 性能查看器里面描述的含义
date: 2017-06-23 13:51:00
categories: Unity
tags: Unity 优化 profiler
excerpt: Unity profiler 性能查看器里面描述的含义
shareexcerpt: Unity profiler 性能查看器里面描述的含义
thread: 2017031012510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_java: true
---

<br>

<table width="95%" style="word-wrap:break-word;table-layout:fixed;">
    <!-- 渲染模块 -->
    <tr>
        <th>Camera.Render</th>
        <th>渲染模块</th>
    </tr>



    <!-- 渲染模块/不透明渲染 -->
    <tr style="background-color: #88CCEE; font-weight:bold;">
        <td>Render.OpaqueGeometry</td>
        <td>不透明渲染</td>
    </tr>


     <tr style="background-color: #AADDFF; ">
        <td>MeshRenderer.Render</td>
        <td>非蒙皮网格渲染</td>
    </tr>

     <tr style="background-color: #AADDFF; ">
        <td>Mesh.DrawVBO</td>
        <td>Draw Call</td>
    </tr>
    
     <tr style="background-color: #AADDFF; ">
        <td>MeshShinning.Render</td>
        <td>蒙皮网格渲染</td>
    </tr>

     <tr style="background-color: #AADDFF; ">
        <td>Material.SetPassFast</td>
        <td>场景中不同材质数量造成；和DrawCall类似，如果两个相同材质物体中间有一个其他材质的物体，就无法合批，这个材质就会成2个SetPassFast</td>
    </tr>


    <!-- 渲染模块/半透明渲染 -->
    <tr> <td colspan="2" height="3px"> </td> </tr>

    <tr style="background-color: #88EECC; font-weight:bold;">
        <td>Render.TransparentGeometry</td>
        <td>半透明渲染</td>
    </tr>

     <tr style="background-color: #AAFFDD; ">
        <td>Mesh.DrawVBO</td>
        <td>NGUI 一般藏在这里面</td>
    </tr>
    
     <tr style="background-color: #AAFFDD; ">
        <td>ParticleSystem.ScheduleGeometryJobs</td>
        <td>粒子系统</td>
    </tr>

     <tr style="background-color: #AAFFDD; ">
        <td>ParticleSystem.SubmitVBO</td>
        <td>粒子系统渲染,提交粒子系统VBO的操作</td>
    </tr>
    
     <tr style="background-color: #AAFFDD; ">
        <td>BatchRenderer.Add</td>
        <td>UGUI一般藏在这里面, Canvas绑定了Camera的会显示在这里面。没有绑定Camera的Canvas不会显示在这里（Camera.Render）</td>
    </tr>


    <!-- 渲染模块/相机裁剪 -->
    <tr> <td colspan="2" height="3px"> </td> </tr>

    <tr style="background-color: #88CCEE; font-weight:bold;">
        <td>Culing</td>
        <td>相机裁剪</td>
    </tr>



     <tr style="background-color: #AADDFF; ">
        <td>ParticleSystem.ScheduleGeometryJobs</td>
        <td>
        这个函数不仅出现在Render.TransparentGeometry，也会出现在Culing里。通常他的时间占比比较高（2%-3%左右）。<br><br>
        如果粒子系统没有在摄像视窗内就不会有；如果在摄像机视窗内部的粒子系统越多,消耗越大。所以与摄像机视窗内粒子系统个数成正比。<br><br>
        主线程：ParticleSystem.ScheduleGeometryJobs<br><br>
        子线程：ParticleSystem.GeometryJobs<br><br>
        分析：  主线程做任务调度，子线程做粒子模拟<br>
        </td>
    </tr>

    <!-- 渲染模块/图形后期处理 -->
    <tr> <td colspan="2" height="3px"> </td> </tr>

    <tr style="background-color: #88EECC; font-weight:bold;">
        <td>Camera.ImageEffects</td>
        <td>图形后期处理</td>
    </tr>




</table>
<br>
<br>

<!-- 渲染模块 -->
<h1 class="nav1">渲染模块</h1>
<p><img src="/assets/docpic/unity_profiler_00.png" style="border: solid 1px #666;" /></p>

<!-- 渲染模块/不透明渲染 -->
<br>
<h1 class="nav2">渲染模块/不透明渲染</h1>
<p><img src="/assets/docpic/unity_profiler_01.png" style="border: solid 1px #666;" /></p>

<!-- 渲染模块/不透明渲染/Material.SetPassFast -->
<br>
<h3>Material.SetPassFast</h3>
<p><img src="/assets/docpic/unity_profiler_02.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_03.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_04.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_05.jpg" style="border: solid 1px #666;" /></p>
<p>Render State包含深度测试、半透明渲染、Blend混合、材质Texture修改和绑定.<br>所以优化不仅要控制DrawCall，还有控制Material的数量，不能太多。</p>



<!-- 渲染模块/半透明渲染 -->
<br>
<h1 class="nav2">渲染模块/半透明渲染</h1>
<p><img src="/assets/docpic/unity_profiler_06.jpg" style="border: solid 1px #666;" /></p>

<!-- 渲染模块/相机裁剪 -->
<br>
<h1 class="nav2">渲染模块/相机裁剪</h1>
<p><img src="/assets/docpic/unity_profiler_07.jpg" style="border: solid 1px #666;" /></p>

<h3>ParticleSystem.ScheduleGeometryJobs</h3>
<p><img src="/assets/docpic/unity_profiler_08.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_09.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_10.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_11.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_12.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_13.jpg" style="border: solid 1px #666;" /></p>


<h1 class="nav1">渲染模块,如何优化?</h1>
<p>根据上面提到的查看profiler，定位问题出在哪个定方。然后去对美术效果做删减，让美术效果和运行效率做一个平衡。</p>
<br>
<h3>问题方向</h3>
<p><img src="/assets/docpic/unity_profiler_14.jpg" style="border: solid 1px #666;" /></p>

<p><img src="/assets/docpic/unity_profiler_15.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_16.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_17.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_18.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_19.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_20.jpg" style="border: solid 1px #666;" /></p>

<br>
<br>
<h1 class="nav2">定量实验分析 不透明物体渲染性能实验</h1>
<p><img src="/assets/docpic/unity_profiler_21.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_22.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_23.jpg" style="border: solid 1px #666;" /></p>
<p>纵坐标：渲染耗时 单位毫秒。</p>
<p>横坐标：物体面片数。</p>
<p>柱状图：不同颜色材质数量</p>
<p>发现1：随着材质数的增加，渲染耗时也增加；物体面片数的增加，渲染耗时并不那么明显。</p>
<p>发现2：60个物体图和120个物体图对比，可以发现因为Draw Call数量的增加，对渲染耗时有比较大的影响。</p>
<br>
<p><img src="/assets/docpic/unity_profiler_24.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_25.jpg" style="border: solid 1px #666;" /></p>
<p>为什么小于5毫秒呢？<br>
因为游戏一般以30帧为界限。<br>
假如游戏设定帧频为30帧，那么每帧的时间是33毫秒。<br>
在这33毫秒中分配给渲染大概是15毫秒。<br>
在这15毫秒中要做：不透明物体渲染、半透明物体渲染、阴影、粒子系统、图像后处理等。<br>
所以分配给不透明物体渲染的时间大概在3-5毫秒。<br><br>
在本次测试中不开启多线程渲染，为什么呢？<br>
因为开启了多线程渲染，主线程中提交DrawCall与图像API的交互操作转移到了渲染线程。使得用Camera.Render衡量不准确。
</p>
<br>

<p><img src="/assets/docpic/unity_profiler_26.jpg" style="border: solid 1px #666;" /></p>

<p>横向表头：面片数</p>
<p>纵向表头：物体数量</p>
<p>boady：渲染耗时，小于5毫秒用红色标识。可以看到在红米2中没有小于5毫秒的情况</p>
<p>可以看到在红米2中没有小于5毫秒的情况，因此在红米2上建议采用面片数量小于600的模型，物体数量小于60个。</p>
<br>

<p><img src="/assets/docpic/unity_profiler_27.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_28.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_29.jpg" style="border: solid 1px #666;" /></p>
<br>
<br>
<h1 class="nav2">定量实验分析 不透明物体渲染性能实验</h1>
<p><img src="/assets/docpic/unity_profiler_30.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_31.jpg" style="border: solid 1px #666;" /></p>

<p>纵向表头：渲染耗时</p>
<p>横向表头：粒子系统数量</p>
<p>柱状图：单个粒子系统的粒子统数量</p>
<p>红米2中可以看到：</p>
<p>粒子系统数量越多，消耗越大。</p>
<p>粒子系统中的粒子数量越多，消耗越大。</p>
<br>
<p><img src="/assets/docpic/unity_profiler_32.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_33.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_34.jpg" style="border: solid 1px #666;" /></p>

<p>横向表头：单个粒子系统的粒子统数量</p>
<p>纵向表头：粒子系统数量</p>
<p>boady：渲染耗时，小于5毫秒用红色标识。可以看到在红米2中小于5毫秒的情况设置是30个粒子系统，单个粒子系统的粒子个数40</p>
<br>
<p><img src="/assets/docpic/unity_profiler_35.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_36.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_37.jpg" style="border: solid 1px #666;" /></p>

<br>
<br>
<h1 class="nav2">定量实验分析 Shadow</h1>
<p><img src="/assets/docpic/unity_profiler_38.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_39.jpg" style="border: solid 1px #666;" /></p>
<p>纵向表头：Camera.Render渲染总耗时 （毫秒）</p>
<p>横向表头：物体的个数</p>
<p>柱状图：表示低、中、高三种分辨率的ShadowMap</p>
<p>红米2测试，面片数选择500个</p>
<p>ShadowMap分辨率 （低、中）和（高）有很大的差距</p>
<p>ShadowMap分辨率 （低）和（中）差距不是很大</p>
<br>

<p><img src="/assets/docpic/unity_profiler_40.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_41.jpg" style="border: solid 1px #666;" /></p>
<p>横向表头：单个物体的面片数量</p>
<p>纵向表头：物体数量</p>
<p>boady：渲染耗时，小于5毫秒用红色标识。可以看到在红米2中没有小于5毫秒的情况,因此在红米2上建议不要开启实时阴影。</p>
<br>

<p><img src="/assets/docpic/unity_profiler_42.jpg" style="border: solid 1px #666;" /></p>
<p>红米note2中最大支持面片数为1500个的物体20个。</p>
<br>

<p><img src="/assets/docpic/unity_profiler_43.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_44.jpg" style="border: solid 1px #666;" /></p>

<br>
<br>
<h1 class="nav2">定量实验分析 PBR与简单光照对比</h1>
<p><img src="/assets/docpic/unity_profiler_45.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_46.jpg" style="border: solid 1px #666;" /></p>
<p>纵向表头：Camera.Render渲染总耗时 （毫秒）</p>
<p>横向表头：物体的个数</p>
<p>蓝色：diffuse材质，没有贴图</p>
<p>红色：diffuse材质，有贴图</p>
<p>灰色：pdr材质</p>
<br>
<p>发现：pdr材质比diffuse耗时高一些，没有高很多，60个物体高2ms，300个物体高4ms。</p>
<p>为什么呢？</p>
<p>因为pdr的主要工作在gpu</p>
<br>

<p><img src="/assets/docpic/unity_profiler_47.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_48.jpg" style="border: solid 1px #666;" /></p>
<p>横向表头：单个物体的面片数量</p>
<p>纵向表头：物体数量</p>
<p>boady：渲染耗时，小于5毫秒用红色标识。可以看到在红米2中没有小于5毫秒的情况,因此在红米2上建议不要使用pdr。</p>
<br>

<p><img src="/assets/docpic/unity_profiler_49.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_50.jpg" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_51.jpg" style="border: solid 1px #666;" /></p>

<br>
<br>
<h1 class="nav2">定量实验分析 多线程性能提升实验</h1>
<p><img src="/assets/docpic/unity_profiler_52.jpg" style="border: solid 1px #666;" /></p>

<br>
<br>
<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="https://v.qq.com/x/page/y051477ktzc.html">UWA六月直播季第二弹之Unity引擎渲染效率全解析 </a></p>
<p><a target="_blank" href="https://v.qq.com/x/page/r0329jx2ijw.html">UWA直播回顾| UGUI性能优化技巧</a></p>
<p><a target="_blank" href="http://www.cnblogs.com/zhaoqingqing/p/5059479.html">Unity Profiler 性能分析</a></p>
<p><a target="_blank" href="https://sanwen.net/a/hhczzoo.html">PBR的基本理论</a></p>