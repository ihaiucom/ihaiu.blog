---
layout: post
title: C#用Mono运行exe程序
date: 2016-07-28 11:09:50
categories: C#
tags: C# Mono
excerpt: 
thread: 201607281112
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/mono.jpeg

sh: true
sh_csharp: true
---

在看<a href="https://www.assetstore.unity3d.com/en/#!/content/45836" targets="_blank">AssetBundle Manager</a>代码时发现一个可以用C#的Process借助MonoBleedingEdge运行一个exe执行程序。（猜猜exe是C#写的才有效）


<pre class="brush: csharp; ">
static void Run ()
{
	string pathToAssetServer = Path.Combine(Application.dataPath, "AssetBundleManager/Editor/AssetBundleServer.exe");
	string pathToApp = Application.dataPath.Substring(0, Application.dataPath.LastIndexOf('/'));

	KillRunningAssetBundleServer();
	
	BuildScript.WriteServerURL();
	
    string args = Path.Combine (pathToApp, "AssetBundles");
    args = string.Format("\"{0}\" {1}", args, Process.GetCurrentProcess().Id);
    ProcessStartInfo startInfo = ExecuteInternalMono.GetProfileStartInfoForMono(MonoInstallationFinder.GetMonoInstallation("MonoBleedingEdge"), "4.0", pathToAssetServer, args, true);
	startInfo.WorkingDirectory = Path.Combine(System.Environment.CurrentDirectory, "AssetBundles");
    startInfo.UseShellExecute = false;
	Process launchProcess = Process.Start(startInfo);
	if (launchProcess == null || launchProcess.HasExited == true || launchProcess.Id == 0)
	{
		//Unable to start process
		UnityEngine.Debug.LogError ("Unable Start AssetBundleServer process");
	}
	else
	{
		//We seem to have launched, let's save the PID
		instance.m_ServerPID = launchProcess.Id;
	}
}
</pre>