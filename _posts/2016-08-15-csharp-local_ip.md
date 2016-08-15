---
layout: post
title: 【笔记】C#获取本机IP地址
date: 2016-08-15 16:37:00
categories: C#
tags: C# Dns 
excerpt: C#获取本机IP地址
thread: 20160815163700
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
---



<pre class="brush: csharp; ">
public static string GetLocalIPAddress()
{
	IPHostEntry host;
	string localIP = "";
	host = Dns.GetHostEntry(Dns.GetHostName());
	foreach (IPAddress ip in host.AddressList)
	{
		if (ip.AddressFamily == AddressFamily.InterNetwork && IsPrivateIP(ip)) // JM: check for all local ranges
		{
			localIP = ip.ToString();
			break;
		}
	}

	return localIP;
}

private static bool IsPrivateIP(IPAddress myIPAddress)
{
	if (myIPAddress.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
	{
		byte[] ipBytes = myIPAddress.GetAddressBytes();

		// 10.0.0.0/24 
		if (ipBytes[0] == 10)
		{
			return true;
		}
		// 172.16.0.0/16
		else if (ipBytes[0] == 172 && ipBytes[1] >= 16 && ipBytes[1] <= 31)
		{
			return true;
		}
		// 192.168.0.0/16
		else if (ipBytes[0] == 192 && ipBytes[1] == 168)
		{
			return true;
		}
	}

	return false;
}
</pre>
