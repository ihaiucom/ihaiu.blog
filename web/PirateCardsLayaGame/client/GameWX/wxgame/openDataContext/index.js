require("weapp-adapter.js");
window.loadLib = require;
/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.opendata.js");
//-----libs-end-------
loadLib("js/bundle.js");

// function draw()
// {

//   var sharedCanvas = wx.getSharedCanvas()
//   var context = sharedCanvas.getContext('2d')
//   context.fillStyle = 'green'
//   context.fillRect(0, 0, 100, 100)
//   setTimeout(draw, 100);
// }
// setTimeout(draw, 100);