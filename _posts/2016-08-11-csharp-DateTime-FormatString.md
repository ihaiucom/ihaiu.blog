---
layout: post
title: 【转载】用DateTime.ToString(string format)输出不同格式的日期
date: 2016-08-11 10:30:11
categories: C#
tags: C# DateTime Format
excerpt: ateTime.ToString()函数有四个重载。一般用得多的就是不带参数的那个了
shareexcerpt: ateTime.ToString()函数有四个重载。一般用得多的就是不带参数的那个了
thread: 20160811103011
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

---



<p style="color:#666;">来源：http://www.cnblogs.com/xvqm00/archive/2009/02/19/1394093.html</p>

<p>DateTime.ToString()函数有四个重载。一般用得多的就是不带参数的那个了。殊不知，DateTime.ToString(string format)功能更强大，能输出不同格式的日期。以下把一些情况罗列出来，供大家参考。有些在MSDN上有的就没有列出来了。</p>

<br><br>
<ol>
  <li>y代表年份，注意是小写的y，大写的Ｙ并不代表年份。</li>
  <li>M表示月份。</li>
  <li>d表示日期，注意D并不代表什么。</li>
  <li>h或H表示小时，h用的是12小时制，H用的是24小时制。</li>
  <li>m表示分钟。</li>
  <li>s表示秒。注意S并不代表什么。</li>
</ol>
<br><br>

<table style="font-size: 1rem;">
  <thead>
    <tr>
      <th>格式</th>
      <th>输出</th>
      <th>示例</th>
    </tr>
  </thead>


  <tbody>
  	<tr>
  		<td colspan="3" style="background-color:#a7d5e4; color:#0a627f">年</td>
  	</tr>

    <tr>
      <td>y</td>
      <td>8</td>
      <td>string yy = DateTime.Now.ToString("y-MM") <br/> yy="8-05"</td>
    </tr>

    <tr>
      <td>yy</td>
      <td>08</td>
      <td>string yy = DateTime.Now.ToString("yy-MM") <br/>yy="08-05"</td>
    </tr>

    <tr>
      <td>yyy或更多的y</td>
      <td>2008</td>
      <td>string yy = DateTime.Now.ToString("yy-MM") <br/>yy="08-05"</td>
    </tr>



  	<tr>
  		<td colspan="3" style="background-color:#a7d5e4; color:#0a627f">月</td>
  	</tr>

    <tr>
      <td>M</td>
      <td>5</td>
      <td>string mon = DateTime.Parse("1984-05-09")ToString("yyyy-M") <br/>mon = "1984-5"</td>
    </tr>

    <tr>
      <td>MM</td>
      <td>05</td>
      <td>string mon = DateTime.Parse("1984-05-09")ToString("MＭ")<br />mon = "05"</td>
    </tr>

    <tr>
      <td>MMM</td>
      <td>如果是中文版的操作系统，则会输出：五月.<br />如果是英文操作系统，则输入月份前三个字母的简写：May</td>
      <td>string mon = DateTime.Parse("2006-07-01").ToString("MMM")<br/>英文版操作系统：Jul<br/>中文版操作系统：七月</td>
    </tr>

    <tr>
      <td>MMMM或更多的Ｍ</td>
      <td>如果是中文版的操作系统，则会输出：五月.<br />如果是英文操作系统，则输入月份的全写</td>
      <td>string mon = DateTime.Parse("2006-07-01").ToString("MMM")<br>英文版操作系统：July<br>中文版操作系统：七月</td>
    </tr>



    <tr>
  		<td colspan="3" style="background-color:#a7d5e4; color:#0a627f">日期或星期</td>
  	</tr>

    <tr>
      <td>d</td>
      <td>9</td>
      <td>string dd= DateTime.Parse("1984-05-09")ToString("d") <br>dd= "9"</td>
    </tr>

    <tr>
      <td>dd</td>
      <td>09</td>
      <td>string dd= DateTime.Parse("1984-05-09")ToString("dd") <br>dd= "09"</td>
    </tr>

    <tr>
      <td>ddd</td>
      <td>如果是中文版的操作系统，则会输出星期，如星期三。<br>如果是英文操作系统，则输出星期的简写：如Wed</td>
      <td>string dd = DateTime.Parse("2006-07-01").ToString("ddd") <br />英文版操作系统：Wed <br />中文版操作系统：星期三</td>
    </tr>

    <tr>
      <td>dddd或更多的d</td>
      <td>如果是中文版的操作系统，则会输出星期，如星期三。<br />如果是英文操作系统，则输出星期：如Wednesday</td>
      <td>string dd = DateTime.Parse("2006-07-01").ToString("dddd") <br />英文版操作系统：Wednesday <br />中文版操作系统：星期三</td>
    </tr>


   

  </tbody>
</table>