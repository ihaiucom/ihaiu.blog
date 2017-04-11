---
layout: post
title: 【转】贝塞尔曲线的数学原理
date: 2017-04-11 13:51:00
categories: 数学
tags: 数学 贝塞尔 Bezier
excerpt: Bézier curve(贝塞尔曲线)是应用于二维图形应用程序的数学曲线。 曲线定义：起始点、终止点（也称锚点）、控制点。通过调整控制点，贝塞尔曲线的形状会发生变化
shareexcerpt: Bézier curve(贝塞尔曲线)是应用于二维图形应用程序的数学曲线。 曲线定义：起始点、终止点（也称锚点）、控制点。通过调整控制点，贝塞尔曲线的形状会发生变化
thread: 2017041112510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_java: true
---



<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="http://blog.csdn.net/likendsl/article/details/7852658">贝塞尔曲线的数学原理</a></p>
<p><a target="_blank" href="https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A">贝塞尔曲线(维基百科)</a></p>
<p><a target="_blank" href="http://www.cs.mtu.edu/~shene/COURSES/cs3621/NOTES/spline/Bezier/de-casteljau.html">Finding a Point on a Bézier Curve: De Casteljau's Algorithm</a></p>

<br>
<br>


<p>
Bézier curve(贝塞尔曲线)是应用于二维图形应用程序的数学曲线。 曲线定义：起始点、终止点（也称锚点）、控制点。通过调整控制点，贝塞尔曲线的形状会发生变化。 1962年，法国数学家Pierre Bézier第一个研究了这种矢量绘制曲线的方法，并给出了详细的计算公式，因此按照这样的公式绘制出来的曲线就用他的姓氏来命名，称为贝塞尔曲线。
</P>

<br>
<br>
<p>
以下公式中：B(t)为t时间下 点的坐标；<br>
P0为起点,Pn为终点,Pi为控制点
 </P>


<h2 class="nav1">一阶贝塞尔曲线(线段)：</h2>
<p><img src="/assets/docpic/math_bezier_power1.gif" /></p>
<p><img src="/assets/docpic/math_bezier_power1_a.gif" /></p>
<p>意义：由 P0 至 P1 的连续点， 描述的一条线段</p>

<br>
<br>


<h2 class="nav1">二阶贝塞尔曲线(抛物线)：</h2>
<p><img src="/assets/docpic/math_bezier_power2.gif" /></p>
<p><img src="/assets/docpic/math_bezier_power2_a.gif" /></p>
<p>原理：由 P0 至 P1 的连续点 Q0，描述一条线段。 <br>
&nbsp;&nbsp;&nbsp;&nbsp; 由 P1 至 P2 的连续点 Q1，描述一条线段。  <br>
&nbsp;&nbsp;&nbsp;&nbsp; 由 Q0 至 Q1 的连续点 B(t)，描述一条二次贝塞尔曲线。 <br> <br>
 
经验：P1-P0为曲线在P0处的切线。</p>

<br>
<br>




<h2 class="nav1">三阶贝塞尔曲线：</h2>
<p><img src="/assets/docpic/math_bezier_power3.gif" /></p>
<p><img src="/assets/docpic/math_bezier_power3_a.gif" /></p>
<br>
<br>



<h2 class="nav1">通用公式：</h2>
<p><img src="/assets/docpic/math_bezier_all.gif" /></p>
<br>
<h2>高阶贝塞尔曲线：</h2>
<h3>4阶曲线：</h3>
<p><img src="/assets/docpic/math_bezier_power4_a.gif" /></p>
<br>
<h3>5阶曲线：</h3>
<p><img src="/assets/docpic/math_bezier_power5_a.gif" /></p>
<br>
<br>
