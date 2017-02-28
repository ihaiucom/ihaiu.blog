---
layout: post
title: 查看keystore的SHA1
date: 2017-02-28 13:51:00
categories: Unity
tags: Unity keytool keystore
excerpt: keytool -v -list -keystore ./ihaiu_testsdk.keystore 
shareexcerpt: keytool -v -list -keystore ./ihaiu_testsdk.keystore 
thread: 2017022112510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_cpp: true
---


<pre>
keytool -v -list -keystore ./ihaiu_testsdk.keystore 
</pre>

[out]
<pre>
密钥库类型: JKS
密钥库提供方: SUN

您的密钥库包含 1 个条目

别名: ihaiu_testsdk
创建日期: 2017-2-28
条目类型: PrivateKeyEntry
证书链长度: 1
证书[1]:
所有者: O=ihaiu.com
发布者: O=ihaiu.com
序列号: 5ec9a1a8
有效期开始日期: Tue Feb 28 17:43:54 CST 2017, 截止日期: Wed Feb 16 17:43:54 CST 2067
证书指纹:
     MD5: 11:ED:1D:BB:94:2D:4D:92:A0:CE:C1:92:1A:5F:F0:FD
     SHA1: 33:DB:56:FE:25:DA:31:2B:8A:D5:16:00:33:CE:6F:51:A6:22:7D:CC
     SHA256: 86:DF:B3:1A:A0:72:D3:29:07:66:B8:E4:92:AD:EB:68:EF:27:13:28:71:5A:14:3B:42:E2:08:C3:AD:E3:A9:F9
     签名算法名称: SHA1withRSA
     版本: 3


*******************************************
*******************************************


</pre>

<br>
<br>
<br>

<pre>
keytool
密钥和证书管理工具

命令:

 -certreq            生成证书请求
 -changealias        更改条目的别名
 -delete             删除条目
 -exportcert         导出证书
 -genkeypair         生成密钥对
 -genseckey          生成密钥
 -gencert            根据证书请求生成证书
 -importcert         导入证书或证书链
 -importpass         导入口令
 -importkeystore     从其他密钥库导入一个或所有条目
 -keypasswd          更改条目的密钥口令
 -list               列出密钥库中的条目
 -printcert          打印证书内容
 -printcertreq       打印证书请求的内容
 -printcrl           打印 CRL 文件的内容
 -storepasswd        更改密钥库的存储口令
</pre>

<pre>
keytool -list -help
keytool -list [OPTION]...

列出密钥库中的条目

选项:

 -rfc                            以 RFC 样式输出
 -alias <alias>                  要处理的条目的别名
 -keystore <keystore>            密钥库名称
 -storepass <arg>                密钥库口令
 -storetype <storetype>          密钥库类型
 -providername <providername>    提供方名称
 -providerclass <providerclass>  提供方类名
 -providerarg <arg>              提供方参数
 -providerpath <pathlist>        提供方类路径
 -v                              详细输出
 -protected                      通过受保护的机制的口令
 
 </pre>