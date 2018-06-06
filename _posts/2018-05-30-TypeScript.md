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




<h2 class="nav1">变量定义 var</h2>

同一个作用域可以多次定义
<pre>
var a = 1;
var a = 2;
var a = 3;
</pre>
<br>


同一个作用域可以多次定义, 造成外面一层for没正常运行<br>
for 不是作用域，他算是f里的函数域<br>
用let定义， for里也是一个作用域<br>
在其他语言， 不允许再定义相同名称的变量
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


同一个作用域可以在任何地方定义<br>
用let定义，是不能在定义之前调用的, 否则编辑器会提示错误<br>

<pre>
var a = 1;
function f()
{
     a = 100; // 可以在定义之前就赋值，运行时他已经定义了， 就算外层有定义a=1，这里的a也是f函数作用域的
     var a;

     print(a); // 100
}

f();
print(a); // 1
</pre>
<br>




if 不是作用域，他算是f里的函数域<br>
用let定义， if里也是一个作用域。 a = 100; 将会修改闭包方法里定义的a=1<br>
在其他语言,if里也是一个作用域, 并且在定义变量前 a将用的是闭包方法里声明的变量
<pre>
var a = 1;
function f(isIn:boolean = false)
{
     a = 100;
     if(isIn)
     {
          var a;
     }

     log(a); // 100
}

f();
log(a); // 1
</pre>

<pre>
var a = 1;
function f(isIn:boolean = false)
{
     a = 100;
     if(isIn)
     {
          let a; // 这里的a只在if语句块里有效
     }

     log(a); // 100
}

f();
log(a); // 100
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

解决方法是, 再封一层闭包<br>
用let定义，编译后的 js 也是这样实现的

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





<h2 class="nav1">变量定义 let</h2>

let 定义的变量，不可以在区域块外调用，否则会提示错误。<br>
let 定义的变量，if 、for都将是作用域
<p><img src="/assets/docpic/typescript_let_1.png" style="border: solid 1px #666;" /></p>
<br>

不可以在let定义前调用, 否则会提示错误
<p><img src="/assets/docpic/typescript_let_2.png" style="border: solid 1px #666;" /></p>
<br>


下面这种情况 if外面的 a将是 <b>var a=1</b>那定义的
<p><img src="/assets/docpic/typescript_let_3.png" style="border: solid 1px #666;" /></p>
编译后的js
<p><img src="/assets/docpic/typescript_let_4.png" style="border: solid 1px #666;" /></p>
<br>



在同一作用域不可以重复定义let变量
<p><img src="/assets/docpic/typescript_let_6.png" style="border: solid 1px #666;" /></p>
编译后的js<br>
所有可以这么说, let定义的变量，再闭包方法情况下，上下文都有相同的变量名。在编译成js后，将会给他们分别命名
<p><img src="/assets/docpic/typescript_let_7.png" style="border: solid 1px #666;" /></p>
<br>


<p><img src="/assets/docpic/typescript_let_8.png" style="border: solid 1px #666;" /></p>
编译后的js<br>
<p><img src="/assets/docpic/typescript_let_9.png" style="border: solid 1px #666;" /></p>
<br>


在一个嵌套作用域里引入一个新名字的行为称做屏蔽。 它是一把双刃剑，它可能会不小心地引入新问题，同时也可能会解决一些错误。 例如，假设我们现在用 let重写之前的sumMatrix函数。

<p><img src="/assets/docpic/typescript_let_10.png" style="border: solid 1px #666;" /></p>
编译后的js<br>
<p><img src="/assets/docpic/typescript_let_11.png" style="border: solid 1px #666;" /></p>
输出:
<pre>
row i=1
row i=2
##i=1
~~i=2
row i=0
row i=1
row i=2
##i=2
~~i=3
row i=0
row i=1
row i=2
##i=3
sum = 324
</pre>

<br>

<h3>块级作用域变量的获取<h3>

<p><img src="/assets/docpic/typescript_let_12.png" style="border: solid 1px #666;" /></p>
编译后的js<br>
<p><img src="/assets/docpic/typescript_let_13.png" style="border: solid 1px #666;" /></p>
