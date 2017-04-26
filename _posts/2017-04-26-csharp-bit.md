---
layout: post
title: C# 位运算
date: 2017-04-26 13:00:00
categories: C#
tags: C# Mac
excerpt: open -R path
shareexcerpt: open -R path
thread: 20170426130000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---

<pre>
//
num=101101;
~num;
res=11111111111111111111111111010010;

//k=1
num=101101;
num ^ k;
res=101100;

//k=11
num=101101;
num ^ k;
res=101110;

//k=111
num=101101;
num ^ k;
res=101010;

//k=1111
num=101101;
num ^ k;
res=100010;

//k=1010
num=101101;
num ^ k;
res=100111;

//k=3
num=0;
1 &lt;&lt; (k - 1);
res=100;

//k=3
num=0;
~(1 &lt;&lt; (k - 1));
res=11111111111111111111111111111011;

//去掉最后一位
num=101101;
num &gt;&gt; 1;
res=10110;

//在最后加一个0 
num=101101;
num &lt;&lt; 1;
res=1011010;

//在最后加一个1 
num=101101;
(num &lt;&lt; 1) + 1;
res=1011011;

//把最后一位变成1 
num=101100;
num | 1;
res=101101;

//把最后一位变成0 
num=101101;
(num | 1) - 1;
res=101100;

//最后一位取反 
num=101101;
num ^ 1;
res=101100;

//把右数第k位变成1 k=2
num=101001;
num | (1 &lt;&lt; (k - 1));
res=101011;

//把右数第k位变成1 k=3
num=101001;
num | (1 &lt;&lt; (k - 1));
res=101101;

//把右数第k位变成1 k=4
num=101001;
num | (1 &lt;&lt; (k - 1));
res=101001;

//把右数第k位变成0 k=3
num=101101;
num & (~ (1 &lt;&lt; (k - 1)));
res=101001;

//右数第k位取反 k=3
num=101001;
num ^ (1 &lt;&lt; (k - 1));
res=101101;

//取末三位 a=7
num=101101;
num & 111;
res=101;

//取末k位 k=5
num=1101101;
num & ((1 &lt;&lt; k) - 1);
res=1101;

//k=5
num=1101101;
(1 &lt;&lt; k);
res=100000;

//k=5
num=1101101;
(1 &lt;&lt; k) - 1;
res=11111;

//取右数第k位 k=4
num=1101101;
num &gt;&gt; (k - 1) & 1;
res=1;

//把末k位变成1 k=4
num=101001;
num | ((1 &lt;&lt; k) - 1);
res=101111;

//末k位取反 k=4
num=101001;
num ^ ((1 &lt;&lt; k) - 1);
res=100110;

//把右边连续的1变成0
num=100101111;
num & (num + 1);
res=100100000;

//
num=100101111;
num + 1;
res=100110000;

//把右起第一个0变成1
num=100101111;
num | (num + 1);
res=100111111;

//把右边连续的0变成1
num=11011000;
num | (num - 1);
res=11011111;

//取右边连续的1 
num=100101111;
(num ^ (num + 1)) &gt;&gt; 1;
res=1111;

//
num=100101111;
num ^ (num + 1);
res=11111;

//去掉右起第一个1的左边 
num=100101000;
num & (num ^ (num - 1));
res=1000;

//
num=100101000;
num - 1;
res=100100111;

//
num=100101000;
num ^ (num - 1);
res=1111;

</pre>



<pre class="brush: csharp; ">
using System;

namespace ihaiu
{
    public static class BitUtils
    {
        public static uint BitUnset(uint ui, int len , int bit){
            uint mask = (uint)((1&lt;&lt;len+1)-1);
            return ui & ~(mask&lt;&lt;bit) ;
        }

        public static uint BitSet(uint ui, int len, int bit, uint val){
            uint mask = (uint)((1&lt;&lt;len+1)-1);
            uint nv = mask & val;
            return ui & ~(mask&lt;&lt;bit) | (nv&lt;&lt;bit);
        }

        public static uint BitGet(uint ui, int len, int bit){
            uint mask = (uint)((1&lt;&lt;len+1)-1);
            return ui & (mask &lt;&lt; bit);
        }

        public static ulong BitUnset(ulong ui, int len , int bit){
            ulong mask = (ulong)((1&lt;&lt;len+1)-1);
            return ui & ~(mask&lt;&lt;bit) ;
        }
        
        public static ulong BitSet(ulong ui, int len, int bit, ulong val){
            ulong mask = (ulong)((1&lt;&lt;len+1)-1);
            ulong nv = mask & val;
            return ui & ~(mask&lt;&lt;bit) | (nv&lt;&lt;bit);
        }
        
        public static ulong BitGet(ulong ui, int len, int bit){
            ulong mask = (ulong)((1&lt;&lt;len+1)-1);
            return ui & (mask &lt;&lt; bit);
        }
    }
}

 
</pre>
