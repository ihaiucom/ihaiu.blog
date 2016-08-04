---
layout: post
title: 测试syntaxhighlighter
date: 2016-08-03 22:52:10
categories: syntaxhighlighter
tags: syntaxhighlighter
excerpt: 测试代码高亮syntaxhighlighter
shareexcerpt: 测试代码高亮syntaxhighlighter
thread: 20160803225210
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/syntaxhighlighter.png

sh: true
sh_csharp: true
sh_css: true
sh_bash: true
---


## shell、bash
<pre class="brush: bash; ">
git add .
git commit -am"syntaxhighlighter"
git push origin gh-pages
</pre>
<br><br>

## Csharp 泛型&lt;T&gt; 尖括号需要用转义字符 &amp;lt T &amp;gt;
<pre class="brush: csharp; ">
public class ConfigSet&lt;T&gt;
{
	public T GetConfig(int id)
	{
		return ....;
	}
}
</pre>
<br><br>

## Css 
<pre class="brush: css; ">
* {
  box-sizing: border-box; 
}

body {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #606c71; }

a {
  color: #1e6bb8;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }

.btn {
  display: inline-block;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s; 
}

.btn + .btn {
  margin-left: 1rem; 
}

.btn:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3); }

@media screen and (min-width: 64em) {
  .btn {
    padding: 0.75rem 1rem; 
    } 
}

@media screen and (min-width: 42em) and (max-width: 64em) {
  .btn {
    padding: 0.6rem 0.9rem;
    font-size: 0.9rem; 
    }
}
</pre>

