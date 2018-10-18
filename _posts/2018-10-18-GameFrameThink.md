---
layout: post
title: 游戏框架的思考
date: 2018-10-18 20:50:00
categories: 框架
tags: 框架
excerpt: 游戏框架的思考
shareexcerpt: 游戏框架的思考
thread: 20181018160000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---




<br>
<br>

## 客户端框架之基本

* AssetManager 资源管理
* ConfigManager 配置读取、解析
* LangManager 多语言
* VersionManager 版本管理器: 大版本和热更
* Network 网络通信
* Proto 通信协议: 协议处理器，协议发送器，消息派发
* Signal、Event: 消息、事件
* LocalStorage 本地缓存
* TickManager、TickHandler


---



## 客户端框架之UI模块

* LoaderManager、LoaderCtl、LoaderPanel: 加载界面
* MenuManager、MenuCtl、MenuLayer:控制UI模块界面开关，负责模块资源加载、创建、显示、关闭、销毁。模块之间排斥，返回。层级
* MWindow, MSubwindow: UI模块窗口基类、子窗口基类
* MModel: 模块数据
* SystemMessage 系统消息: Toast 浮动消息、 Alert 单个按钮对话框、 Confirm 两个按钮对话框、GlobalModalWaiting 等待转圈