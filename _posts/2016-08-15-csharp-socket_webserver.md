---
layout: post
title: 【转载】C# 编写自己的Web服务器
date: 2016-08-15 18:10:00
categories: C#
tags: C# Socket Http 
excerpt: 自己写一个简单的Web服务器，对加深理解Http协议有很好的帮助，下面就看一下一个基于TcpListener的Web服务器
thread: 20160815181000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
---


<p style="color:#AAA;">来源：http://www.cnblogs.com/wywnet/p/3377683.html</p>

<p>自己写一个简单的Web服务器，对加深理解Http协议有很好的帮助，下面就看一下一个基于TcpListener的Web服务器：</p>



<pre class="brush: csharp; ">
class Program
{
    static void Main(string[] args)
    {
        IPAddress address = IPAddress.Loopback;
        IPEndPoint endPoint = new IPEndPoint(address, 49152);

        TcpListener newserver = new TcpListener(endPoint);
        newserver.Start();
        Console.WriteLine("开始监听......");
        
        while (true)
        {
            TcpClient newclient = newserver.AcceptTcpClient();
            Console.WriteLine("已经建立连接");

            NetworkStream ns = newclient.GetStream();

            System.Text.Encoding utf8 = System.Text.Encoding.UTF8;

            byte[] request=new byte[4096];
            int lehgth = ns.Read(request, 0, 4096);
            string requestString = utf8.GetString(request);

            Console.WriteLine(requestString);

            string statusLine = "HTTP/1.1 200 OK\r\n";
            byte[] statusLineBytes = utf8.GetBytes(statusLine);

            string responseBody = &quot;&lt;html&gt;&lt;head&gt;&lt;body&gt;&lt;h1&gt;hello world&lt;/h1&gt;&lt;/body&gt;&lt;/head&gt;&lt;/html&gt;&quot;;

            byte[] responseBodyBytes = utf8.GetBytes(responseBody);

            //回应头部分
            string responseHeader = string.Format("Content-Type:text/html;charset=UTF-8\r\nContent-Length:{0}\r\n",responseBody.Length);

            byte[] responseHeaderBytes = utf8.GetBytes(responseHeader);

            ns.Write(statusLineBytes, 0, statusLineBytes.Length);
            ns.Write(responseHeaderBytes, 0, responseHeaderBytes.Length);
            ns.Write(new byte[] { 13, 10 }, 0, 2);
            ns.Write(responseBodyBytes, 0, responseBodyBytes.Length);
            newclient.Close();

            if (Console.KeyAvailable)
                break;
        }
        newserver.Stop();
    }
</pre>


运行程序，然后打开浏览器，在浏览器窗口中输入服务器的地址：http://localhost:49152，这时就回看到服务器返回的数据。
