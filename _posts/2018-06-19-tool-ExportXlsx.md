---
layout: post
title: 导出xlsx配置文件工具(可以转csv json 生成TypeScript)
date: 2018-06-19 20:50:00
categories: tool
tags: tool
excerpt: 导出xlsx配置文件工具(可以转csv json 生成TypeScript)
shareexcerpt: 导出xlsx配置文件工具(可以转csv json 生成TypeScript)
thread: 20180105205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---




<br>
<br>
<h2 class="nav1">下载</h2>

<p>
本地: <a href="/assets/down/ihaiu.ExportXlsxTool.zip" target="_blank">ihaiu.ExportXlsxTool.zip</a>
</p>


<p>
Github: <a href="https://github.com/ihaiucom/ihaiu.ExportXlsx" target="_blank">https://github.com/ihaiucom/ihaiu.ExportXlsx</a>
</p>


<br>
<br>
<h2 class="nav1">安装net core</h2>
<p>
如果安装过net core, 可以跳过该步骤
</p>

<p>
下载地址：<a href="https://www.microsoft.com/net/download/windows" target="_blank">https://www.microsoft.com/net/download/windows</a>
</p>


<p>
根据自己电脑情况选择对应版本即可， 我这里安装的这个： <a href="https://www.microsoft.com/net/download/thank-you/dotnet-sdk-2.1.300-windows-x64-installer" target="_blank">https://www.microsoft.com/net/download/thank-you/dotnet-sdk-2.1.300-windows-x64-installer</a>
</p>



<br>
<br>
<h2 class="nav1">测试Demo</h2>
<p>
双击: ExportXlsxTool/Tools/生成配置--客户端.bat
</p>

<p>
可以看到生成了目录
</p>
<p><img src="/assets/docpic/exportxlsx_01.png" style="border: solid 1px #666;" /></p>


<br>
<br>
<h2 class="nav1">2个工具</h2>
在Tools目录下可以看到两个文件夹
<pre>
ExportXlsx: 负责导出xlsx配置，生成csv、json和数据结构。客户端会生成csv解析器
Copy: 负责将生成的文件拷贝到项目目录
</pre>

<br>
<h2 class="nav1">ExportXlsx.bat</h2>
<pre>
dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./ExportXlsxSetting.json
</pre>

<p>可以看出他需要指定一个启动配置文件<b>ExportXlsxSetting.json</b>, 该文件配置了(xlsx文件目录, 生成输出目录)等，后面我们会详细介绍</p>


<br>
<h2 class="nav1">CopyClient.bat</h2>
<pre>
dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
</pre>

<p>可以看出他需要指定一个启动配置文件<b>CopyClientSetting.json</b>, 该文件配置了要拷贝的文件，后面我们会详细介绍</p>



<br>
<h2 class="nav1">生成配置--客户端.bat</h2>
<pre>
dotnet ./ExportXlsx/ExportXlsx.dll --optionSetting=./ExportXlsxSetting.json
dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
</pre>

<p>是将<b>ExportXlsx.bat</b>和<b>CopyClient.bat</b>合并， 变成一键生成</p>


<br>
<h2 class="nav1">ExportXlsxSetting.json 介绍</h2>

| 字段名	 				| 介绍	 												| 默认值	 					| 
| autoEnd	 				| 运行完，是否自动关闭cmd	 							| true	 						| 
| optionSetting	 			| 启动参数设置 配置路径	 								| ./optionSetting.json	 		| 
| xlsxDir	 				| xlsx目录(可以用分号';'分割填写多个路径)				| ../Config	 					| 
| outDir	 				| 配置输出目录											| ../ConfigOut	 				| 
| exportSettingXlsx	 		| xlsx配置文件 (可以配置扩展数据结构和设置忽略文件)		| ../Config/ExportSetting.xlsx	| 
| settingStructSheet		| ExportSetting.xlsx "数据结构"表单 					| StructSheet					| 
| settingStructSheet		| ExportSetting.xlsx "忽略列Excel文件"表单 				| IgnoreSheet					| 
| templateDir				| 生成代码模板											| ./Template					| 
| csvSeparator				| csv分隔符												| \t							| 
| csvSeparatorReplace		| xlsx文件内容如果有用到csv分隔符时，用该配置替换		| 								| 
| csvLineSeparatorReplace	| xlsx文件内容如果有用到换行符时，用该配置替换			| 								| 
| xlsxHeadTypeLine			| 表头--Type 所在行										| 1								| 
| xlsxHeadCnLine			| 表头--中文 所在行										| 2								| 
| xlsxHeadFieldLine			| 表头--字段 所在行										| 3								| 



<br>
<h2 class="nav1">CopyClientSetting.json 介绍</h2>

<p><img src="/assets/docpic/exportxlsx_02.png" style="border: solid 1px #666;" /></p>

<pre>
enableoverwrites: 可覆盖文件
disableoverwrites: 如果目标文件已存在，将忽略
</pre>

<pre>
// 支持文件和目录
src: 源文路径
dst: 目标路径
</pre>
