---
layout: post
title: C# 线程请求HTTP
date: 2017-05-19 13:00:00
categories: C#
tags: C# Mac
excerpt: C# 线程请求HTTP
shareexcerpt: C# 线程请求HTTP
thread: 20170519130000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---


<h2 class="nav1">ThreadHttpWebRequest </h2>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System;
using System.Net;
using System.IO;
using UnityEngine.UI;


public class ThreadHttpWebRequest
{
    public class ThreadHttpGet
    {
        public string name = &quot;ThreadHttpGet&quot;;
        public string url;
        public Action&lt;bool, string&gt; callback;
        public int      timeout = 10;
        public bool     isEnd       = false;
        public bool     isSuccess   = false;
        public string   result      = null;


        public IEnumerator Coroutine()
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Timeout = 10;
            //异步请求
            IAsyncResult asyncResult = request.BeginGetResponse(requestCompleted, request);
            Log(&quot;Main&quot;, &quot;任务开始&quot;);

            float t = 0;
            while(!isEnd)
            {
                yield return new WaitForEndOfFrame();
                t += Time.unscaledDeltaTime;
                if (t &gt; timeout)
                {
                    try
                    {
                        request.EndGetResponse(asyncResult);
                    }
                    catch(Exception e)
                    {
                        Log(&quot;Main&quot;, &quot;请求超时 e=&quot; + e);
                    }

                    isEnd       = true;
                    isSuccess   = false;
                    result      = &quot;请求超时 timeout=&quot; + timeout + &quot;  t=&quot; + t;
                }
            }

            Log(&quot;Main&quot;, &quot;IsCompleted=&quot; + asyncResult.IsCompleted);
            if (callback != null)
            {
                callback(isSuccess, result);
            }
        }


        //回调函数 此方法不是在Main线程运行
        private void requestCompleted(IAsyncResult asyncResult)
        {
            if (asyncResult == null || asyncResult.AsyncState==null)
            {
                Log(&quot;Callback&quot;, &quot;回调失败&quot;);
                isEnd       = true;
                isSuccess   = false;
                result      = &quot;回调失败&quot;;
                return;
            }
            HttpWebRequest hwr = asyncResult.AsyncState as HttpWebRequest;
            HttpWebResponse response = (HttpWebResponse)hwr.EndGetResponse(asyncResult);
            StreamReader sr = new StreamReader(response.GetResponseStream());
            string str = sr.ReadToEnd();

            isEnd       = true;
            isSuccess   = true;
            result      = str;

            Log(&quot;Callback&quot;,&quot;返回流长度:&quot; + str.Length + &quot;  &quot; + str);

        }

        private void Log(string threadName, string msg)
        {
            Debug.LogFormat(&quot;{1} {0} {4} [{2}]  {3}&quot;, name, time, threadName, msg, url);
        }

        private void Error(string threadName, string msg)
        {
            Debug.LogErrorFormat(&quot;{1} {0} {4} [{2}]  {3}&quot;, name, time, threadName, msg, url);
        }



