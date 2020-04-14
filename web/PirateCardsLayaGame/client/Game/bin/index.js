/*
 * @Descripttion: 
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-10-10 10:39:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-10-30 09:29:12
 */
/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_portrait";

//-----libs-begin-----
loadLib("libs/laya.core.js");
loadLib("libs/laya.d3.js");
loadLib("libs/laya.html.js");
loadLib("libs/laya.ani.js");
// loadLib("libs/laya.debugtool.js");



loadLib("libs/AntFrame/Net/pako.js")
loadLib("libs/AntFrame/Net/protobuf.js")
loadLib("libs/AntFrame/Net/proto.js")
loadLib("libs/AntFrame/Net/net.js")
loadLib("libs/AntFrame/Net/netproto.js")

// fgui
loadLib("libs/fairygui/rawinflate.min.js");
loadLib("libs/fairygui/fairygui.js");

// 扩展
loadLib("libs/game/GameCommonLib.js");
loadLib("libs/game/StringExtend.js");
loadLib("libs/game/engine-adapter-laya.js");
loadLib("libs/game/LayaExtend.js");
loadLib("libs/game/FguiExtend.js");




// Excel PB配置
loadLib("libs/pbconfig/excelconfig.js");



//-----libs-end-------

loadLib("js/VersionConfig.js")
loadLib("js/bundle.js");


