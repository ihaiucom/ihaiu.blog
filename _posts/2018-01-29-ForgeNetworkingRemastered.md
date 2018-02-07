---
layout: post
title: ForgeNetworkingRemastered网络同步
date: 2018-01-30 13:00:00
categories: ForgeNetworkingRemastered网络同步
tags: Networking
excerpt: ForgeNetworkingRemastered网络同步
shareexcerpt: ForgeNetworkingRemastered网络同步
thread: 201801291115
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---





<br>
<br>
<h2 class="nav1">官方网站</h2>
<div class="" >
<ul>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered" draggable="false">
  <span class="title">ForgeNetworkingRemastered Github </span>
</a>
</li>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="http://docs.forgepowered.com/" draggable="false">
  <span class="title">ForgeNetworkingRemastered 方法文档入门教程 </span>
</a>
</li>


<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://forgepowered.com/ForgeNetworkingRemasteredAPI/html/annotated.html" draggable="false">
  <span class="title">ForgeNetworkingRemastered API</span>
</a>
</li>


</ul>



<br>
<br>
<h2 class="nav1">项目介绍</h2>
<div class="" >
<ul>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/BasicStandAloneServer" draggable="false">
  <span class="title">BasicStandAloneServer (基本独立服务器) </span>
</a>
网络核心，可以独立在VS运行。里面数据序列化BMSByte、数据结构Vector、熟悉类BeardedMath、线程任务Threading Task、缓存Cache、日志Log、大厅服务LobbyService、穿透Nat、网络TCP UDP RPC

</li>


<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/ForgeNetworkingCommon" draggable="false">
  <span class="title">ForgeNetworkingCommon (通用) </span>
</a>

里面有3个属性，1个模板系统<br>
 GeneratedInterpolAttribute（生成插值属性， 保存的是Jsons数据）<br>
 GeneratedRPCAttribute（RPC属性 ， 保存的是Jsons数据）<br>
 GeneratedRPCVariableNamesAttribute (RPC参数名称属性 ， 保存的是Jsons数据）<br>
 TemplateSystem(模板系统)

</li>


<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/MasterServer" draggable="false">
  <span class="title">MasterServer (Master服务) </span>
</a>

核心就是MaterServer（用来注册NetworkingPlayer 游戏服务）<br>
Host是游戏服务的信息数据结构，保存IP PORT等
Program 启动MaterServer的程序
</li>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/MVCWebServer" draggable="false">
  <span class="title">MVCWebServer (网页服务) </span>
</a>
</li>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/NatHolePunch" draggable="false">
  <span class="title">NatHolePunch (穿透检测UDP服) </span>
</a>
</li>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/ForgeNetworkingUnityEditor" draggable="false">
  <span class="title">ForgeNetworkingUnityEditor (Unity 编辑器) </span>
</a>
</li>



<li data-fid="1" data-index="1" draggable="true">
<a target="_blank" contextmenu="thumb-menu" href="https://github.com/BeardedManStudios/ForgeNetworkingRemastered/tree/master/NatHolePunch" draggable="false">
  <span class="title">Forge Networking Remastered Unity (Unity ) </span>
</a>
</li>

</ul>



<br>
<br>
<h2 class="nav1">Class介绍</h2>
| Class                 | 介绍                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------- |
| MultiplayerMenu       | 创建NetWorker入口类，负责创建Host或者链接Server    | 
| NetworkManager       | 负责：向MasterServer注册, 场景加载，初始化场景中的网络对象, 生成创建网络对象的接口(网络对象工厂)     | 
| INetworkBehavior     | 网络对象行为接口， Initialize网络对象初始化和注册    | 
| NetworkBehavior     | 网络对象行为, 实现接口INetworkBehavior, 里面是网络对象创建的初始化管理    | 
| XXXNetworkBehavior     | 网络对象行为, 实现接口INetworkBehavior或继承NetworkBehavior, 里面是网络对象创建的初始化，主要是RPC方法和其他逻辑    | 
| NetworkObject     | 网络对象, 负责网络对象的初始和注册同步网络对象, 注册RPC方法，RPC、二进制消息的发送接收, 所有权申请分配 , 销毁，每隔10MS同步对象属性 | 
| XXXNetworkObject     | 网络对象, 继承NetworkObject, 负责对象具体属性（存储，同步序列化，同步读取，插值） | 
| NetworkObjectFactory     | 网络对象创建工厂 | 
| Rpc     | 存储RPC方法的结构体, 负责RPC方法参数验证、 解析参数、回调方法 | 
| RpcArgs     | 存储RPC方法参数和RPCInfo | 
| RPCInfo     | 存储RPC的调用玩家和时间,NetworkingPlayer SendingPlayer | 


| CachedUdpClient     | 检测局域网UDP服务器列表 | 
| NetWorker     | 是TCP和UDP的基类。功能有：检测局域网服务器列表、ping、接收数据和处理  | 