---
layout: post
title: TypeScript学习
date: 2018-05-30 13:00:00
categories: Html5
tags: Html5 TypeScript
excerpt: TypeScript学习
shareexcerpt: TypeScript学习
thread: 201805152000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---

<br>
<br>
<h2 class="nav1">安装node.js</h2>
<p><a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a> 下载安装</p>
<p>node.js模块管理中心 <a href="https://www.npmjs.com" target="_blank">https://www.npmjs.com</a></p>
<p>可用得到两个命令</p>
<pre>
node --version
npm --version
</pre>

<br>
<br>
<h2 class="nav1">安装TypeScript依赖环境</h2>
<pre>
npm install -g typescript
</pre>
执行命令后会打印
<pre>
C:\Users\Administrator\AppData\Roaming\npm\tsserver -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\typescript\bin\tsserver
C:\Users\Administrator\AppData\Roaming\npm\tsc -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\typescript\bin\tsc
+ typescript@2.8.3
added 1 package from 1 contributor in 12.914s
</pre>
<br>
<br>


<h2>检查TypeScript编译环境版本</h2>
<pre>
tsc -v
</pre>
执行命令后会打印
<pre>
Version 2.8.3
</pre>




<h2>变量定义 var</h2>

同一个作用域可以多次定义
<pre>
var a = 1;
var a = 2;
var a = 3;
</pre>
<br>


同一个作用域可以多次定义, 造成外面一层for没正常运行<br>
for 不是作用域，他算是f里的函数域
<pre>

function f()
{
   for(var i = 0; i < 2; i ++)
   {
       print(`~~ ${i}`);
       for(var i = 0; i < 3; i ++)
       {
             print(`row ${i}`);
       }
       log(`##i=${i}`)
   }

   log(`@@i=${i}`)
}

</pre>

<pre>
~~i=0
row i=0
row i=1
row i=2
##i=3
@@i=4
</pre>
<br>


同一个作用域可以在任何地方定义
<pre>
var a = 1;
function f()
{
     a = 100;
     var a;

     print(a); // 100
}

f();
print(a); // 1
</pre>
<br>




if 不是作用域，他算是f里的函数域
<pre>
var a = 1;
function f(isIn:boolean = false)
{
     a = 100;
     if(isIn)
     {
          var a;
     }

     print(a); // 100
}

f();
print(a); // 1
</pre>
<br>




setTimeout调的函数里方法的变量，始终都是读取的闭包方法上层定义的变量
<pre>
function f()
{
        for(var i = 0; i < 10; i ++)
        {
            setTimeout(function() {
                log(i); //打印的始终都是10
            }, 100 * i);
        }
} 
</pre>

解决方法是, 再封一层闭包

<pre>
function f()
{
        for(var i = 0; i < 10; i ++)
        {
            (function(val)
            {
                setTimeout(function() { log(val); }, 100 * val);
            })(i);
            
        }
} 
</pre>