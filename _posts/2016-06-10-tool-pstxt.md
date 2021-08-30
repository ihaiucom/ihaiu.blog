---
layout: post
title: PS文本检测
date: 2021-08-30 00:00:00
categories: Tool
tags: Tool
excerpt: PS文本检测
thread: 20160610
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---

<style type="text/css">
    .box {
        border:1px rgb(175, 175, 175) solid; 
        padding: 20px; 
        margin: 20px; 
        margin-bottom: 30px;
    }

    .key {
        font-weight: bold;
    }

    .val_box
    {
        
        border:1px rgb(175, 175, 175) dashed ; 
        padding: 20px; 

    }

</style>




<div><a href="https://blog.ihaiu.com/tools/pstxt.html">https://blog.ihaiu.com/tools/pstxt.html</a></div>



<div>
    <div  class="box">
        <h1>PSD 文本检测:</h1>
        选择psd文件 <input type='file' accept='.psd' onchange='openFile(event)'>

        <div id="output">
            <p class="key">psd 文本内容:</p>
            <p class="val_box" name="content" id="content" value=""></p>

            <p  class="key">重复文本:</p>
            <p class="val_box" name="repeatedtext" id="repeatedtext" value=""></p>

            <p  class="key">psd 去除重复后文本内容:</p>
            <p  class="val_box"name="contentResult" id="contentResult" value=""></p>
        </div>
    </div>
    
    <div  class="box">
        检查内容: <input type="text" id="input" name="input">
        <button type="submit" id="btn_submit"> 检查 </button>
        <p  class="key">检查结果:</p>
        <p  class="val_box"name="inputResult" id="inputResult" value=""></p>
    </div>
</div>


<script type="text/javascript">

    var psText = "";
    let charMap = new Map();
    
    var openFile = function (event) {
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            if (reader.result) {
                //显示文件内容
                var reg = /<photoshop:LayerText>.*<\/photoshop:LayerText>/
                let result = reader.result.match(reg);
                var str = result[0];
                str = str.replace('<photoshop:LayerText>',"").replace('</photoshop:LayerText>', "");
                var output = document.getElementById('content');
                output.textContent = str;//(result);
                str += "集市";
                psText = str;
                if(result.length > 0) {
                    check(str);
                    checkHasText(true);
                }else {
                    alert("未找到LayerText文本");
                }

            }
        };
        reader.readAsText(input.files[0], 'utf-8');
    };

    function check(txt)
    {
        charMap = new Map(); // <char, num>
        let replaceCharList = [];
        let length = txt.length;
        let resultStr = "";
        for(let i = 0; i < length; i ++)
        {
            let char = txt[i];
            if(!charMap.has(char))
            {
                charMap.set(char, 1);
                resultStr += char;
            }
            else
            {
                let num = charMap.get(char);
                if(num == 1)
                {
                    replaceCharList.push(char);
                }
                charMap.set(char, num + 1);
            }
        }

        var tag_contentResult = document.getElementById('contentResult');
        tag_contentResult.textContent = resultStr;

        var tag_repeatedtext = document.getElementById('repeatedtext');
        let repeadStr = "";
        for(let c of replaceCharList)
        {
            repeadStr += `${c} [${charMap.get(c)}]<br>\n`;
        }
        tag_repeatedtext.innerHTML = repeadStr;

    }

    function checkHasText(isAuto = false)
    {

        var tag_inputResult = document.getElementById('inputResult');
        if(charMap == null || charMap.size == 0)
        {
            tag_inputResult.innerHTML = "<p class='.errortext'>Error: 需要先加载ps文件</p>";
            return;
        }

        
        tag_inputResult.innerHTML  = "";
        var input = document.getElementById('input').value;
        if(!input || !input.trim()) {
            if(!isAuto)
            {
                alert("输入要检测的文本")
            }
            return
        }
        input = input.trim();

        let hasCharStr = "";
        let noHasCharStr = "";
        let inputLength = input.length;
        for(let i = 0;i < inputLength; i ++)
        {
            let c = input[i];

            if(!charMap.has(c))
            {
                noHasCharStr += c;
            }
            else
            {
                hasCharStr += c;
            }
        }

        let htmlStr = "";
        if(noHasCharStr.length > 0)
        {
            htmlStr += '<p class="key">不存在文本:</p>';
            htmlStr += "<p class='.errortext'>" + noHasCharStr + "</p>";
        }
        else
        {
            htmlStr += "<p >文字都存在</p>";
        }

        tag_inputResult.innerHTML  = htmlStr;
        


    }

    function load()
    {
        document.getElementById("btn_submit").addEventListener('click', checkHasText, false);
    }

    
</script>