        public string time
        {
            get
            {
                return DateTime.Now.ToString(&quot;mm：ss：ffff&quot;);
            }
        }
    }

    public class ThreadHttpUpload
    {
        public string name = &quot;ThreadHttpUpload&quot;;
        public string url;
        public Action&lt;bool, string&gt; callback;
        public bool     isEnd       = false;
        public bool     isSuccess   = false;
        public string   result      = null;


        public IEnumerator Coroutine(byte[] bindata, CookieContainer cookie, int timeout = 10)
        {
            
            HttpWebRequest request = null;
            HttpWebRequest req = null;
            Stream myRequestStream = null;
            HttpWebResponse wr = null;

            request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = &quot;POST&quot;;
            request.ContentType = &quot;application/octet-stream&quot;;
            request.ContentLength = bindata.Length;
            request.Timeout = timeout;
            if(cookie != null) request.CookieContainer = cookie;

            try
            {
                request.BeginGetRequestStream((IAsyncResult result)=&gt;
                    {
                        if (!result.IsCompleted)
                        {
                            Debug.LogError(&quot;上传 写入数据失败&quot;);
                            return;
                        }



                        myRequestStream = request.EndGetRequestStream(result);
                        myRequestStream.Write(bindata, 0, bindata.Length);
                    }, request);
                
            }
            catch (Exception e)
            {
                Error(&quot;Main&quot;, &quot;上传 写入数据异常 e=&quot; + e);

                isEnd = true;
                isSuccess = false;
                result = &quot;上传 写入数据异常 e=&quot; + e;
                if (callback != null)
                {
                    callback(isSuccess, result);
                }
                yield break;
            }


            //异步请求
            IAsyncResult asyncResult = request.BeginGetResponse(requestCompleted, request);
            Log(&quot;Main&quot;, &quot;任务开始&quot;);

            float t = 0;
            while(!isEnd)
            {
                yield return new WaitForEndOfFrame();
                t += Time.unscaledDeltaTime;
                if (t &gt; timeout)
                {
                    try
                    {
                        request.EndGetResponse(asyncResult);
                    }
                    catch(Exception e)
                    {
                        Log(&quot;Main&quot;, &quot;请求超时 e=&quot; + e);
                    }

                    isEnd       = true;
                    isSuccess   = false;
                    result      = &quot;请求超时 timeout=&quot; + timeout + &quot;  t=&quot; + t;
                }
            }

            Log(&quot;Main&quot;, &quot;IsCompleted=&quot; + asyncResult.IsCompleted);
            if (callback != null)
            {
                callback(isSuccess, result);
            }
        }


        //回调函数 此方法不是在Main线程运行
        private void requestCompleted(IAsyncResult asyncResult)
        {
            if (asyncResult == null || asyncResult.AsyncState==null)
            {
                Log(&quot;Callback&quot;, &quot;回调失败&quot;);
                isEnd       = true;
                isSuccess   = false;
                result      = &quot;回调失败&quot;;
                return;
            }
            HttpWebRequest hwr = asyncResult.AsyncState as HttpWebRequest;
            HttpWebResponse response = (HttpWebResponse)hwr.EndGetResponse(asyncResult);
            StreamReader sr = new StreamReader(response.GetResponseStream());
            string str = sr.ReadToEnd();

            isEnd       = true;
            isSuccess   = true;
            result      = str;

            Log(&quot;Callback&quot;,&quot;返回流长度:&quot; + str.Length + &quot;  &quot; + str);

        }

        private void Log(string threadName, string msg)
        {
            Debug.LogFormat(&quot;{1} {0} {4} [{2}]  {3}&quot;, name, time, threadName, msg, url);
        }

        private void Error(string threadName, string msg)
        {
            Debug.LogErrorFormat(&quot;{1} {0} {4} [{2}]  {3}&quot;, name, time, threadName, msg, url);
        }


        public string time
        {
            get
            {
                return DateTime.Now.ToString(&quot;mm：ss：ffff&quot;);
            }
        }
    }



    public static ThreadHttpGet StartGet(string url, Action&lt;bool, string&gt; callback, MonoBehaviour mono, int timeout = 10, string name = null)
    {
        ThreadHttpGet thread = new ThreadHttpGet();
        thread.name = string.IsNullOrEmpty(name) ? &quot;ThreadHttpGet&quot; : name;
        thread.url  = url;
        thread.callback  = callback;
        thread.timeout = timeout;


        mono.StartCoroutine(thread.Coroutine());
        return thread;
    }


    public static ThreadHttpUpload StartUpload(string url, CookieContainer cookie , byte[] bindata, Action&lt;bool, string&gt; callback, MonoBehaviour mono, int timeout = 10, string name = null)
    {
        

        ThreadHttpUpload thread = new ThreadHttpUpload();
        thread.name = string.IsNullOrEmpty(name) ? &quot;ThreadHttpUpload&quot; : name;
        thread.url  = url;
        thread.callback  = callback;


        mono.StartCoroutine(thread.Coroutine(bindata, cookie, timeout));
        return thread;
    }


}
</pre>



<h2 class="nav1">ThreadHttpWebRequest </h2>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System;
using System.Net;
using System.IO;
using UnityEngine.UI;

public class TestThreadHttpWebRequest : MonoBehaviour {

    public void OnGUI()
    {
        GUI.Label(new Rect(Screen.width - 100, 20, 100, 50), Time.frameCount + &quot;&quot;);

        if (GUI.Button(new Rect(10, 10, 100, 50), &quot;Get&quot;))
        {
            ThreadHttpWebRequest.StartGet(url, OnEnd, this);
        }


        if (GUI.Button(new Rect(200, 10, 100, 50), &quot;Upload&quot;))
        {
            string urlpath = &quot;http://192.168.1.21:8080/video_upload?type=6&quot;;
            byte[] data = File.ReadAllBytes(&quot;Assets/StreamingAssets/test_WarEnterData.json&quot;);
            ThreadHttpWebRequest.StartUpload(urlpath, VideoCookie(urlpath, 1, 0, null), data, OnEnd, this);
        }


        if (GUI.Button(new Rect(200, 60, 100, 50), &quot;GetMyFile&quot;))
        {
            string urlpath = &quot;http://192.168.1.21:8080/video_get?roleid=0&videoid=1&leagueId=0&type=6&quot;;
            ThreadHttpWebRequest.StartGet(urlpath,  OnEnd, this);
        }

        GUI.TextArea(new Rect(10, Screen.height - 300, Screen.width, 280), result);
    }

    public void OnEnd(bool isSuccess, string result)
    {
        this.isSucces = isSucces;
        this.result = result;

        if (text != null)
            text.text = result;
    }

    public string url = &quot;http://blog.ihaiu.com&quot;;
    public string isSucces;
    public string result = &quot;&quot;;
    public Text text;


    private CookieContainer VideoCookie(string url, int videoId, int leagueId, string sessionId = null)
    {

        if (string.IsNullOrEmpty(sessionId))
        {
            sessionId = &quot;0&quot;;
        }

        Uri target = new Uri(url);

        CookieContainer videoCookie = new CookieContainer();
        videoCookie.Add(new Cookie(&quot;sessionId&quot;, sessionId){Domain=target.Host} );
        videoCookie.Add(new Cookie(&quot;videoId&quot;, videoId.ToString()){Domain=target.Host} );
        videoCookie.Add(new Cookie(&quot;leagueId&quot;, leagueId.ToString()) { Domain = target.Host });
        return videoCookie;
    }

}

</pre>