---
layout: post
title: 【转载】C# String.Format格式说明
date: 2016-08-19 11:45:00
categories: C#
tags: C# String Format 
excerpt: D	十进制	string.Format("{0:D3}", 2)	002
thread: 20160819114500
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
---

<p style="color:#AAA;">来源：<a href="http://www.cnblogs.com/luluping/archive/2009/04/30/1446665.html" target="_blank" style="color:#AAA;">http://www.cnblogs.com/luluping/archive/2009/04/30/1446665.html</a></p>

<div id="cnblogs_post_body" style="margin-bottom: 20px; word-break: break-word;">
    <h2 style="margin-top: 10px; font-size: 21px;">
        <font size="2">C#格式化数值结果表</font>
    </h2>
    <div class="postbody" style="padding: 20px 10px 4px; margin: 10px 0px; line-height: 1.5;">
        <table cellspacing="0" cellpadding="3" width="474" height="203">
            <tbody>
                <tr bgcolor="#c0c0c0" class="firstRow">
                    <td style="font-size: 12pt; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <p align="center" style="margin: 10px auto;">
                            <strong><font size="2">字符</font></strong>
                        </p>
                    </td>
                    <td style="font-size: 12pt; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <p align="center" style="margin: 10px auto;">
                            <strong><font size="2">说明</font></strong>
                        </p>
                    </td>
                    <td style="font-size: 12pt; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <p align="center" style="margin: 10px auto;">
                            <strong><font size="2">示例</font></strong>
                        </p>
                    </td>
                    <td style="font-size: 12pt; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <p align="center" style="margin: 10px auto;">
                            <strong><font size="2">输出</font></strong>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">C</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">货币</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2"><strong style="background-color: rgb(160, 255, 255);"><font style="background-color: rgb(255, 255, 255);">string.Format</font></strong>(&quot;{0:C3}&quot;, 2)</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">＄2.000</font>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">D</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">十进制</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2"><strong style="background-color: rgb(160, 255, 255);"><font style="background-color: rgb(255, 255, 255);">string.Format</font></strong>(&quot;{0:D3}&quot;, 2)</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">002</font>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">E</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">科学计数法</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">1.20E+001</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">1.20E+001</font>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">G</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">常规</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2"><strong style="background-color: rgb(160, 255, 255);"><font style="background-color: rgb(255, 255, 255);">string.Format</font></strong>(&quot;{0:G}&quot;, 2)</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">2</font>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">N</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">用分号隔开的数字</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2"><strong style="background-color: rgb(160, 255, 255);"><font style="background-color: rgb(255, 255, 255);">string.Format</font></strong>(&quot;{0:N}&quot;, 250000)</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">250,000.00</font>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">X</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">十六进制</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2"><strong style="background-color: rgb(160, 255, 255);"><font style="background-color: rgb(255, 255, 255);">string.Format</font></strong>(&quot;{0:X000}&quot;, 12)</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">C</font>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;"></td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;"></td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2"><strong style="background-color: rgb(160, 255, 255);"><font style="background-color: rgb(255, 255, 255);">string.Format</font></strong>(&quot;{0:000.000}&quot;, 12.2)</font>
                    </td>
                    <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                        <font size="2">012.200</font>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3 style="font-size: 16px;">
        <font face="Verdana" size="2">Strings</font>
    </h3>
    <p style="margin: 10px auto;">
        <font size="2">There really isn&#39;t any formatting within a strong, beyond it&#39;s alignment. Alignment works for any argument being printed in a String.Format call.</font>
    </p>
    <p style="margin: 10px auto;">
        <font size="2">&nbsp;</font>
    </p>
    <table width="520" height="62">
        <tbody>
            <tr class="firstRow">
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Sample</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Generates</font></strong>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">String.Format(&quot;-&gt;{1,10}&lt;-&quot;, &quot;Hello&quot;);</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">-&gt; Hello&lt;-</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">String.Format(&quot;-&gt;{1,-10}&lt;-&quot;, &quot;Hello&quot;);</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">-&gt;Hello &lt;-</font>
                </td>
            </tr>
        </tbody>
    </table>
    <h3 style="font-size: 16px;">
        <font face="Verdana" size="2">Numbers</font>
    </h3>
    <p style="margin: 10px auto;">
        <font size="2">Basic number formatting specifiers:</font>
    </p>
    <p style="margin: 10px auto;">
        <font size="2">&nbsp;</font>
    </p>
    <table width="631" height="342">
        <tbody>
            <tr class="firstRow">
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Specifier</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Type</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Format</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <p style="margin: 10px auto;">
                        <strong><font size="2">Output<br/></font></strong><strong><font size="2">(Passed<br/>Double 1.42)</font></strong>
                    </p>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <p style="margin: 10px auto;">
                        <strong><font size="2">Output<br/></font></strong><strong><font size="2">(Passed<br/>Int -12400)</font></strong>
                    </p>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">c</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Currency</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:c}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">＄1.42</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-＄12,400</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">d</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Decimal (Whole number)</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:d}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">System.<br/>FormatException</font></strong>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-12400</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">e</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Scientific</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:e}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1.420000e+000</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-1.240000e+004</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">f</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Fixed point</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:f}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1.42</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-12400.00</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">g</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">General</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:g}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1.42</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-12400</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">n</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Number with commas for thousands</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:n}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1.42</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-12,400</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">r</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Round trippable</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:r}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1.42</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">System.<br/>FormatException</font></strong>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">x</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Hexadecimal</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:x4}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">System.<br/>FormatException</font></strong>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">cf90</font>
                </td>
            </tr>
        </tbody>
    </table>
    <p style="margin: 10px auto;">
        <font size="2">Custom number formatting:</font>
    </p>
    <p style="margin: 10px auto;">
        <font size="2">&nbsp;</font>
    </p>
    <table width="681" height="476">
        <tbody>
            <tr class="firstRow">
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Specifier</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Type</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Example</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Output (Passed Double 1500.42)</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Note</font></strong>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">0</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Zero placeholder</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:00.0000}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1500.4200</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Pads with zeroes.</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">#</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Digit placeholder</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:(#).##}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">(1500).42</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;"></td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">.</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Decimal point</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:0.0}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1500.4</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;"></td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">,</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Thousand separator</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:0,0}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">1,500</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Must be between two zeroes.</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">,.</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Number scaling</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2"><font face="Courier New">{0:0,.}</font></font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">2</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Comma adjacent to Period scales by 1000.</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">%</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Percent</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:0%}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">150042%</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Multiplies by 100, adds % sign.</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">e</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Exponent placeholder</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:00e+0}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">15e+2</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Many exponent formats available.</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">;</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Group separator</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">see below</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;"></td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;"></td>
            </tr>
        </tbody>
    </table>
    <p style="margin: 10px auto;">
        <font size="2">The group separator is especially useful for formatting currency values which require that negative values be enclosed in parentheses. This currency formatting example at the bottom of this document makes it obvious:</font>
    </p>
    <h3 style="font-size: 16px;">
        <font face="Verdana" size="2">Dates</font>
    </h3>
    <p style="margin: 10px auto;">
        <font size="2">Note that date formatting is especially dependant on the system&#39;s regional settings; the example strings here are from my local locale.</font>
    </p>
    <p style="margin: 10px auto;">
        <font size="2">&nbsp;</font>
    </p>
    <table width="675" height="334">
        <tbody>
            <tr class="firstRow">
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Specifier</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Type</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Example (Passed System.DateTime.Now)</font></strong>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">d</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Short date</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10/12/2002</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">D</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Long date</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December 10, 2002</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">t</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Short time</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10:11 PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">T</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Long time</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10:11:29 PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">f</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Full date &amp; time</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December 10, 2002 10:11 PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">F</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Full date &amp; time (long)</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December 10, 2002 10:11:29 PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">g</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Default date &amp; time</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10/12/2002 10:11 PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">G</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Default date &amp; time (long)</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10/12/2002 10:11:29 PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">M</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Month day pattern</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December 10</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">r</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">RFC1123 date string</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Tue, 10 Dec 2002 22:11:29 GMT</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">s</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Sortable date string</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">2002-12-10T22:11:29</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">u</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Universal sortable, local time</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">2002-12-10 22:13:50Z</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">U</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Universal sortable, GMT</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December 11, 2002 3:13:50 AM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Y</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Year month pattern</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December, 2002</font>
                </td>
            </tr>
        </tbody>
    </table>
    <p style="margin: 10px auto;">
        <font size="2">The &#39;U&#39; specifier seems broken; that string certainly isn&#39;t sortable.</font>
    </p>
    <p style="margin: 10px auto;">
        <strong><font size="2">Custom date formatting:</font></strong>
    </p>
    <p style="margin: 10px auto;">
        <font size="2">&nbsp;</font>
    </p>
    <table width="721" height="442" style="width: 670px;">
        <tbody>
            <tr class="firstRow">
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Specifier</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Type</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Example</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Example Output</font></strong>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">dd</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Day</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:dd}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">ddd</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Day name</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:ddd}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Tue</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">dddd</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Full day name</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:dddd}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Tuesday</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">f, ff, ...</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Second fractions</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:fff}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">932</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">gg, ...</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Era</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:gg}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">A.D.</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">hh</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">2 digit hour</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:hh}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">HH</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">2 digit hour, 24hr format</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:HH}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">22</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">mm</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Minute 00-59</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:mm}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">38</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">MM</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Month 01-12</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:MM}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">12</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">MMM</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Month abbreviation</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:MMM}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Dec</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">MMMM</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Full month name</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:MMMM}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">December</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">ss</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Seconds 00-59</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:ss}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">46</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">tt</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">AM or PM</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:tt}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">PM</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">yy</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Year, 2 digits</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:yy}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">02</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">yyyy</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Year</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:yyyy}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">2002</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">zz</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Timezone offset, 2 digits</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:zz}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-05</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">zzz</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Full timezone offset</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:zzz}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">-05:00</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">:</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Separator</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:hh:mm:ss}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10:43:20</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">/</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Separator</font>
                </td>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font face="Courier New" size="2">{0:dd/MM/yyyy}</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">10/12/2002</font>
                </td>
            </tr>
        </tbody>
    </table>
    <h3 style="font-size: 16px;">
        <font face="Verdana" size="2">Enumerations</font>
    </h3>
    <p style="margin: 10px auto;">
        <font size="2">&nbsp;</font>
    </p>
    <table width="702" height="102" style="width: 670px;">
        <tbody>
            <tr class="firstRow">
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Specifier</font></strong>
                </td>
                <td align="center" bgcolor="#c0c0c0" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <strong><font size="2">Type</font></strong>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">g</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Default (Flag names if available, otherwise decimal)</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">f</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Flags always</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">d</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Integer always</font>
                </td>
            </tr>
            <tr>
                <td align="center" style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">x</font>
                </td>
                <td style="font-size: 12px; border-color: silver; border-collapse: collapse; padding: 3px;">
                    <font size="2">Eight digit hex.</font>
                </td>
            </tr>
        </tbody>
    </table>
    <h3 style="font-size: 16px;">
        <font face="Verdana" size="2">Some Useful Examples</font>
    </h3>
    <p style="margin: 10px auto;">
        <font face="Courier New" size="2">String.Format(&quot;{0:＄#,##0.00;(＄#,##0.00);Zero}&quot;, value);</font>
    </p>
    <blockquote dir="ltr" style="border: 2px solid rgb(239, 239, 239); padding: 4px; margin-right: 0px; margin-left: 0px; background-image: none; background-position: initial initial; background-repeat: initial initial;">
        <p style="margin: 10px auto;">
            <font size="2">This will output &quot;＄1,240.00&quot; if passed 1243.50. It will output the same format but in parentheses if the number is negative, and will output the string &quot;Zero&quot; if the number is zero.</font>
        </p>
    </blockquote>
    <p style="margin: 10px auto;">
        <font face="Courier New" size="2">String.Format(&quot;{0:(###) ###-####}&quot;, 18005551212);</font>
    </p>
    <blockquote dir="ltr" style="border: 2px solid rgb(239, 239, 239); padding: 4px; margin-right: 0px; margin-left: 0px; background-image: none; background-position: initial initial; background-repeat: initial initial;">
        <p style="margin: 10px auto;">
            <font size="2">This will output &quot;(800) 555-1212&quot;.</font>
        </p>
        <p style="margin: 10px auto;">
            <font size="2">&nbsp;</font>
        </p>
        <p style="margin: 10px auto;">
            <strong><font size="2">变量.ToString()</font></strong>
        </p>
        <p style="margin: 10px auto;">
            <br/><font size="2">字符型转换 转为字符串<br/>12345.ToString(&quot;n&quot;); //生成 12,345.00<br/>12345.ToString(&quot;C&quot;); //生成 ￥12,345.00<br/>12345.ToString(&quot;e&quot;); //生成 1.234500e+004<br/>12345.ToString(&quot;f4&quot;); //生成 12345.0000<br/>12345.ToString(&quot;x&quot;); //生成 3039 (16进制)<br/>12345.ToString(&quot;p&quot;); //生成 1,234,500.00%</font>
        </p>
        <div>
            <font size="2"><br/></font>
        </div>
    </blockquote>
</div>
<div class="clear" style="clear: both;"></div>
<div id="blog_post_info_block" style="margin-top: 20px;">
    <div id="BlogPostCategory" style="margin-bottom: 10px; font-family: Verdana, &#39;Lucida Grande&#39;, Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; orphans: 2; white-space: normal; widows: 2;"></div>
</div>
<p>
    <br/>
</p>