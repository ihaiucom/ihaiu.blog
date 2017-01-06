---
layout: post
title: c#使用多线程的几种方式示例详解
date: 2017-01-05 20:50:00
categories: C#
tags: C# Unity Thread
excerpt: ThreadStart是一个委托，这个委托的定义为void ThreadStart()，没有参数与返回值。ParameterThreadStart委托定义为void ParameterizedThreadStart(object state)，有一个参数但是没有返回值。
shareexcerpt: ThreadStart是一个委托，这个委托的定义为void ThreadStart()，没有参数与返回值。ParameterThreadStart委托定义为void ParameterizedThreadStart(object state)，有一个参数但是没有返回值。
thread: 20170103205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---


<h2 class="nav2">索引 </h2>
<p><a href="#index_1">(1)不需要传递参数,也不需要返回参数</a></p>
<p><a href="#index_2">(2)需要传递单个参数</a></p>
<p><a href="#index_3">(3)使用专门的线程类(常用) </a></p>
<p><a href="#index_4">(4)使用匿名方法(常用) </a></p>
<p><a href="#index_5">(5)使用委托开启多线程(多线程深入) </a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#index_5_1">1、用委托(Delegate)的BeginInvoke和EndInvoke方法操作线程 </a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#index_5_1">2、使用IAsyncResult.IsCompleted属性来判断异步调用是否完成 </a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#index_5_1">3、使用WaitOne方法等待异步方法执行完成 </a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#index_5_1">4、使用回调方式返回结果 </a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#index_5_1">5、其他组件的BeginXXX和EndXXX方法 </a></p>
<br>

<h2 class="nav2" id="index_xgwd">相关文档 </h2>
<p><a href="http://www.jb51.net/article/46234.htm" target="_blank" >c#使用多线程的几种方式示例详解</a></p>
<p><a href="http://www.jb51.net/article/45820.htm" target="_blank" >c#多线程中Lock()关键字的用法小结</a></p>
<p><a href="http://blog.csdn.net/tianmuxia/article/details/17675681/" target="_blank" >C#的async和await</a></p>
<br>
<br>

<h2 class="nav1" id="index_1">(1)不需要传递参数,也不需要返回参数 </h2>
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

<h2 class="nav1" id="index_2">(2)需要传递单个参数 </h2>
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

<h2 class="nav1"  id="index_3">(3)使用专门的线程类(常用) </h2>
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

<h2 class="nav1"  id="index_4">(4)使用匿名方法(常用) </h2>
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

<h2 class="nav1"  id="index_5">(5)使用委托开启多线程(多线程深入) </h2>
<h2 class="nav2"  id="index_5_1">1、用委托(Delegate)的BeginInvoke和EndInvoke方法操作线程</h2>
<p>BeginInvoke方法可以使用线程异步地执行委托所指向的方法。然后通过EndInvoke方法获得方法的返回值（EndInvoke方法的返回值就是被调用方法的返回值），或是确定方法已经被成功调用。</p>

