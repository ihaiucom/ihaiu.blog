---
layout: post
title: c#使用多线程的几种方式示例详解
date: 2017-01-03 20:50:00
categories: C#
tags: C# Unity Thread
excerpt: GUID查看项目资源使用情况
shareexcerpt: GUID查看项目资源使用情况
thread: 20170103205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/unity_guidref_1.png

sh: true
sh_csharp: true
---

<br>

<h2 class="nav1">(1)不需要传递参数,也不需要返回参数 </h2>
<p>ThreadStart是一个委托，这个委托的定义为void ThreadStart()，没有参数与返回值。</p>

<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestThreadStart : MonoBehaviour {

    public string data = "";
	public void Test ()
    {

        StartCoroutine(ShowData());

        DateTime time = DateTime.Now;//得到当前时间
        Debug.Log("Begin  " + time.Minute + ":" + time.Second);

        for (int i = 0; i < 1; i++)
        {
            ThreadStart threadStart = new ThreadStart(Calculate);
            Thread thread = new Thread(threadStart);
            thread.Start();
        }
//        Thread.Sleep(2000); // 此时Unity会卡死

        time = DateTime.Now;
        Debug.Log("End  " + time.Minute + ":" + time.Second);

	}
	

    public void Calculate()
    {
        DateTime time = DateTime.Now;//得到当前时间
        Debug.Log("Calculate Begin" + time.Minute + ":" + time.Millisecond);

        for(int i = 0; i < 10; i ++)
        {
            Thread.Sleep(1000);//随机休眠一段时间
            time = DateTime.Now;
            Debug.Log("Calculate i=" + i +"   " + time.Minute + ":" + time.Second );

            data = "i--" + i;
        }
        Debug.Log("Calculate End" + time.Minute + ":" + time.Millisecond);
    }

    IEnumerator ShowData()
    {
        while (true)
        {
            Debug.Log("data=" + data);
            yield return new WaitForSeconds(1F);
        }
    }
}
</pre>

<br>

[out]
<pre>
data=
Begin  54:20
Calculate Begin54:843
End  54:20
data=
Calculate i=0   54:21
Calculate i=1   54:22
data=i--1
data=i--1
Calculate i=2   54:23
Calculate End54:857
data=i--2
data=i--2

</pre>


<br>
<br>

<h2 class="nav1">(2)需要传递单个参数 </h2>
<p>ParameterThreadStart委托定义为void ParameterizedThreadStart(object state)，有一个参数但是没有返回值。</p>

<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestParameterThreadStart : MonoBehaviour {


    public void Test ()
    {


        DateTime time = DateTime.Now;//得到当前时间
        Debug.Log("Begin  " + time.Minute + ":" + time.Second);

        ParameterizedThreadStart tStart = new ParameterizedThreadStart(Calculate);
        Thread thread = new Thread(tStart);
        thread.Start("Hello");//传递参数

        time = DateTime.Now;
        Debug.Log("End  " + time.Minute + ":" + time.Second);

    }

  

    public void Calculate(object arg)
    {
        Debug.Log("Calculate arg=" + arg);
        for(int i = 0; i < 3; i ++)
        {
            Thread.Sleep(1000);//随机休眠一段时间
            Debug.Log("Calculate " + i + " " + DateTime.Now);
        }
    }
}

</pre>


<br>

[out]
<pre>
Begin  2:0
Calculate arg=Hello
End  2:0
Calculate 0 01/05/2017 17:02:01
Calculate 1 01/05/2017 17:02:02
Calculate 2 01/05/2017 17:02:03

</pre>

<br>
<br>

<h2 class="nav1">(3)使用专门的线程类(常用) </h2>
<p>使用线程类可以有多个参数与多个返回值，十分灵活！</p>

<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;

public class TestThreadClass : MonoBehaviour 
{

    public void Test()
    {
        StartCoroutine(OnTest());
    }

    IEnumerator OnTest()
    {

        Ctl ctl = new Ctl(2);
        ThreadStart threadStart = new ThreadStart(ctl.Calculate);
        Thread thread = new Thread(threadStart);
        Debug.Log("[Main] [before] thread.ThreadState=" + thread.ThreadState);
        thread.Start();
        //等待线程结束
        while (thread.ThreadState != ThreadState.Stopped)
        {

            Debug.Log("[Main] thread.ThreadState=" + thread.ThreadState);
            yield return new WaitForSeconds(0.5f);
        }
        Debug.Log("[Main] [end] thread.ThreadState=" + thread.ThreadState);

        Debug.Log("[Main] ctl.Result=" + ctl.Result);
    }


