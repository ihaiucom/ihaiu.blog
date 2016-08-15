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
thumbnail:

sh: true
sh_csharp: true
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






## 相关文档

* [关于所有的主机为都为1的广播的疑问：ping 192.168.1.255,为什么在线主机一个都没有ICMP反馈](http://www.zhihu.com/question/21111199/answer/17219920)
* [192.168.1.255在局域网中的作用](http://zhidao.baidu.com/link?url=a72wsIGkIhQ39bNslrcJm0ft5LLyoDjMHG-Gbhs0UY_aoeZXj7P8YKmX3ezUNAmeGYVQiNvLBxTTewRzEhZphK)
* [IP子网划分](http://baike.baidu.com/link?url=h_k_JB2IzzklYysDwLB5oy4oEHgTcpZaB5RYKYuKA8rK_8kvpHQw2KLo8OLO7xRK4MYD1vRthMwltUkvTGFoEa)
* [子网掩码](http://baike.baidu.com/link?url=9LCIcXkfcHuvKs7hL5mUjjmaRx49l0DI_an5sodD70PjwipN0wukSGPqVBEyyRVcB20oWWVhAc6S9OxK2Zfnqa)


