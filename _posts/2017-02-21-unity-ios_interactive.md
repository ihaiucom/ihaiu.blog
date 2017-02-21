---
layout: post
title: Unity和IOS交互
date: 2017-02-21 13:51:00
categories: Unity
tags: Unity IOS
excerpt: C#与C交互, C与ObjectC交互
shareexcerpt: C#与C交互, C与ObjectC交互
thread: 2017022112510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_cpp: true
---



<h2 class="nav1">交互流程 </h2>
1. C#与C交互 <br>
2. C与ObjectC交互 <br>



<h2 class="nav1">环境搭建 </h2>
1. 新建一个空的Unity项目 <br>
2. 创建目录 Assets/Plugins/iOS <br>


<h2 class="nav1">实例一: Unity调用IOS里的方法 </h2>
<p>1. 在Assets/Plugins/iOS目录创建两个文件: Test.h, Test.m </p>
<p>2. 在Assets目录创建两个文件: Unity2iOS.cs, TestUnity2iOS.cs </p>
<br>


<h2 class="nav2">Assets/Plugins/iOS/Test.h </h2>
<pre class="brush: cpp; ">

@interface Test
void _receive(char* str1, char* str2);
@end

</pre>


<h2 class="nav2">Assets/Plugins/iOS/Test.m </h2>
<pre class="brush: cpp; ">


#import "Test.h"

@interface Test ()

@end

@implementation Test


void _receive(char* s1, char* s2)
{
    NSLog([NSString stringWithUTF8String:s1] );
}

@end

</pre>
<br>

<h2 class="nav2">Assets/Unity2iOS.cs </h2>
<pre class="brush: csharp; ">

using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;

public static class Unity2iOS 
{
    [DllImport("__Internal")]
    private static extern void  _receive(string s1, string s2);

    public static void Receive(string s1, string s2)
    {
        if (Application.platform == RuntimePlatform.IPhonePlayer)
        {
            _receive(s1, s2);
        }
    }
}

</pre>



<h2 class="nav2">Assets/TestUnity2iOS.cs </h2>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;

public class TestUnity2iOS : MonoBehaviour 
{
    void OnGUI()
    {
        if (GUI.Button(new Rect(0, 0, 200, 50), "Send"))
        {
            Unity2iOS.Receive("Hello", "Ihaiu");
        }
    }
}

</pre>
<br>
<br>



<h2 class="nav1">实例二: IOS回调Unity方法 </h2>
<p>
void	UnitySendMessage(const char* obj, const char* method, const char* msg);  <br>
这方法在发布后的xcode项目 Classes/Unity/UnityInterface.h里。用来调用Unity里的方法。<br>
	obj:为场景中GameObject名称<br>
	method:挂载在该GameObject里其中MonoBehaviour的一个方法名称<br>
	msg:传递的参数<br>
</p>
<br>


<h2 class="nav2">Assets/Plugins/iOS/Test.h </h2>
<pre class="brush: cpp; ">

@interface Test
void _receive(char* str1, char* str2);
@end

</pre>


<h2 class="nav2">Assets/Plugins/iOS/Test.m </h2>
<pre class="brush: cpp; ">


#import "Test.h"

@interface Test ()

@end

@implementation Test


void _receive(char* s1, char* s2)
{
    NSLog([NSString stringWithUTF8String:s1] );
    UnitySendMessage("Main Camera", "OnMsg", s2);
}

@end

</pre>
<br>

<h2 class="nav2">Assets/Unity2iOS.cs </h2>
<pre class="brush: csharp; ">

using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;

public static class Unity2iOS 
{
    [DllImport("__Internal")]
    private static extern void  _receive(string s1, string s2);

    public static void Receive(string s1, string s2)
    {
        if (Application.platform == RuntimePlatform.IPhonePlayer)
        {
            _receive(s1, s2);
        }
    }
}

</pre>



<h2 class="nav2">Assets/TestUnity2iOS.cs </h2>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;

public class TestUnity2iOS : MonoBehaviour 
{
    private string msg;
    void OnGUI()
    {
        if (GUI.Button(new Rect(0, 0, 200, 50), "Send"))
        {
            Unity2iOS.Receive("Hello", "Ihaiu");
        }


        if (!string.IsNullOrEmpty(msg))
        {
            GUI.Label(new Rect(0, 50, 200, 50), msg);
        }
    }


    public void OnMsg(string msg)
    {
        this.msg = msg;
    }
}

</pre>




<h2 class="nav1">实例三: Unity调用IOS方法并返回结果 </h2>



<h2 class="nav2">Assets/Plugins/iOS/Test.h </h2>
<pre class="brush: cpp; ">

@interface Test
int _add(int a, int b);
char* _callback(char* s);
@end

</pre>


<h2 class="nav2">Assets/Plugins/iOS/Test.m </h2>
<pre class="brush: cpp; ">


#import "Test.h"

@interface Test ()

@end

@implementation Test

int _add(int a, int b)
{
    int result = a + b;
    NSLog(@"%d + %d = %d", a, b, result);
    return result;
}

char* _callback(char* s)
{
    return MakeStringCopy(s);
}

/** 拷贝字符串, 为了不内存泄漏 */
char* MakeStringCopy(const char* str)
{
    if (str == NULL) {
        return NULL;
    }
    
    char* res = malloc(strlen(str) + 1);
    strcpy(res, str);
    return res;
}

@end

</pre>
<br>

<h2 class="nav2">Assets/Unity2iOS.cs </h2>
<pre class="brush: csharp; ">

using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;

public static class Unity2iOS 
{

    [DllImport("__Internal")]
    private static extern int _add(int a, int b);

    public static int Add(int a, int b)
    {
        if (Application.platform == RuntimePlatform.IPhonePlayer)
        {
            return _add(a, b);
        }
        return -1;
    }



    [DllImport("__Internal")]
    private static extern string _callback(string msg);

    public static string Callback(string msg)
    {
        if (Application.platform == RuntimePlatform.IPhonePlayer)
        {
            return _callback(msg);
        }
        return null;
    }


}

</pre>



<h2 class="nav2">Assets/TestUnity2iOS.cs </h2>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;

public class TestUnity2iOS : MonoBehaviour 
{
    private int addResult = -1;
    private string callResult;

    void OnGUI()
    {
        if (GUI.Button(new Rect(0, 200, 200, 50), "10 + 2 = "))
        {
            addResult = Unity2iOS.Add(10, 2);
        }

        if (addResult != -1)
        {
            GUI.Label(new Rect(0, 250, 200, 50), "add result=" + addResult);
        }

        
        if (GUI.Button(new Rect(0, 300, 200, 50), "callback "))
        {
            callResult = Unity2iOS.Callback("http://blog.ihaiu.com");
        }

        if (!string.IsNullOrEmpty(callResult))
        {
            GUI.Label(new Rect(0, 350, 200, 50), "call result=" + callResult);
        }
    }

}

</pre>



