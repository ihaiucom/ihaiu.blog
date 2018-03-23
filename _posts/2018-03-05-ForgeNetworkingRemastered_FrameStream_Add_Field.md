---
layout: post
title: ForgeNetworkingRemastered 之 FreamStream添加属性并同步
date: 2018-01-30 13:00:00
categories: ForgeNetworkingRemastered 之 FreamStream添加属性并同步
tags: Networking
excerpt: ForgeNetworkingRemastered 之 FreamStream添加属性并同步
shareexcerpt: ForgeNetworkingRemastered 之 FreamStream添加属性并同步
thread: 201801291115
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---




<p>我们添加房间ID为例, </p>

<h2 class="nav1">1: 添加属性字段</h2>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_1.png" style="border: solid 1px #666;" /></p>


<h2 class="nav1">2: 创建FreamStream的地方添加roomId参数，并赋值</h2>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_2.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_3.png" style="border: solid 1px #666;" /></p>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_4.png" style="border: solid 1px #666;" /></p>


<h2 class="nav1">3: 修改写数据，接收数据的地方</h2>
<p>在FrameStream的CreateFrame方法里添加 (注意新加的不要添加在UniqueId后面，因为还有一个UDPPacketComposer会和他耦合 )</p>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_5.png" style="border: solid 1px #666;" /></p>
<p>追加一个地方修改</p>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_9.png" style="border: solid 1px #666;" /></p>

<br>
<p>在FrameStream的ReadFrame方法里修改</p>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_6.png" style="border: solid 1px #666;" /></p>

<br>
<p>在FrameStream的GetData方法里修改， 这里是UDP消息， UDPPacketComposer创建分包时，会在结尾插入UDP包的唯一标识</p>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_7.png" style="border: solid 1px #666;" /></p>


<h2 class="nav1">4: (可选) 如果你是想有房间ID的情况下，把消息分发给房间处理。可以修改NetWorker的OnMessageReceived方法</h2>
<p><img src="/assets/docpic/ForgeNetworkingRemastered_FreamStream_Add_RoomId_8.png" style="border: solid 1px #666;" /></p>