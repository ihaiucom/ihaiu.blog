---
layout: post
title: 【笔记】C# Where
date: 2016-08-15 16:57:00
categories: C#
tags: C# Where 
excerpt: 这是参数类型约束，指定T必须是Class类型。.NET支持的类型参数约束有以下五种
thread: 20160815165700
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
---



<pre>
这是参数类型约束，指定T必须是Class类型。
 
.NET支持的类型参数约束有以下五种：
where T : struct                               	| T必须是一个结构类型
where T : class                                	| T必须是一个Class类型
where T : new()                               	| T必须要有一个无参构造函数
where T : NameOfBaseClass          				| T必须继承名为NameOfBaseClass的类
where T : NameOfInterface             			| T必须实现名为NameOfInterface的接口

http://blog.csdn.net/jcx5083761/article/details/8552727

</pre>

<pre class="brush: csharp; ">
public void Request&lt;T&gt;(List&lt;T&gt; EntityList)  where T : class  
{  
  
} 
</pre>
