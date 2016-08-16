---
layout: post
title: 【笔记】C# 搜索局域网主机
date: 2016-08-15 17:31:00
categories: C#
tags: C# lan port host 
excerpt: C# 搜索局域网主机 255
thread: 20160815173100
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:/assets/docpic/2016-08-15-csharp-lan_port-1.png

sh: true
sh_csharp: true
sh_bash: true
---




<pre class="brush: csharp; ">
private static IEnumerator LanDiscoveryThread(ushort port, int listenWaitTime)
{
    List&lt;string&gt; localSubNet = new List&lt;string&gt;();
    NetworkInterface[] interfaces = NetworkInterface.GetAllNetworkInterfaces();

    foreach (var netInterface in interfaces)
    {
        if ((netInterface.OperationalStatus == OperationalStatus.Up ||
            netInterface.OperationalStatus == OperationalStatus.Unknown) &&
            (netInterface.NetworkInterfaceType == NetworkInterfaceType.Wireless80211 ||
                netInterface.NetworkInterfaceType == NetworkInterfaceType.Ethernet))

        {
            foreach (var d in netInterface.GetIPProperties().UnicastAddresses)
            {
                if (d.Address.AddressFamily == AddressFamily.InterNetwork)
                {
                    var ipAddress = d.Address;
                    if (ipAddress.ToString().Contains("."))
                    {
                        localSubNet.Add(ipAddress.ToString().Remove(ipAddress.ToString().LastIndexOf('.')));
                        Debug.LogFormat("localSubNet.Add({0})  ipAddress={1}",ipAddress.ToString().Remove(ipAddress.ToString().LastIndexOf('.')), ipAddress);
                    }
                }
            }
        }
    }

    UdpClient Client = new UdpClient();
    IPEndPoint foundEndpoint = new IPEndPoint(IPAddress.Any, 0);
    bool found = false;


    foreach (string s in localSubNet)
    {
        Debug.Log("InitSend  " + s + ".255");
        Client.Send(new byte[1], 1, new IPEndPoint(IPAddress.Parse(s + ".255"), port));
    }

    int counter = 0;
    do
    {
        if (Client.Available != 0)
        {
            Client.Receive(ref foundEndpoint);
            found = true;
            break;
        }

        if (counter++ > listenWaitTime / 50)
            break;

        yield return new WaitForSeconds(0.05f);
        foreach (string s in localSubNet)
        {
            Debug.Log(counter + "  " + s + ".255");
            Client.Send(new byte[1], 1, new IPEndPoint(IPAddress.Parse(s + ".255"), port));
        }
    } while (true);

    Client.Close();
    Debug.Log("found=" + found);
    if (found)
    {
        Debug.Log(foundEndpoint);
    }


  

}
</pre>

<p>192.168.1.255 感觉被路由器给屏蔽了，在Mac上ping只返回自己电脑的ip，在Windows上ping返回超时。所以该用下面的方法自己遍历一边IP </p>

<h2 class="nav1">客户端</h2>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Net.NetworkInformation;
using System.Net;
using System.Collections.Generic;
using System.Net.Sockets;
using System;
using System.Text;

public class GetLanHost : MonoBehaviour
{
    public ushort port = 80;
    public int listenWaitTime = 1000;

	void Start ()
    {
        StartCoroutine(LanDiscovery(port, listenWaitTime));
	}
	


    public static IEnumerator LanDiscovery(ushort port, int listenWaitTime)
    {
        List&lt;string&gt; localSubNet = new List&lt;string&gt;();
        NetworkInterface[] interfaces = NetworkInterface.GetAllNetworkInterfaces();

        foreach (var netInterface in interfaces)
        {
            if ((netInterface.OperationalStatus == OperationalStatus.Up ||
                netInterface.OperationalStatus == OperationalStatus.Unknown) &&
                (netInterface.NetworkInterfaceType == NetworkInterfaceType.Wireless80211 ||
                    netInterface.NetworkInterfaceType == NetworkInterfaceType.Ethernet))

            {
                foreach (var d in netInterface.GetIPProperties().UnicastAddresses)
                {
                    if (d.Address.AddressFamily == AddressFamily.InterNetwork)
                    {
                        var ipAddress = d.Address;
                        if (ipAddress.ToString().Contains("."))
                        {
                            localSubNet.Add(ipAddress.ToString());
                        }
                    }
                }
            }
        }

        if (localSubNet.Count > 1)
        {
            for(int i = localSubNet.Count - 1; i >= 0; i --)
            {
                string[] arr = localSubNet[i].Split('.');
                if (arr.Length == 4 && arr[3] == "1")
                {
                    localSubNet.RemoveAt(i);
                }
            }
        }

        UdpClient Client = new UdpClient();
        IPEndPoint foundEndpoint = new IPEndPoint(IPAddress.Any, 0);
        bool found = false;

        List&lt;string&gt; foundList = new List&lt;string&gt;();

        for(int j = 0; j &lt; localSubNet.Count; j ++)
        {
            string s = localSubNet[j];
            s = s.Remove(s.LastIndexOf('.'));

            for(int i = 2; i &lt; 255; i ++)
            {
                string ip = s + "." + i;
                Byte[] sendBytes = Encoding.ASCII.GetBytes("1");
                Client.Send(sendBytes, sendBytes.Length, new IPEndPoint(IPAddress.Parse(ip), port));
            }
        }

        int counter = 0;
        do
        {
            if (Client.Available != 0)
            {
                Client.Receive(ref foundEndpoint);
                foundList.Add(foundEndpoint.ToString());
            }

            if (counter++ > listenWaitTime / 100)
                break;

            yield return new WaitForSeconds(0.1f);
        } while (true);


        Client.Close();


        Debug.Log("foundList.Count=" + foundList.Count);
        for(int i = 0; i &lt; foundList.Count; i ++)
        {
            Debug.Log(foundList[i]);
        }

   }

}

