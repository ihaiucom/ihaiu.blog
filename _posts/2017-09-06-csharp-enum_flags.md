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


<h2 class="nav1">网络上的资料--实现定位到文件夹 </h2>
<pre>
	System.Diagnostics.Process.Start("/Users/zf");
</pre>
<br>
<br>

<h2 class="nav1">网络上的资料--Windows实现方式 </h2>
<pre>
  // 打开文件
  System.Diagnostics.Process.Start("Explorer.exe","c:\\windows\text.txt");

  // 定位到文件
	System.Diagnostics.Process.Start("Explorer.exe","/select, \"c:\\windows\text.txt\"");
</pre>
<br>
<br>

<h2 class="nav1">Mac实现方式 </h2>
<p>看Windows可以用Explorer来实现，我想Mac的Finder应该有对应的方式。于是找呀找 没发现有Finder的执行文件。后来就想open命令，找到了open命令所在位置"/usr/bin/open"。之前一直用open xxx，目录还好，文件可是会直接打开文件的。于是网上找open命令的参数，找了半天没找到。是我傻X了，用 open --help不就行。于是就找到了 open -R xxxx</p>

<br>
<p>open --help</p>
<pre>
open: unrecognized option `--help'
Usage: open [-e] [-t] [-f] [-W] [-R] [-n] [-g] [-h] [-b &lt;bundle identifier&gt;] [-a &lt;application&gt;] [filenames] [--args arguments]
Help: Open opens files from a shell.
      By default, opens each file using the default application for that file.  
      If the file is in the form of a URL, the file will be opened as a URL.
Options: 
      -a                Opens with the specified application.
      -b                Opens with the specified application bundle identifier.
      -e                Opens with TextEdit.
      -t                Opens with default text editor.
      -f                Reads input from standard input and opens with TextEdit.
      -F  --fresh       Launches the app fresh, that is, without restoring windows. Saved persistent state is lost, excluding Untitled documents.
      -R, --reveal      Selects in the Finder instead of opening.
      -W, --wait-apps   Blocks until the used applications are closed (even if they were already running).
          --args        All remaining arguments are passed in argv to the application's main() function instead of opened.
      -n, --new         Open a new instance of the application even if one is already running.
      -j, --hide        Launches the app hidden.
      -g, --background  Does not bring the application to the foreground.
      -h, --header      Searches header file locations for headers matching the given filenames, and opens them.
</pre>
<br>
<br>

<h2 class="nav2">open -R 命令测试</h2>
<pre>
 open -R /Users/macserver/Downloads/unity_guidref_3.png
</pre>

<h2 class="nav2">C# open</h2>
<pre>
System.Diagnostics.Process.Start( "/usr/bin/open", "-R /Users/macserver/Downloads/unity_guidref_3.png");
</pre>




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
