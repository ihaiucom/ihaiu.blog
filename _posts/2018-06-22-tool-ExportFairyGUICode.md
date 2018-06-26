---
layout: post
title: 生成FairyGUI代码(TypeScript)
date: 2018-06-22 20:50:00
categories: tool
tags: tool
excerpt: 生成FairyGUI代码(TypeScript)
shareexcerpt: 生成FairyGUI代码(TypeScript)
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
本地: <a href="/assets/down/ihaiu.ExportFairyGUICodeDemo.zip" target="_blank">ihaiu.ExportFairyGUICodeDemo.zip</a>
</p>


<p>
Github: <a href="https://github.com/ihaiucom/ihaiu.ExportFairyGUICode" target="_blank">https://github.com/ihaiucom/ihaiu.ExportFairyGUICode</a>
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
双击: FairyGUI/Tools/生成FGUI代码.bat
</p>

<p><img src="/assets/docpic/exportfguicode_01.png" style="border: solid 1px #666;" /></p>

<p>
可以看到生成了目录
</p>
<p><img src="/assets/docpic/exportfguicode_02.png" style="border: solid 1px #666;" /></p>


<br>
<br>
<h2 class="nav1">2个工具</h2>
在Tools目录下可以看到两个文件夹
<pre>
ExportFairyGUICode: 负责生成FGUI 代码
Copy: 负责将生成的文件拷贝到项目目录
</pre>

<br>
<h2 class="nav2">Export.bat</h2>
<pre>
dotnet ./ExportFairyGUICode/ExportFairyGUICode.dll --optionSetting=./ExportSetting.json
</pre>

<p>可以看出他需要指定一个启动配置文件<b>ExportSetting.json</b>, 该文件配置了(xlsx文件目录, 生成输出目录)等，后面我们会详细介绍</p>


<br>
<h2 class="nav2">CopyClient.bat</h2>
<pre>
dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
</pre>

<p>可以看出他需要指定一个启动配置文件<b>CopyClientSetting.json</b>, 该文件配置了要拷贝的文件，后面我们会详细介绍</p>



<br>
<h2 class="nav2">生成FGUI代码.bat</h2>
<pre>
dotnet ./ExportFairyGUICode/ExportFairyGUICode.dll --optionSetting=./ExportSetting.json
dotnet ./Copy/Copy.dll --setting=./CopyClientSetting.json
</pre>

<p>是将<b>Export.bat</b>和<b>CopyClient.bat</b>合并， 变成一键生成</p>


<br>
<h2 class="nav1">Export.json 介绍</h2>

| 字段名	 				| 介绍	 												| 默认值	 					| 
| autoEnd	 				| 运行完，是否自动关闭cmd	 							| true	 						| 
| optionSetting	 			| 启动参数设置 配置路径	 								| ./optionSetting.json	 		| 
| fairyProject	 			| FairyGUI项目目录										| ../../						| 
| templateDir				| 生成代码模板											| ./ExportFairyGUICode/Template	| 
| codePath	 				| 代码输出目录											| ./FairyGUICode	 			| 
| codeNamespace	 			| 代码的命名空间										| fgui							| 
| codeMemberNamePrefix		| 代码的成员变量前缀 									| m_							| 
| codeIgnoreNoname			| 是否忽略nxxx的变量 									| true							| 
| codeIgnorIllegalClassName	| 是否忽略非法类名的组件								| false							| 
| codeIgnorNoExported		| 忽略没设置导出的组件									| true							| 
| codeExportDepend			| 导出依赖的组件										| true							| 
| codeUseOtherPkgType		| 成员变量类型是否可以用其他包组件的类名				| true							| 



<br>
<h2 class="nav1">CopyClientSetting.json 介绍</h2>

<pre>
{
	// 可覆盖列表
  "enableoverwrites": [
  	{
  		"src":"./FairyGUICode/TS/Generates", 
  		"dst":"./FairyGUICode2/fgui/Generates"
  	}
  ],
  	// 目标目录没有该文件才复制
  "disableoverwrites": [
  	{
      "src":"./FairyGUICode/TS/Extends", 
      "dst":"./FairyGUICode2/fgui/Extends"
    }
  ]
}
</pre>

<pre>
enableoverwrites: 可覆盖文件
disableoverwrites: 如果目标文件已存在，将忽略
</pre>

<pre>
// 支持文件和目录
src: 源路径
dst: 目标路径
</pre>


<br>
<br>
<h2 class="nav1">生成的代码</h2>

<p>TS/Generates: 和原生的生成代码类似</p>
<p>TS/Extends: 生成对应的扩展类，不会被覆盖，你可以再这里扩展你的逻辑</p>


<pre class="brush: csharp; ">
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class Button extends ButtonStruct
	{
		// 你可以再这里扩展你的逻辑，不会被覆盖
	}
}
</pre>



<pre class="brush: csharp; ">
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class ButtonStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_grayed : fairygui.Controller;
		public m_title : fairygui.GTextField;

		
		public static URL:string = &quot;uiL://s1uxc7tgjmop0&quot;;

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController(&quot;button&quot;);
			this.m_grayed = this.getController(&quot;grayed&quot;);

			
			this.m_title = &lt;fairygui.GTextField&gt;&lt;any&gt;(this.getChild(&quot;title&quot;));
		}
	}
}
</pre>