    public class Ctl
    {
        public int Parame { set; get; }//参数
        public int Result { set; get; }//返回值
        //构造函数
        public Ctl(int parame)
        {
            this.Parame = parame;
        }

        //线程执行方法
        public void Calculate()
        {
            for(int i = 0; i < 3; i ++)
            {
                Thread.Sleep(2000);//随机休眠一段时间
                this.Result += this.Parame * 10;

                Debug.Log("Calculate i=" +i+ ", Result=" + Result);
            }
            Debug.Log("Calculate Parame=" + Parame);
            Debug.Log("Calculate Result=" + Result);
        }
    }
}




</pre>


<br>

[out]
<pre>
[Main] [before] thread.ThreadState=Unstarted
[Main] thread.ThreadState=Running
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
Calculate i=0, Result=20
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
Calculate i=1, Result=40
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
[Main] thread.ThreadState=WaitSleepJoin
Calculate i=2, Result=60
Calculate Parame=2
Calculate Result=60
[Main] [end] thread.ThreadState=Stopped
[Main] ctl.Result=60

</pre>


<br>
<br>

<h2 class="nav1">(4)使用匿名方法(常用) </h2>
<p>使用匿名方法启动线程可以有多个参数和返回值，而且使用非常方便！</p>

<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestThreadDelegate : MonoBehaviour 
{

    public void Test()
    {
        StartCoroutine(OnTest());
    }

    IEnumerator OnTest()
    {
        int Parame = 2;//当做参数
        int Result = 0;//当做返回值

        //匿名方法
        ThreadStart threadStart = new ThreadStart(delegate()
            {
                for(int i = 0; i < 3; i ++)
                {
                    Thread.Sleep(2000);//随机休眠一段时间
                    Result += Parame * 10;

                    Debug.Log(time +" [Thread] i=" +i+ ", Result=" + Result);
                }
                Debug.Log(time +" [Thread] Parame=" + Parame);
                Debug.Log(time +" [Thread] Result=" + Result);
            });


        Thread thread = new Thread(threadStart);
        Debug.Log(time +" [Main] [before] thread.ThreadState=" + thread.ThreadState);
        thread.Start();
        //等待线程结束
        while (thread.ThreadState != ThreadState.Stopped)
        {
            Debug.Log(time +" [Main] thread.ThreadState=" + thread.ThreadState + "  Result=" + Result);
            yield return new WaitForSeconds(1f);
        }
        Debug.Log(time +" [Main] [end] thread.ThreadState=" + thread.ThreadState);

        Debug.Log(time +" [Main] ctl.Result=" + Result);
    }

    public string time
    {
        get
        {
            return DateTime.Now.ToString("mm：ss：ffff");
        }
    }

}




</pre>


<br>

[out]
<pre>
30：41：4919 [Main] [before] thread.ThreadState=Unstarted
30：41：4993 [Main] thread.ThreadState=Running  Result=0
30：42：4906 [Main] thread.ThreadState=WaitSleepJoin  Result=0
30：43：4906 [Main] thread.ThreadState=WaitSleepJoin  Result=0
30：43：5043 [Thread] i=0, Result=20
30：44：4912 [Main] thread.ThreadState=WaitSleepJoin  Result=20
30：45：5068 [Main] thread.ThreadState=WaitSleepJoin  Result=20
30：45：5072 [Thread] i=1, Result=40
30：46：5076 [Main] thread.ThreadState=WaitSleepJoin  Result=40
30：47：5100 [Main] thread.ThreadState=WaitSleepJoin  Result=40
30：47：5118 [Thread] i=2, Result=60
30：47：5121 [Thread] Parame=2
30：47：5124 [Thread] Result=60
30：48：5102 [Main] [end] thread.ThreadState=Stopped
30：48：5106 [Main] ctl.Result=60

</pre>


<br>
<br>
<h2 class="nav1">相关文档 </h2>
<p><a href="http://www.jb51.net/article/46234.htm" target="_blank" >c#使用多线程的几种方式示例详解</a></p>
<p><a href="http://www.jb51.net/article/45820.htm" target="_blank" >c#多线程中Lock()关键字的用法小结</a></p>


<br>
<br>
<br>

