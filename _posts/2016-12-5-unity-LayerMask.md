---
layout: post
title: [转]Unity3D中Layers和LayerMask解析
date: 2016-12-05 16:45:00
categories: Unity
tags: Unity
excerpt: Unity中是用int32来表示32个Layer层
shareexcerpt: Unity中是用int32来表示32个Layer层
thread: 201612051645
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/unit-layer.jpg

sh: true
sh_csharp: true
---

原文链接：http://www.jianshu.com/p/89d5252a8b74


<p>Unity中是用int32来表示32个Layer层。int32表示二进制一共有32位（0—31）。 在Unity中可编辑的Layer如下图所示：</p>
<p><img src="/assets/docpic/unit-layer.jpg" /></p>


<p>在Unity中每个GameObject都有Layer属性，默认的Layer都是Default。在Unity中可编辑的Layer共有24个（8—31层），官方已使用的是0—7层，默认不可编辑！</p>
<p>LayerMask实际上是一个位码操作，在Unity3D中一共有32个Layer层，并且不可增加。</p>





<h2 class="nav1">位运算符</h2>
<p>按位运算符：~、|、&、^。位运算符主要用来对二进制位进行操作。</p>

<p>逻辑运算符：&&、||、！。逻辑运算符把语句连接成更复杂的复杂语句。</p>

<p>按位运算符：左移运算符<<，左移表示乘以2，左移多少位表示乘以2的几次幂。</p>

<p>举个栗子：</p>

<p>var temp = 14 << 2; 表示十进制数14转化为二进制后向左移动2位。</p>

<p>temp最后计算的值为 14乘以2的平方，temp = 56；</p>

<p>同理，右移运算符>>，移动多少位表示除以2的几次幂。</p>

<p>上面是个基础知识的补充。</p>




<h2 class="nav1">在Unity中是用LayerMask</h2>

<p>Layers通常被摄像机用来渲染部分场景，和灯光照射部分场景使用。但是它们也可以用来做射线检测时忽略一些collder或Collision使用。</p>

<p>在代码中使用时如何开启某个Layers？</p>

<pre>

LayerMask mask = 1 << 你需要开启的Layers层。

LayerMask mask = 0 << 你需要关闭的Layers层。

</pre>

<p>举几个个栗子：</p>


<pre>

LayerMask mask = 1 << 2; 表示开启Layer2。

LayerMask mask = 0 << 5;表示关闭Layer5。

LayerMask mask = 1 << 2|1 << 8;表示开启Layer2和Layer8。

LayerMask mask = 0 << 3|0 << 7;表示关闭Layer3和Layer7。

</pre>


<p>上面也可以写成：</p>


<pre>

LayerMask mask = ~（1 << 3|1 << 7）;表示关闭Layer3和Layer7。

LayerMask mask = 1 << 2|0 << 4;表示开启Layer2并且同时关闭Layer4.

</pre>


<p>代码：</p>


<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;

public class example : MonoBehaviour {
    LayerMask mask =  ~（1 << 3|1 << 7）;
    void Update() {
        if (Physics.Raycast(transform.position, transform.forward, 100, mask.value))
            Debug.Log("Hit something");

    }
}
</pre>


