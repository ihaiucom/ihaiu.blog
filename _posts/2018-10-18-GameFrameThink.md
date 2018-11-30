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
* SoundManager: 声音管理器
* GM
* Log： 收集异常日志发送到服务器
* AssetLoadList: 资源加载列表

---



## 客户端框架之UI模块

* LoaderManager、LoaderCtl、LoaderPanel: 加载界面
* MenuManager、MenuCtl、MenuLayer:控制UI模块界面开关，负责模块资源加载、创建、显示、关闭、销毁。模块之间排斥，返回。层级
* MWindow, MSubwindow: UI模块窗口基类、子窗口基类
* MModel: 模块数据
* SystemMessage 系统消息: Toast 浮动消息、 Alert 单个按钮对话框、 Confirm 两个按钮对话框、GlobalModalWaiting 等待转圈


---


## 客户端框架之基本工具

* 配置生成工具：生成csv / json, 生成代码数据结构、解析器
* 多语言工具： 约定配置表里的多语言字段前缀，生成多语言编辑Excel。再导出对应语言包
* 协议生成工具： 生成协议数据结构代码，生成处理器、发送器
* UI代码生成工具: 根据UI生成代码视图控制器
* 版本发布工具：自定义选项去做不同的处理，如: 平台、渠道、GM等


---



## 客户端框架之通常数据

* Channel: 渠道配置
* User: 用户账号数据
* Setting: 用户设置数据


---



## 客户端框架之通常配置


* ResConfig: 资源配置
* GlobalConfig: 全局数值配置
* MsgConfig: 消息配置
* MsgProtoErrorConfig: 协议错误码消息
* TextCode: 代码文本
* TextUI: UI文本




---



## 客户端框架之通常配置


* ResConfig: 资源配置
* GlobalConfig: 全局数值配置
* MsgConfig: 消息配置
* MsgProtoErrorConfig: 协议错误码消息
* TextCode: 代码文本
* TextUI: UI文本
