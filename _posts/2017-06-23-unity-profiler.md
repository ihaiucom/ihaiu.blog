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

<table>
    <!-- 渲染模块 -->
    <tr>
        <td>Camera.Render</td>
        <td>渲染模块</td>
    </tr>
    <tr> <td colspan="2" height="3px"> <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color=#987cb9 SIZE=3> </td> </tr>



    <!-- 渲染模块/不透明渲染 -->
    <tr>
        <td>Render.OpaqueGeometry</td>
        <td>不透明渲染</td>
    </tr>
    <tr> <td colspan="2" height="2px"> <HR style="border:1 dashed #987cb9" width="80%" color=#987cb9 SIZE=1> </td> </tr>


     <tr>
        <td>MeshRenderer.Render</td>
        <td>非蒙皮网格渲染</td>
    </tr>

     <tr>
        <td>Mesh.DrawVBO</td>
        <td>Draw Call</td>
    </tr>
    
     <tr>
        <td>MeshShinning.Render</td>
        <td>蒙皮网格渲染</td>
    </tr>

     <tr>
        <td>Material.SetPassFast</td>
        <td>场景中不同材质数量造成；和DrawCall类似，如果两个相同材质物体中间有一个其他材质的物体，就无法合批，这个材质就会成2个SetPassFast</td>
    </tr>


    <!-- 渲染模块/半透明渲染 -->
    <tr> <td colspan="2" height="3px"> <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color=#987cb9 SIZE=3> </td> </tr>

    <tr>
        <td>Render.TransparentGeometry</td>
        <td>半透明渲染</td>
    </tr>
    <tr> <td colspan="2" height="2px"> <HR style="border:1 dashed #987cb9" width="80%" color=#987cb9 SIZE=1> </td> </tr>

     <tr>
        <td>Mesh.DrawVBO</td>
        <td>NGUI 一般藏在这里面</td>
    </tr>
    
     <tr>
        <td>ParticleSystem.ScheduleGeometryJobs</td>
        <td>粒子系统</td>
    </tr>

     <tr>
        <td>ParticleSystem.SubmitVBO</td>
        <td>粒子系统渲染</td>
    </tr>
    
     <tr>
        <td>BatchRenderer.Add</td>
        <td>UGUI一般藏在这里面</td>
    </tr>


    <!-- 渲染模块/相机裁剪 -->
    <tr> <td colspan="2" height="3px"> <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color=#987cb9 SIZE=3> </td> </tr>

    <tr>
        <td>Culing</td>
        <td>相机裁剪</td>
    </tr>

    <!-- 渲染模块/图形后期处理 -->
    <tr> <td colspan="2" height="3px"> <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="80%" color=#987cb9 SIZE=3> </td> </tr>

    <tr>
        <td>Camera.ImageEffects</td>
        <td>图形后期处理</td>
    </tr>




</table>


<!-- 渲染模块 -->
<h1 class="nav1">渲染模块</h1>
<p><img src="/assets/docpic/unity_profiler_00.png" style="border: solid 1px #666;" /></p>

<!-- 渲染模块/不透明渲染 -->
<h1 class="nav2">渲染模块/不透明渲染</h1>
<p><img src="/assets/docpic/unity_profiler_01.png" style="border: solid 1px #666;" /></p>

<!-- 渲染模块/不透明渲染/Material.SetPassFast -->
<h3>Material.SetPassFast</h3>
<p><img src="/assets/docpic/unity_profiler_02.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_03.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_04.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/unity_profiler_05.png" style="border: solid 1px #666;" /></p>
<p>Render State包含深度测试、半透明渲染、Blend混合、材质Texture修改和绑定.<br>所以优化不仅要控制DrawCall，还有控制Material的数量，不能太多。</p>



<!-- 渲染模块/半透明渲染 -->
<h1 class="nav2">渲染模块/半透明渲染</h1>
<p><img src="/assets/docpic/unity_profiler_06.png" style="border: solid 1px #666;" /></p>




<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="https://v.qq.com/x/page/y051477ktzc.html">UWA六月直播季第二弹之Unity引擎渲染效率全解析 </a></p>
<p><a target="_blank" href="https://v.qq.com/x/page/r0329jx2ijw.html">UWA直播回顾| UGUI性能优化技巧</a></p>
<br>
