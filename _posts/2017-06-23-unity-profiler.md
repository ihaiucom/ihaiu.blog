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

    <tr>
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
<p><img src="/assets/docpic/unity_profiler_12.png" style="border: solid 1px #666;" /></p>




<br>
<br>
<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="https://v.qq.com/x/page/y051477ktzc.html">UWA六月直播季第二弹之Unity引擎渲染效率全解析 </a></p>
<p><a target="_blank" href="https://v.qq.com/x/page/r0329jx2ijw.html">UWA直播回顾| UGUI性能优化技巧</a></p>
<p><a target="_blank" href="http://www.cnblogs.com/zhaoqingqing/p/5059479.html">Unity Profiler 性能分析</a></p>

<br>