</pre>



<br/>
<br/>

<h2 class="nav1">服务器</h2>

<pre class="brush: csharp; ">
using System;
using System.Net;
using System.Text;
using System.Net.Sockets;

namespace UdpServer
{
	class MainClass
	{
		public static UdpClient ReceiveUdpClient;

		/// <summary>
		/// 侦听端口名称
		/// </summary>
		public static int PortName;

		/// <summary>
		/// 本地地址
		/// </summary>
		public static IPEndPoint LocalIPEndPoint;

		/// <summary>
		/// 日志记录
		/// </summary>
		public static StringBuilder Note_StringBuilder;
		/// <summary>
		/// 本地IP地址
		/// </summary>
		public static IPAddress MyIPAddress;

		public static void Main (string[] args)
		{
			//获取本机可用IP地址
			IPAddress[] ips = Dns.GetHostAddresses(Dns.GetHostName());


			foreach (IPAddress ipa in ips) {
				if (ipa.AddressFamily == AddressFamily.InterNetwork) {

					Console.WriteLine (ipa.ToString());

					string[] arr = ipa.ToString ().Split ('.');
					if (arr.Length == 4 && (arr[2] == "1" ||  arr[2] == "0")) 
					{
						MyIPAddress = ipa;
					}
				}
			}


			if (MyIPAddress == null) {
				foreach (IPAddress ipa in ips) {
					if (ipa.AddressFamily == AddressFamily.InterNetwork) {
						MyIPAddress = ipa;//获取本地IP地址
						break;
					}
				}
			}

			Note_StringBuilder = new StringBuilder();
			PortName = 7999;

			Console.WriteLine ("MyIPAddress=" + MyIPAddress.ToString());
			Console.WriteLine ("PortName=" + PortName);

			IPEndPoint local = new IPEndPoint(MyIPAddress, PortName);
			ReceiveUdpClient = new UdpClient(local);
			IPEndPoint remote = new IPEndPoint(IPAddress.Any, 0);
			while (true)
			{
				try
				{
					//关闭udpClient 时此句会产生异常
					byte[] receiveBytes = ReceiveUdpClient.Receive(ref remote);
					string receiveMessage = Encoding.Default.GetString(receiveBytes, 0, receiveBytes.Length);
					//  receiveMessage = ASCIIEncoding.ASCII.GetString(receiveBytes, 0, receiveBytes.Length);
					Console.WriteLine(string.Format("{0}来自{1}:{2}", DateTime.Now.ToString(), remote, receiveMessage));
					try
					{
						if(receiveMessage == "1")
						{
							Byte[] sendBytes = Encoding.ASCII.GetBytes("ok");
							ReceiveUdpClient.Send(sendBytes, sendBytes.Length, remote);
						}
					}
					catch (Exception e)
					{
					}
					//break;

				}
				catch
				{
					break;
				}
			}
		}

	}
}

</pre>

<br/>
<br/>

<h2 class="nav1">截图</h2>
客户端截图
<p><img src="/assets/docpic/2016-08-15-csharp-lan_port-1.png"></p>


<br/>
服务器截图
<pre>
192.168.1.9
192.168.2.1
MyIPAddress=192.168.1.9
PortName=7999
2016/8/15 21:04:54来自192.168.1.9:57384:1
</pre>




## 相关文档

* [关于所有的主机为都为1的广播的疑问：ping 192.168.1.255,为什么在线主机一个都没有ICMP反馈](http://www.zhihu.com/question/21111199/answer/17219920)
* [192.168.1.255在局域网中的作用](http://zhidao.baidu.com/link?url=a72wsIGkIhQ39bNslrcJm0ft5LLyoDjMHG-Gbhs0UY_aoeZXj7P8YKmX3ezUNAmeGYVQiNvLBxTTewRzEhZphK)
* [IP子网划分](http://baike.baidu.com/link?url=h_k_JB2IzzklYysDwLB5oy4oEHgTcpZaB5RYKYuKA8rK_8kvpHQw2KLo8OLO7xRK4MYD1vRthMwltUkvTGFoEa)
* [子网掩码](http://baike.baidu.com/link?url=9LCIcXkfcHuvKs7hL5mUjjmaRx49l0DI_an5sodD70PjwipN0wukSGPqVBEyyRVcB20oWWVhAc6S9OxK2Zfnqa)
* [C# 建立UDP服务器并接收客户端数据](http://www.2cto.com/kf/201502/377203.html)


