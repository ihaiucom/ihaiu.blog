---
layout: post
title: C# enum flags 位运算
date: 2017-09-06 13:00:00
categories: C#
tags: C# enum flags
excerpt: enum flags 位运算
shareexcerpt: enum flags 位运算
thread: 20170112130000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---




<br>
<br>
<h2 class="nav1">定义</h2>
<pre class="brush: csharp; ">
using System;
using System.Collections.Generic;
/** 
* ==============================================================================
*  @Author        曾峰(zengfeng75@qq.com) 
*  @Web         http://blog.ihaiu.com
*  @CreateTime      9/6/2017 4:47:53 PM
*  @Description:    关系类型
* ==============================================================================
*/
namespace Games.Wars
{
    /** 关系类型 */
    [System.Flags]
    public enum RelationType
    {
        /** 未知 */
        None = 0,

        /** 仅自己 */
        Own             = 1,

        /** 仅队友 */
        Friendly        = 2,

        /** 仅敌人 */
        Enemy           = 4,




        // 队友和自己
        // Own | Friendly 
        OwnAndFriendly  = 3,

        // 队友和自己
        // Own | Friendly | Enemy
        All             = 7,
    }
}

</pre>

<pre class="brush: csharp; ">
using System;
using System.Collections.Generic;
/** 
* ==============================================================================
*  @Author        曾峰(zengfeng75@qq.com) 
*  @Web         http://blog.ihaiu.com
*  @CreateTime      9/6/2017 5:19:33 PM
*  @Description:    
* ==============================================================================
*/
namespace Games.Wars
{
    public static class RelationTypeUtils
    {
        public static bool ROwn(this RelationType relation)
        {
            return (int)(RelationType.Own & relation) != 0;
        }

        public static bool RFriendly(this RelationType relation)
        {
            return (int)(RelationType.Friendly & relation) != 0;
        }


        public static bool REnemy(this RelationType relation)
        {
            return (int)(RelationType.Enemy & relation) != 0;
        }
    }
}


</pre>


<br>
<br>
<h2 class="nav1">测试</h2>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using Games.Wars;

/** ==============================================================================
*  @Author        曾峰(zengfeng75@qq.com) 
*  @Web         http://blog.ihaiu.com
*  @CreateTime      #CREATIONDATE#
*  @Description:     
* ==============================================================================
*/ 
public class TestRelationType : MonoBehaviour {

  // Use this for initialization
  void Start () {

        Test();
    }

    [ContextMenu("Test")]
    public void Test()
    {
        RelationType own = RelationType.Own;
        RelationType friendly = RelationType.Friendly;
        RelationType enemy = RelationType.Enemy;

        RelationType ownAndFriendly = own | friendly;
        RelationType all = own | friendly | enemy;

        Loger.LogFormat("{0},   {1}", own, (int)own);
        Loger.LogFormat("{0},   {1}", friendly, (int)friendly);
        Loger.LogFormat("{0},   {1}", enemy, (int)enemy);
        Loger.LogFormat("{0},   {1}", ownAndFriendly, (int)ownAndFriendly);
        Loger.LogFormat("{0},   {1}", all, (int)all);
        Loger.LogFormat("{0} == {1},   {2},   Bit  {3}", all, RelationType.Enemy, all == RelationType.Enemy, all.REnemy());
        Loger.LogFormat("{0} == {1},   {2},   Bit  {3}", ownAndFriendly, RelationType.Enemy, ownAndFriendly == RelationType.Enemy, ownAndFriendly.REnemy());
        Loger.LogFormat("{0} == {1},   {2}", enemy, RelationType.Enemy, enemy == RelationType.Enemy);
    }
  
}

</pre>


<p><img src="/assets/docpic/csharp_enum_flags.png" style="border: solid 1px #666;" /></p>




<br>
<br>
<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="http://www.cnblogs.com/zhaoqingqing/p/4821224.html">C# Enum 进行逻辑运算 </a></p>
