---
layout: post
title: Sublime Text 屏蔽meta格式的文件
date: 2017-08-28 13:51:00
categories: Tools
tags:  SublimeText
excerpt:  Sublime Text 屏蔽meta格式的文件
shareexcerpt:  Sublime Text 屏蔽meta格式的文件
thread: 20170080812510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_java: true
---

在Sublime Text点击菜单 "Preferences/Settings" 打开用户配置文件


<pre>
	{

		"font_size": 8,
	    // 在状态栏显示文件编码
	    "show_encoding": true,
	    // 排除指定文件
	    "file_exclude_patterns": ["*.meta"],
	}
</pre>