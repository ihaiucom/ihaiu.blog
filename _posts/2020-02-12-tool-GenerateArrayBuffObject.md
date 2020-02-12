---
layout: post
title: 生成Array对象封装
date: 2020-02-12 00:00:00
categories: Tool
tags: Tool
excerpt: 生成Array对象封装
thread: 20160610
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---



<style type="text/css">

	.tool {
		width: 800px;
  		margin: 0px auto 0px auto;
    	padding: 0px;
  		background-color: #F0F0F0;
	}


	.tool div  {
  		margin: 10px;
    	padding: 10px;
  		border: solid 1px #E6E6E6;
	}


	.tool  h3{
    	text-align: center;
    	color: #C0C0C0;
		font-size:16px;
	    line-height:20px;
  		margin: 0px;
    	padding: 0px 0px 10px 0px;
	}


	.tool  textarea{
	    background-color: white;
	    border: 1px solid #C0C0C0;
	    padding: 2px;
	    font-size:12px;
	    line-height:16px;

    	width: 100%;
    	height: 300px;
	}

	.tool .tool_middle
	{
		text-align: center;
	}

	 .tool button
	 {
	    font-family: sans-serif;
	 	font-size: 16px;
	    line-height:30px;
	    width: 120px;
	    height: 40px;
	 	margin:20px 0px;
	 	background-color: #EEF7F1;
	    border: 1px solid #D0E6D7;
	    color: #62B079;

	 }


	 .tool button:hover
	 {
	    border: 1px solid #EEF7EE;
	    color: #62B0aa;
	 }
</style>

<script  type="text/javascript" > 

function OnClickReplace()
{

    var inTextearea 	= document.getElementById('inTextearea');
    var outTextearea 	= document.getElementById('outTextearea');
    var txt 			= inTextearea.value;
    var lines = txt.split('\n');
    var outArr = [];
    for(var i = 0; i < lines.length; i ++)
    {
        var line = lines[i];
        line = line.trim();
        if(line == "")
            continue;
        
        line = line.replace(/: *number/, "");
        line = line.replace(/ *public /, "");
        line = line.replace(/ *private /, "");
        line = line.replace(/ *protected /, "");
        line = line.replace(/;/, "");
        var arr = line.split('=');
        var field = arr[0];
        outArr.push(field);
    }

    var outStr = "";
    for(var i = 0; i < outArr.length; i ++)
    {
        outStr += "get() { return this.buff["+i+"]; } \n";
        outStr += "set(v) { this.buff["+i+"] = v;} \n";
    }

   
    outTextearea.value = outStr;
}
</script>

<div class="tool">
	<div class="tool_up">
		<h3>输入</h3>
		<textarea id="inTextearea" ></textarea>
	</div>

	<div class="tool_middle">
		<button id="replace" type="button" onclick="OnClickReplace()">转译</button>
	</div>

	<div class="tool_down">
		<h3>输出</h3>
		<textarea id="outTextearea" ></textarea>
	</div>
</div>


