---
layout: post
title: Unity加载Android里的StreamingAssets里的文件
date: 2017-03-06 13:51:00
categories: Unity
tags: Unity Android StreamingAssets
excerpt: Unity加载Android里的StreamingAssets里的文件
shareexcerpt: Unity加载Android里的StreamingAssets里的文件
thread: 2017030612510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_java: true
---
有时候项目中为了方便 想同步读取StreamingAssets里的文件，Android之前是个障碍。现在的版本Unity可以通过AssetBundle.LoadFromFile读取AssetBundle文件了，但读取其他类型的资源还是不行。参考一下雨松的 修改了一下。<br>
参考 : <a href="http://www.xuanyusong.com/archives/4033" target="_blank">Unity3D研究院之Android同步方法读取streamingAssets（八十八） </a> <br><br>

需要的盆友懒得弄SDK可以直接下载 <a href="/assets/down/AssetLoadSDK.jar" target="_blank"> AssetLoadSDK.jar </a> ，将他放到Plugins/Android目录下<br><br>


<h2 class="nav1">AssetBundle.LoadFromFile </h2>


<pre class="brush: csharp; ">
public class TestAssetBundle : MonoBehaviour {

	void Start () 
    {
        string path;
        if (Application.platform == RuntimePlatform.Android)
        {
            path = Application.dataPath + &quot;!assets/Android/hero_20001-assetbundle&quot;;
        }
        else
        {
            path = Application.streamingAssetsPath + &quot;/IOS/hero_20001-assetbundle&quot;;
        }

        AssetBundle assetBundle = AssetBundle.LoadFromFile(path);
        Sprite[] sprites = assetBundle.LoadAllAssets&lt;Sprite&gt;();
        GetComponent&lt;SpriteRenderer&gt;().sprite = sprites[0];
	}
}

</pre>


<br><br>



<h2 class="nav1">自己写一个Android SDK </h2>

<pre class="brush: java; ">
package com.ihaiu.assetloadsdk;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import com.unity3d.player.UnityPlayer;

import android.util.Log;

public class AssetLoad 
{

    private static byte[] readtextbytes(InputStream inputStream) 
	{
 
	  ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
	  //长度这里暂时先写成1024
	  byte buf[] = new byte [1024];
 
	  int len;
 
	  try {
 
	   while ((len = inputStream.read(buf)) != -1) {
 
	    outputStream.write(buf, 0, len);
 
	   }
 
	   outputStream.close();
 
	   inputStream.close();
 
	  } catch (IOException e) {
 
	  }
	  return outputStream.toByteArray();
	}
	
	
 
	
	//读取assetbund并且返回字节数组
	public static byte[] loadFile(String path)
	{
	
		 InputStream inputStream = null ;
		 
		  try {

 
			   inputStream = UnityPlayer.currentActivity.getAssets().open(path);
 
			  } catch (IOException e) 
			  {
 
				  Log.e("ihaiu.com", e.getMessage());
 
			  }
 
		  return readtextbytes(inputStream);
	}
	
}


</pre>


<br><br>



<h2 class="nav1">Unity 测试 </h2>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;

public class AndroidAssetLoadSDK 
{
    public static byte[] LoadFile(string path)
    {
        AndroidJavaClass    m_AndroidJavaClass = new AndroidJavaClass(&quot;com.ihaiu.assetloadsdk.AssetLoad&quot;);
        return m_AndroidJavaClass.CallStatic&lt;byte[]&gt;(&quot;loadFile&quot;, path);
    }

    public static string LoadTextFile(string path)
    {
        byte[] bytes = LoadFile(path);
        if (bytes == null)
            return &quot;Error bytes=null&quot;;
        
        return System.Text.Encoding.UTF8.GetString ( bytes );
    }

    public static AssetBundle LoadAssetBundle(string path)
    {
        byte[] bytes = LoadFile(path);
        if (bytes == null)
            return null;
        
        return AssetBundle.LoadFromMemory(bytes);
    }
}

</pre>
<br>

<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.IO;
using UnityEngine.UI;

public class TestLoadText : MonoBehaviour
{

	void Start () 
    {
        
        Test();
	}

    void OnGUI()
    {
        if (GUILayout.Button(&quot;Test&quot;, GUILayout.MinWidth(200), GUILayout.MinHeight(100)))
        {
            Test();
        }
    }

    public void Test()
    {
        string path = &quot;game_const.json&quot;;

        string str = LoadText(path);
        GetComponent&lt;Text&gt;().text = string.IsNullOrEmpty(str) ? &quot;Load Empty&quot; : str;
    }

    public string LoadText(string path)
    {
        #if UNITY_ANDROID && !UNITY_EDITOR
        return AndroidAssetLoadSDK.LoadTextFile(path);
        #else
        return File.ReadAllText(Application.streamingAssetsPath + &quot;/&quot; +  path);
        #endif
    }
	
}


</pre>

<br>