<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestThreadInvoke : MonoBehaviour {
    

    public void Test()
    {
        NewTaskDelegate task = newTask;

        Log("Main", "BeginInvoke Before");
        IAsyncResult asyncResult = task.BeginInvoke(2000, null, null);


        Log("Main", "EndInvoke Before");
        //EndInvoke方法将被阻塞2秒
        int result = task.EndInvoke(asyncResult);

        Log("Main", "result=" + result);
    }

    private delegate int NewTaskDelegate(int ms);
    private int newTask(int ms)
    {
        Log("Task", "任务开始");
        Thread.Sleep(ms);
        System.Random random = new System.Random();
        int n = random.Next(10000);
        Log("Task", "任务完成");
        return n;
    }


    private void Log(string threadName, string msg)
    {
        Debug.LogFormat("{0} [{1}]  {2}", time, threadName, msg);
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
33：39：8422 [Main]  BeginInvoke Before
33：39：8535 [Task]  任务开始
33：39：8534 [Main]  EndInvoke Before
33：41：8590 [Task]  任务完成
33：41：8595 [Main]  result=8484

</pre>


<br>
<br>
<h2 class="nav2" id="index_5_2">2、使用IAsyncResult.IsCompleted属性来判断异步调用是否完成</h2>
<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestThreadInvokeIsCompleted : MonoBehaviour {
    

    public void Test()
    {
        NewTaskDelegate task = newTask;

        Log("Main", "BeginInvoke Before");
        IAsyncResult asyncResult = task.BeginInvoke(2000, null, null);
        //等待异步执行完成
        while(!asyncResult.IsCompleted)
        {
            Log("Main", "asyncResult.IsCompleted=" + asyncResult.IsCompleted);
            Thread.Sleep(500);
        }

        Log("Main", "EndInvoke Before");
        // 由于异步调用已经完成，因此， EndInvoke会立刻返回结果
        int result = task.EndInvoke(asyncResult);

        Log("Main", "result=" + result);
    }

    private delegate int NewTaskDelegate(int ms);
    private int newTask(int ms)
    {
        Log("Task", "任务开始");
        Thread.Sleep(ms);
        System.Random random = new System.Random();
        int n = random.Next(10000);
        Log("Task", "任务完成");
        return n;
    }


    private void Log(string threadName, string msg)
    {
        Debug.LogFormat("{0} [{1}]  {2}", time, threadName, msg);
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
44：42：9893 [Main]  BeginInvoke Before
44：42：9946 [Task]  任务开始
44：42：9943 [Main]  asyncResult.IsCompleted=False
44：43：4965 [Main]  asyncResult.IsCompleted=False
44：43：9977 [Main]  asyncResult.IsCompleted=False
44：44：4996 [Main]  asyncResult.IsCompleted=False
44：45：0006 [Task]  任务完成
44：45：0010 [Main]  asyncResult.IsCompleted=False
44：45：5025 [Main]  EndInvoke Before
44：45：5038 [Main]  result=2526

</pre>



<br>
<br>
<h2 class="nav2" id="index_5_3">3、使用WaitOne方法等待异步方法执行完成</h2>
<p>WaitOne的第一个参数表示要等待的毫秒数，在指定时间之内，WaitOne方法将一直等待，直到异步调用完成，并发出通知，WaitOne方法才返回true。当等待指定时间之后，异步调用仍未完成，WaitOne方法返回false，如果指定时间为0，表示不等待，如果为-1，表示永远等待，直到异步调用完成。</p>
<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestThreadInvokeWaitOne : MonoBehaviour {
    

    public void Test()
    {
        NewTaskDelegate task = newTask;

        Log("Main", "BeginInvoke Before");
        IAsyncResult asyncResult = task.BeginInvoke(2000, null, null);
        //等待异步执行完成
        while(!asyncResult.AsyncWaitHandle.WaitOne(500))
        {
            Log("Main", "asyncResult.IsCompleted=" + asyncResult.IsCompleted);
        }

        Log("Main", "EndInvoke Before");
        // 由于异步调用已经完成，因此， EndInvoke会立刻返回结果
        int result = task.EndInvoke(asyncResult);

        Log("Main", "result=" + result);
    }

    private delegate int NewTaskDelegate(int ms);
    private int newTask(int ms)
    {
        Log("Task", "任务开始");
        Thread.Sleep(ms);
        System.Random random = new System.Random();
        int n = random.Next(10000);
        Log("Task", "任务完成");
        return n;
    }


    private void Log(string threadName, string msg)
    {
        Debug.LogFormat("{0} [{1}]  {2}", time, threadName, msg);
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
04：27：0838 [Main]  BeginInvoke Before
04：27：0894 [Task]  任务开始
04：27：5896 [Main]  asyncResult.IsCompleted=False
04：28：0907 [Main]  asyncResult.IsCompleted=False
04：28：5914 [Main]  asyncResult.IsCompleted=False
04：29：0930 [Main]  asyncResult.IsCompleted=False
04：29：0939 [Task]  任务完成
04：29：0943 [Main]  EndInvoke Before
04：29：0954 [Main]  result=3246
</pre>


[out] WaitOne(-1)
<pre>
06：20：8036 [Main]  BeginInvoke Before
06：20：8114 [Task]  任务开始
06：22：8166 [Task]  任务完成
06：22：8172 [Main]  EndInvoke Before
06：22：8181 [Main]  result=2112
</pre>


[out] WaitOne(0)
<pre>
08：12：2329 [Main]  BeginInvoke Before
08：12：2388 [Task]  任务开始

// 这里相当于每帧调用一次
08：12：2398 [Main]  asyncResult.IsCompleted=False
08：12：2406 [Main]  asyncResult.IsCompleted=False
.
.
.
08：14：2183 [Main]  asyncResult.IsCompleted=False

08：14：2422 [Task]  任务完成
08：14：2193 [Main]  asyncResult.IsCompleted=False
08：14：2550 [Main]  EndInvoke Before
08：14：2563 [Main]  result=2920
</pre>


<br>
<br>
<h2 class="nav2" id="index_5_4">4、使用回调方式返回结果</h2>
<p>要注意的是“my.BeginInvoke(3,300, MethodCompleted, my)”，BeginInvoke方法的参数传递方式：<br>
前面一部分(3,300)是其委托本身的参数。<br>
倒数第二个参数(MethodCompleted)是回调方法委托类型，他是回调方法的委托，此委托没有返回值，有一个IAsyncResult类型的参数，当method方法执行完后，系统会自动调用MethodCompleted方法。<br>
最后一个参数(my)需要向MethodCompleted方法中传递一些值，一般可以传递被调用方法的委托，这个值可以使用IAsyncResult.AsyncState属性获得。</p>
<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Threading;
using System;

public class TestThreadInvokeCallback : MonoBehaviour {
    

    public void Test()
    {
        NewTaskDelegate task = newTask;

        Log("Main", "BeginInvoke Before");
        IAsyncResult asyncResult = task.BeginInvoke(2, 500, onCallBack, task);
//        //等待异步执行完成
//        while(!asyncResult.AsyncWaitHandle.WaitOne(500))
//        {
//            Log("Main", "asyncResult.IsCompleted=" + asyncResult.IsCompleted);
//        }
//
//        Log("Main", "EndInvoke Before");
//        // 由于异步调用已经完成，因此， EndInvoke会立刻返回结果
//        // 当有回调调用EndInvoke后 Main线程不能再调用EndInvoke方法
//        int result = task.EndInvoke(asyncResult);
//
//        Log("Main", "result=" + result);
    }

    //回调方法 此方法不是Main线程的
    private void onCallBack(IAsyncResult asyncResult)
    {
        if (asyncResult == null || asyncResult.AsyncState == null)
        {
            Log("CallBack", "回调失败！！！");
            return;
        }


        int result = (asyncResult.AsyncState as NewTaskDelegate).EndInvoke(asyncResult);
        Log("CallBack", "任务完成，结果：" + result);

    }


    private delegate int NewTaskDelegate(int second, int millisecond);
    private int newTask(int second, int millisecond)
    {
        Log("Task", "任务开始 线程休眠" + (second * 1000 + millisecond) + "毫秒");
        Thread.Sleep(second * 1000 + millisecond);
        System.Random random = new System.Random();
        int n = random.Next(10000);
        Log("Task", "任务完成");
        return n;
    }


    private void Log(string threadName, string msg)
    {
        Debug.LogFormat("{0} [{1}]  {2}", time, threadName, msg);
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

[out] 
<pre>
52：11：4363 [Main]  BeginInvoke Before
52：11：4419 [Task]  任务开始 线程休眠2500毫秒
52：13：9475 [Task]  任务完成
52：13：9483 [CallBack]  任务完成，结果：9854
</pre>




<br>
<br>
<h2 class="nav2" id="index_5_5">5、其他组件的BeginXXX和EndXXX方法</h2>
<p>在其他的.net组件中也有类似BeginInvoke和EndInvoke的方法，如System.Net.HttpWebRequest类的BeginGetResponse和EndGetResponse方法。其使用方法类似于委托类型的BeginInvoke和EndInvoke方法，例如：</p>
<br>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System;
using System.Net;
using System.IO;

public class TestThreadHttpWebRequest : MonoBehaviour {

    public string url = "http://blog.ihaiu.com";
    public void Test()
    {
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
        //异步请求
        IAsyncResult asyncResult = request.BeginGetResponse(requestCompleted, request);
        Log("Main", "任务开始");
    }


    //回调函数 此方法不是在Main线程运行
    private void requestCompleted(IAsyncResult asyncResult)
    {
        if (asyncResult == null || asyncResult.AsyncState==null)
        {
            Log("Callback", "回调失败");
            return;
        }
        HttpWebRequest hwr = asyncResult.AsyncState as HttpWebRequest;
        HttpWebResponse response = (HttpWebResponse)hwr.EndGetResponse(asyncResult);
        StreamReader sr = new StreamReader(response.GetResponseStream());
        string str = sr.ReadToEnd();

        Log("Callback","返回流长度:" + str.Length + "  " + str);


    }



    private void Log(string threadName, string msg)
    {
        Debug.LogFormat("{0} [{1}]  {2}", time, threadName, msg);
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

[out] 
<pre>
30：13：8687 [Main]  任务开始
30：14：0108 [Callback]  返回流长度:14278  &lt;!DOCTYPE html&gt;&lt;!--STATUS OK--&gt;
</pre>


<br>
<br>
<br>

