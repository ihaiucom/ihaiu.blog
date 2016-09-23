---
layout: post
title: Unity 防加速器
date: 2016-09-22 17:57:00
categories: Unity
tags: Unity 防加速器
excerpt: 防加速器需要服务器的一个参考时间
shareexcerpt: 防加速器需要服务器的一个参考时间
thread: 201609131738
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 
sh: true
sh_csharp: true
---
<p><a href="https://pan.baidu.com/s/1hsO9r7I">防加速器Demo https://pan.baidu.com/s/1hsO9r7I</a></p>

<h2 class="nav1">思路</h2>
<p>"本地间隔时间"和“服务器间隔时间”做对比。就可以计算出变速器改变比例。我们再修改 <b>Time.timeScale</b>的值就可以还原本身速度</p>
<p>（时间戳为毫秒）</p>
<p></p>

<h2 class="nav1">获取本地时间</h2>
使用“靠谱助手”模拟器的加速器测试，可以发现<b>Time.time</b>、<b>Time.unscaledTime</b>速度都会被改变。我们游戏中有可能会用到<b>Time.timeScale</b>,而他会改变<b>Time.time</b>的频率。所以我们用<b>Time.unscaledTime</b>来做参考

<pre class="brush: csharp; ">
    private static double _time = 0;
    private static float _delayTime = 1;
    private static void UpdateLocalTime()
    {
        if (_time > 0)
        {
            _delayTime = (float) (Time.unscaledTime - _time);
        }
        else
        {
            _delayTime = gapTimeConfig;
        }

        _time = Time.unscaledTime;
    }

    public static float delayTime
    {
        get
        {
            return _delayTime;
        }
    }
</pre>



<h2 class="nav1">获取服务器时间</h2>

<pre class="brush: csharp; ">
    private static double _preServerTime = -1;
    private static double _serverTime = -1;
    private static float   _delayServerTime = 1;
    private static WWW www;
    private static IEnumerator GetHtmlServerTime()
    {
        www = new WWW("http://192.168.1.7/time.php");
        yield return www;
        if (!string.IsNullOrEmpty(www.error))
        {
            yield break;
        }

        SetServerTime(Convert.ToDouble(www.text));
    }

    private static void SetServerTime(double time)
    {
        _serverTime = time;
        if (_preServerTime > 0)
        {
            _delayServerTime = (float) (_serverTime - _preServerTime) / 1000;
        }
        else
        {
            _delayServerTime = gapTimeConfig;
        }
        _preServerTime = _serverTime;
    }
</pre>


<h2 class="nav1">计算加速度比例</h2>
<pre class="brush: csharp; ">
    float speedRate = delayTime / delayServerTime;
    float speedScale = Mathf.RoundToInt((1 / speedRate) * 10) / 10f;  // 10主要是为了排除通信时间
</pre>


<h2 class="nav1">我们自定义一个HTime用来修改 timeScale</h2>
<p>如果要修改timeScale，就使用我们自己定义的HTime.timeScale</p>

<pre class="brush: csharp; ">
    private static float _timeScale = 1;
    public static float timeScale
    {
        get
        {
            return _timeScale;
        }

        set
        {
            _timeScale = value;
            setTimeScale();
        }
    }

    public static void setTimeScale()
    {
        Time.timeScale = Mathf.Clamp(_timeScale * speedScale, 0f, 100f);
    }
</pre>






<h2 class="nav1">HTime</h2>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System;

public class HTime 
{
    public static bool isAntiAccelerator = true;
    public static int gapTimeConfig = 2;
    private static DateTime dateTime1970 = new DateTime(1970, 1, 1, 0, 0, 0);
    public static double timeStamp
    {  
        get
        {
            return (DateTime.UtcNow - dateTime1970).TotalMilliseconds;  
        }
    }

    private static double _time = 0;
    private static float _delayTime = 1;
    private static void UpdateLocalTime()
    {
        if (_time > 0)
        {
            _delayTime = (float) (Time.unscaledTime - _time);
        }
        else
        {
            _delayTime = gapTimeConfig;
        }

        _time = Time.unscaledTime;
    }

    public static float delayTime
    {
        get
        {
            return _delayTime;
        }
    }

    public static void CheckUpdateBegin()
    {
        UpdateLocalTime();
    }

    public static void CheckUpdateEnd(Int32 s, Int32 ms)
    {
        UpdateLocalTime();
        SetServerTime(s * 1000 + ms);
        if (isAntiAccelerator)
        {
            setTimeScale();
        }
    }


