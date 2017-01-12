---
layout: post
title: C# 打开文件所在位置
date: 2017-01-12 13:00:00
categories: C#
tags: C# Mac
excerpt: open -R path
shareexcerpt: open -R path
thread: 20170112130000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---

<p>最近写了一个下载器(<a href="http://blog.ihaiu.com/unity-%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%8B%E8%BD%BD/#content">多线程下载</a>)，想实现打开文件所在位置。网上找了一些资源可以实现定位到文件夹，但不能定位文件。</p>

<h2 class="nav1">网络上的资料--实现定位到文件夹 </h2>
<pre>
	System.Diagnostics.Process.Start("/Users/zf");
</pre>
<br>
<br>

<h2 class="nav1">网络上的资料--Windows实现方式，没做测试 </h2>
<pre>
	System.Diagnostics.Process.Start("Explorer.exe","c:\\windows");
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
<h2 class="nav1">最终</h2>
<pre class="brush: csharp; ">
    public static void RevealInFinder(string path)
    {
        #if UNITY_STANDALONE_OSX
        System.Diagnostics.Process.Start( "/usr/bin/open", "-R " + path);

        #elif UNITY_STANDALONE_WIN
        System.Diagnostics.Process.Start("Explorer.exe", path);
        #endif
    }
</pre>