    private static void SetServerTime(double time)
    {
        _serverTime = time;
        if (_preServerTime > 0)
        {
            _delayServerTime = (float) (_serverTime - _preServerTime) / 1000;
        }
        else
        {
            _delayServerTime = gapTimeConfig;
        }
        _preServerTime = _serverTime;
    }


    public static IEnumerator Check()
    {

        while (true)
        {
            UpdateLocalTime();
            yield return GetHtmlServerTime();
            yield return new WaitForSeconds(timeScale > 0 ? gapTimeConfig / timeScale : gapTimeConfig);
            if (isAntiAccelerator)
            {
                setTimeScale();
            }
        }
    }




    private static double _preServerTime = -1;
    private static double _serverTime = -1;
    private static float   _delayServerTime = 1;
    private static WWW www;
    private static IEnumerator GetHtmlServerTime()
    {
        www = new WWW("http://192.168.1.7/time.php");
        yield return www;
        if (!string.IsNullOrEmpty(www.error))
        {
            yield break;
        }

        SetServerTime(Convert.ToDouble(www.text));
    }


    public static float delayServerTime
    {
        get
        {
            return _delayServerTime;
        }
    }

    public static float speedRate
    {
        get
        {
            return delayTime / delayServerTime;
        }
    }

    public static float speedScale
    {
        get
        {
            return Mathf.RoundToInt((1 / speedRate) * 10) / 10f;
        }
    }

    private static float _timeScale = 1;
    public static float timeScale
    {
        get
        {
            return _timeScale;
        }

        set
        {
            _timeScale = value;
            setTimeScale();
        }
    }

    public static void setTimeScale()
    {
        Time.timeScale = Mathf.Clamp(_timeScale * speedScale, 0f, 100f);
    }

    public static void Reset()
    {
        _delayTime = gapTimeConfig;
        _delayServerTime = gapTimeConfig;
        setTimeScale();
    }
        





}
</pre>


<h2 class="nav1">测试</h2>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System;

public class TimeInfo : MonoBehaviour {

    public Text text;
    private string info;

    public Toggle fangToggle;
    public Toggle appToggle;
    public Slider slider;
    public InputField minInput;
    public InputField maxInput;
    public Text       currText;

   
    void Start ()
    {
        fangToggle.isOn = HTime.isAntiAccelerator;
        StartCoroutine(HTime.Check());
    }
    
    void Update () 
    {
        info = "";
        info += string.Format("Time.timeScale = {0} \n", Time.timeScale);
        info += string.Format("Time.time = {0} \n", Time.time);
        info += string.Format("Time.unscaledTime = {0} \n", Time.unscaledTime);
        info += string.Format("Time.deltaTime = {0} \n", Time.deltaTime);
        info += string.Format("Time.unscaledDeltaTime = {0} \n", Time.unscaledDeltaTime);
        info += string.Format("Time.smoothDeltaTime = {0} \n", Time.smoothDeltaTime);
        info += string.Format("Time.fixedTime = {0} \n", Time.fixedTime);
        info += string.Format("Time.fixedDeltaTime = {0} \n", Time.fixedDeltaTime);
        info += string.Format("Time.timeSinceLevelLoad = {0} \n", Time.timeSinceLevelLoad);
        info += string.Format("Time.realtimeSinceStartup = {0} \n", Time.realtimeSinceStartup);
        info += string.Format("Time.frameCount = {0} \n", Time.frameCount);
        info += string.Format("Time.captureFramerate = {0} \n", Time.captureFramerate);

        info += string.Format("HTime.timeStamp = {0} \n", HTime.timeStamp);
        info += string.Format("HTime.gapTimeConfig = {0} \n", HTime.gapTimeConfig);
        info += string.Format("HTime.delayTime = {0} \n", HTime.delayTime);
        info += string.Format("HTime.delayServerTime = {0} \n", HTime.delayServerTime);
        info += string.Format("HTime.speedRate = {0} \n", HTime.speedRate);
        info += string.Format("HTime.speedScale = {0} \n", HTime.speedScale);
        info += string.Format("HTime.timeScale = {0} \n", HTime.timeScale);
        text.text = info;

        slider.minValue = Convert.ToSingle(minInput.text);
        slider.maxValue = Convert.ToSingle(maxInput.text);
        currText.text = slider.value + "";


        HTime.isAntiAccelerator = fangToggle.isOn;
        if (appToggle.isOn)
        {
            HTime.timeScale = slider.value;
        }
    }


    public void Open()
    {
        gameObject.SetActive(true);
    }

    public void Close()
    {
        gameObject.SetActive(false);
    }

}

</pre>


<p><a href="https://pan.baidu.com/s/1hsO9r7I">防加速器Demo https://pan.baidu.com/s/1hsO9r7I</a></p>

